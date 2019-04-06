const myForm = document.querySelector('#my-form');
const userList = document.querySelector('#users');
fetchContacts();
function fetchContacts() {
    var Contacts = JSON.parse(localStorage.getItem('Contacts'));

    var ContactsResult = document.querySelector('#users');

    ContactsResult.innerHTML = '';

    var str = '<div class="card-deck text-center">';

    for (var i = 0; i < Contacts.length; i++) {
        var name = Contacts[i].Name;
        var email = Contacts[i].Email;
        var subject = Contacts[i].Subject;
        var msg = Contacts[i].MSG;

        str +=`<tr>`
            +`<td width="10%"></td>`
            +`<td>`
            +`<div class="col-sm-6 col-md-4 col-lg-3">`
            +`<div class="card mb-4 shadow-sm">`
            +`<div class="card-header">`
            +`<h4 class="my-0" >${name}</h4>`
            +`</div>`
            +`<div class="card-body" style="width: 200px">`
            +`<div class="message" >`
            +`<h6>${subject}</h6>`
            +`<pre>${msg}</pre>`
            +`</div>`
            +`<a href="mailto:${email}">${email}</a>`
            +`<button onclick="deleteCard('${name}','${subject}')" class="btn" href="#">Delete</a>`
            +`</div></div></div>
        </td>
        <td width="10%"></td>
    </tr>`
    }
    str += '</div>'

    ContactsResult.innerHTML = str;
}

function deleteCard(name,subject) {
    var Contacts = JSON.parse(localStorage.getItem('Contacts'));

    for (var i = 0; i < Contacts.length; i++) {
        if (Contacts[i].Name === name && Contacts[i].Subject === subject) {
            Contacts.splice(i, 1);
        }
    }

    localStorage.setItem('Contacts', JSON.stringify(Contacts));

    fetchContacts();
}
