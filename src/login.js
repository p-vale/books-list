function login () {
  const menu = document.createElement('div')
  menu.id = 'menu'
  const enter = document.createElement('button')
  enter.id = 'enter'
  enter.innerHTML = 'LOGIN'
  enter.addEventListener('click', () => {
    (enter.innerHTML === 'LOGIN') ? enter.innerHTML = 'LOGOUT' : enter.innerHTML = 'LOGIN'
  })
  const opener = document.createElement('button')
  opener.id = 'opener'
  opener.innerHTML = '>'
  opener.addEventListener('click', () => {
    if (opener.innerHTML === '>' || opener.innerHTML ===  '&gt;') {
      opener.innerHTML = '<'
      enter.style.display = 'initial' 
    } else {
      opener.innerHTML = '>'
      enter.style.display = 'none' 
    }
  })

  menu.appendChild(enter)
  menu.appendChild(opener)

  return menu
}

export default login
