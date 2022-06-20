import EmojiComponent from "./Emoji.vue";

const VueChatEmoji = {
  install: (app, options) => {
    app.component("VueChatEmoji", EmojiComponent);
  },
};

const VueChatEmojiComponent = EmojiComponent;

export { VueChatEmoji, VueChatEmojiComponent };
