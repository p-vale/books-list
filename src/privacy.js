const statement = 'This is a personal project. By using the service users agree with the storage of their e-mail and the data uploaded. Users that have been inactive for 6 months, and their data, will be deleted every January.'

function closeModal() {
  const el = document.getElementById('modal')
  return el.remove()
}

function privacy() {
  const modal = document.createElement('div')
  modal.id = 'modal'
  
  const info = document.createElement('div')
  info.id = 'modal-info'

  const infoTxt = document.createElement('p')
  infoTxt.innerHTML = statement

  const profile = document.createElement('a')
  profile.id = 'profile'
  const link = document.createTextNode('p-vale')
  profile.appendChild(link)
  profile.href = 'https://github.com/p-vale'
  const credits = document.createElement('p')
  credits.innerHTML = 'made by '
  credits.id = 'credits'
  credits. appendChild(profile)

  const close = document.createElement('button')
  close.name = 'close'
  close.id = 'close'
  close.innerHTML = 'X'
  close.addEventListener('click', () => {
    closeModal()
  })

  info.appendChild(close)
  info.appendChild(infoTxt)
  info.appendChild(credits)

  modal.appendChild(info)
  document.body.appendChild(modal)
}

export default privacy