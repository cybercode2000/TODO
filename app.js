const task = document.querySelector('input');
const button = document.querySelector('button');
const div = document.querySelector('div');


function fresher(){
    const alling = localStorage.getItem('data');
    const me = JSON.parse(alling);
    const eachTask = me.task
    eachTask.forEach(element => {
        const li = document.createElement('li');
        div.appendChild(li);
        li.innerHTML = element
    });
}
fresher()


const data = {
    "task": [

    ]   
}

button.addEventListener('click', () => {
    const memory = localStorage.getItem('data');
    if(typeof memory == null) {
        const mainMemory = data.task;
        mainMemory.push(task.value);    
        localStorage.setItem('data', JSON.stringify(data))
        alert('saved');
        fresher()
    }
    else {
        const newMemory = JSON.parse(memory);
        const me = newMemory.task ;

        me.push(task.value);
        localStorage.setItem('data', JSON.stringify(newMemory));
        alert('it works');
        const li = document.createElement('li');
        div.appendChild(li);
        li.innerHTML = task.value;
    }
})


