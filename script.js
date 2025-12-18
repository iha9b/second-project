const btnEl = document.getElementById("btn");
const birthdayEl = document.getElementById("birthday");
const resultEl = document.getElementById("result");

const calculateAge = () => {
  const birthdayValue = birthdayEl.value;

  if (!birthdayValue) {
    alert("Enter your birthday");
    return;
  }

  const age = getAge(birthdayValue);

  resultEl.textContent = `Your age is ${age} ${
    age === 1 ? "year" : "years"
  } old`;
};

const getAge = (birthday) => {
  const today = new Date();
  const birthDate = new Date(birthday);

  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();

  if (
    monthDiff < 0 ||
    (monthDiff === 0 && today.getDate() < birthDate.getDate())
  ) {
    age--;
  }

  return age;
};

btnEl.addEventListener("click", calculateAge);
