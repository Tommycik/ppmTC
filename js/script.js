const visible = [false, false, false];
let homeChecked = false;

//Makes an element visible
function elementVisible(id) {

  let object = document.getElementById(id);
  let state= object.style.display;

  if (state === "flex"|| state === "block"|| state === "inline") {
    object.style.display = "none";
  } else {
    object.style.display = "flex";
  }

}

function hiddenText(id,object,type) {

  let target=document.getElementById(id);
  let targetImg=object.getElementsByTagName("img")[0];

  if (target.style.display === "flex") {
    targetImg.style.transform = "rotate(0deg)";
  }else{

    if(type===1){
      targetImg.style.transform = "rotate(90deg)";
    }else{
      targetImg.style.transform = "rotate(180deg)";
    }

  }

  elementVisible(id);
  target.classList.toggle('fullHeight');

}

//Makes hidden articles visible
function showMore() {
  document.getElementsByClassName("showMore")[0].style.display = "none";
  document.getElementsByClassName("hiddenArticles")[0].style.display = "flex";
  document.getElementsByClassName("centeredGeometry")[0].style.display = "none";
}

//Manages home title
function overlay(x) {

  let home =  document.querySelectorAll('.home')[0];

  if (x === 1) {

    document.getElementById("header").style.boxShadow = "none";
    if (home.style.visibility !== "visible") {
      home.style.visibility = "visible";
      homeChecked = true;
    } else {
      homeChecked = false;
    }

  } else if (x === 0) {

    if (window.scrollY > 40) {
      document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
    }

    if (home.style.visibility === "visible") {

      if (homeChecked) {
        homeChecked = false;
        home.style.visibility = "hidden";
      }

    }

  }

}

