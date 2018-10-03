import { btnNewTask, todoForm, todoControlls, btnCancelAddNewTask, todoList } from './../elements';

class Form {
  constructor() {
    this.editItem = null;
    btnNewTask.addEventListener('click', e => this.openForm());
    btnCancelAddNewTask.addEventListener('click', e => this.closeForm());
    todoForm.addEventListener('submit', e => this.sendDate(e));
  }

  sendDate(e) {
    e.preventDefault();

    const eventName = this.editItem ? 'editTask' : 'addTask'

    document.dispatchEvent(new CustomEvent(eventName, {
      detail: {
        ...this.getInputsValue,
        id: this.editItem && (this.editItem.data.id || null)
      }
    }));

    this.closeForm();
  }

  get getInputsValue() {
    return this.inputs.reduce(
      (result, inp) => {
        result[inp.name] = inp.value;
        return result;
      },
      {}
    );
  }

  clearForm() {
    this.inputs.forEach(inp => inp.value = '');
  }

  get inputs() {
    return Array.from(todoForm.querySelectorAll('input, select, textarea'));
  }

  openForm(editItem = false) {
    todoForm.classList.remove('d-none');
    todoControlls.classList.add('d-none');
    if(editItem) {
      this.inputs.forEach(inp => inp.value = editItem.data[inp.name]);
      editItem.editMode = true;
      this.editItem = editItem;
    }
  }

  closeForm() {
    todoForm.classList.add('d-none');
    todoControlls.classList.remove('d-none');
    this.clearForm();
    if(this.editItem) {
      this.editItem.editMode = false;
      todoList.classList.remove('edit-mode');
      this.editItem = false;
    }
  }

};

export default new Form();
