import { getPlatform } from "./platformUtils";

interface Keybind {
  keys: string[];
  validate: (event:KeyboardEvent) => boolean,
}

const getTriggerKeyForOs = () => {
  if (getPlatform() == "Mac/iOS") {
    return "\u{2318}" // Mac Command Symbol
  }
  return "CTRL";
};

const keybinds: { [keybindName:string]: Keybind } = {
  search: {
    keys: [getTriggerKeyForOs(), "K"],
    validate: event => {
      const isTriggerHeld = (getPlatform() == "Mac/iOS" && event.metaKey) || event.ctrlKey;
      return isTriggerHeld && event.key === "k";
    }
  },
};

export {
  keybinds,
};

