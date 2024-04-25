import './index.html' // чтобы следил за файлом!
import './styles.css'

btn.addEventListener("click",()=>{
    fetch('http://localhost:3000/posts')
    .then(response => response.json())
    .then(data=>{
        let newdiv = document.createElement('div')
        let ul = document.createElement('ul')
        data.forEach(d=>{
            let li = document.createElement('li')
            li.innerHTML = `ID:${d['id']}   TITLE:${d['title']}     AUTHOR:${d['author']}`
            ul.appendChild(li)
        })
        newdiv.appendChild(ul)
        document.body.appendChild(newdiv) 
        
    })
})