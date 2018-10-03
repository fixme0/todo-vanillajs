import { todoList } from './../elements';

class Task {

  constructor(data, idx) {
    this.data = data;
    this.idx = idx;
    this.el = null;
    this.showDescr = false;
  }

  get newEl() {
    const el = document.createElement('template');
    el.innerHTML = Task.template(this.data);
    this.el = el.content;
    return this.el;
  }

  toggleDescr(btn) {
    this.showDescr = !this.showDescr;
    if(this.showDescr) {
      btn.textContent = 'Свернуть';
      this.descrP.classList.remove('d-none');
    }else {
      btn.textContent = 'Развернуть';
      this.descrP.classList.add('d-none');
    }
  }

  deleteTask() {
    todoList.children[this.idx].remove();
  }

  set editMode(val) {
    if(val) return todoList.children[this.idx].classList.add('editing');
    todoList.children[this.idx].classList.remove('editing');
  }

  get descrP () {
    return todoList.children.item(this.idx).querySelector('.descr-js');
  }

  static template({headerTask, nameProject, priority, description, id}) {
    return `
      <div class="card mb-4">
        <div class="card-body">
          <h5 class="card-title">${headerTask}</h5>
          <div class="row no-gutters mb-3 justify-content-between">
            <h6 class="card-subtitle">
              Проект:
              <span class="text-primary">
                ${nameProject}
              </span>
            </h6>
            <h6 class="card-subtitle font-italic">
              Приоритет: ${priority}
            </h6>
          </div>
          <p class="card-text d-none descr-js">
            ${description}
          </p>
          <button type="button" data-id="${id}" class="btn card-link btn-success edit-btn-js">Изменить</button>
          <button type="button" data-id="${id}" class="btn card-link btn-danger delete-btn-js">Закрыть</button>
          <button type="button" data-id="${id}" class="btn card-link btn-primary toggle-btn-js">Развернуть</button>
        </div>
      </div>
      `;
  }

};

export default Task;
