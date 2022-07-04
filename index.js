window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("arrow").style.bottom = "50px";
  } else {
    document.getElementById("navbar").style.top = "-80px";
    document.getElementById("arrow").style.bottom = "-50px";
  }
}

function scrollUp() {
    document.documentElement.scrollTop = 0;
}

function showMenu() {
    // document.getElementById("navbar1").style.right="0";
    document.getElementById("show").style.display="none";
    document.getElementById("navbar1").style.display="block";
}
function closeMenu() {
    // document.getElementById("navbar1").style.right="-200px";
    document.getElementById("show").style.display="block";
    document.getElementById("navbar1").style.display="none";
}