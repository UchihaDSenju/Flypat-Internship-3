const inputText = document.querySelector('.inputTag');
const tasks = document.querySelector('.tasks');
const addBtn = document.querySelector('.addTask');

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
})
// Add Function
const addItem = (item) => {
    const listItem = document.createElement('li');
    listItem.className = 'task';
    listItem.innerHTML = `
    <span>${item}</span>
    <i class="far fa-trash-alt"></i>
    `;

    listItem.addEventListener('click', () => {
        listItem.querySelector('span').classList.toggle('done');
    })

    listItem.querySelector('i').addEventListener('click', () => {
        listItem.remove();
    })
    tasks.appendChild(listItem);
}
