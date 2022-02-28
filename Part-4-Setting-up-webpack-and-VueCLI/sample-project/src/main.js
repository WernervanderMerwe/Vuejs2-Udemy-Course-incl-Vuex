import Vue from "vue";
import App from "./App.vue";
import Announcement from "./Announcement.vue";
import ArticleComponent from "./ArticleComponent.vue";

Vue.component("announcement", Announcement);
Vue.component("articleComponent", ArticleComponent);

new Vue({
  el: "#app",
  render: h => h(App)
});
