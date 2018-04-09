<template>
  <div class="Todo card">
    <section class="section add-section">
      <input type="text" placeholder="Title" v-model="todo.title" />
      <input type="text" placeholder="Project" v-model="todo.project" />
    </section>
    <section class="cta-section">
      <button
        class="add-todo-btn small"
        v-on:click="addTodo"
      >
        <i class="material-icons">add</i>
      </button>
    </section>
  </div>
</template>

<script>

export default {
  data() {
    return {
      todo: {
        title: '',
        project: '',
        done: false,
      }
    }
  },
  methods: {
    addTodo() {
      this.$emit('add-todo', this.todo);
      this.todo = {
        title: '',
        project: '',
        done: false,
      }
    }
  }
};
</script>

<style scoped>
li {
  list-style: none;
}

.card {
  min-height: 170px;
}

.card .add-section input {
  width: 98%;
}

.cta-section {
  display: flex;
  justify-content: flex-end;
}

.cta-section button {
  background: transparent;
}
</style>
