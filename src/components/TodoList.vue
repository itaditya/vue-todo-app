<template>
  <div class="TodoList">
    <div class="column">
      <div class="col-md-4 col-md-offset-4">
        <transition-group name="animated-todo-list" tag="div" class="row">
          <AddTodo
            v-bind:key="0"
            v-on:add-todo="addTodo"
          />
          <Todo
            v-for="(todo, i) of sortedTodos"
            v-bind:key="todo.id"
            v-bind:todo="todo"
            v-on:delete-todo="deleteTodo"
            v-on:edit-todo="editTodo(todo)"
          />
        </transition-group>
      </div>
    </div>
  </div>
</template>

<script>
import AddTodo from './AddTodo';
import Todo from './Todo';

const todoSorter = (a, b) => {
  if (!a.done) {
    if(!b.done && b.id > a.id) {
      return 1;
    }
    return -1;
  }
  return 1;
};

export default {
  name: 'TodoList',
  props: ['todos'],
  components: {
    AddTodo,
    Todo,
  },
  computed: {
    sortedTodos() {
      return Array.from(this.todos).sort(todoSorter);
    },
  },
  methods: {
    findTodoIndex(todo) {
      return this.todos.findIndex(({ id }) => todo.id === id);
    },
    addTodo(todo) {
      todo.id = this.todos.length + 1;
      this.todos.push(todo);
    },
    deleteTodo(todo) {
      console.log(`Deleting ${todo.title}, ${todo.id}`);
      const todoIndex = this.findTodoIndex(todo);
      this.$delete(this.todos, todoIndex);
    },
    editTodo(todo) {
      const todoIndex = this.findTodoIndex(todo);
      console.log(`Editing Todo of index: ${todoIndex}`);
    },
  },
};
</script>

<style scoped>
.TodoList {
  position: relative;
  min-height: 200vh;
}

.TodoList .row {
  display: flex;
  justify-content: center;
}

.animated-todo-list-enter-active, .animated-todo-list-leave-active {
  transition: all 1.2s;
}

.animated-todo-list-leave-active {
  position: absolute;
}

.animated-todo-list-enter, .animated-todo-list-leave-to {
  opacity: 0;
}

.animated-todo-list-move {
  transition: transform .8s;
}
</style>
