function validate() {
  var name = document.getElementById("name").value;
  var pnum = document.getElementById("pnumber").value;
  var email = document.getElementById("email").value;
  var pwd = document.getElementById("password").value;

  //   var regName = /^[a-zA-Z]+ [a-zA-Z]+$/;
  //Regx Validator for name

  //  var onlynumbers = /^[0-9]+$/;
  //Regx Validator for number

  var onlyalphabets = name.match(/\d+/);

  var onlynumber = Number(pnum);

  if (name == "") {
    document.getElementById("helpId1").innerHTML =
      " Please Enter a Valid Username";
  } else if (name.length <= "3") {
    document.getElementById("helpId1").innerHTML =
      " Username must have more than three Characters";
  } else if (onlyalphabets != null) {
    document.getElementById("helpId1").innerHTML =
      " Username should not consist of any number";
  } else {
    document.getElementById("helpId1").innerHTML = "";
  }

  if (pnum == "") {
    document.getElementById("helpId2").innerHTML =
      " Please Enter a valid Number";
  } else if (pnum.length < "10") {
    document.getElementById("helpId2").innerHTML =
      " Number should have a minimum of 10 digits";
  } else if (isNaN(onlynumber)) {
    document.getElementById("helpId2").innerHTML =
      " should not consist of any alphabets";
  } else {
    document.getElementById("helpId2").innerHTML = "";
  }

  if (email == "") {
    document.getElementById("helpId3").innerHTML =
      " This field should not be left empty";
  } else if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/)) {
    document.getElementById("helpId3").innerHTML =
      " Please Enter a valid Email";
  } else {
    document.getElementById("helpId3").innerHTML = "";
  }

  if (pwd == "") {
    document.getElementById("helpId4").innerHTML = " This field is required";
  } else if (pwd.length < 6) {
    document.getElementById("helpId4").innerHTML =
      " The password should alteast have 6 charactors ";
  } else {
    document.getElementById("helpId4").innerHTML = "";
  }
}
