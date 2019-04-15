




let isNavShowing = 0;

// Toggles navigation show on/off
function navigationClick(){
  console.log("navigation clicked");
  isNavShowing = isNavShowing ? 0 : 1;
  
  if(isNavShowing){
    showNavigation();
    document.getElementById("x-icon").style.visibility = "visible";
  } else{
    hideNavigation();
    document.getElementById("x-icon").style.visibility = "hidden";

  }
  
}

// Close navigation if nav is showing and clicking outside


function showNavigation(){
  document.getElementById('navigation').classList.add('show');
  document.getElementById("bar-icon").style.visibility = "hidden";
  document.getElementById("bar-icon").style.display = "none";
  document.getElementById("x-icon").style.visibility = "visible";
  document.getElementById("x-icon").style.display = "inline";
  
}

function hideNavigation(){
  document.getElementById('navigation').classList.remove('show');
  document.getElementById("x-icon").style.visibility = "hidden";
  document.getElementById("x-icon").style.display = "none";
  document.getElementById("bar-icon").style.visibility = "visible";
  document.getElementById("bar-icon").style.display = "inline";

}