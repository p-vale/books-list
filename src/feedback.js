const input = document.getElementById('inputs')

function closeFeedbackBox() {
  const el = document.getElementById('feedback-box')
  return el.remove()
}

function feedback() {
  const box = document.createElement('div')
  box.id = 'feedback-box'

  const closeFeedback = document.createElement('button')
  closeFeedback.name = 'close-feedback'
  closeFeedback.id = 'feedback-close'
  closeFeedback.innerHTML = 'X'
  closeFeedback.addEventListener('click', () => {
    closeFeedbackBox()
  })

  const info = document.createElement('p')
  info.id = 'feedback-info'
  info.innerHTML = 'To add books you must be logged in (see menu in bottom-left corner).'

  box.appendChild(closeFeedback)
  box.appendChild(info)
  input.appendChild(box)
}

export default feedback