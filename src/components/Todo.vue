<template>
  <div class="Todo card">
    <section class="section content-section" v-bind:class="contentSectionClasses">
      <h3>
        {{ todo.title }}
        <span class="status-marker">
          <mark class="secondary" v-show="todo.done === false">
            Pending
          </mark>
          <mark v-show="todo.done === true">Finished</mark>
        </span>
        <span>
        </span>
      </h3>
      <p>{{ todo.project }}</p>
    </section>
    <section class="section edit-section" v-bind:class="editSectionClasses">
      <input type="text" placeholder="Title" v-model="editTodoTemp.title" />
      <input type="text" placeholder="Project" v-model="editTodoTemp.project" />
    </section>
    <section class="cta-section">
      <button
        class="delete-todo-btn small"
        v-bind:class="showEditFormBtnClasses"
        v-on:click="deleteTodo(todo)"
      >
        <i class="material-icons">delete</i>
      </button>
      <button
        class="show-edit-form-btn small"
        v-bind:class="showEditFormBtnClasses"
        v-on:click="showEditFormHandler(todo)"
      >
        <i class="material-icons">mode_edit</i>
      </button>
      <button
        class="cancel-edit-form-btn default small"
        v-bind:class="saveEditFormBtnClasses"
        v-on:click="cancelEditFormHandler"
      >
        <i class="material-icons">clear</i>
      </button>
      <button
        class="save-edit-form-btn default small"
        v-bind:class="saveEditFormBtnClasses"
        v-on:click="saveEditFormHandler(todo)"
      >
        <i class="material-icons">save</i>
      </button>
      <button
        class="mark-complete-todo-btn default small"
        v-bind:class="markCompleteTodoBtnClasses"
        v-on:click="markCompleteTodoHandler(todo)"
      >
        <i class="material-icons">done</i>
      </button>
    </section>
  </div>
</template>

<script>
function sendRequest() {
  console.log('Request Sent');
}

export default {
  props: ['todo'],
  data() {
    return {
      isEditing: false,
      editTodoTemp: {
        title: '',
        project: '',
        done: false,
      }
    };
  },
  computed: {
    contentSectionClasses() {
      return {
        hidden: this.isEditing,
      };
    },
    editSectionClasses() {
      return {
        hidden: !this.isEditing,
      };
    },
    showEditFormBtnClasses() {
      return {
        hidden: this.isEditing,
      };
    },
    markCompleteTodoBtnClasses() {
      return {
        hidden: this.isEditing,
      };
    },
    saveEditFormBtnClasses() {
      return {
        hidden: !this.isEditing,
      };
    },
  },
  methods: {
    showEditForm() {
      this.isEditing = true;
    },
    hideEditForm() {
      this.isEditing = false;
    },
    showEditFormHandler(todo) {
      Object.assign(this.editTodoTemp, todo);
      this.showEditForm();
    },
    saveEditFormHandler(todo) {
      Object.assign(todo, this.editTodoTemp);
      sendRequest();
      this.$emit('edit-todo');
      this.hideEditForm();
    },
    cancelEditFormHandler() {
      this.hideEditForm();
    },
    deleteTodo(todo) {
      this.$emit('delete-todo', todo);
    },
    markCompleteTodoHandler(todo) {
      todo.done = true;
    }
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.card {
  min-height: 170px;
}

.card .edit-section input {
  width: 98%;
}

.status-marker {
  float: right;
}

.status-marker mark{
  padding: 2px 10px;
  font-size: 0.75rem;
}

.cta-section {
  display: flex;
  justify-content: flex-start;
}

.cta-section button {
  background: transparent;
}

.cancel-edit-form-btn, .mark-complete-todo-btn {
  margin-left: auto;
}
</style>
