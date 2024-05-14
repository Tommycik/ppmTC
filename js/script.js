var visible = [false, false, false, false, false, false, false, false, false];
var homeChecked = false;

function elementVisible(id, n) {

  if (visible[n]) {
    document.getElementById(id).style.display = "none";
    document.getElementById(id).getElementsByClassName("img")[0].style.transform = "rotate(0deg)";
    visible[n] = false;
  } else {
    document.getElementById(id).style.display = "flex";
    document.getElementById(id).getElementsByClassName("img")[0].style.transform = "rotate(180deg)";
    visible[n] = true;
  }

}

function showMore() {
  document.getElementsByClassName("showMore")[0].style.display = "none";
  document.getElementsByClassName("hiddenArticles")[0].style.display = "flex";
  document.getElementsByClassName("centeredGeometry")[0].style.display = "none";
}

function overlay(x) {
  var home = document.getElementById("home1");
  if (x == 1) {
    document.getElementById("header").style.boxShadow = "none";
    if (home1.style.visibility == "hidden") {
      home1.style.visibility = "visible";
      homeChecked = true;
    } else {
      homeChecked = false;
    }
  } else if (x == 0) {
    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
    if (home1.style.visibility == "visible") {
      if (homeChecked) {
        homeChecked = false;
        home1.style.visibility = "hidden";
      }
    }

  }
}

function menu1() {
  if (visible[3]) {
    menu2();
  }
  if (visible[4]) {
    menu3();
  }
  var x = document.getElementById("lateralMenu");

  if (visible[0]) {

    overlay(0);
    document.getElementById("menu1").src="img/menu.svg" ;
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("lateralMenu").style.overflow = "hidden";

  } else {
    overlay(1);
    document.getElementById("menu1").style.visibility = "visible";
    document.getElementById("menu1").src="img/cross.svg" ;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("lateralMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";


  }

  elementVisible('lateralMenu', 0);

}

function menu2() {
  if (visible[0]) {
    menu1();
  }
  if (visible[4]) {
    menu3();
  }
  var x = document.getElementById("accountMenu");

  if (visible[3]) {
    document.getElementById("menu2").style.transform="rotate(0deg)";
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("accountMenu").style.overflow = "hidden";
    overlay(0);
  } else {
    document.getElementById("menu2").style.transform="rotate(180deg)";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("accountMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay(1);
  }

  elementVisible('accountMenu', 3);
}

function menu3() {
  var x = document.getElementById("searchMenu");
  if (visible[0]) {
    menu1();
  }
  if (visible[3]) {
    menu2();
  }
  if (visible[4]) {
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("searchMenu").style.overflow = "hidden";
    overlay(0);
  } else {
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("searchMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay(1);
  }


  elementVisible('searchMenu', 4);
}

window.onscroll = function () {
  activeWindow()
};
window.onresize = function () {
  activeWindow()
};

function activeWindow() {
  if (window.scrollY > 0) {
    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
  } else if (window.scrollY <= 10) {
    document.getElementById("header").style.boxShadow = "none";
  }
  if (window.innerWidth >= 1040) {
    scrollFunction();

  } else {
    document.getElementsByClassName("secondLevel")[0].style.display = "none";
    document.getElementsByClassName("thirdLevel")[0].style.display = "none";
    document.getElementsByClassName("fourthLevel")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.visibility = "visible";
    document.getElementById("header").style.height = "65px"
    document.getElementById("header").style.borderBottom = "1px solid #9d9a98"
    document.getElementsByClassName("thirdLevel")[0].style.boder = "none";
    document.getElementsByClassName("firstLevel")[0].style.height = "100%";
  }
  if(window.innerWidth < 640) {
    eventDisplayed=3;
  }else if (window.innerWidth < 800) {
    eventDisplayed=2;
  }else if (window.innerWidth < 940) {
    eventDisplayed=3;

  }else if (window.innerWidth < 1040) {
    eventDisplayed=4;
  }else if (window.innerWidth < 1280) {
    eventDisplayed=5;
  }else if (window.innerWidth < 1400) {
    eventDisplayed=6;
  }
  let width=((events/eventDisplayed)*100).toString()
  document.getElementsByClassName("draggable")[0].style.width = width+'%';
  let container = document.getElementsByClassName("draggable")[0];
  let content = container.innerHTML;
  container.innerHTML= content;
  let change="0"
  if(end){
    position=-((events/eventDisplayed)*100-100);
    change=position.toString()+'%';
    container.style.left = change;
  }


}

function scrollFunction() {

  if (window.scrollY > 0) {
    document.getElementsByClassName("secondLevel")[0].style.display = "none";
    document.getElementsByClassName("thirdLevel")[0].style.display = "none";
    document.getElementsByClassName("fourthLevel")[0].style.display = "none";
    document.getElementsByClassName("home")[0].style.visibility = "visible";
    document.getElementById("header").style.height = "65px"
    document.getElementById("header").style.borderBottom = "1px solid #9d9a98"
    document.getElementsByClassName("thirdLevel")[0].style.boder = "none";
    document.getElementsByClassName("firstLevel")[0].style.height = "100%";
  } else if (window.scrollY <= 10) {
    document.getElementsByClassName("firstLevel")[0].style.height = "65px";
    document.getElementsByClassName("secondLevel")[0].style.display = "flex";
    document.getElementsByClassName("thirdLevel")[0].style.display = "flex";
    document.getElementsByClassName("fourthLevel")[0].style.display = "flex";
    document.getElementsByClassName("home")[0].style.visibility = "hidden";
    document.getElementById("header").style.height = "300px";
    document.getElementById("header").style.border = "none";
    document.getElementsByClassName("thirdLevel")[0].style.borderBottom = "1px solid black";
  }

}

const days = [['Monday', 'MON'], ['Tuesday', 'TUE'], ['Wednesday', 'WED'], ['Thursday', 'THU'], ['Friday', 'FRI'], ['Saturday', 'SAT'], ['Sunday', 'SUN']];
var date = []

for (let i = 1; i <= 31; i++) {
  date.push('i');
}
const months=['January','February','March','April','May','June','July','August','September','October','November','December'];

function getTodaysDate(){
  let date = new Date();
  let year = date.getFullYear();
  let month = months[date.getMonth()];
  let day = days[(date.getDay())-1][0];
  let number=date.getDate();
  let x="th";
  if(number==1){
    x="st";
  }else if(number==2){
    x="nd";
  }else if(number==3){
    x="rd"
  }
  return day+', ' + month +' '+date.getDate()+x+' '+ year;
}
function upComing(){
  let date = new Date();
  let max=31;
  let month=date.getMonth();
  let day=date.getDay();
  let number= date.getDate();
  for (let count = 1; count <= 17; count++) {

    if(month == 1){
      max=28;
    }else if(month == 3 || month == 5|| month == 8||month == 10){
      max=30;
    }

    if(number>max){
      number=number-max;
    }
    if(day>7){
      day=day-7;
    }
    month++;
    let id=count.toString();
   document.getElementById(id).getElementsByClassName("day")[0].innerHTML = days[day-1][1];
   document.getElementById(id).getElementsByClassName("date")[0].innerHTML =number;
   day++;
   number++;
  }
}
window.onload=function (){
  upComing();
  document.getElementsByClassName("dateShow")[0].innerHTML =getTodaysDate();
  document.getElementsByClassName("dateShow")[1].innerHTML =getTodaysDate();
}
var position=0
var eventDisplayed=3;
var events=7;
var end=false
function slider(left){
  let change="0"
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
  let content = container.innerHTML;
  container.innerHTML= content;
}
