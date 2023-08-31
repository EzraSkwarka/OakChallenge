var debug = true;

function sectionBuilder(sectionObject = []) {
  var sectionDiv = document.createElement("div");
  document.getElementById("sectionContainer").appendChild(sectionDiv);
  // sectionDiv.innerHTML = sectionObject;
  sectionDiv.id = sectionObject[0].toString();

  for (index = 1; index < sectionObject.length; index++) {
    var groupDiv = document.createElement("div");
    groupDiv.id = sectionObject[0].toString() + "_" + index.toString();
    document.getElementById(sectionDiv.id).appendChild(groupDiv);

    for (groupIndex = 0; groupIndex < sectionObject[index].length; groupIndex++) {
      /*Since the family line can only be a max of three mons, instead of making another for loop I'm just gonna define the three cases */
      var familyLineArray = sectionObject[index][groupIndex];
      var familyLineDiv = document.createElement("div");
      groupDiv.appendChild(familyLineDiv);
      switch (familyLineArray.length) {
        case 5:
          //Create Check box form
          var checkBoxForm = document.createElement("form");
          checkBoxForm.id = familyLineArray[4].toString() + "_form";
          familyLineDiv.appendChild(checkBoxForm);

          //Create the input
          var checkBoxInput_5 = generateCheckbox(checkBoxForm, index + "_" + familyLineArray[4].toString() + "_input");

          //Create the label
          var checkBoxLabel_5 = generateLabel(checkBoxInput_5, [familyLineArray[3], familyLineArray[4]]);

        case 3:
          //See if for exists, otherwise make one
          if (checkBoxForm == "") {
            var checkBoxForm = document.createElement("form");
            checkBoxForm.id = familyLineArray[2].toString() + "_form";
            familyLineDiv.appendChild(checkBoxForm);
          }

          //Create the input
          var checkBoxInput_3 = generateCheckbox(checkBoxForm, index + "_" + familyLineArray[2].toString() + "_input");

          //Create the label
          var checkBoxLabel_3 = generateLabel(checkBoxInput_3, [familyLineArray[1], familyLineArray[2]]);

        default:
          //See if for exists, otherwise make one
          if (checkBoxForm == "") {
            var checkBoxForm = document.createElement("form");
            checkBoxForm.id = familyLineArray[0].toString() + "_form";
            familyLineDiv.appendChild(checkBoxForm);
          }

          //Create the input
          var checkBoxInput = generateCheckbox(checkBoxForm, index + "_" + familyLineArray[0].toString() + "_input");

          //Create the label
          var checkBoxLabel = generateLabel(checkBoxInput, [familyLineArray[0]]);
      }
      var checkBoxForm = ""; //make sure its clear on subsequent loops
    }
    groupDiv.innerHTML += "<br>";
  }
}

function generateLabel(ref, subarray = []) {
  var checkBoxLabel = document.createElement("label");
  checkBoxLabel.htmlFor = ref.id.toString();
  checkBoxLabel.id = ref.id.toString() + "_label";
  if (subarray.length == 2) {
    checkBoxLabel.innerHTML =
      " -> by " +
      subarray[0][0].toString() +
      " @ " +
      subarray[0][1].toString() +
      " " +
      checkboxLabelInnerHTML(ref, subarray[1].toString());
  } else {
    checkBoxLabel.innerHTML = checkboxLabelInnerHTML(ref, subarray[0].toString());
  }

  ref.after(checkBoxLabel);
  return checkBoxLabel;
}

function checkboxLabelInnerHTML(checkBoxRef, monName) {
  if (fileExists("..\\assets\\RBY\\BW_" + monName + ".png")) {
    // checkBoxRef.hidden = "true";
    return (
      '<img onclick="toggleLabel(this)" style="width: 104px; height: auto;"src="..\\assets\\RBY\\BW_' +
      monName +
      '.png" />'
    );
  } else {
    return monName;
  }
}

function toggleLabel(refObject) {
  toggleImage(refObject);

  var checkBoxInput = document.getElementById(refObject.parentElement.id.slice(0,-6))
  // console.log(checkBoxInput.id + ": " + !checkBoxInput.checked)
  
  setCookie(checkBoxInput.id, !checkBoxInput.checked, 30); //checkBoxInput.checked is inverted as it changes after this event listener finishes

}

function toggleImage(refObject) {
  if (refObject.src.includes("C_")) {
    refObject.src = refObject.src.toString().replace("C_", "BW_");
  } else if (refObject.src.includes("BW_")) {
    refObject.src = refObject.src.toString().replace("BW_", "C_");
  }
}

function generateCheckbox(parent, id) {
  var checkBoxInput = document.createElement("input");
  checkBoxInput.id = id;
  checkBoxInput.type = "checkbox";
  // checkBoxInput.onchange = function (value) {
  //   setCookie(checkBoxInput.id, checkBoxInput.checked, 30);
  // };


  

  // checkBoxInput.addEventListener('change', (event) => {
  //   if (event.currentTarget.checked) {
  //     setCookie(checkBoxInput.id, true, 30)
  //   } else {
  //     setCookie(checkBoxInput.id, false, 30)
  //   }
  // })
  parent.insertBefore(checkBoxInput, parent.firstChild);
  // checkBoxInput.addEventListener('click', handler, false)

  return checkBoxInput;
}

function fileExists(url) {
  var http = new XMLHttpRequest();

  http.open("HEAD", url, false);
  http.send();

  return http.status != 404;
}

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
    for (subindex = 0; subindex < textArray[index].length; subindex += 2) {
      console.log(textArray[index][subindex] + ":");
      for (entry in textArray[index][subindex + 1]) {
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
  if (document.getElementById("cookieGeneral")) {
    document.getElementById("cookieOutput").innerHTML = cname + "=" + cvalue;
  }
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

function debugCookies() {
  //Check if cookie box exists
  if (document.getElementById("cookieGeneral") || debug == false) {
    return;
  }
  //Create Cookie Box
  var cookieGeneral = document.createElement("div");
  cookieGeneral.id = "cookieGeneral";
  cookieGeneral.style.cssText =
    "color: black; outline: 2px solid red; width: 400px; position: absolute; top: 2px; right: 2px; min-height: 25px;";
  cookieGeneral.innerHTML = "Cookies: ";
  document.body.appendChild(cookieGeneral);

  var cookieOutput = document.createElement("div");
  cookieOutput.id = "cookieOutput";
  cookieOutput.style.cssText = "color: blue";
  document.getElementById("cookieGeneral").appendChild(cookieOutput);

  var cookieOutputAll = document.createElement("div");
  cookieOutputAll.id = "cookieOutput";
  cookieOutputAll.style.cssText = "color: green";
  document.getElementById("cookieGeneral").appendChild(cookieOutputAll);

  var cookieButton = document.createElement("button");
  cookieButton.type = "button";
  cookieButton.onclick = function () {
    var theCookies = document.cookie.split(";");
    cookieOutputAll.innerHTML = theCookies;
  };
  cookieButton.innerHTML = "List All";
  cookieButton.style.cssText = "position: fixed; top: 3px; right: 3px;";
  document.getElementById("cookieGeneral").appendChild(cookieButton);
}
