// function clickLike() {
//   alert("확인");
//   const likeBtn = document.querySelector(".heartBtn");
//   likeBtn.addEventListener("click", (e) => {
//     const heartfillimg = document.querySelector("#heartfill");
//     const heartimg = document.querySelector("#heart");
//     const likeCount = document.querySelector(".countheart");
//     // const count = likeCount.innerHTML;
//     e.preventDefault();
//     if (heartimg.style.display !== "none") {
//       // count = parseInt(count) + 1;
//       heartimg.style.display = "none";
//       heartfillimg.style.display = "inline-block";
//       // minus.setAttribute("display", none);
//       // plus.setAttribute("display", inlineblock);
//       // console.log(count);
//     } else {
//       // count = parseInt(count) - 1;
//       heartfillimg.style.display = "none";
//       heartimg.style.display = "inline-block";
//       // console.log(count);
//     }
//     // likeCount.textContent = count;
//     // console.log(likeCount);
//   });
//   // const likeBtn = document.querySelector(".heartBtn");
//   // likeBtn.addEventListener("click", (e) => {
//   //   e.preventDefault();
//   //   const minus = document.getElementsByClassName("heart");
//   //   const plus = document.getElementsByClassName("heartfill");
//   //   const likeCount = document.getElementsByClassName("countheart");
//   //   if (minus) {
//   //     likeCount = Number(likeCount) + 1;
//   //     alert("click");
//   //   }
//   // });
// }

function likeBtn() {
  const heart1 = document.getElementById("heart");
  const heart2 = document.getElementById("heartfill");
  if (heart2.getAttribute("display") === "none") {
    heart1.setAttribute("display", "none");
    heart2.setAttribute("display", "inline-block");
  } else if (heart1.getAttribute("display") === "none") {
    heart1.setAttribute("display", "inline-block");
    heart2.setAttribute("display", "none");
  }
}
