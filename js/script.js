
var visible=[false, false, false, false, false, false, false, false, false];
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
function menu1(){

  if(window.scrollY==0){
    document.getElementById("lateralMenu").style.position="absolute";

  }else{
    document.getElementById("lateralMenu").style.position="sticky";
  }
  var x= document.getElementById("lateralMenu");
  if(visible[0]){
    document.getElementById("menu1").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="scroll";
    document.getElementById("lateralMenu").style.overflow="hidden";
  }else{
    document.getElementById("menu1").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="hidden";
    document.getElementById("lateralMenu").style.overflow="auto";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";
  }
  if(visible[3]){
    menu2();
  }
  elementVisible('lateralMenu',0);

}

function menu2(){

  if(window.scrollY==0){
    document.getElementById("accountMenu").style.position="absolute";
  }else{
    document.getElementById("accountMenu").style.position="sticky";
  }
  var x= document.getElementById("accountMenu");
  if(visible[3]){
    document.getElementById("menu2").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="scroll";
    document.getElementById("accountMenu").style.overflow="hidden";
  }else{
    document.getElementById("menu2").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="hidden";
    document.getElementById("accountMenu").style.overflow="auto";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";
  }
  if(visible[0]){
    menu1();
  }
  elementVisible('accountMenu',3);


}
