import bin from "./bin.png"
import login from "./login"
import './style.css'

let bookList = document.getElementById('bookList')
let title = document.getElementById('title')
let author = document.getElementById('author')
let year = document.getElementById('year')
let readCheck = document.getElementById('read-check')
let readLabel = document.getElementById('read-label')
let add = document.getElementById('add-btn')

let myLibrary = []
let newId = 0

function toggleRead(objIndex) {
    myLibrary[objIndex].read = !myLibrary[objIndex].read
}

function removeBook (objId) {
    myLibrary = myLibrary.filter(obj => obj.id !== objId)
}

function makeTable (table, data) {
    for (let element of data) {
        let objectId = element.id
        let objectIndex = myLibrary.indexOf(element)
        let row = table.insertRow()

        for (let key in element) {
            let cell = row.insertCell()
            if (typeof(element[key]) === 'number') {
                cell. className = 'binCell'
                let image = document.createElement('img')
                image.setAttribute('src', bin)
                image.className = 'bin'
                image.addEventListener('click', () => {
                    removeBook(objectId)
                    newTable()
                })
                cell.appendChild(image)
            } else if (typeof(element[key]) === 'boolean') {
                let x = document.createElement('input')
                x.setAttribute('type', 'checkbox')
                if (element[key]) x.setAttribute('checked', true)
                x.className = 'tableCheck'
                x.addEventListener('click', () => {
                    toggleRead(objectIndex)
                })
                cell.appendChild(x)
            } else {
                let text = document.createTextNode(element[key])
                cell.appendChild(text)
            }
        }
    }
}
makeTable(bookList, myLibrary)

function newTable() {
    bookList.innerHTML = ''
    makeTable(bookList, myLibrary)
}

function addBook() {
    let book = {
        title: title.value,
        author: author.value,
        year: year.value.toString(),
        read: readCheck.checked,
        id: newId
    }

    newId++
    myLibrary.push(book)
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
