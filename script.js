function badgeSection(discriminator, textArray) {
  document.getElementById("trackerContainer").innerHTML +=
    '<div id="' + discriminator.toString() + '"><form id="' + discriminator.toString() + '_Form"></form></div>';

  for (index = 0; index < textArray.length; index++) {
    var formTarget = document.getElementById(discriminator.toString() + "_Form");
    var checkboxIdentifier = discriminator.toString() + "_Form" + "." + index.toString();
    var checkboxString =
      '<input type="checkbox" id="' +
      checkboxIdentifier +
      '" onchange="pullCheckboxValue(\'' +
      checkboxIdentifier +
      "')\">";

    var labelString = "<label for=" + checkboxIdentifier + ">" + textArray[index] + "</label><br>";

    formTarget.innerHTML += checkboxString + labelString;
  }
}

function pullCheckboxValue(target) {
  console.log(target + ": " + document.getElementById(target).checked);
  setCookie(target, document.getElementById(target).checked, 30);
}

function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function listCookies() {
  var theCookies = document.cookie.split(";");
  return theCookies;
}

function updateCheckedBoxes() {
  var cookieArray = listCookies();
  for (var i = 0; i < cookieArray.length; i++)
    if (cookieArray[i].includes("true")) {
      console.log(i.toString() + ": " + cookieArray[i]);
      document.getElementById(cookieArray[i].split("=")[0].trim()).checked = true;
    }
}
