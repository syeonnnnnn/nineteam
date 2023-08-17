function opView() {
  const opt1 = document.getElementById("credit");
  const opt2 = document.getElementById("bankpay");
  const show1 = document.getElementById("op1");
  const show2 = document.getElementById("op2");
  if (opt1.checked === true) {
    show1.style.display = "block";
    show2.style.display = "none";
  } else if (opt2.checked === true) {
    show2.style.display = "block";
    show1.style.display = "none";
  } else {
    show1.style.display = "none";
    show2.style.display = "none";
  }
}
