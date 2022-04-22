let bookList = document.getElementById('bookList')
let title = document.getElementById('title')
let author = document.getElementById('author')
let year = document.getElementById('year')
let read = document.getElementById('isRead')
let divRead = document.getElementById('read')
let divUnread = document.getElementById('unread')
let add = document.getElementById('add')

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

        for (key in element) {
            let cell = row.insertCell()
            if (typeof(element[key]) === 'number') {
                cell. className = 'binCell'
                let image = document.createElement('img')
                image.setAttribute('src', './bin.png')
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
        read: read.checked,
        id: newId
    }

    newId++
    myLibrary.push(book)
    newTable()
}

read.addEventListener('click', () => {
    if (read.checked) {
        divRead.style.color = 'white'
        divRead.style.backgroundColor = '#de8b68'
        divUnread.style.backgroundColor = 'white'
    } else {
        divRead.style.color = '#de8b68'
        divRead.style.backgroundColor = 'white'
        divUnread.style.backgroundColor = '#de8b68'
    }
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