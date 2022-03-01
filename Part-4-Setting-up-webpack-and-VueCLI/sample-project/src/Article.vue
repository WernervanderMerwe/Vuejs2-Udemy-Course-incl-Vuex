<template>
  <div class="article">
    <!-- Global Components  -->
    <h1>{{ headline }}</h1>
    <p>{{ publishedDate }}</p>
    <p>Shares: {{ shares }}</p>
    <p>{{ content }}</p>
    <!-- Local component -->
    <author-component :author="author"></author-component>

    <br /><br />
    <social-sharing-component
      @articleWasShared="shared('hello', $event)"
    ></social-sharing-component>
  </div>
</template>

<script>
import Author from "./Author.vue";
import Social from "./Social.vue";

export default {
  data() {
    return {
      headline: "This is a headline",
      publishedDate: Date().toString(),
      content: "Lorem ipsum",
      author: {
        firstName: "Werner",
        lastName: "van der Merwe"
      },
      shares: 0
    };
  },
  methods: {
    shared: function(message, event) {
      this.shares++;
      console.log(message);
      console.log(event);
    }
  },
  // Local component
  components: {
    authorComponent: Author,
    socialSharingComponent: Social
  }
};
</script>
