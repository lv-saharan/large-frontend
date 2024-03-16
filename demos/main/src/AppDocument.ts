import { IDocument, IWindow } from "definition";
const rawWindow = window;
const rawDocument = document;
const rawLocation = location;
const rawNaviagtor = navigator;
export class AppDocument implements IDocument{
    URL: string;
    alinkColor: string;
    all: HTMLAllCollection;
    anchors: HTMLCollectionOf<HTMLAnchorElement>;
    applets: HTMLCollection;
    bgColor: string;
    body: HTMLElement;
    characterSet: string;
    charset: string;
    compatMode: string;
    contentType: string;
    cookie: string;
    currentScript: HTMLOrSVGScriptElement;
    defaultView: Window & typeof globalThis;
    designMode: string;
    dir: string;
    doctype: DocumentType;
    documentElement: HTMLElement;
    documentURI: string;
    domain: string;
    embeds: HTMLCollectionOf<HTMLEmbedElement>;
    fgColor: string;
    forms: HTMLCollectionOf<HTMLFormElement>;
    fullscreen: boolean;
    fullscreenEnabled: boolean;
    head: HTMLHeadElement;
    hidden: boolean;
    images: HTMLCollectionOf<HTMLImageElement>;
    implementation: DOMImplementation;
    inputEncoding: string;
    lastModified: string;
    linkColor: string;
    links: HTMLCollectionOf<HTMLAnchorElement | HTMLAreaElement>;
    get location(): Location {
        throw new Error("Method not implemented.");
    }
    set location(href: Location) {
        throw new Error("Method not implemented.");
    }
    onfullscreenchange: (this: Document, ev: Event) => any;
    onfullscreenerror: (this: Document, ev: Event) => any;
    onpointerlockchange: (this: Document, ev: Event) => any;
    onpointerlockerror: (this: Document, ev: Event) => any;
    onreadystatechange: (this: Document, ev: Event) => any;
    onvisibilitychange: (this: Document, ev: Event) => any;
    ownerDocument: null;
    pictureInPictureEnabled: boolean;
    plugins: HTMLCollectionOf<HTMLEmbedElement>;
    readyState: DocumentReadyState;
    referrer: string;
    rootElement: SVGSVGElement;
    scripts: HTMLCollectionOf<HTMLScriptElement>;
    scrollingElement: Element;
    timeline: DocumentTimeline;
    title: string;
    visibilityState: DocumentVisibilityState;
    vlinkColor: string;
    adoptNode<T extends Node>(node: T): T {
        throw new Error("Method not implemented.");
    }
    captureEvents(): void {
        throw new Error("Method not implemented.");
    }
    caretRangeFromPoint(x: number, y: number): Range {
        throw new Error("Method not implemented.");
    }
    clear(): void {
        throw new Error("Method not implemented.");
    }
    close(): void {
        throw new Error("Method not implemented.");
    }
    createAttribute(localName: string): Attr {
        throw new Error("Method not implemented.");
    }
    createAttributeNS(namespace: string, qualifiedName: string): Attr {
        throw new Error("Method not implemented.");
    }
    createCDATASection(data: string): CDATASection {
        throw new Error("Method not implemented.");
    }
    createComment(data: string): Comment {
        throw new Error("Method not implemented.");
    }
    createDocumentFragment(): DocumentFragment {
        throw new Error("Method not implemented.");
    }
    createElement<K extends keyof HTMLElementTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementTagNameMap[K];
    createElement<K extends keyof HTMLElementDeprecatedTagNameMap>(tagName: K, options?: ElementCreationOptions): HTMLElementDeprecatedTagNameMap[K];
    createElement(tagName: string, options?: ElementCreationOptions): HTMLElement;
    createElement(tagName: unknown, options?: unknown): HTMLElement | HTMLElementTagNameMap[K] | HTMLElementDeprecatedTagNameMap[K] {
        throw new Error("Method not implemented.");
    }
    createElementNS(namespaceURI: "http://www.w3.org/1999/xhtml", qualifiedName: string): HTMLElement;
    createElementNS<K extends keyof SVGElementTagNameMap>(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: K): SVGElementTagNameMap[K];
    createElementNS(namespaceURI: "http://www.w3.org/2000/svg", qualifiedName: string): SVGElement;
    createElementNS<K extends keyof MathMLElementTagNameMap>(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: K): MathMLElementTagNameMap[K];
    createElementNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", qualifiedName: string): MathMLElement;
    createElementNS(namespaceURI: string, qualifiedName: string, options?: ElementCreationOptions): Element;
    createElementNS(namespace: string, qualifiedName: string, options?: string | ElementCreationOptions): Element;
    createElementNS(namespace: unknown, qualifiedName: unknown, options?: unknown): Element | HTMLElement | SVGElement | SVGElementTagNameMap[K] | MathMLElementTagNameMap[K] | MathMLElement {
        throw new Error("Method not implemented.");
    }
    createEvent(eventInterface: "AnimationEvent"): AnimationEvent;
    createEvent(eventInterface: "AnimationPlaybackEvent"): AnimationPlaybackEvent;
    createEvent(eventInterface: "AudioProcessingEvent"): AudioProcessingEvent;
    createEvent(eventInterface: "BeforeUnloadEvent"): BeforeUnloadEvent;
    createEvent(eventInterface: "BlobEvent"): BlobEvent;
    createEvent(eventInterface: "ClipboardEvent"): ClipboardEvent;
    createEvent(eventInterface: "CloseEvent"): CloseEvent;
    createEvent(eventInterface: "CompositionEvent"): CompositionEvent;
    createEvent(eventInterface: "CustomEvent"): CustomEvent<any>;
    createEvent(eventInterface: "DeviceMotionEvent"): DeviceMotionEvent;
    createEvent(eventInterface: "DeviceOrientationEvent"): DeviceOrientationEvent;
    createEvent(eventInterface: "DragEvent"): DragEvent;
    createEvent(eventInterface: "ErrorEvent"): ErrorEvent;
    createEvent(eventInterface: "Event"): Event;
    createEvent(eventInterface: "Events"): Event;
    createEvent(eventInterface: "FocusEvent"): FocusEvent;
    createEvent(eventInterface: "FontFaceSetLoadEvent"): FontFaceSetLoadEvent;
    createEvent(eventInterface: "FormDataEvent"): FormDataEvent;
    createEvent(eventInterface: "GamepadEvent"): GamepadEvent;
    createEvent(eventInterface: "HashChangeEvent"): HashChangeEvent;
    createEvent(eventInterface: "IDBVersionChangeEvent"): IDBVersionChangeEvent;
    createEvent(eventInterface: "InputEvent"): InputEvent;
    createEvent(eventInterface: "KeyboardEvent"): KeyboardEvent;
    createEvent(eventInterface: "MIDIConnectionEvent"): MIDIConnectionEvent;
    createEvent(eventInterface: "MIDIMessageEvent"): MIDIMessageEvent;
    createEvent(eventInterface: "MediaEncryptedEvent"): MediaEncryptedEvent;
    createEvent(eventInterface: "MediaKeyMessageEvent"): MediaKeyMessageEvent;
    createEvent(eventInterface: "MediaQueryListEvent"): MediaQueryListEvent;
    createEvent(eventInterface: "MediaStreamTrackEvent"): MediaStreamTrackEvent;
    createEvent(eventInterface: "MessageEvent"): MessageEvent<any>;
    createEvent(eventInterface: "MouseEvent"): MouseEvent;
    createEvent(eventInterface: "MouseEvents"): MouseEvent;
    createEvent(eventInterface: "MutationEvent"): MutationEvent;
    createEvent(eventInterface: "MutationEvents"): MutationEvent;
    createEvent(eventInterface: "OfflineAudioCompletionEvent"): OfflineAudioCompletionEvent;
    createEvent(eventInterface: "PageTransitionEvent"): PageTransitionEvent;
    createEvent(eventInterface: "PaymentMethodChangeEvent"): PaymentMethodChangeEvent;
    createEvent(eventInterface: "PaymentRequestUpdateEvent"): PaymentRequestUpdateEvent;
    createEvent(eventInterface: "PictureInPictureEvent"): PictureInPictureEvent;
    createEvent(eventInterface: "PointerEvent"): PointerEvent;
    createEvent(eventInterface: "PopStateEvent"): PopStateEvent;
    createEvent(eventInterface: "ProgressEvent"): ProgressEvent<EventTarget>;
    createEvent(eventInterface: "PromiseRejectionEvent"): PromiseRejectionEvent;
    createEvent(eventInterface: "RTCDTMFToneChangeEvent"): RTCDTMFToneChangeEvent;
    createEvent(eventInterface: "RTCDataChannelEvent"): RTCDataChannelEvent;
    createEvent(eventInterface: "RTCErrorEvent"): RTCErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceErrorEvent"): RTCPeerConnectionIceErrorEvent;
    createEvent(eventInterface: "RTCPeerConnectionIceEvent"): RTCPeerConnectionIceEvent;
    createEvent(eventInterface: "RTCTrackEvent"): RTCTrackEvent;
    createEvent(eventInterface: "SecurityPolicyViolationEvent"): SecurityPolicyViolationEvent;
    createEvent(eventInterface: "SpeechSynthesisErrorEvent"): SpeechSynthesisErrorEvent;
    createEvent(eventInterface: "SpeechSynthesisEvent"): SpeechSynthesisEvent;
    createEvent(eventInterface: "StorageEvent"): StorageEvent;
    createEvent(eventInterface: "SubmitEvent"): SubmitEvent;
    createEvent(eventInterface: "ToggleEvent"): ToggleEvent;
    createEvent(eventInterface: "TouchEvent"): TouchEvent;
    createEvent(eventInterface: "TrackEvent"): TrackEvent;
    createEvent(eventInterface: "TransitionEvent"): TransitionEvent;
    createEvent(eventInterface: "UIEvent"): UIEvent;
    createEvent(eventInterface: "UIEvents"): UIEvent;
    createEvent(eventInterface: "WebGLContextEvent"): WebGLContextEvent;
    createEvent(eventInterface: "WheelEvent"): WheelEvent;
    createEvent(eventInterface: string): Event;
    createEvent(eventInterface: unknown): Event | DeviceMotionEvent | DeviceOrientationEvent | UIEvent | AnimationEvent | MouseEvent | InputEvent | FocusEvent | ClipboardEvent | DragEvent | FormDataEvent | PointerEvent | KeyboardEvent | ProgressEvent<EventTarget> | SecurityPolicyViolationEvent | SubmitEvent | TouchEvent | TransitionEvent | WheelEvent | BeforeUnloadEvent | GamepadEvent | HashChangeEvent | MessageEvent<any> | PageTransitionEvent | PopStateEvent | PromiseRejectionEvent | StorageEvent | AnimationPlaybackEvent | AudioProcessingEvent | BlobEvent | CloseEvent | CompositionEvent | CustomEvent<any> | ErrorEvent | FontFaceSetLoadEvent | IDBVersionChangeEvent | MIDIConnectionEvent | MIDIMessageEvent | MediaEncryptedEvent | MediaKeyMessageEvent | MediaQueryListEvent | MediaStreamTrackEvent | MutationEvent | OfflineAudioCompletionEvent | PaymentMethodChangeEvent | PaymentRequestUpdateEvent | PictureInPictureEvent | RTCDTMFToneChangeEvent | RTCDataChannelEvent | RTCErrorEvent | RTCPeerConnectionIceErrorEvent | RTCPeerConnectionIceEvent | RTCTrackEvent | SpeechSynthesisErrorEvent | SpeechSynthesisEvent | ToggleEvent | TrackEvent | WebGLContextEvent {
        throw new Error("Method not implemented.");
    }
    createNodeIterator(root: Node, whatToShow?: number, filter?: NodeFilter): NodeIterator {
        throw new Error("Method not implemented.");
    }
    createProcessingInstruction(target: string, data: string): ProcessingInstruction {
        throw new Error("Method not implemented.");
    }
    createRange(): Range {
        throw new Error("Method not implemented.");
    }
    createTextNode(data: string): Text {
        throw new Error("Method not implemented.");
    }
    createTreeWalker(root: Node, whatToShow?: number, filter?: NodeFilter): TreeWalker {
        throw new Error("Method not implemented.");
    }
    execCommand(commandId: string, showUI?: boolean, value?: string): boolean {
        throw new Error("Method not implemented.");
    }
    exitFullscreen(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    exitPictureInPicture(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    exitPointerLock(): void {
        throw new Error("Method not implemented.");
    }
    getElementById(elementId: string): HTMLElement {
        throw new Error("Method not implemented.");
    }
    getElementsByClassName(classNames: string): HTMLCollectionOf<Element> {
        throw new Error("Method not implemented.");
    }
    getElementsByName(elementName: string): NodeListOf<HTMLElement> {
        throw new Error("Method not implemented.");
    }
    getElementsByTagName<K extends keyof HTMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof SVGElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<SVGElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof MathMLElementTagNameMap>(qualifiedName: K): HTMLCollectionOf<MathMLElementTagNameMap[K]>;
    getElementsByTagName<K extends keyof HTMLElementDeprecatedTagNameMap>(qualifiedName: K): HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]>;
    getElementsByTagName(qualifiedName: string): HTMLCollectionOf<Element>;
    getElementsByTagName(qualifiedName: unknown): HTMLCollectionOf<Element> | HTMLCollectionOf<HTMLElementTagNameMap[K]> | HTMLCollectionOf<SVGElementTagNameMap[K]> | HTMLCollectionOf<MathMLElementTagNameMap[K]> | HTMLCollectionOf<HTMLElementDeprecatedTagNameMap[K]> {
        throw new Error("Method not implemented.");
    }
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1999/xhtml", localName: string): HTMLCollectionOf<HTMLElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/2000/svg", localName: string): HTMLCollectionOf<SVGElement>;
    getElementsByTagNameNS(namespaceURI: "http://www.w3.org/1998/Math/MathML", localName: string): HTMLCollectionOf<MathMLElement>;
    getElementsByTagNameNS(namespace: string, localName: string): HTMLCollectionOf<Element>;
    getElementsByTagNameNS(namespace: unknown, localName: unknown): HTMLCollectionOf<Element> | HTMLCollectionOf<HTMLElement> | HTMLCollectionOf<SVGElement> | HTMLCollectionOf<MathMLElement> {
        throw new Error("Method not implemented.");
    }
    getSelection(): Selection {
        throw new Error("Method not implemented.");
    }
    hasFocus(): boolean {
        throw new Error("Method not implemented.");
    }
    hasStorageAccess(): Promise<boolean> {
        throw new Error("Method not implemented.");
    }
    importNode<T extends Node>(node: T, deep?: boolean): T {
        throw new Error("Method not implemented.");
    }
    open(unused1?: string, unused2?: string): Document;
    open(url: string | URL, name: string, features: string): Window;
    open(url?: unknown, name?: unknown, features?: unknown): Window | Document {
        throw new Error("Method not implemented.");
    }
    queryCommandEnabled(commandId: string): boolean {
        throw new Error("Method not implemented.");
    }
    queryCommandIndeterm(commandId: string): boolean {
        throw new Error("Method not implemented.");
    }
    queryCommandState(commandId: string): boolean {
        throw new Error("Method not implemented.");
    }
    queryCommandSupported(commandId: string): boolean {
        throw new Error("Method not implemented.");
    }
    queryCommandValue(commandId: string): string {
        throw new Error("Method not implemented.");
    }
    releaseEvents(): void {
        throw new Error("Method not implemented.");
    }
    requestStorageAccess(): Promise<void> {
        throw new Error("Method not implemented.");
    }
    write(...text: string[]): void {
        throw new Error("Method not implemented.");
    }
    writeln(...text: string[]): void {
        throw new Error("Method not implemented.");
    }
    addEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | AddEventListenerOptions): void;
    addEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    removeEventListener<K extends keyof DocumentEventMap>(type: K, listener: (this: Document, ev: DocumentEventMap[K]) => any, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: string, listener: EventListenerOrEventListenerObject, options?: boolean | EventListenerOptions): void;
    removeEventListener(type: unknown, listener: unknown, options?: unknown): void {
        throw new Error("Method not implemented.");
    }
    baseURI: string;
    childNodes: NodeListOf<ChildNode>;
    firstChild: ChildNode;
    isConnected: boolean;
    lastChild: ChildNode;
    nextSibling: ChildNode;
    nodeName: string;
    nodeType: number;
    nodeValue: string;
    parentElement: HTMLElement;
    parentNode: ParentNode;
    previousSibling: ChildNode;
    textContent: string;
    appendChild<T extends Node>(node: T): T {
        throw new Error("Method not implemented.");
    }
    cloneNode(deep?: boolean): Node {
        throw new Error("Method not implemented.");
    }
    compareDocumentPosition(other: Node): number {
        throw new Error("Method not implemented.");
    }
    contains(other: Node): boolean {
        throw new Error("Method not implemented.");
    }
    getRootNode(options?: GetRootNodeOptions): Node {
        throw new Error("Method not implemented.");
    }
    hasChildNodes(): boolean {
        throw new Error("Method not implemented.");
    }
    insertBefore<T extends Node>(node: T, child: Node): T {
        throw new Error("Method not implemented.");
    }
    isDefaultNamespace(namespace: string): boolean {
        throw new Error("Method not implemented.");
    }
    isEqualNode(otherNode: Node): boolean {
        throw new Error("Method not implemented.");
    }
    isSameNode(otherNode: Node): boolean {
        throw new Error("Method not implemented.");
    }
    lookupNamespaceURI(prefix: string): string {
        throw new Error("Method not implemented.");
    }
    lookupPrefix(namespace: string): string {
        throw new Error("Method not implemented.");
    }
    normalize(): void {
        throw new Error("Method not implemented.");
    }
    removeChild<T extends Node>(child: T): T {
        throw new Error("Method not implemented.");
    }
    replaceChild<T extends Node>(node: Node, child: T): T {
        throw new Error("Method not implemented.");
    }
    ELEMENT_NODE: 1;
    ATTRIBUTE_NODE: 2;
    TEXT_NODE: 3;
    CDATA_SECTION_NODE: 4;
    ENTITY_REFERENCE_NODE: 5;
    ENTITY_NODE: 6;
    PROCESSING_INSTRUCTION_NODE: 7;
    COMMENT_NODE: 8;
    DOCUMENT_NODE: 9;
    DOCUMENT_TYPE_NODE: 10;
    DOCUMENT_FRAGMENT_NODE: 11;
    NOTATION_NODE: 12;
    DOCUMENT_POSITION_DISCONNECTED: 1;
    DOCUMENT_POSITION_PRECEDING: 2;
    DOCUMENT_POSITION_FOLLOWING: 4;
    DOCUMENT_POSITION_CONTAINS: 8;
    DOCUMENT_POSITION_CONTAINED_BY: 16;
    DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC: 32;
    dispatchEvent(event: Event): boolean {
        throw new Error("Method not implemented.");
    }
    activeElement: Element;
    adoptedStyleSheets: CSSStyleSheet[];
    fullscreenElement: Element;
    pictureInPictureElement: Element;
    pointerLockElement: Element;
    styleSheets: StyleSheetList;
    elementFromPoint(x: number, y: number): Element {
        throw new Error("Method not implemented.");
    }
    elementsFromPoint(x: number, y: number): Element[] {
        throw new Error("Method not implemented.");
    }
    getAnimations(): Animation[] {
        throw new Error("Method not implemented.");
    }
    fonts: FontFaceSet;
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
    onprogress: (this: GlobalEventHandlers, ev: ProgressEvent<EventTarget>) => any;
    onratechange: (this: GlobalEventHandlers, ev: Event) => any;
    onreset: (this: GlobalEventHandlers, ev: Event) => any;
    onresize: (this: GlobalEventHandlers, ev: UIEvent) => any;
    onscroll: (this: GlobalEventHandlers, ev: Event) => any;
    onscrollend: (this: GlobalEventHandlers, ev: Event) => any;
    onsecuritypolicyviolation: (this: GlobalEventHandlers, ev: SecurityPolicyViolationEvent) => any;
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
    childElementCount: number;
    children: HTMLCollection;
    firstElementChild: Element;
    lastElementChild: Element;
    append(...nodes: (string | Node)[]): void {
        throw new Error("Method not implemented.");
    }
    prepend(...nodes: (string | Node)[]): void {
        throw new Error("Method not implemented.");
    }
    querySelector<K extends keyof HTMLElementTagNameMap>(selectors: K): HTMLElementTagNameMap[K];
    querySelector<K extends keyof SVGElementTagNameMap>(selectors: K): SVGElementTagNameMap[K];
    querySelector<K extends keyof MathMLElementTagNameMap>(selectors: K): MathMLElementTagNameMap[K];
    querySelector<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): HTMLElementDeprecatedTagNameMap[K];
    querySelector<E extends Element = Element>(selectors: string): E;
    querySelector(selectors: unknown): E | HTMLElementTagNameMap[K] | SVGElementTagNameMap[K] | MathMLElementTagNameMap[K] | HTMLElementDeprecatedTagNameMap[K] {
        throw new Error("Method not implemented.");
    }
    querySelectorAll<K extends keyof HTMLElementTagNameMap>(selectors: K): NodeListOf<HTMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof SVGElementTagNameMap>(selectors: K): NodeListOf<SVGElementTagNameMap[K]>;
    querySelectorAll<K extends keyof MathMLElementTagNameMap>(selectors: K): NodeListOf<MathMLElementTagNameMap[K]>;
    querySelectorAll<K extends keyof HTMLElementDeprecatedTagNameMap>(selectors: K): NodeListOf<HTMLElementDeprecatedTagNameMap[K]>;
    querySelectorAll<E extends Element = Element>(selectors: string): NodeListOf<E>;
    querySelectorAll(selectors: unknown): NodeListOf<HTMLElementTagNameMap[K]> | NodeListOf<SVGElementTagNameMap[K]> | NodeListOf<MathMLElementTagNameMap[K]> | NodeListOf<HTMLElementDeprecatedTagNameMap[K]> | NodeListOf<E> {
        throw new Error("Method not implemented.");
    }
    replaceChildren(...nodes: (string | Node)[]): void {
        throw new Error("Method not implemented.");
    }
    createExpression(expression: string, resolver?: XPathNSResolver): XPathExpression {
        throw new Error("Method not implemented.");
    }
    createNSResolver(nodeResolver: Node): Node {
        throw new Error("Method not implemented.");
    }
    evaluate(expression: string, contextNode: Node, resolver?: XPathNSResolver, type?: number, result?: XPathResult): XPathResult {
        throw new Error("Method not implemented.");
    }
    
}
export class AppWindow implements IWindow {
  [index: number]: Window;
  clientInformation: Navigator = rawNaviagtor;
  closed: boolean = rawWindow.closed;
  customElements: CustomElementRegistry = rawWindow.customElements;
  devicePixelRatio: number=rawWindow.devicePixelRatio;
  document: Document;
  event: Event;
  external: External;
  frameElement: Element;
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

export const appWindow = new AppWindow();
