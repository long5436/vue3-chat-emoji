##### Here is the package I edited from https://github.com/vestusola/vue-chat-emoji to support on vue3

# Vue Chat Emoji

<!-- [![npm (scoped)](https://img.shields.io/npm/v/vue-chat-emoji.svg)](https://www.npmjs.com/package/vue-chat-emoji)
[![npm (scoped)](https://img.shields.io/badge/npm-vue--chat--emoji-brightgreen.svg)](https://www.npmjs.com/package/@nguyenvanlong/vue3-chat-emoji) -->

A simple chat emoji integration for vuejs!

- Emoji picker
- Input conversion (`hello :birthday_cake:!` => hello 🎂 !)

## Preview

![Vue Chat Emoji list](https://github.com/nguyenvanlongweb/vue3-chat-emoji/blob/master/public/demo.png?raw=true "Vue Chat Emoji list")

## Installation

```
npm i @nguyenvanlong/vue3-chat-emoji
yarn add @nguyenvanlong/vue3-chat-emoji
```

## Usage

using inside component

```vue
<script setup>
import { VueChatEmojiComponent } from "@nguyenvanlong/vue3-chat-emoji";
import "@nguyenvanlong/vue3-chat-emoji/dist/index.mjs.css";
</script>

<template>
  <div class="box">
    <VueChatEmojiComponent />
  </div>
</template>
```

using globally

```js
import { createApp } from "vue";
import App from "./App.vue";
import { VueChatEmoji } from "@nguyenvanlong/vue3-chat-emoji";
import "@nguyenvanlong/vue3-chat-emoji/dist/index.mjs.css";

const app = createApp(App);

app.use(VueChatEmoji);
app.mount("#app");
```

#### Events

| Name     | Description                    |
| -------- | ------------------------------ |
| `handle` | Emitted when emoji is clicked. |

```vue
<script setup>
import { ref } from "vue";
import { VueChatEmojiComponent } from "@nguyenvanlong/vue3-chat-emoji";
import "@nguyenvanlong/vue3-chat-emoji/dist/index.mjs.css";

const open = ref(true);
const width = ref("96%");
const height = "250px";

function showOrHide() {
  this.open = !this.open;
}

function selectedEmoji(args) {
  console.log(args); /* return {...}*/
}
</script>

<template>
  <div class="box">
    <VueChatEmojiComponent
      :open="open"
      :width="width"
      :height="height"
      @toggle="showOrHide"
      @handle="selectedEmoji"
    />
  </div>
</template>
```

#### Methods

```
List of methods in emojis
```

| Usage                 | Description                                                         |
| --------------------- | ------------------------------------------------------------------- |
| `get()`               | List all emojis. Return [{...}].                                    |
| `all()`               | List all emojis. Return [{...}]                                     |
| `encodeEmoji()`       | Convert emoji character to string. e.g ":birthday_cake:" => "🎂"    |
| `decodeEmoji()`       | Convert valid emoji key to character. e.g "🎂" => ":birthday_cake:" |
| `getRandomEmoji()`    | Return random emoji. Return {...}                                   |
| `findEmojiByKey()`    | Return {...} if found and undefined if not found.                   |
| `findEmojiByName()`   | Return {...} if found and undefined if not found.                   |
| `searchEmojiByName()` | Return [{...}] if found and [] if search not found.                 |
| `findEmojiByGroup()`  | Return [{...}] if found and [] if search not found.                 |

## Props

| Name               | Type                 | Description                                                                                                                                                                                                                                                       |
| ------------------ | -------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `backgroundColor`  | `String`             | (Style property) set the emoji container background color. Default: #f5f5f5 or whitesmoke                                                                                                                                                                         |
| `radius`           | `String` or `Number` | (Style property) Set the emoji container border radius. Default: 8                                                                                                                                                                                                |
| `selectedCategory` | `String`             | Set default emoji category. Default: "Smileys & Emotion"                                                                                                                                                                                                          |
| `color`            | `String`             | Set emoji container color. Default: "#000"                                                                                                                                                                                                                        |
| `icon`             | `String`             | Set emoji icon. Default: "fa fa-smile"                                                                                                                                                                                                                            |
| `open`             | `Boolean`            | Hide or show emoji container. Default: false                                                                                                                                                                                                                      |
| `toggle`           | `Event`              | To hide or show emoji container                                                                                                                                                                                                                                   |
| `width`            | `String`             | Set emoji container width. Default: 96%                                                                                                                                                                                                                           |
| `height`           | `String`             | Set emoji container height. Default: 250px                                                                                                                                                                                                                        |
| `searchLabel`      | `String`             | Set search input field placeholder. Default: "Search". Note that HTML attributes are case-insensitive and camelCased props need to use their kebab-case equivalents when using in-DOM templates. You should probably use "search-label" instead of "searchLabel". |

© 2022 GitHub, Inc.
