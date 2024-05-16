var visible = [false, false, false];
var homeChecked = false;

function elementVisible(id) {
  let object = document.getElementById(id);
  let state= object.style.display;
  if (state == "flex"|| state == "block"|| state == "inline") {
    object.style.display = "none";
  } else {
    object.style.display = "flex";
  }
}
  function hiddenText(id,object,type) {
    let target=document.getElementById(id);
    let targetImg=object.getElementsByTagName("img")[0];
    if (target.style.display == "flex") {
      targetImg.style.transform = "rotate(0deg)";
    }else{
      if(type==1){
        targetImg.style.transform = "rotate(90deg)";
      }else{
        targetImg.style.transform = "rotate(180deg)";
      }
    }
    elementVisible(id);

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
  if (visible[1]) {
    menu2();
  }
  if (visible[2]) {
    menu3();
  }
  var x = document.getElementById("lateralMenu");

  if (visible[0]) {

    overlay(0);
    document.getElementById("menu1").src="img/menu.svg" ;
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("lateralMenu").style.overflow = "hidden";
    visible[0]=false;

  } else {
    overlay(1);
    document.getElementById("menu1").style.visibility = "visible";
    document.getElementById("menu1").src="img/cross.svg" ;
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("lateralMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    visible[0]=true;
  }

  elementVisible('lateralMenu', 0);
  headerManager();
}

function menu2() {
  if (visible[0]) {
    menu1();
  }
  if (visible[2]) {
    menu3();
  }
  var x = document.getElementById("accountMenu");

  if (visible[1]) {
    document.getElementById("menu2").style.transform="rotate(0deg)";
    document.getElementById("body").style.overflow = "scroll";
    document.getElementById("accountMenu").style.overflow = "hidden";
    overlay(0);
    visible[1]=false;
  } else {
    document.getElementById("menu2").style.transform="rotate(180deg)";
    document.getElementById("body").style.overflow = "hidden";
    document.getElementById("accountMenu").style.overflow = "auto";
    x.style.backgroundColor = "rgba(0, 0, 0, 0.5)";
    overlay(1);
    visible[1]=true;
  }

  elementVisible('accountMenu', 1);
  headerManager();
}

function menu3() {
  var x = document.getElementById("searchMenu");
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


  elementVisible('searchMenu', 2);
  headerManager();
}

window.onscroll = function () {
  activeWindow();
};

function headerManager(){
  let offsetHeader = (document.getElementsByTagName("body")[0].offsetWidth).toString();
  document.getElementById("header").style.width = offsetHeader+"px";
  document.getElementById("header").style.marginLeft = (window.scrollX).toString()+"px";
}
window.onresize = function () {
  activeWindow();
  slidderManager();
};

function slidderManager(){
  let innerWidth = window.innerWidth;
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
  let title=document.getElementById("upTitle");
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
  let content = container.innerHTML;
  container.innerHTML= content;
  let change="0"
  if(end){
    position=-((events/eventDisplayed)*100-100);
    change=position.toString()+'%';
    container.style.left = change;
  }


}
function activeWindow() {
  headerManager();
  if (window.scrollY > 0) {
    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
  } else if (window.scrollY <= 10) {
    document.getElementById("header").style.boxShadow = "none";
  }
  if(window.scrollX > 0) {
    document.getElementById("header").style.left = "0";
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
  document.getElementById("breakingNews").style.display = "flex";
  slidderManager();
  headerManager();
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
