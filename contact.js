function checkInfo() {
    var name = document.contact.name.value;
    var gender = document.contact.gender.value;
    var telNumber = document.contact.telNumber.value;
    var email = document.contact.email.value;

    alert("Name: " + name
        + "\nGender: " + gender
        + "\nTelephone Number: " + telNumber
        + "\nEmail: " + email);
}

function confirmSubmit() {
    confirm("Are you sure?");
}