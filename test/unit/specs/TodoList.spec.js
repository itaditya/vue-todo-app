import Vue from 'vue';
import Todo from '@/components/Todo';

describe('Todo.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Todo);
    const vm = new Constructor().$mount();
    expect(vm.$el.querySelector('div').textContent)
      .toEqual('Todo A');
  });
});
