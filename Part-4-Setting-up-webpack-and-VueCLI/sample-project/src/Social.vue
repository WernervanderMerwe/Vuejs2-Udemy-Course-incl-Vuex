<template>
  <button class="btn btn-primary" @click="share">Share on facebook</button>
</template>

<script>
import { eventBus } from "./main.js";

export default {
  methods: {
    share() {
      eventBus.$emit("articleWasShared", {
        media: "Facebook"
      });
      this.$emit("articleWasShared", {
        media: "Facebook"
      });
    }
  }
};
</script>
