<template>
  <div class="alert alert-info">
    <div v-if="announcement">
      <p>
        {{ announcement }}
      </p>
    </div>
    <div v-else>
      <p>No announcements yet.</p>
    </div>
  </div>
</template>

<script>
import { eventBus } from "./main.js";

export default {
  data() {
    return {
      announcement: null,
    };
  },
  created() {
    eventBus.$on("articleWasShared", (data) => {
      this.announcement = `${data.article.title} was shared on ${data.media}!`;
    });
  },
};
</script>
