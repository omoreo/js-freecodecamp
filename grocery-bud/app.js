// ****** SELECT ITEMS **********
const alert = document.querySelector(".alert")
const form = document.querySelector(".grocery-form")
const grocery = document.getElementById('grocery')
const submitBtn = document.querySelector('.submit-btn')
const container = document.querySelector('.grocery-container')
const list = document.querySelector('.grocery-list')
const clearBtn = document.querySelector('.clear-btn')

// edit option
let editElement;
let editFlag = false;
let editID = "";
// ****** EVENT LISTENERS **********
// ****** FUNCTIONS **********
//Submit form / if your want to use arrow function your should callback function first
// and addEventListener.
// const addItem = (e) => {
//     e.preventDefault();
//     console.log(grocery.value);
// }
// form.addEventListener("submit", addItem)
form.addEventListener("submit", addItem);
//clear items
clearBtn.addEventListener("click", clearItems);
// load items
window.addEventListener("DOMContentLoaded", setupItems);

function addItem(e) {
    e.preventDefault();
    const value = grocery.value;
    // if(value) {
    //     console.log('value is truthy');
    // }
    // console.log(grocery.value);
    const id = new Date().getTime().toString()
    // console.log(id);
    if(value && !editFlag) {
        createListItem(id, value)
        //display alert
        displayAlert("item added to the list", "success")
        //show container
        container.classList.add("show-container")
        // add to local storage
        addToLocalStorage(id, value);
        // set bacck to default
        setBackToDefault();
    } else if(value && editFlag) {
        editElement.innerHTML = value;
        displayAlert('value chagned', 'success');
        // edit local storage
        editLocalStorage(editID, value);
        setBackToDefault();
    } else {
        displayAlert("please enter value", "danger");
    }
}

// display alert
const displayAlert = (text, action) => {
    alert.textContent = text;
    alert.classList.add(`alert-${action}`);
    //remove alert
    setTimeout(() => {
        alert.textContent = "";
        alert.classList.remove(`alert-${action}`);
    }, 1500)
}

// clear Items
function clearItems() {
    const items = document.querySelectorAll('.grocery-item');
    if(items.length > 0) {
        items.forEach(item => {
            list.removeChild(item);
        })
    }
    container.classList.remove("show-container");
    displayAlert("empty list", "dangere");
    setBackToDefault();
    localStorage.removeItem("list")
}

function deleteItem(e) {
    // console.log('delete');
    const element = e.currentTarget.parentElement.parentElement;
    const id = element.dataset.id;
    list.removeChild(element);
    if(list.children.length === 0) {
        container.classList.remove("show-container")
    }
    displayAlert("item removed", "danger")
    setBackToDefault();
    //remove from local storage
    removeFromLocalStorage(id)
}

function editItem(e) {
    const element = e.currentTarget.parentElement.parentElement;
    //set edit item
    editElement = e.currentTarget.parentElement.previousElementSibling;
    // set form value
    grocery.value = editElement.innerHTML;
    editFlag = true;
    editID = element.dataset.id;
    submitBtn.textContent = "edit"
}

// set back to deafult
setBackToDefault = () => {
    // console.log('set back to default');
    grocery.value = "";
    editFlag = false;
    editID = "";
    submitBtn.textContent = 'submit';
}
// ****** LOCAL STORAGE **********
addToLocalStorage = (id, value) => {
    // console.log('added to local storage');
    const grocery = {id, value};
    let items = localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : []; //Ternary Operator
    // console.log(items);
    
    items.push(grocery);
    localStorage.setItem("list", JSON.stringify(items));
    
}

removeFromLocalStorage = (id) => {
    let items = getLocalStorage();
    items = items.filter(item => {
        if(item.id !== id) {
            return item
        }
    })
    localStorage.setItem("list", JSON.stringify(items));
}

editLocalStorage = (id, value) => {
    let items = getLocalStorage();
    items = items.map(item => {
        if(item.id === id) {
            item.value = value;
        }
        return item;
    })
    localStorage.setItem("list", JSON.stringify(items));
}

getLocalStorage = () => {
    return localStorage.getItem("list") ? JSON.parse(localStorage.getItem('list')) : [];
}
//localStorage API
//setITem
//getItem
//removeItem
//save as strings
// localStorage.setItem("orange", JSON.stringify(["item1", "item2"]));
// const oranges = JSON.parse(localStorage.getItem("orange"));
// console.log(oranges);
// localStorage.removeItem("orange")
// ****** SETUP ITEMS **********

function setupItems() {
    let items = getLocalStorage();
    if(items.length > 0) {
        items.forEach(item => {
            createListItem(item.id, item.value)
        })
        container.classList.add('show-container')
    }
}

createListItem = (id, value) => {
    const element = document.createElement('article');
        //add class
        element.classList.add("grocery-item");
        //add id
        const attr = document.createAttribute('data-id');
        attr.value = id;
        element.setAttributeNode(attr);
        element.innerHTML = `
                            <p class="title">${value}</p>
                            <div class="btn-container">
                                <button type="button" class="edit-btn">
                                    <i class="fas fa-edit"></i>
                                </button>
                                <button type="button" class="delete-btn">
                                    <i class="fas fa-trash"></i>
                                </button>
                            </div>
                            `
        const deleteBtn = element.querySelector(".delete-btn");
        const editBtn = element.querySelector(".edit-btn");
        deleteBtn.addEventListener("click", deleteItem);
        editBtn.addEventListener("click", editItem);
         //append child
        list.appendChild(element);
}