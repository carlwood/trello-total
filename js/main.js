const card = document.querySelectorAll('.list-card')
const $parent = document.querySelector('.board-header')
const $targetSibling = document.querySelector('.board-header-btns.mod-right')
const classnames = 'board-header-btns mod-left'

function createDiv(count) {
  let div = document.createElement("div")
  div.className = classnames
  div.style.color = 'white'
  div.innerHTML = count
  $parent.insertBefore(div, $targetSibling)
}

window.onload = () => {
  let count = card.length
  createDiv(count)
}
