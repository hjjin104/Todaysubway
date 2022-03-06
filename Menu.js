// 샌드위치 빵 치즈 소스 선택창
function openTab(evt, tabName) {
  var i, tabcontent, tablinks;
  tabcontent = document.getElementsByClassName("tabcontent");
  for (i = 0; i < tabcontent.length; i++) {
    tabcontent[i].style.display = "none";
  }
  tablinks = document.getElementsByClassName("menu-btn");
  for (i = 0; i < tablinks.length; i++) {
    tablinks[i].className = tablinks[i].className.replace(" active", "");
  }
  document.getElementById(tabName).style.display = "block";
  evt.currentTarget.className += " active";
}

// 샌드위치 선택시 버튼 색 변경
var sandwichLinks = document.querySelectorAll(".select");

function clickMenuHandler() {
  var activeMenu =
    document.querySelector(
      ".SandWichSelect"
    ); /* querySelector 자체가 dom을 다 뒤져야 되므로 이것도 비효율적이라고 할 수 ㅇ..dom에 의존적 */
  if (activeMenu) {
    activeMenu.classList.remove("SandWichSelect");
  }
  this.classList.add("SandWichSelect");
}

for (var i = 0; i < sandwichLinks.length; i++) {
  sandwichLinks[i].addEventListener("click", clickMenuHandler);
}
// 소스 선택시 버튼 변경
var breadLinks = document.querySelectorAll(".select2");

function clickMenuHandler2() {
  var activeMenu =
    document.querySelector(
      ".breadselect"
    ); /* querySelector 자체가 dom을 다 뒤져야 되므로 이것도 비효율적이라고 할 수 ㅇ..dom에 의존적 */
  if (activeMenu) {
    activeMenu.classList.remove("breadselect");
  }
  this.classList.add("breadselect");
}

for (var i = 0; i < breadLinks.length; i++) {
  breadLinks[i].addEventListener("click", clickMenuHandler2);
}
