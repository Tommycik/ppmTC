
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
  var x= document.getElementById("lateralMenu");

  if(visible[0]){
    document.getElementById("menu1").src="img/placeholder.svg";
    x.style.backgroundColor="rgba(0, 0, 0, 0)";
    document.getElementById("body").style.overflow;

  }else{
    document.getElementById("menu1").src="img/placeholder.svg";
    x.style.backgroundColor="rgba(0, 0, 0, 0.5)"
    document.getElementById("body").style.overflow="hidden";
  }
  elementVisible('lateralMenu',0);


}
