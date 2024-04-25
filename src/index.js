import './index.html' // чтобы следил за файлом!
import './styles.css'
console.log('alls ok')
const btn = document.querySelector('#btn')
btn.addEventListener('click', () => {
  fetch('http://localhost:3000/posts')
    .then((response) => response.json())
    .then((data) => {
      const newdiv = document.createElement('div')
      const ul = document.createElement('ul')
      data.forEach((d) => {
        const li = document.createElement('li')
        li.innerHTML = `ID:${d.id}   TITLE:${d.title}     AUTHOR:${d.author}`
        ul.appendChild(li)
      })
      newdiv.appendChild(ul)
      document.body.appendChild(newdiv)
    })
})
