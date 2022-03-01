<template>
  <div class="container">
    <div class="row">
      <div class="col xs 12">
        <!-- <announcement></announcement> -->
        <article-component></article-component>
      </div>
    </div>
  </div>
</template>

<script>
import Announcement from "./Announcement.vue";
import ArticleComponent from "./Article.vue";

export default {
  components: { Announcement, ArticleComponent }
};
</script>
