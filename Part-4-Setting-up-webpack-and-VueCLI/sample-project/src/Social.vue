<template>
  <button class="btn btn-primary" @click="share">Share on facebook</button>
</template>

<script>
export default {
  methods: {
    share() {
      this.$emit("articleWasShared", {
        media: "Facebook"
      });
    }
  }
};
</script>
