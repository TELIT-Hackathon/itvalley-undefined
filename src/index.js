"use strict";
import "./styles/main.scss";

let latestListEl = 0;
let listOfQuestLinesEl = 0;
let btnCancel = document.querySelector(".btn__cancel");
window.addEventListener("load", (event) => {
  latestListEl = document.querySelector(".latest__list");
  listOfQuestLinesEl = document.querySelector(".active__list");

  load();
});

let data;
async function fetchData(url) {
  const response = await fetch(url);
  data = await response.json();

  // Generate a list item for each questline
  data.questlines.forEach((questline) => {
    listOfQuestLinesEl.innerHTML += `
    <li class="active__item">
    <h4 class="active__item__title">${questline.name}</h4>
    <div class="progress__container">
      <div class="bar"></div>
      <progress
        class="active__progress"
        max="100"
        value="75"
      ></progress>
    </div>
    <span class="active__progress-num">${questline.completition}%</span>
  </li>`;
  });
  let retarded = document.querySelectorAll(
    ".active__item .progress__container"
  );
  for (let i = 0; i < retarded.length; i++) {
    retarded[i].childNodes[1].style.width =
      data.questlines[i].completition.toString() + "%";
  }
  // retarded.forEach((progress) => {
  //   console.log(data.questlines[1].completition.toString());
  //   progress.childNodes[1].style.width =
  //     data.questlines[1].completition.toString() + "%";
  //   // progress.firstChild.style.width = "30%";
  // });

  // add an event listener to it

  document.querySelectorAll(".active__item").forEach((item) => {
    item.addEventListener("click", () => {
      //! remove all other active ones
      document
        .querySelectorAll(".active__item")
        .forEach((item) => item.classList.remove("active__active-item"));
      item.classList.add("active__active-item");
      updateQuests();
    });
  });
  //select the first one as an active one automatically
  document
    .querySelector(".active__item:nth-child(1)")
    .classList.add("active__active-item");

  //se
  updateQuests();
}

function load() {
  fetchData("asi_json.json");
}

function updateQuests() {
  latestListEl.innerHTML = "";
  let activeQuestList = document.querySelector(
    ".active__active-item h4"
  ).innerHTML;

  let listOfQuests = data.questlines.filter(
    (questline) => questline.name === activeQuestList
  )[0].quests;

  listOfQuests.forEach((quest) => {
    latestListEl.innerHTML += `
    <li class="latest__quest">
      <h3 class="latest__quest__title">
        ${quest.name} <span class="latest__tag tag__${quest.diff}">${quest.diff}</span>
      </h3>

      <p class="latest__quest__desc">
        ${quest.desc}
      </p>
      <button class="latest__quest__btn">Open</button>
    </li>`;
  });
  document.querySelectorAll(".latest__quest__btn").forEach((btn) => {
    btn.addEventListener("click", () => {
      document.querySelector(".cover").classList.remove("hide");
      hljs.highlightAll();
    });
  });
}

btnCancel.addEventListener("click", () => {
  document.querySelector(".cover").classList.add("hide");
});
document.querySelector(".btn__pop-up").addEventListener("click", () => {
  const code = document.getElementById("code").innerHTML;
  fetch("http://localhost:4000/submit", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ code_block: code }),
  })
    .then((rsp) => rsp.json())
    .then((rsp) => console.log(rsp));
});

let dataName;
let request = async () => {
  const response = await fetch("http://localhost:4000/compile_result");
  const data = await response.json();
  dataName = data.name;
  console.log(data);
};

request();
