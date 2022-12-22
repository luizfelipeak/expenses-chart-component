const request = await fetch("data.json");
const data = await request.json();
const currentDay = new Date().getDay();
let dataDecrescent, columnLength = 0, biggestColumn;

const sundayInfo = document.getElementById("sunday-info");
const mondayInfo = document.getElementById("monday-info");
const tuesdayInfo = document.getElementById("tuesday-info");
const wednesdayInfo = document.getElementById("wednesday-info");
const thursdayInfo = document.getElementById("thursday-info");
const fridayInfo = document.getElementById("friday-info");
const saturdayInfo = document.getElementById("saturday-info");

const sundayGraph = document.getElementById("sunday-graph");
const mondayGraph = document.getElementById("monday-graph");
const tuesdayGraph = document.getElementById("tuesday-graph");
const wednesdayGraph = document.getElementById("wednesday-graph");
const thursdayGraph = document.getElementById("thursday-graph");
const fridayGraph = document.getElementById("friday-graph");
const saturdayGraph = document.getElementById("saturday-graph");

const cardInfoToolbar = document.getElementsByClassName("card__chart__element__info");

switch(currentDay) {
  case 0:
    sundayGraph.classList.add("current-day");
    break;
  case 1:
    mondayGraph.classList.add("current-day");
    break;
  case 2:
    tuesdayGraph.classList.add("current-day");
    break;
  case 3:
    wednesdayGraph.classList.add("current-day");
    break;
  case 4:
    thursdayGraph.classList.add("current-day");
    break;
  case 5:
    fridayGraph.classList.add("current-day");
    break;
  case 6:
    saturdayGraph.classList.add("current-day");
    break;
}

function decrescent(item, item2) {
  return item2.amount - item.amount;
}

function insertingGraphic(item, index, array) {
  biggestColumn = array[0].amount;

  switch(item.day) {
    case 'sun':
      sundayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      sundayGraph.style.height = `${columnLength}rem`;
      break;
    case 'mon':
      mondayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      mondayGraph.style.height = `${columnLength}rem`;
      break;
    case 'tue':
      tuesdayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      tuesdayGraph.style.height = `${columnLength}rem`;
      break;
    case 'wed':
      wednesdayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      wednesdayGraph.style.height = `${columnLength}rem`;
      break;
    case 'thu':
      thursdayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      thursdayGraph.style.height = `${columnLength}rem`;
      break;
    case 'fri':
      fridayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      fridayGraph.style.height = `${columnLength}rem`;
      break;
    case 'sat':
      saturdayInfo.innerHTML = `$${item.amount}`;
      columnLength = item.amount / biggestColumn * 9;
      saturdayGraph.style.height = `${columnLength}rem`;
      break;
  }
}

dataDecrescent = data.sort(decrescent);

dataDecrescent.forEach((item, index, array) => {
  insertingGraphic(item, index, array);
  cardInfoToolbar[index].style.display = "initial";
});