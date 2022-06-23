import {
  signIn,
  signOutUser
} from './app'

function login () {
  const menu = document.createElement('div')
  menu.id = 'menu'
  const enter = document.createElement('button')
  enter.id = 'enter'
  enter.innerHTML = 'LOGIN'
  enter.addEventListener('click', () => {
    if (enter.innerHTML === 'LOGIN') {
      enter.innerHTML = 'LOGOUT'
      signIn()
    } else {
      enter.innerHTML = 'LOGIN'
      signOutUser()
    }
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
