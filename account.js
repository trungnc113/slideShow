let user = document.querySelector(".user");
let popup = document.querySelector(".popup-account");
function btnClick() {
  popup.classList.toggle("hide");
}
user.addEventListener("click", btnClick);
popup.addEventListener("click", function (e) {
  if (e.target == e.currentTarget) btnClick();
});
let account = document.querySelector(".tk");
let password = document.querySelector(".mk");
let OK = document.querySelector(".OK");
let acHost = "trungnc";
let pwHost = "123456";
OK.addEventListener("click", function () {
  console.log(account.value);
  console.log(password.value);
  if (acHost === account.value && pwHost === password.value) {
    console.log(true);
    window.location.href = "./pagesv.html";
  } else {
    window.location = "./pageuser.html";
  }
});
localStorage.ten = "Trung Nguyễn";
