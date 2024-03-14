function Navbar(NavItem) {
  var i;
  var x = document.getElementsByClassName("navbar");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(NavItem).style.display = "block";
}
