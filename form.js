function checkResult() {
    var name = document.form.name.value;
    var email = document.form.email.value;
    var age = document.form.age.value;
    var gender = document.form.gender.value;
    var dateOfBirth = document.form.dob.value;
    var telNumber = document.form.telNumber.value;

    alert("Name: " + name
        + "\nAge: " + age
        + "\nEmail: " + email
        + "\nGender: " + gender
        + "\nDate of birth: " + dateOfBirth
        + "\nTelephone Number: " + telNumber);

}
function confirmSubmit() {
    confirm("Are you sure?");
}
