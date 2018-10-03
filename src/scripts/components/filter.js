import Model from './../model';
import { filterSelector } from './../elements';

class Filter {
  constructor() {
    filterSelector.addEventListener('change', e => this.filterHandler(e));
    this.render();
  }

  filterHandler(e) {
    document.dispatchEvent(
      new CustomEvent(
        'filterByProject',
        {
          detail: e.target.value
        }
      )
    )
  }

  render() {
    const prevValue = filterSelector.value || 'Все';
    filterSelector.innerHTML = '<option value="Все">Все</option>' + this.projects.map(pr => {
      return `
        <option value="${pr}">${pr}</option>
      `;
    }).join('');
    if(prevValue && this.projects.find(name => name == prevValue)) return filterSelector.value = prevValue;
    filterSelector.value = 'Все';
  }

  get projects() {
    return [
      ...new Set(
        Model.getOriginLocalState().map(item => item.nameProject)
      )
    ]
  }

  get currentFilterValue() {
    return filterSelector.value;
  }

};

export default new Filter();