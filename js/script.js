
var visible=[false, false, false, false, false, false, false, false, false];
var homeChecked=false;
function elementVisible(id,n){

  if(visible[n]){
    document.getElementById(id).style.display="none";
    visible[n]=false;
  }else{
    document.getElementById(id).style.display="flex";
    visible[n]=true;
  }

}

function showMore(){
  document.getElementsByClassName("showMore")[0].style.display="none";
  document.getElementById("lastSub").style.border="none";
  document.getElementsByClassName("hiddenArticles")[0].style.display="flex";
  document.getElementsByClassName("centeredGeometry")[0].style.display="none";
}
function overlay(x){
  var home=document.getElementById("home1");
  if(x==1){
    document.getElementById("header").style.boxShadow = "none";
    if(home1.style.visibility=="hidden"){
      home1.style.visibility="visible";
      homeChecked=true;
    }else{
      homeChecked=false;
    }
  }else if(x==0){
    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
    if(home1.style.visibility=="visible"){
      if(homeChecked){
        homeChecked=false;
        home1.style.visibility="hidden";
      }
    }

  }
}
function menu1(){
  if(visible[3]){
    menu2();
  }
  if(visible[4]){
    menu3();
  }
  var x= document.getElementById("lateralMenu");

  if(visible[0]){
    overlay(0);
    document.getElementById("menu1").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="scroll";
    document.getElementById("lateralMenu").style.overflow="hidden";

  }else{
    overlay(1);
    document.getElementById("menu1").style.visibility="visible";
    document.getElementById("menu1").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="hidden";
    document.getElementById("lateralMenu").style.overflow="hidden";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";


  }

  elementVisible('lateralMenu',0);
}

function menu2(){
  if(visible[0]){
    menu1();
  }
  if(visible[4]){
    menu3();
  }
  var x= document.getElementById("accountMenu");
  if(visible[3]){
    document.getElementById("menu2").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="scroll";
    document.getElementById("accountMenu").style.overflow="hidden";
    overlay(0);
  }else{
    document.getElementById("menu2").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="hidden";
    document.getElementById("accountMenu").style.overflow="hidden";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";
    overlay(1);
  }

  elementVisible('accountMenu',3);
}

function menu3(){
  var x= document.getElementById("searchMenu");
  if(visible[0]){
    menu1();
  }
  if(visible[3]){
    menu2();
  }
  if(visible[4]){
    document.getElementById("body").style.overflow="scroll";
    document.getElementById("searchMenu").style.overflow="hidden";
    overlay(0);
  }else{
    document.getElementById("body").style.overflow="hidden";
    document.getElementById("searchMenu").style.overflow="hidden";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";
    overlay(1);
  }


  elementVisible('searchMenu',4);
}
window.onscroll = function() {activeWindow()};
window.onresize = function() {activeWindow()};
function activeWindow(){
  if (window.scrollY > 0) {
    document.getElementById("header").style.boxShadow = "#9d9a98 0 0 10px";
  }else if(window.scrollY <= 10){
    document.getElementById("header").style.boxShadow = "none";
  }
  if(window.innerWidth >=1040) {
    scrollFunction();

  }else{
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
      document.getElementsByClassName("secondLevel")[0].style.display="none";
      document.getElementsByClassName("thirdLevel")[0].style.display="none";
      document.getElementsByClassName("fourthLevel")[0].style.display="none";
      document.getElementsByClassName("home")[0].style.visibility="visible";
      document.getElementById("header").style.height="65px"
      document.getElementById("header").style.borderBottom="1px solid #9d9a98"
      document.getElementsByClassName("thirdLevel")[0].style.boder="none";
      document.getElementsByClassName("firstLevel")[0].style.height="100%";
    }else if(window.scrollY <= 10) {
      document.getElementsByClassName("firstLevel")[0].style.height="65px";
      document.getElementsByClassName("secondLevel")[0].style.display="flex";
      document.getElementsByClassName("thirdLevel")[0].style.display="flex";
      document.getElementsByClassName("fourthLevel")[0].style.display="flex";
      document.getElementsByClassName("home")[0].style.visibility="hidden";
      document.getElementById("header").style.height="300px";
      document.getElementById("header").style.border="none";
      document.getElementsByClassName("thirdLevel")[0].style.borderBottom="1px solid black";
    }

}
/*
function myCustomFunction {
  // define your logic here
}
window.addEventListener('scroll', function() {
  var hasFired = false;

  if (document.body.scrollTop > 80 && !hasFired) {
    hasFired = true;
    document.getElementsByClassName("secondLevel")[0].style.display="none";
    document.getElementsByClassName("thirdLevel")[0].style.display="none";
    document.getElementsByClassName("fourthLevel")[0].style.display="none";
    document.getElementsByClassName("home")[0].style.display="flex";
  }

  if (document.body.scrollTop <= 80 && hasFired) {
    hasFired = false;
    document.getElementsByClassName("secondLevel")[0].style.display="flex";
    document.getElementsByClassName("thirdLevel")[0].style.display="flex";
    document.getElementsByClassName("fourthLevel")[0].style.display="flex";
    document.getElementsByClassName("home")[0].style.display="none";
    // do something when scrolling up, and enable the scroll-down event to fire once again
  }
});
*/
