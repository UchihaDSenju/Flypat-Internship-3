const inputText = document.querySelector('.inputTag');
const tasks = document.querySelector('.tasks');
const addBtn = document.querySelector('.addTask');
const demoBtn = document.querySelector('.demo');
var ids = [];
var id = 0;


demoBtn.addEventListener('click', () => {
    localStorage.clear();
    localStorage.setItem('id', 8051);
    location.reload();
})

if(!localStorage['id']){
    id = 8051;
}
else{
    id = parseInt(localStorage['id']);
}
if(localStorage['idArray']){
    ids = JSON.parse(localStorage.getItem('idArray'));
}

for(var i = 0; i < ids.length; i++){
    console.log(ids[i]);
}


inputText.addEventListener('keyup', (e) => {
    if(e.key == 'Enter'){
        if(inputText.value == ''){
            alert('Enter a To-Do activity');
        }
        else{
            addItem(inputText.value);
            inputText.value = "";
        }
    }
    
})

addBtn.addEventListener('click', () => {
    if(inputText.value == ''){
        alert('Enter a To-Do activity');
    }
    else{
        addItem(inputText.value);
        inputText.value = '';
    }
});

// Add Function
const addItem = (item) => {
    const listItem = document.createElement('li');
    listItem.id = id;
    id += 1;
    localStorage.setItem('id', id);
    listItem.className = 'task';
    listItem.innerHTML = `
    <span>${item}</span>
    <i class="far fa-trash-alt"></i>
    `;
    ids.push(id)
    localStorage.setItem('idArray', JSON.stringify(ids));
    listItem.addEventListener('click', () => {
        listItem.querySelector('span').classList.toggle('done');
    });

    listItem.querySelector('i').addEventListener('click', () => {
        console.log(listItem.id);
        localStorage.removeItem("8052");
        listItem.remove();
    });
    localStorage.setItem(id, item);
    tasks.appendChild(listItem);
    location.reload();
}

//get items from localStorage Function
const getItem = () => {
    for(var i = 0; i < ids.length; i++){
        const listItem = document.createElement('li');
        listItem.id = ids[i];
        listItem.className = 'task';
        var content = localStorage.getItem(ids[i]);
        listItem.innerHTML = `
        <span>${content}</span>
        <i class="far fa-trash-alt"></i>
        `;
        listItem.addEventListener('click', () => {
            listItem.querySelector('span').classList.toggle('done');
        });

        listItem.querySelector('i').addEventListener('click', () => {
            console.log(listItem.id);
            ids.splice(ids.indexOf(parseInt(listItem.id)), 1);
            console.log(ids);
            localStorage.removeItem(parseInt(listItem.id))
            localStorage.setItem('idArray', JSON.stringify(ids));
            listItem.remove();
        });
        tasks.appendChild(listItem);
    }
}

// Gets Everything from the localStorage when user visits the page again
getItem();

