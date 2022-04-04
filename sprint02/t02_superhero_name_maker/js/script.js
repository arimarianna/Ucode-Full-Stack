let nameAnimal = prompt(`What animal is the superhero most similar to?`, '');
let gender = prompt(`Is the superhero male or female? Leave blank if unknown or other.`, '');
let age = prompt(`How old is the superhero?`, '');

let nameReg = RegExp(/^[A-Za-z]{0,20}$/);
let ageReg = RegExp(/^[1-9]{1,5}$/);
let genderReg = RegExp(/^male$|^female$|^$/);


if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age < 18 && gender === 'male') {
    alert('The superhero name is: ' + nameAnimal + '-boy!');
}
else if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age >= 18 && gender === 'male') {
    alert('The superhero name is: ' + nameAnimal + '-man!');
}
else if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age < 18 && gender === 'female') {
    alert('The superhero name is: ' + nameAnimal + '-girl!');
}
else if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age >= 18 && gender === 'female') {
    alert('The superhero name is: ' + nameAnimal + '-woman!');
}
else if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age < 18 && gender === '') {
    alert('The superhero name is: ' + nameAnimal + '-kid!');
}
else if (ageReg.test(age) === true && nameReg.test(nameAnimal) === true && genderReg.test(gender) === true && age >= 18 && gender === '') {
    alert('The superhero name is: ' + nameAnimal + '-hero!');
}
else {
    alert('Error, please try again');
}
