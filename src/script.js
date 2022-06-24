import bin from "./bin.png"
import login from "./login"
import './style.css'
import { 
  getUserId, 
  loadLibrary, 
  saveTitle,
  deleteTitle,
  toggleRead } from './fire'

let table = document.getElementById('bookList')
let title = document.getElementById('title')
let author = document.getElementById('author')
let year = document.getElementById('year')
let readCheck = document.getElementById('read-check')
let readLabel = document.getElementById('read-label')
let add = document.getElementById('add-btn')

// function toggleRead(objIndex) {
//     myLibrary[objIndex].read = !myLibrary[objIndex].read
// }
async function makeTable () {
  const data = await loadLibrary()
  for (let element of data) {
    let row = table.insertRow()

    let titleCell = document.createTextNode(element.title)
    row.insertCell().appendChild(titleCell)

    let authorCell = document.createTextNode(element.author)
    row.insertCell().appendChild(authorCell)

    let yearCell = document.createTextNode(element.year)
    row.insertCell().appendChild(yearCell)

    let x = document.createElement('input')
    x.setAttribute('type', 'checkbox')
    if (element.read) x.setAttribute('checked', true)
    x.className = 'tableCheck'
    x.addEventListener('click', async () => {
      await toggleRead(element.id)
      newTable()
    })
    row.insertCell().appendChild(x)

    let cell = row.insertCell()
    cell.className = 'cell-bin'
    let image = document.createElement('img')
    image.setAttribute('src', bin)
    image.className = 'bin'
    image.addEventListener('click', async () => {
      await deleteTitle(element.id) 
      newTable()
    })
    cell.appendChild(image)
  }
}
makeTable()

function newTable() {
    table.innerHTML = ''
    makeTable()
}

function addBook() {
  const currUser = getUserId()
  let book = {
      title: title.value.toString(),
      author: author.value.toString(),
      year: year.value,
      read: readCheck.checked
  }

  saveTitle(book)
  loadLibrary()
  newTable()
}

readCheck.addEventListener('click', () => {
    (readCheck.checked) ? 
      readLabel.style.color = 'white' : 
      readLabel.style.color = '#de8b68'
})

add.addEventListener('click', () => {
  const titleNotOk = title.validity.valueMissing
  const authorNotOk = author.validity.valueMissing
  const dateFuture = year.validity.rangeOverflow
  const dateOld = year.validity.rangeUnderflow

  if (titleNotOk) {
    title.setCustomValidity('The title is required');
    title.reportValidity();
  } else if (authorNotOk) {
    author.setCustomValidity('The author is required');
    author.reportValidity();
  } else if (dateFuture) {
    year.setCustomValidity('This book is from the future!?');
    year.reportValidity();
  } else if (dateOld) {
    year.setCustomValidity('This book is older than writing itself!?');
    year.reportValidity();
  }

  if (titleNotOk || authorNotOk || dateFuture || dateOld) {
      return
  }
  
  addBook();
})

document.body.appendChild(login())