//First menu
function menu1() {

  if (visible[1]) {
    menu2();
  }

  if (visible[2]) {
    menu3();
  }

  const element = document.getElementsByClassName("lateral")[0];
  element.classList.toggle('fullWidth');

  let x = document.getElementById("lateralMenu");

  if (visible[0]) {

    overlay(0);
    document.getElementById("menu").src="img/menu.svg" ;
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("lateralMenu").style.overflow = "hidden";
    visible[0]=false;

  } else {

    overlay(1);
    document.getElementById("menu").style.visibility = "visible";
    document.getElementById("menu").src="img/cross.svg" ;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("lateralMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    visible[0]=true;

  }

  elementVisible('lateralMenu');
  headerManager();

}

//Second menu
function menu2() {

  if (visible[0]) {
    menu1();
  }

  if (visible[2]) {
    menu3();
  }

  const element = document.getElementsByClassName("lateral")[1];
  element.classList.toggle('fullWidth');

  let x = document.getElementById("accountMenu");

  if (visible[1]) {

    document.getElementById("accountArrow").style.transform="rotate(0deg)";
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("accountMenu").style.overflow = "hidden";
    overlay(0);
    visible[1]=false;

  } else {

    document.getElementById("accountArrow").style.transform="rotate(180deg)";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("accountMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay(1);
    visible[1]=true;

  }

  elementVisible('accountMenu');
  headerManager();

}

//Third menu
function menu3() {

  const x = document.getElementById("searchMenu");

  if (visible[0]) {
    menu1();
  }

  if (visible[1]) {
    menu2();
  }

  if (visible[2]) {

    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("searchMenu").style.overflow = "hidden";
    overlay(0);
    visible[2]=false;

  } else {

    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("searchMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay(1);
    visible[2]=true;

  }

  elementVisible('searchMenu');
  headerManager();

}

//When scrolling
window.onscroll = function () {
  activeWindow();
}

//Manages the header
function headerManager(){

  let offsetHeader = (document.getElementsByTagName("body")[0].offsetWidth).toString();
  document.getElementById("header").style.width = offsetHeader+"px";
  document.getElementById("header").style.marginLeft = (window.scrollX).toString()+"px";

}

//When resizing
window.onresize = function () {
  activeWindow();
  sliderManager();
}

//Manages the events slider
function sliderManager() {

  const events=  document.querySelectorAll('.upComing .draggable a').length;
  const innerWidth = window.innerWidth;

  if(innerWidth<270){
    eventDisplayed=1;
  } else if(innerWidth<450){
    eventDisplayed=2;
  }else if(innerWidth < 640) {
    eventDisplayed=3;
  }else if (innerWidth < 800) {
    eventDisplayed=2;
  }else if (innerWidth < 940) {
    eventDisplayed=3;
  }else if (innerWidth < 1040) {
    eventDisplayed=4;
  }else if (innerWidth < 1310) {
    eventDisplayed=5;
  }else {
    eventDisplayed=6;
  }

  const title = document.getElementById("upTitle");
  let string ="Upcoming Events";

  if(innerWidth<215){

    let toggle=Math.floor((215-innerWidth) / 4)+2;
    string = string.slice(0,15-toggle);
    string = string+"..."
    if(toggle<10){
      title.innerHTML=string;
    }

  } else if((innerWidth>=250 && innerWidth<265)){
    title.innerHTML="Upcoming Eve...";
  } else if((innerWidth>=265 && innerWidth<270)){
    title.innerHTML="Upcoming Even...";
  }else{
    title.innerHTML="Upcoming Events";
  }

  let width=((events/eventDisplayed)*100).toString()
  document.getElementsByClassName("draggable")[0].style.width = width+'%';
  let container = document.getElementsByClassName("draggable")[0];

  let change="0";

  if(end){
    position=-((events/eventDisplayed)*100-100);
    change=position.toString()+'%';
    container.style.left = change;
  }

}

//Responsive window
function activeWindow() {

  headerManager();
  let overlayElements = document.getElementsByClassName("overlay");

  if (window.scrollY > 40) {

    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
    for(let i =0, il = overlayElements.length;i<il;i++){
      overlayElements[i].style.position = "fixed";
    }
    document.getElementById("header").style.position = "sticky";

  } else {

    document.getElementById("header").style.boxShadow = "none";
    for(let i =0, il = overlayElements.length;i<il;i++){
      overlayElements[i].style.position = "absolute";
    }
    document.getElementById("header").style.position = "relative";

  }

  if(window.scrollX > 0) {
    document.getElementById("header").style.left = "0";
  }

  if (window.innerWidth >= 1040) {

    scrollFunction();

    if(visible[1]===true){
      menu2();
    }

  } else {

    document.getElementsByClassName("secondLevel")[0].style.display = "none";
    document.getElementsByClassName("thirdLevel")[0].style.display = "none";
    document.getElementsByClassName("fourthLevel")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.visibility = "visible";
    document.getElementById("header").style.height = "65px";
    document.getElementById("section").style.paddingTop="0";
    document.getElementById("header").style.borderBottom = "1px solid #9d9a98";
    document.getElementsByClassName("thirdLevel")[0].style.boder = "none";
    document.getElementsByClassName("firstLevel")[0].style.height = "100%";
    scrolled = true;

  }

}

//Responsive to scrolling
let scrolled=false;
function scrollFunction() {

  if (window.scrollY > 40 && scrolled === false) {

    document.getElementsByClassName("secondLevel")[0].style.display = "none";
    document.getElementsByClassName("thirdLevel")[0].style.display = "none";
    document.getElementsByClassName("fourthLevel")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.visibility = "visible";
    document.getElementById("header").style.height = "65px";
    document.getElementById("section").style.paddingTop="235px";
    document.getElementById("header").style.borderBottom = "1px solid #9d9a98";
    document.getElementsByClassName("thirdLevel")[0].style.boder = "none";
    document.getElementsByClassName("firstLevel")[0].style.height = "100%";
    scrolled = true;

  } else if(window.scrollY <= 40 && scrolled === true){

    document.getElementsByClassName("firstLevel")[0].style.height = "65px";
    document.getElementsByClassName("secondLevel")[0].style.display = "flex";
    document.getElementsByClassName("thirdLevel")[0].style.display = "flex";
    document.getElementsByClassName("fourthLevel")[0].style.display = "flex";
    document.getElementsByClassName("home")[0].style.visibility = "hidden";
    document.getElementById("header").style.height = "300px";
    document.getElementById("section").style.paddingTop="0";
    document.getElementById("header").style.border = "none";
    document.getElementsByClassName("thirdLevel")[0].style.borderBottom = "1px solid black";
    scrolled = false;

  }

}

const days = [['Monday', 'MON'], ['Tuesday', 'TUE'], ['Wednesday', 'WED'], ['Thursday', 'THU'], ['Friday', 'FRI'], ['Saturday', 'SAT'], ['Sunday', 'SUN']];
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

//Today's date
function getTodaysDate(){

  let date = new Date();
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = days[(date.getDay())-1][0];
  let number=date.getDate();
  let x="th";

  if(number===1){
    x="st";
  }else if(number===2){
    x="nd";
  }else if(number===3){
    x="rd"
  }

  return day+', ' + month +' '+date.getDate()+x+' '+ year;

}

//Upcoming days
function upComing(){

  let date = new Date();
  let max=31;
  let month=date.getMonth();
  let day=date.getDay();
  let number= date.getDate();
  let dateLine = document.getElementsByClassName("days")[0];

  for (let count = 1; count <= dateLine.getElementsByTagName("a").length; count++) {

    if(month === 1){
      max=28;
    }else if(month === 3 || month === 5|| month === 8||month === 10){
      max=30;
    }

    if(number>max){
      number=number-max;
    }

    if(day>7){
      day=day-7;
    }

    month++;
    dateLine.getElementsByTagName("a")[count-1].getElementsByClassName("day")[0].innerHTML = days[day-1][1];
    dateLine.getElementsByTagName("a")[count-1].getElementsByClassName("date")[0].innerHTML =number.toString();
    day++;
    number++;

  }

}

//When loading the page
window.onload=function (){

  activeWindow();
  upComing();
  document.getElementsByClassName("dateShow")[0].innerHTML =getTodaysDate();
  document.getElementsByClassName("dateShow")[1].innerHTML =getTodaysDate();
  document.getElementById("breakingNews").style.display = "flex";
  sliderManager();

}

let position=0
let eventDisplayed=3;
let end=false;

//Slider manager
function slider(left){

  const events=  document.querySelectorAll('.upComing .draggable a').length;
  let change;

  if(left){

    position+=100;
    if(position>0){
      position=0;
    }
    end=false;

  }else{

    position-=100;
    if(end){
      position+=100;
    }else  if(position<-((events/eventDisplayed)*100-100)|| events/eventDisplayed<2){
      position+=100;
      position-=(100/eventDisplayed)*(events%eventDisplayed);
      end=true;
    }

  }

  change=position.toString()+'%';
  let container = document.getElementsByClassName("draggable")[0];
  container.style.left = change;

}
