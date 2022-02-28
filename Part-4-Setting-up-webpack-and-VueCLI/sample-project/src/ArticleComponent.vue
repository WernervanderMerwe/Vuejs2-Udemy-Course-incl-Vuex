<template>
  <div class="article">
    <!-- Global Components  -->
    <h1>{{ headline }}</h1>
    <p>{{ publishedDate }}</p>
    <p>{{ content }}</p>
    <!-- Local component -->
    <author-component :author="author"></author-component>
  </div>
</template>

<script>
import Author from "./Author.vue";

export default {
  data() {
    return {
      headline: "This is a headline",
      publishedDate: Date().toString(),
      content: "Lorem ipsum",
      author: {
        firstName: "Werner",
        lastName: "van der Merwe"
      }
    };
  },
  // Local component
  components: {
    authorComponent: Author
  }
};
</script>
