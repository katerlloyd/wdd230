
const input = document.querySelector('input');
const button = document.querySelector('button');
const list = document.querySelector('.list');


button.addEventListener('click', function() {
    if (input.value != "") {
        let li = document.createElement('li');
        li.textContent = input.value;
        
        let deleteButton = document.createElement('button');
        deleteButton.textContent = '❌';
        
        li.appendChild(deleteButton);
        list.appendChild(li);

        deleteButton.addEventListener('click', function() {
            list.removeChild(li); 
            input.value = ''; 
            input.focus();
        });
        
        input.value = '';
        input.focus();
    }
})