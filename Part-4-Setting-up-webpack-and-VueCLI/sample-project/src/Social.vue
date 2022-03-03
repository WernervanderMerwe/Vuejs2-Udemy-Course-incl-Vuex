<template>
  <div>
    <h1>
      <strong>{{ message }}</strong>
    </h1>
    <button class="btn btn-primary" @click="shareFacebook">
      Share on Facebook
    </button>
    <button class="btn btn-primary" @click="shareTwitter">
      Share on Twitter
    </button>
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  data() {
    return {
      message: "Share 10 Reasons why vue.js is Awesome with your friends",
    };
  },
  methods: {
    shareFacebook() {
      eventBus.$emit("articleWasShared", {
        announcement:
          "Share 10 Reasons why vue.js is Awesome was shared on Facebook",
      });
      this.$emit("articleWasShared", {
        media: "Facebook",
      });
    },
    shareTwitter() {
      eventBus.$emit("articleWasShared", {
        announcement:
          "Share 10 Reasons why vue.js is Awesome was shared on Twitter",
      });
      this.$emit("articleWasShared", {
        media: "Twitter",
      });
    },
  },
};
</script>
