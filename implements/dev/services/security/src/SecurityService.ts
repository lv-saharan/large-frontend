import {
  DefinitionVersion,
  IService,
  IServiceManifest,
  ResourceType,
} from "definitions";
import { version } from "../package.json";

interface ILoginResult {
  code: 200 | 500;
  success: boolean;
  token?: string;
  message?: string;
}
interface IRegisterResult {
  code: 200 | 500;
  success: boolean;
  message: string;
}

interface IUser {
  userId: string;
  name: string;
  roles: string[];
}
/**
 * 安全相关服务，
 */
export class SecurityService implements IService {
  private loginCallbacks: Array<(token: string) => void> = [];
  private logoutCallbacks: Array<() => void> = [];
  #token: string;

  get token() {
    return this.#token;
  }
  get isLogin() {
    return true;
  }

  onLogin(...callback: Array<(token: string) => void>) {
    this.loginCallbacks.push(...callback);
  }

  onLogout(...callback: Array<() => void>) {
    this.logoutCallbacks.push(...callback);
  }

  login(username: string, password: string) {
    const result: ILoginResult = {
      code: 200,
      success: true,
      token: Math.random().toString(),
    };
    for (let cb of this.loginCallbacks) {
      cb(result.token);
    }
    this.#token = result.token;
    return Promise.resolve(result);
  }

  logout() {
    this.#token = null;
    return Promise.resolve(null);
  }

  register(username: string, password: string) {
    const result: IRegisterResult = {
      code: 200,
      success: true,
      message: "OK",
    };
    return Promise.resolve(result);
  }

  refreshToken() {
    this.#token = Math.random.toString();
    return Promise.resolve(this.#token);
  }

  getUserInfo(): Promise<IUser> {
    return Promise.resolve({
      userId: "123456789",
      name: "admin",
      roles: ["admin", "user"],
    });
  }

  hasResourcePermission(resourceId: string) {
    return Promise.resolve(true);
  }

  hasPermissions(...permissions: string[]) {
    return Promise.resolve(true);
  }
  inRoles(...roles: string[]) {
    return Promise.resolve(true);
  }
  get manifest() {
    return {
      name: "SecurityService",
      resourceType: ResourceType.SERVICE,
      version,
      definitionVersion: DefinitionVersion,
    };
  }
}
