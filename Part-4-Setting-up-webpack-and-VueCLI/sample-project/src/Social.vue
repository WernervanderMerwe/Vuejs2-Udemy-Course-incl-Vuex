<template>
  <div>
    <h1>
      <strong>Share {{ article.title }} with your friends</strong>
    </h1>
    <button class="btn btn-primary" @click="share('Facebook')">
      Share on Facebook
    </button>
    <button class="btn btn-primary" @click="share('Twitter')">
      Share on Twitter
    </button>
  </div>
</template>

<script>
import { eventBus } from "./main.js";
export default {
  props: {
    article: {
      type: Object,
      required: true,
    },
  },
  methods: {
    share(media) {
      eventBus.$emit("articleWasShared", {
        article: this.article,
        media: media,
      });
      this.$emit("articleWasShared", {
        media: media,
      });
    },
  },
};
</script>
