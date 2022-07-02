import privacy from './privacy'
import newTable from './script'
import {
  signIn,
  signOutUser
} from './fire'

function makeMenu () {
  const menu = document.createElement('div')
  menu.id = 'menu'

  const privacyBtn = document.createElement('button')
  privacyBtn.className = 'menu-btn'
  privacyBtn.innerHTML = 'Privacy Policy'
  privacyBtn.addEventListener('click', () => {
    privacy()
  })

  const enterBtn = document.createElement('button')
  enterBtn.className = 'menu-btn'
  enterBtn.innerHTML = 'Log In'
  enterBtn.addEventListener('click', async () => {
    if (enterBtn.innerHTML === 'Log In') {
      enterBtn.innerHTML = 'Log Out'
      await signIn()
      newTable()
    } else {
      enterBtn.innerHTML = 'Log In'
      await signOutUser()
      newTable()
    }
  })
  const opener = document.createElement('button')
  opener.id = 'opener'
  opener.innerHTML = '>'
  opener.addEventListener('click', () => {
    if (opener.innerHTML === '>' || opener.innerHTML ===  '&gt;') {
      opener.innerHTML = '<'
      enterBtn.style.display = 'initial' 
      privacyBtn.style.display = 'initial'
    } else {
      opener.innerHTML = '>'
      enterBtn.style.display = 'none' 
      privacyBtn.style.display = 'none'
    }
  })

  menu.appendChild(privacyBtn)
  menu.appendChild(enterBtn)
  menu.appendChild(opener)

  return menu
}

export default makeMenu
