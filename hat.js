const form = document.getElementById("myForm");
const result = document.getElementById("result");
form.addEventListener("submit", function (event) {
  event.preventDefault();
  console.log(event);

  const myname = document.getElementById("name");
  const name = myname.value.toLowerCase();

  console.log(name.value);
  console.log(email.value);

  if (name == "zaya") {
    result.innerHTML = "You are gifting Person";
  } else if (name == "Person") {
    result.innerHTML = "You are gifting Zaya";
  }
  form.style.display = "none";
});
