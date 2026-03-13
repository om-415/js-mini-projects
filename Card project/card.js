function createCard(
  title,
  cName,
  views,
  yearsOld,
  duration,
  thumbnail,
) {
  let viewStr;
  if (views < 100000) {
    viewStr = Math.round(views / 1000) + "k";
  } else if (views >= 1000000) {
    viewStr = (views / 1000000).toFixed(1) + "M";
  } else {
    viewStr = Math.round(views / 1000) + "K";
  }
  let html = `<div class="card">
    <div class="image">
      <img src="${thumbnail}" alt="">
      <div class="capsule">${duration}</div>
    </div>
    <div class="text">
      <h1>${title}</h1>
      <p>${cName} · ${viewStr} views · ${yearsOld} years ago</p>
    </div>
  </div>`;
  document.querySelector(".container").innerHTML += html;
};

// Example: Duplicate the card multiple times
createCard(
  "Introduction to Backend | Sigma Web Dev Video #1",
  "CodeWithHarry",
  560000,
  7,
  "31:06",
  "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
);
let btn = document.getElementById("btn");
btn.addEventListener("click", function () {
  createCard(
    "Introduction to Backend | Sigma Web Dev Video #1",
    "CodeWithHarry",
    560000,
    7,
    "31:06",
    "https://i.ytimg.com/vi/tVzUXW6siu0/hqdefault.jpg?sqp=-oaymwEcCPYBEIoBSFXyq4qpAw4IARUAAIhCGFwAcABBg==&rs=AOn4CLACwWOixJVrKLFindK92kYMgTcQbw",
  );
});
