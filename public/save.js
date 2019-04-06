const myForm = document.querySelector('#my-form');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', saveDocument);

function saveDocument(e) {
    e.preventDefault();

    var Contact = {
        Name: document.querySelector('#name').value,
        Email: document.querySelector('#email').value,
        MSG: document.querySelector('#message').value,
        Subject: document.querySelector('#subject').value
    }

    if (localStorage.getItem('Contacts') === null) {
        var Contacts = [];
        Contacts.push(Contact);
        localStorage.setItem('Contacts', JSON.stringify(Contacts));
    } else {
        var Contacts = JSON.parse(localStorage.getItem('Contacts'));
        Contacts.push(Contact);
        localStorage.setItem('Contacts', JSON.stringify(Contacts));
    }

    document.querySelector('#name').value = '';
    document.querySelector('#email').value = '';
    document.querySelector('#message').value = '';
    document.querySelector('#subject').value = '';
}