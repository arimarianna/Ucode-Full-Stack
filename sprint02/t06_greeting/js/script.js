let firstName = prompt("Enter your first name:");
let lastName = prompt("Enter your last name:");
let checkValid = /^[a-z]+$/i;

firstName = firstName.toLowerCase();
lastName = lastName.toLowerCase();
firstName = firstName.charAt(0).toUpperCase() + firstName.slice(1);
lastName = lastName.charAt(0).toUpperCase() + lastName.slice(1);

if (lastName.search(checkValid) == -1 || firstName.search(checkValid) == -1) {
    alert("Wrong input!");
    console.log("Wrong input!");
} else {
    alert(`Hello, ${firstName} ${lastName}`);
    console.log(`Hello, ${firstName} ${lastName}`);
}
