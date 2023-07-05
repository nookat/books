import { DivComponent } from '../../common/div-component.js';
import './header.css';

export class Header extends DivComponent {
  constructor(appState) {
    super();
    this.appState = appState;
  }

  render() {
    this.el.classList.add('header');
    this.el.innerHTML = `
      <div>
        <img src="/static/logo.svg" alt="логотип" />
      </div>
      <div class="menu">
        <a href="#" class="menu__item">
          <img src="/static/search.svg" alt="Поиск иконка" />
          Поиск книг
        </a>
        <a href="#" class="menu__item">
          <img src="/static/favorites.svg" alt="Избранное иконка" />
          Избранное
          <div class="menu__counter">
            ${this.appState.favorites.length}
          </div>
        </a>
      </div>
    `;

    return this.el;
  }
}