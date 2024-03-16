import { IDocument, IWindow } from "definition";
const rawWindow = window;
export class AppWindow implements IWindow {
  [index: number]: Window;
  clientInformation = rawWindow.navigator;
  get closed() {
    return rawWindow.closed;
  }
  get customElements() {
    return rawWindow.customElements;
  }
  get devicePixelRatio() {
    return rawWindow.devicePixelRatio;
  }
  document: Document;
  event: Event = rawWindow.event;
  external: External = rawWindow.external;
  frameElement: Element = rawWindow.frameElement;
  frames: Window;
  history: History;
  innerHeight: number;
  innerWidth: number;
  length: number;
  get location(): Location {
    throw new Error("Method not implemented.");
  }
  set location(href: Location) {
    throw new Error("Method not implemented.");
  }
  locationbar: BarProp;
  menubar: BarProp;
  name: string;
  navigator: Navigator;
  ondevicemotion: (this: Window, ev: DeviceMotionEvent) => any;
  ondeviceorientation: (this: Window, ev: DeviceOrientationEvent) => any;
  ondeviceorientationabsolute: (
    this: Window,
    ev: DeviceOrientationEvent
  ) => any;
  onorientationchange: (this: Window, ev: Event) => any;
  opener: any;
  orientation: number;
  outerHeight: number;
  outerWidth: number;
  pageXOffset: number;
  pageYOffset: number;
  parent: Window;
  personalbar: BarProp;
  screen: Screen;
  screenLeft: number;
  screenTop: number;
  screenX: number;
  screenY: number;
  scrollX: number;
  scrollY: number;
  scrollbars: BarProp;
  self: Window & typeof globalThis;
  speechSynthesis: SpeechSynthesis;
  status: string;
  statusbar: BarProp;
  toolbar: BarProp;
  top: Window;
  visualViewport: VisualViewport;
  window: Window & typeof globalThis;
  alert(message?: any): void {
    throw new Error("Method not implemented.");
  }
  blur(): void {
    throw new Error("Method not implemented.");
  }
  cancelIdleCallback(handle: number): void {
    throw new Error("Method not implemented.");
  }
  captureEvents(): void {
    throw new Error("Method not implemented.");
  }
  close(): void {
    throw new Error("Method not implemented.");
  }
  confirm(message?: string): boolean {
    throw new Error("Method not implemented.");
  }
  focus(): void {
    throw new Error("Method not implemented.");
  }
  getComputedStyle(elt: Element, pseudoElt?: string): CSSStyleDeclaration {
    throw new Error("Method not implemented.");
  }
  getSelection(): Selection {
    throw new Error("Method not implemented.");
  }
  matchMedia(query: string): MediaQueryList {
    throw new Error("Method not implemented.");
  }
  moveBy(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  moveTo(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  open(url?: string | URL, target?: string, features?: string): Window {
    throw new Error("Method not implemented.");
  }
  postMessage(
    message: any,
    targetOrigin: string,
    transfer?: Transferable[]
  ): void;
  postMessage(message: any, options?: WindowPostMessageOptions): void;
  postMessage(
    message: unknown,
    targetOrigin?: unknown,
    transfer?: unknown
  ): void {
    throw new Error("Method not implemented.");
  }
  print(): void {
    throw new Error("Method not implemented.");
  }
  prompt(message?: string, _default?: string): string {
    throw new Error("Method not implemented.");
  }
  releaseEvents(): void {
    throw new Error("Method not implemented.");
  }
  requestIdleCallback(
    callback: IdleRequestCallback,
    options?: IdleRequestOptions
  ): number {
    throw new Error("Method not implemented.");
  }
  resizeBy(x: number, y: number): void {
    throw new Error("Method not implemented.");
  }
  resizeTo(width: number, height: number): void {
    throw new Error("Method not implemented.");
  }
  scroll(options?: ScrollToOptions): void;
  scroll(x: number, y: number): void;
  scroll(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  scrollBy(options?: ScrollToOptions): void;
  scrollBy(x: number, y: number): void;
  scrollBy(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  scrollTo(options?: ScrollToOptions): void;
  scrollTo(x: number, y: number): void;
  scrollTo(x?: unknown, y?: unknown): void {
    throw new Error("Method not implemented.");
  }
  stop(): void {
    throw new Error("Method not implemented.");
  }
  addEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | AddEventListenerOptions
  ): void;
  addEventListener(type: unknown, listener: unknown, options?: unknown): void {
    throw new Error("Method not implemented.");
  }
  removeEventListener<K extends keyof WindowEventMap>(
    type: K,
    listener: (this: Window, ev: WindowEventMap[K]) => any,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: string,
    listener: EventListenerOrEventListenerObject,
    options?: boolean | EventListenerOptions
  ): void;
  removeEventListener(
    type: unknown,
    listener: unknown,
    options?: unknown
  ): void {
    throw new Error("Method not implemented.");
  }
  dispatchEvent(event: Event): boolean {
    throw new Error("Method not implemented.");
  }
  cancelAnimationFrame(handle: number): void {
    throw new Error("Method not implemented.");
  }
  requestAnimationFrame(callback: FrameRequestCallback): number {
    throw new Error("Method not implemented.");
  }
  onabort: (this: GlobalEventHandlers, ev: UIEvent) => any;
  onanimationcancel: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
  onanimationend: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
  onanimationiteration: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
  onanimationstart: (this: GlobalEventHandlers, ev: AnimationEvent) => any;
  onauxclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onbeforeinput: (this: GlobalEventHandlers, ev: InputEvent) => any;
  onbeforetoggle: (this: GlobalEventHandlers, ev: Event) => any;
  onblur: (this: GlobalEventHandlers, ev: FocusEvent) => any;
  oncancel: (this: GlobalEventHandlers, ev: Event) => any;
  oncanplay: (this: GlobalEventHandlers, ev: Event) => any;
  oncanplaythrough: (this: GlobalEventHandlers, ev: Event) => any;
  onchange: (this: GlobalEventHandlers, ev: Event) => any;
  onclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onclose: (this: GlobalEventHandlers, ev: Event) => any;
  oncontextmenu: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  oncopy: (this: GlobalEventHandlers, ev: ClipboardEvent) => any;
  oncuechange: (this: GlobalEventHandlers, ev: Event) => any;
  oncut: (this: GlobalEventHandlers, ev: ClipboardEvent) => any;
  ondblclick: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  ondrag: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondragend: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondragenter: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondragleave: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondragover: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondragstart: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondrop: (this: GlobalEventHandlers, ev: DragEvent) => any;
  ondurationchange: (this: GlobalEventHandlers, ev: Event) => any;
  onemptied: (this: GlobalEventHandlers, ev: Event) => any;
  onended: (this: GlobalEventHandlers, ev: Event) => any;
  onerror: OnErrorEventHandlerNonNull;
  onfocus: (this: GlobalEventHandlers, ev: FocusEvent) => any;
  onformdata: (this: GlobalEventHandlers, ev: FormDataEvent) => any;
  ongotpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  oninput: (this: GlobalEventHandlers, ev: Event) => any;
  oninvalid: (this: GlobalEventHandlers, ev: Event) => any;
  onkeydown: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
  onkeypress: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
  onkeyup: (this: GlobalEventHandlers, ev: KeyboardEvent) => any;
  onload: (this: GlobalEventHandlers, ev: Event) => any;
  onloadeddata: (this: GlobalEventHandlers, ev: Event) => any;
  onloadedmetadata: (this: GlobalEventHandlers, ev: Event) => any;
  onloadstart: (this: GlobalEventHandlers, ev: Event) => any;
  onlostpointercapture: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onmousedown: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmouseenter: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmouseleave: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmousemove: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmouseout: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmouseover: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onmouseup: (this: GlobalEventHandlers, ev: MouseEvent) => any;
  onpaste: (this: GlobalEventHandlers, ev: ClipboardEvent) => any;
  onpause: (this: GlobalEventHandlers, ev: Event) => any;
  onplay: (this: GlobalEventHandlers, ev: Event) => any;
  onplaying: (this: GlobalEventHandlers, ev: Event) => any;
  onpointercancel: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerdown: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerenter: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerleave: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointermove: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerout: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerover: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onpointerup: (this: GlobalEventHandlers, ev: PointerEvent) => any;
  onprogress: (
    this: GlobalEventHandlers,
    ev: ProgressEvent<EventTarget>
  ) => any;
  onratechange: (this: GlobalEventHandlers, ev: Event) => any;
  onreset: (this: GlobalEventHandlers, ev: Event) => any;
  onresize: (this: GlobalEventHandlers, ev: UIEvent) => any;
  onscroll: (this: GlobalEventHandlers, ev: Event) => any;
  onscrollend: (this: GlobalEventHandlers, ev: Event) => any;
  onsecuritypolicyviolation: (
    this: GlobalEventHandlers,
    ev: SecurityPolicyViolationEvent
  ) => any;
  onseeked: (this: GlobalEventHandlers, ev: Event) => any;
  onseeking: (this: GlobalEventHandlers, ev: Event) => any;
  onselect: (this: GlobalEventHandlers, ev: Event) => any;
  onselectionchange: (this: GlobalEventHandlers, ev: Event) => any;
  onselectstart: (this: GlobalEventHandlers, ev: Event) => any;
  onslotchange: (this: GlobalEventHandlers, ev: Event) => any;
  onstalled: (this: GlobalEventHandlers, ev: Event) => any;
  onsubmit: (this: GlobalEventHandlers, ev: SubmitEvent) => any;
  onsuspend: (this: GlobalEventHandlers, ev: Event) => any;
  ontimeupdate: (this: GlobalEventHandlers, ev: Event) => any;
  ontoggle: (this: GlobalEventHandlers, ev: Event) => any;
  ontouchcancel?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
  ontouchend?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
  ontouchmove?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
  ontouchstart?: (this: GlobalEventHandlers, ev: TouchEvent) => any;
  ontransitioncancel: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
  ontransitionend: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
  ontransitionrun: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
  ontransitionstart: (this: GlobalEventHandlers, ev: TransitionEvent) => any;
  onvolumechange: (this: GlobalEventHandlers, ev: Event) => any;
  onwaiting: (this: GlobalEventHandlers, ev: Event) => any;
  onwebkitanimationend: (this: GlobalEventHandlers, ev: Event) => any;
  onwebkitanimationiteration: (this: GlobalEventHandlers, ev: Event) => any;
  onwebkitanimationstart: (this: GlobalEventHandlers, ev: Event) => any;
  onwebkittransitionend: (this: GlobalEventHandlers, ev: Event) => any;
  onwheel: (this: GlobalEventHandlers, ev: WheelEvent) => any;
  onafterprint: (this: WindowEventHandlers, ev: Event) => any;
  onbeforeprint: (this: WindowEventHandlers, ev: Event) => any;
  onbeforeunload: (this: WindowEventHandlers, ev: BeforeUnloadEvent) => any;
  ongamepadconnected: (this: WindowEventHandlers, ev: GamepadEvent) => any;
  ongamepaddisconnected: (this: WindowEventHandlers, ev: GamepadEvent) => any;
  onhashchange: (this: WindowEventHandlers, ev: HashChangeEvent) => any;
  onlanguagechange: (this: WindowEventHandlers, ev: Event) => any;
  onmessage: (this: WindowEventHandlers, ev: MessageEvent<any>) => any;
  onmessageerror: (this: WindowEventHandlers, ev: MessageEvent<any>) => any;
  onoffline: (this: WindowEventHandlers, ev: Event) => any;
  ononline: (this: WindowEventHandlers, ev: Event) => any;
  onpagehide: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
  onpageshow: (this: WindowEventHandlers, ev: PageTransitionEvent) => any;
  onpopstate: (this: WindowEventHandlers, ev: PopStateEvent) => any;
  onrejectionhandled: (
    this: WindowEventHandlers,
    ev: PromiseRejectionEvent
  ) => any;
  onstorage: (this: WindowEventHandlers, ev: StorageEvent) => any;
  onunhandledrejection: (
    this: WindowEventHandlers,
    ev: PromiseRejectionEvent
  ) => any;
  onunload: (this: WindowEventHandlers, ev: Event) => any;
  localStorage: Storage;
  caches: CacheStorage;
  crossOriginIsolated: boolean;
  crypto: Crypto;
  indexedDB: IDBFactory;
  isSecureContext: boolean;
  origin: string;
  performance: Performance;
  atob(data: string): string {
    throw new Error("Method not implemented.");
  }
  btoa(data: string): string {
    throw new Error("Method not implemented.");
  }
  clearInterval(id: number): void {
    throw new Error("Method not implemented.");
  }
  clearTimeout(id: number): void {
    throw new Error("Method not implemented.");
  }
  createImageBitmap(
    image: ImageBitmapSource,
    options?: ImageBitmapOptions
  ): Promise<ImageBitmap>;
  createImageBitmap(
    image: ImageBitmapSource,
    sx: number,
    sy: number,
    sw: number,
    sh: number,
    options?: ImageBitmapOptions
  ): Promise<ImageBitmap>;
  createImageBitmap(
    image: unknown,
    sx?: unknown,
    sy?: unknown,
    sw?: unknown,
    sh?: unknown,
    options?: unknown
  ): Promise<ImageBitmap> {
    throw new Error("Method not implemented.");
  }
  fetch(input: URL | RequestInfo, init?: RequestInit): Promise<Response> {
    throw new Error("Method not implemented.");
  }
  queueMicrotask(callback: VoidFunction): void {
    throw new Error("Method not implemented.");
  }
  reportError(e: any): void {
    throw new Error("Method not implemented.");
  }
  setInterval = rawWindow.setInterval;
  setTimeout = rawWindow.setTimeout;
  structuredClone<T = any>(value: T, options?: StructuredSerializeOptions): T {
    throw new Error("Method not implemented.");
  }
  sessionStorage: Storage;
}
