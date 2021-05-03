function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

function login(login, password) {
  return fetch("http://localhost:3001/login", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ login, password }),
  })
    .then(handleErrors)
    .then((response) => (window.location.href = "/logged.html"))
    .catch((error) => alert("Login or Password is incorrect."));
}

function stopDefAction(evt) {
  evt.preventDefault();
  login(evt.target["login"].value, evt.target["password"].value);
}

document
  .getElementById("signin-form")
  .addEventListener("submit", stopDefAction, false);
