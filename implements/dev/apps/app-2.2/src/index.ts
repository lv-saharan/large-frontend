import {
  AppType,
  IAppManifest,
  IRender,
  ResourceType,
  DefinitionVersion,
} from "definitions";
import { AppSharedInfo } from "../../app-shared-info";

export const render: IRender = ({ registerCsses }) => {
  registerCsses(`
    li{
      border:0;
      color:blue;
      cursor:pointer;
      
    }
    li:hover{
      color:red;
      background:#ccddee;
    }
    .more{
      height:10px;
    }
  `);
  const div = document.createElement("div");
  const ul = document.createElement("ul");
  const divMore = document.createElement("div");
  divMore.className = "more";
  div.appendChild(ul);
  div.appendChild(divMore);

 

  let from = 1;
  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("元素在视口中");
        for (let i = 0; i < 20; i++) {
          const li = document.createElement("li");
          ul.appendChild(li);
          li.innerHTML = `${from++}:${Math.floor(Math.random() * 100)}`;
        }
        observer.unobserve(divMore);
        observer.observe(divMore);
      } else {
        console.log("元素不在视口中");
      }
    });
  });
  observer.observe(divMore);
  

  return div;
};
export const manifest: IAppManifest = {
  get name() {
    return "SECOND.2-APP";
  },
  get shortName() {
    return "APP-2.2";
  },

  get appType() {
    return AppType.NATIVE;
  },

  get singleton() {
    return false;
  },
  get version() {
    return "1.0.0";
  },

  ...AppSharedInfo,
};
