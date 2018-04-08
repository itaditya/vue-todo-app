<template>
  <div class="Todo card">
    <section class="section content-section" v-bind:class="contentSectionClasses">
      <h3>{{ todo.title }}</h3>
      <p>{{ todo.project }}</p>
    </section>
    <section class="section edit-section" v-bind:class="editSectionClasses">
      <input type="text" />
    </section>
    <section class="cta-section">
      <button class="delete-todo-btn secondary small col-md-last"
        v-bind:class="showEditFormBtnClasses"
        v-on:click="deleteTodo(todo)"
      >
        Delete
      </button>
      <button class="show-edit-form-btn small col-md-last"
        v-bind:class="showEditFormBtnClasses"
        v-on:click="showEditFormHandler"
      >
        Edit Todo
      </button>
      <button class="save-edit-form-btn tertiary small col-md-last"
        v-bind:class="saveEditFormBtnClasses"
        v-on:click="saveEditFormHandler"
      >
        Save Changes
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
    showEditFormHandler() {
      this.showEditForm();
    },
    saveEditFormHandler() {
      sendRequest();
      this.hideEditForm();
    },
    deleteTodo(todo) {
      console.log(`Deleting ${todo.title}`);
      this.$emit('delete-todo', todo);
    },
  },
};
</script>

<style scoped>
li {
  list-style: none;
}

.cta-section {
  display: flex;
  justify-content: flex-end;
}

.delete-todo-btn {
  margin-right: auto;
}
</style>
