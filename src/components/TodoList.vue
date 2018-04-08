<template>
  <div class="TodoList">
    <div class="column">
      <div class="col-md-8 col-md-offset-2">
        <div class="row">
          <Todo
            v-for="(todo, i) in todos"
            v-bind:key="i"
            v-bind:todo="todo"
            v-on:delete-todo="deleteTodo"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './Todo';

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  methods: {
    deleteTodo(todo) {
      const todoIndex = this.todos.indexOf(todo);
      this.todos.splice(todoIndex, 1);
    },
  },
};
</script>

<style scoped>
.TodoList .row {
  display: flex;
  justify-content: center;
}
</style>
