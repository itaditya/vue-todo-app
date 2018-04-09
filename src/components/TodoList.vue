<template>
  <div class="TodoList">
    <div class="column">
      <div class="col-md-8 col-md-offset-2">
        <div class="row">
          <Todo
            v-for="(todo, i) in sortedTodos"
            v-bind:key="i"
            v-bind:todo="todo"
            v-on:delete-todo="deleteTodo"
            v-on:edit-todo="editTodo(i)"
          >
          </Todo>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Todo from './Todo';

const todoSorted = (a) => {
  if (!a.done) {
    return -1;
  }
  return 1;
};

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    Todo,
  },
  computed: {
    sortedTodos() {
      return Array.from(this.todos).sort(todoSorted);
    }
  },
  methods: {
    deleteTodo(todo) {
      console.log(`Deleting ${todo.title}`);
      const todoIndex = this.sortedTodos.indexOf(todo);
      this.sortedTodos.splice(todoIndex, 1);
    },
    editTodo(todoIndex) {
      console.log(`Editing Todo of index: ${todoIndex}`);
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
