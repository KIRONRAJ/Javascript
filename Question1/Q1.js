function calculate() {
  var fnum = Number(document.getElementById("firstnumber").value);
  var snum = Number(document.getElementById("secondnumber").value);
  var fnctn = document.getElementById("operend").value;
  var result;

  if (fnctn == "+") {
    result = Number(fnum + snum);
  } else if (fnctn == "-") {
    result = Number(fnum - snum);
  } else if (fnctn == "*") {
    result = Number(fnum * snum);
  } else if (fnctn == "/") {
    result = Number(fnum / snum);
  }

  document.getElementById("result").value = result;
}
