import Model from './model';
import View from './view';
import './components/form';
import Filter from './components/filter';
import { priorityCheckBox } from './elements';

class Control {
  constructor() {
    View.render();
    this.init();
  }

  addTaskHandler({detail: task}) {
    Model.addTask(task);
    View.render();
    Filter.render();
  }

  editTaskHandler({detail: task}) {
    Model.editTask(task);
    View.render();
    Filter.render();
  }

  sortByPriorityTasksHandler({target: {checked}}) {
    // Model.sortByPriority = checked;
    // if(Filter.currentFilterValue != 'Все') Model.filterByProjectName = Filter.currentFilterValue;
    View.render();
  }

  filterByProjectNameHandler({detail: projectName}) {
    // Model.filterByProjectName = projectName;
    // if(priorityCheckBox.checked) Model.sortByPriority = true;
    View.render();
  }

  init() {
    document.addEventListener('addTask', this.addTaskHandler);
    document.addEventListener('editTask', this.editTaskHandler);
    document.addEventListener('filterByProject', this.filterByProjectNameHandler);
    priorityCheckBox.addEventListener('change', e => this.sortByPriorityTasksHandler(e));
  }

}

new Control();

