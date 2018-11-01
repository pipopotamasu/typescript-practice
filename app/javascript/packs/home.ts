import TodoApp from "@/components/TodoApp.vue";
import Vue from "vue";

Vue.component("todo-app", TodoApp);

const vm = new Vue({
  el: "#app",
});
