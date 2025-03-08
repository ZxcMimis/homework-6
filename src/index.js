const email = document.querySelector('.email');
const username = document.querySelector('.name');
const text = document.querySelector('.text');
const btn = document.querySelector('button');
btn.addEventListener('click', (e) => {
    e.preventDefault();
    if(email.value === '' || username.value === '' || text.value === ''){
        alert('Type something!')
    } else{
        alert('Sucsesfull!')
    }
})