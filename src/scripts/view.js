import Task from './components/task';
import Model from './model';
import Form from './components/form';
import Filter from './components/Filter';
import { todoList, priorityCheckBox, filterSelector } from './elements';

class View {
  constructor() {
    this.tasks = [];
    this.initEvents();
  }

  createInstanseTask() {
    this.tasks = Model.viewState(
      priorityCheckBox.checked,
      filterSelector.value
    ).map((data, idx) => new Task(data, idx));
  }

  render() {
    this.clear();
    this.createInstanseTask();
    if(this.tasks.length) {
      todoList.append(...this.tasks.map(task => task.newEl));
    } else {
      todoList.innerHTML = this.dontHaveTasks;
    }
  }

  clear() {
    while(todoList.firstChild) todoList.firstChild.remove();
  }

  findInstanseTaskById(id) {
    return this.tasks.find(task => task.data.id == id);
  }

  initEvents() {
    document.addEventListener('click', e => {
      if(e.target.matches('.toggle-btn-js')) {
        this.findInstanseTaskById(e.target.dataset.id).toggleDescr(e.target);
      } else if(e.target.matches('.delete-btn-js')) {
        Model.deleteTask(e.target.dataset.id);
        Filter.render();
        this.createInstanseTask();
        this.render();
      } else if(e.target.matches('.edit-btn-js')) {
        todoList.classList.add('edit-mode')
        Form.openForm(
          this.findInstanseTaskById(e.target.dataset.id)
        );
      }
    })
  }

  get dontHaveTasks() {
    return `
    <div class="alert alert-warning" role="alert">
      У вас нету задач, везет вам)
    </div>
    `;
  }

}

export default new View();