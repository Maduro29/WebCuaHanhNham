const btnNo = document.querySelector(".button-no");
const btnYes = document.querySelector(".button-yes");
const cont = document.querySelector(".container");

btnNo.onmouseover = () => {
  btnNo.style.position = "absolute";
  btnNo.style.left = Math.floor(96 * Math.random()) + 2 + "vw";
  btnNo.style.top = Math.floor(96 * Math.random()) + 2 + "vh";
};

btnYes.onclick = () => {
  const html = `<h3>Bà ơi bảo ông kia mua web nào xịn hơn nhé =))) con này em viết có 10p thôi nhìn hơi phèn =)))<br> Nma chúc bà may mắn nhé</h3>`;
  cont.innerHTML = html;
  console.log(cont);
};
