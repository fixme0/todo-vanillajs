const taskScema = {
  id: String,
  headerTask: String,
  nameProject: String,
  priority: Number,
  description: String
};

const stateKey = 'todolist'

class Model {

  constructor() {
    // this.viewState = this.getOriginLocalState();
  }

  viewState(sortByPriority, filterByName) {
    let viewState = this.getOriginLocalState();
    if(sortByPriority) {
      viewState = this.sortByPriority(viewState);
    }
    if(filterByName != 'Все') {
      viewState = this.filterByProjectName({
        state: viewState,
        nameProject: filterByName
      });
    }
    return viewState;
  }

  addTask(task) {
    const currentLocalState = this.getOriginLocalState();
    task.id = Model.generateRandomId();
    currentLocalState.push(task)
    this.updateLocalState(currentLocalState);
  }

  deleteTask(id) {
    const currentLocalState = this.getOriginLocalState();
    currentLocalState.splice(
      currentLocalState.indexOf(this.getTaskById(id, currentLocalState)),
      1
    );
    this.updateLocalState(
      currentLocalState
    );
  }

  editTask(updatedTask) {
    const currentLocalState = this.getOriginLocalState();
    currentLocalState.splice(
      currentLocalState.indexOf(this.getTaskById(updatedTask.id, currentLocalState)),
      1,
      updatedTask
    );
    this.updateLocalState(
      currentLocalState
    );
  }

  filterByProjectName({nameProject, state}) {
    if(nameProject != 'Все') { /* hardcode */
      return state.filter(item => item.nameProject == nameProject);
    }
    return state;
  }

  get sortByPriority() {
    return state => state.sort((a, b) => a.priority - b.priority);
  }

  getTaskById(id, state) {
    return state.find(item => item.id == id);
  }

  updateLocalState(state) {
    localStorage.setItem(stateKey, JSON.stringify(state));
  }

  getOriginLocalState() {
    return JSON.parse(localStorage.getItem(stateKey));
  }

  static generateRandomId() {
    return `_${Math.random().toString(36).substr(2, 9)}`;
  }

}

!localStorage.getItem(stateKey) && localStorage.setItem(stateKey, JSON.stringify([]));

export default new Model();