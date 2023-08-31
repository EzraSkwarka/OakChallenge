var debug = true;
/**
 * Takes an array and builds a checklist form in the body of HTML under an element "sectionContainer"
 * @param {Array} sectionObject - Required info to build the section, of the form:
 *    > ["Section Label",
 *    > "type_of_section" i.e Mutually Exclusive/Freeform
 *    > ["Pokemon_Name", ["Evolution Condition Type (Level/item/trade", "Value (10, Moonstone, Trade)""],,,]]
 */
function sectionBuilder(sectionObject) {
  /* TODO: Restructure
      Section Groups do not need to have the multi group functionality they currently have
      Instead it needs to be able to process an object of the form:
        > ["Section Label",
        > "type_of_section" i.e Mutually Exclusive/Freeform
        > ["Pokemon_Name", ["Evolution Condition Type (Level/item/trade", "Value (10, Moonstone, Trade)""],,,]]
    
    */
  var sectionDiv = document.createElement("div");
  document.getElementById("sectionContainer").appendChild(sectionDiv);
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
          //Create the input
          var checkBoxInput_5 = generateCheckbox(familyLineDiv, index + "_" + familyLineArray[4].toString() + "_input");

          //Create the label
          var checkBoxLabel_5 = generateLabel(checkBoxInput_5, [familyLineArray[3], familyLineArray[4]]);

        case 3:
          //Create the input
          var checkBoxInput_3 = generateCheckbox(familyLineDiv, index + "_" + familyLineArray[2].toString() + "_input");

          //Create the label
          var checkBoxLabel_3 = generateLabel(checkBoxInput_3, [familyLineArray[1], familyLineArray[2]]);

        default:
          //Create the input
          var checkBoxInput = generateCheckbox(familyLineDiv, index + "_" + familyLineArray[0].toString() + "_input");

          //Create the label
          var checkBoxLabel = generateLabel(checkBoxInput, [familyLineArray[0]]);
      }
      var checkBoxForm = ""; //make sure its clear on subsequent loops
    }
    groupDiv.innerHTML += "<br>";
  }
}

/**
 * Generates a label object tied to a checkbox input
 * @param {object} ref - a reference to the relevant checkbox object
 * @param {Array} subarray - an argument that contains the mon's name, and if applicable, it's evolution info
 *    i.e. -> ["Bulbasaur", ["level", 16]]
 * @returns a reference to the created label object
 */
function generateLabel(ref, subarray = []) {
  var checkBoxLabel = document.createElement("label");
  checkBoxLabel.htmlFor = ref.id.toString();
  checkBoxLabel.id = ref.id.toString() + "_label";
  if (subarray.length == 2) {
    if (subarray[0][0].toString() == "level") {
      //Evo Arrow
      checkBoxLabel.innerHTML +=
        '<img src="..\\assets\\arrow.png"/>' + "<span>@ " + subarray[0][1].toString() + "</span>";
    }
  }

  // I use subarray[subarray.length - 1] because if subarray.length == 2 then the mon name is given second because its evolution info then name
  var monName = subarray[subarray.length - 1].toString();

  if (fileExists("..\\assets\\RBY\\BW_" + monName + ".png") && fileExists("..\\assets\\RBY\\C_" + monName + ".png")) {
    checkBoxLabel.innerHTML +=
      '<img onclick="toggleLabel(this)" class="pokemonSprite" style="width: 56px; height: auto;"src="..\\assets\\RBY\\BW_' +
      monName +
      '.png" />';
    ref.style.cssText += "display:none;";
  } else {
    checkBoxLabel.innerHTML += monName;
  }

  ref.after(checkBoxLabel); //insert into DOM
  return checkBoxLabel;
}

/**
 * Helper function for an event listener, changes images BW <=> Color and updates cookies on change
 * @param {object} refObject - the object the needs to change
 */
function toggleLabel(refObject) {
  //Change Image
  toggleImage(refObject);
  var checkBoxInput = document.getElementById(refObject.parentElement.id.slice(0, -6));

  //Change Cookies
  setCookie(checkBoxInput.id, !checkBoxInput.checked, 30); //checkBoxInput.checked is inverted as it changes after this event listener finishes
}

/**
 * Changes images between BW <=> Color
 * @param {object} refObject - Reference of image to change
 */
function toggleImage(refObject) {
  if (refObject.src.includes("C_")) {
    refObject.src = refObject.src.toString().replace("C_", "BW_");
  } else if (refObject.src.includes("BW_")) {
    refObject.src = refObject.src.toString().replace("BW_", "C_");
  }
}

/**
 * Generates and inserts a checkbox object
 * @param {object} parent - The form object to create the checkbox under
 * @param {String} id - unique identifier for the checkbox
 * @returns a reference to the checkbox object
 */
function generateCheckbox(parent, id) {
  var checkBoxInput = document.createElement("input");
  checkBoxInput.id = id;
  checkBoxInput.type = "checkbox";
  parent.insertBefore(checkBoxInput, parent.firstChild);

  return checkBoxInput;
}

/**
 * Checks to see if a file exists
 * @param {String} url - file to check for
 * @returns Boolean
 */
function fileExists(url) {
  var http = new XMLHttpRequest();

  http.open("HEAD", url, false);
  http.send();

  return http.status != 404;
}

// Depreciated
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

// Depreciated
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

// Depreciated
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

// Depreciated
function pullCheckboxValue(target) {
  console.log(target + ": " + document.getElementById(target).checked);
  setCookie(target, document.getElementById(target).checked, 30);
}

/**
 * Sets a cookie with a unique value to track progress
 * @param {String} cname - pulled from the id of the checkbox
 * @param {Boolean} cvalue - value of the checkbox
 * @param {Integer} exdays - number of days to keep
 */
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  if (document.getElementById("cookieGeneral")) {
    document.getElementById("cookieOutput").innerHTML = cname + "=" + cvalue;
  }
}

/**
 * Splits all cookies into an array
 * @returns Array
 */
function listCookies() {
  var theCookies = document.cookie.split(";");
  return theCookies;
}

/**
 * Goes through the cookies and sets all checkboxes with a matching id to their corresponding value
 */
function updateCheckedBoxes() {
  var cookieArray = listCookies();
  for (var i = 0; i < cookieArray.length; i++)
    if (cookieArray[i].includes("=true")) {
      if (debug) {
        console.log(i.toString() + ": " + cookieArray[i]);
      }
      // document.getElementById(cookieArray[i].split("=")[0].trim()).checked = true;
      //Toggle Images
      if (document.getElementById(cookieArray[i].split("=")[0].trim() + "_label")) {
        document.getElementById(cookieArray[i].split("=")[0].trim()).checked = true;
        try {
          var element = document.getElementById(cookieArray[i].split("=")[0].trim() + "_label");
          toggleImage(element.children[element.children.length - 1]); //TODO, make this less hacky, the imgs have a certain class, look for that
        } catch (error) {
          if (debug) {
            console.log(error);
          }
        }
      }
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
