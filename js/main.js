const card = document.querySelectorAll('.list-card')
const $parent = document.querySelector('.board-header')
const $targetSibling = document.querySelector('.board-header-btns.mod-right')
const classnames = 'board-header-btns mod-left'

function createDiv(count) {
  let $countSpan = document.createElement("div")
  $countSpan.className = classnames
  $countSpan.style.color = 'white'
  $countSpan.innerHTML = count
  $parent.insertBefore($countSpan, $targetSibling)
}

window.onload = () => {
  let count = card.length
  createDiv(count)
}
