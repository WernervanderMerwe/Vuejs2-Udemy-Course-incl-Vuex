<template>
  <div class="alert alert-info">{{ announcement }}</div>
</template>

<script>
import { eventBus } from "./main.js";

export default {
  data() {
    return {
      announcement: "The site will go down for maintenance soon!",
    };
  },
  created() {
    eventBus.$on("aritcleWasShared", (data) => {
      alert(this.announcement, data.announcement);
      //   return (this.announcement = data.announcement);
    });
  },
};
</script>
