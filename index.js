let oldActive;

function loadNavBar() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $("#printNavBar").html(this.responseText);
    }
  };
  xhttp.open("GET", "/templates/navbar.html", true);
  xhttp.send();
}

function showHTML() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      $("#container").html(this.responseText);
    }
  };
  xhttp.open("GET", "/templates/" + location.hash.replace("#", "") + ".html");
  xhttp.send();
}

function changeURL(id, first) {
  if(id != oldActive) {
    history.pushState(null, $("#" + id).text(), "#" + id);
    $("#" + oldActive).removeClass("active");
    $("#" + id).addClass("active");

    oldActive = id;
    showHTML();
  }
}

loadNavBar();
jQuery(function() {
  if(location.hash == "" || location.hash == "#") {
    changeURL("hjem");
  } else {
    changeURL(location.hash.replace("#", ""));
  }
})
