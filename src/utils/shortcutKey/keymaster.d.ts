type KeyHandler = {
  shortcut: string;
  scope: string;
  method: (event: KeyboardEvent, handler: KeyHandler) => boolean | void;
  key: string;
  mods: number[];
};

type ModifierMap = {
  [key: number]: "shiftKey" | "altKey" | "ctrlKey" | "metaKey";
};

type Modifiers = {
  [key: string]: number;
  shift: 16;
  alt: 18;
  ctrl: 17;
  command: 91;
};

type KeyMap = {
  [key: string]: number;
  backspace: 8;
  tab: 9;
  clear: 12;
  enter: 13;
  return: 13;
  esc: 27;
  escape: 27;
  space: 32;
  left: 37;
  up: 38;
  right: 39;
  down: 40;
  del: 46;
  delete: 46;
  home: 36;
  end: 35;
  pageup: 33;
  pagedown: 34;
  ",": 188;
  ".": 190;
  "/": 191;
  "`": 192;
  "-": 189;
  "=": 187;
  ";": 186;
  "'": 222;
  "[": 219;
  "]": 221;
  "\\": 220;
};

interface Key {
  (
    key: string,
    method: (event: KeyboardEvent, handler: KeyHandler) => boolean | void
  ): void;
  (
    key: string,
    scope: string,
    method: (event: KeyboardEvent, handler: KeyHandler) => boolean | void
  ): void;

  setScope(scope: string): void;
  getScope(): string;
  deleteScope(scope: string): void;
  isPressed(keyCode: string | number): boolean;
  getPressedKeyCodes(): number[];
  filter(event: KeyboardEvent): boolean;
  unbind(key: string, scope?: string): void;
  noConflict(): Key;
}

export default Key;
