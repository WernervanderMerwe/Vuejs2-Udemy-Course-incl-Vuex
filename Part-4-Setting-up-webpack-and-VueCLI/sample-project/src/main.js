import Vue from "vue";
import App from "./App.vue";
import Announcement from "./Announcement.vue";
import ArticleComponent from "./Article.vue";

export const eventBus = new Vue();

Vue.component("announcement", Announcement);
Vue.component("articleComponent", ArticleComponent);

new Vue({
  el: "#app",
  render: h => h(App)
});
