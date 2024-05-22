import axios from "axios";
import Card from "./components/index.js";



const form = document.forms.namedItem('users')



// let arr=[]
form.onsubmit = (e) => {
    e.preventDefault()
    let formData = new FormData(form);
    let task = {
        description: formData.get('description'),
        title: formData.get('title'),
        id: Math.random(),
        username:formData.get('assignedTo'),
        date: new Date().toDateString()
    }
    arr.push(task)
    axios.post(`http://localhost:8080/todos`,task)
    .then(res=>{
        // console.log(res);
        if (res.status == 200 || res.status === 201){
            reload(res.data, cols)
        }
    })

    console.log(task);
    reload(arr, cols)
}
axios.get(`http://localhost:8080/todos`)
.then(res=>{
    // console.log(res);
  
        reload(res.data, cols)
    
})
function reload(arr, place) {
    place.forEach(el => el.querySelector('.list').innerHTML = "")

    for (let item of arr) {
        console.log(arr);
        let list = place[0].querySelector('.list')
        list.append(Card(item))
    }
}

const cols = document.querySelectorAll('.elem13')
console.log(cols);
for (let col of cols) {
    col.ondragover = (e) => {
        e.preventDefault();
    }
    col.ondragenter = (e) => {
        e.preventDefault();
        col.classList.add('hovered')
    }
    col.ondragleave = () => {
        col.classList.remove('hovered')
    }
    col.ondrop = () => {
        const selected = document.querySelector('.hidden')
        let list = col.querySelector('.list')
        list.append(selected)
        col.classList.remove('hovered')
    }
}



setTimeout(() => {
    let section = document.querySelector('section')
    let body = document.querySelector('.body')
    section.style.display = 'none'
    body.style.display = 'block'
}, 7000)

let myModal = document.querySelector('#myModal')
let click_modal = document.querySelectorAll('.icon_plus')
click_modal.forEach(click => {
    click.onclick = () => {
        myModal.style.display = 'block'
    }
})
let close=document.querySelector('.close')
close.onclick=()=>{
    myModal.style.display = 'none'
}

