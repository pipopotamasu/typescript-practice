import Vue from "vue"
import TodoApp from '@/components/TodoApp.vue'

Vue.component('todo-app', TodoApp)

new Vue({
  el: "#app"
})