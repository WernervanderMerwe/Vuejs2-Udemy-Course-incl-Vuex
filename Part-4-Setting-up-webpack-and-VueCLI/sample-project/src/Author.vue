// local component
<template>
  <small>Written by {{ author.firstName }} {{ author.lastName }}</small>
</template>

<script>
import { eventBus } from "./main.js";

export default {
  props: {
    author: {
      type: Object,
      required: true
    }
  },
  created() {
    eventBus.$on("articleWasShared", data =>
      alert(`someone shared an article on ${data.media}!`)
    );
  }
};
</script>
