var btnEl = document.getElementById("btn");
var birthdayEl = document.getElementById("birthday");
var resultEl = document.getElementById("result");

function calculateAge() {
  var birthdayValue = birthdayEl.value;
  if (birthdayValue === "") {
    alert("enter your birthday");
  } else {
    var age = getAge(birthdayValue);
    resultEl.innerText = `Your age is ${age} ${age > 1 ? "years" : "year"} old`;
  }
}

function getAge(birthday) {
  var today = new Date();
  var birthDate = new Date(birthday);
  var age = today.getFullYear() - birthDate.getFullYear();
  var monthDiff = today.getMonth() - birthDate.getMonth();
  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }
  return age;
}
btnEl.addEventListener("click", calculateAge);
