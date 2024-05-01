
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
    x.style.width="0%";
    x.style.backgroundColor="rgba(0, 0, 0, 0)";

  }else{
    document.getElementById("menu1").src="img/placeholder.svg";
    document.getElementById("body").style.overflow="hidden";
    x.style.width="100%";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)";

  }
  elementVisible('lateralMenu',0);



}
