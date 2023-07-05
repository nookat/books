import { DivComponent } from '../../common/div-component.js';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.innerHTML = ''; // перерендер элемента
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="/static/logo.svg" alt="логотип" />
      </div>
    `;

    return this.el;
  }
}