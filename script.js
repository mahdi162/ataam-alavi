function checkCode() {
  const code = document.getElementById("codeInput").value.trim();
  const user = users.find(u => u.code === code);
  const resultDiv = document.getElementById("result");

  if (user) {
    resultDiv.innerHTML = `سلام ${user.name}، تعداد ژتون‌های شما: ${user.tokens}`;
  } else {
    resultDiv.innerHTML = "کد وارد شده معتبر نیست.";
  }
}
