function badgeSection(discriminator, textArray) {
  createBadgeContainer(discriminator);

  for (index = 0; index < textArray.length; index++) {
    var formTarget = document.getElementById(discriminator + "_Form");
    var checkboxIdentifier = discriminator + "_Form" + "." + index.toString();
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

function badgeSectionGrouped(discriminator, textArray) {
  createBadgeContainer(discriminator);

  for (index = 0; index < textArray.length; index++) {
    for (subindex = 0; subindex < textArray[index].length; subindex+=2) {
        console.log(textArray[index][subindex] + ":" )
        for (entry in  textArray[index][subindex + 1]){
            console.log(textArray[index][subindex + 1][entry]);
        }

    }
    var formTarget = document.getElementById(discriminator + "_Form");
    var checkboxIdentifier = discriminator + "_Form" + "." + index.toString();
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

function createBadgeContainer(discriminator) {
  discriminator = discriminator.toString();

  document.getElementById("trackerContainer").innerHTML +=
    '<div id="' + discriminator + '"><form id="' + discriminator + '_Form"></form></div>';

  var badgeContianerLabel = document.createElement("div");
  badgeContianerLabel.id = discriminator + "_Label";
  badgeContianerLabel.innerHTML = discriminator + "_Label";
  document
    .getElementById(discriminator)
    .insertBefore(badgeContianerLabel, document.getElementById(discriminator + "_Form"));
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
    if (cookieArray[i].includes("=true")) {
      console.log(i.toString() + ": " + cookieArray[i]);
      document.getElementById(cookieArray[i].split("=")[0].trim()).checked = true;
    }
}
