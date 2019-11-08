import router from '../../router.js'
import template from './index.html'

export default class {
  mount (container) {
    document.title = 'foo'
    container.innerHTML = template
    container.querySelector('.foo__gobar').addEventListener('click', () => {
      router.go('/bar')
    })
  }
}