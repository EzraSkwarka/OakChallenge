var debug = false;
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
  sectionDiv.classList.add("sectionBlock");

  //Section Header/Banner
  //TODO: Sort This Mess Out
  var sectionHeader = document.createElement("div");
  var sectionHeaderIMG = document.createElement("img");
  sectionHeaderIMG.src = "../assets/Misc/Subsitute_Normal.png";
  sectionHeaderIMG.classList.add("sectionHeaderIMG");
  sectionHeader.appendChild(sectionHeaderIMG);
  var sectionHeaderText = document.createElement("span");
  sectionHeaderText.innerText += sectionObject[0].toString();
  sectionHeaderText.classList.add("sectionHeaderText");
  sectionHeader.classList.add("sectionHeader");
  sectionHeader.appendChild(sectionHeaderText);
  sectionDiv.appendChild(sectionHeader);

  //Pokemon Table
  var sectionTable = document.createElement("table");
  sectionTable.id = sectionObject[0].toString() + "_table";
  sectionTable.classList.add("pokemonTable");
  sectionDiv.appendChild(sectionTable);

  var sectionTableHeader = document.createElement("th");
  sectionTable.appendChild(sectionTableHeader);

  for (groupIndex = 0; groupIndex < sectionObject[1].length; groupIndex++) {
    /*Since the family line can only be a max of three mons, instead of making another for loop I'm just gonna define the three cases */
    var familyLineTR = document.createElement("tr");
    sectionTable.appendChild(familyLineTR);

    var familyLineArray = sectionObject[1][groupIndex];
    switch (familyLineArray.length) {
      case 5:
        //Create the input
        var checkBoxInput_5 = generateCheckbox(familyLineArray[4].toString() + "_input");
        familyLineTR.insertBefore(checkBoxInput_5, familyLineTR.firstChild);

        // Generate the label and the evolution arrow
        var [checkBoxLabel_5, evoArrow_5] = generateLabel(checkBoxInput_5, [familyLineArray[3], familyLineArray[4]]);

        //Bundle into td objects and insert into familyLineTR
        var checkBoxLabel_5_TD = document.createElement("td");
        checkBoxLabel_5_TD.innerHTML += checkBoxLabel_5.innerHTML;
        checkBoxLabel_5_TD.classList.add("pokemonPicture");
        familyLineTR.appendChild(checkBoxLabel_5_TD);
        checkBoxLabel_5_TD.appendChild(checkBoxInput_5);

        var evoArrow_5_TD = document.createElement("td");
        evoArrow_5_TD.innerHTML += evoArrow_5.innerHTML;
        evoArrow_5_TD.classList.add("evolutionArrow");
        familyLineTR.insertBefore(evoArrow_5_TD, familyLineTR.firstChild);

      case 3:
        //Create the input then add label
        var checkBoxInput_3 = generateCheckbox(familyLineArray[2].toString() + "_input");
        familyLineTR.insertBefore(checkBoxInput_3, familyLineTR.firstChild);

        // Generate the label and the evolution arrow
        var [checkBoxLabel_3, evoArrow_3] = generateLabel(checkBoxInput_3, [familyLineArray[1], familyLineArray[2]]);

        //Bundle into td objects and insert into familyLineTR
        var checkBoxLabel_3_TD = document.createElement("td");
        checkBoxLabel_3_TD.innerHTML += checkBoxLabel_3.innerHTML;
        checkBoxLabel_3_TD.classList.add("pokemonPicture");
        familyLineTR.insertBefore(checkBoxLabel_3_TD, familyLineTR.firstChild);
        checkBoxLabel_3_TD.appendChild(checkBoxInput_3);

        var evoArrow_3_TD = document.createElement("td");
        evoArrow_3_TD.innerHTML += evoArrow_3.innerHTML;
        evoArrow_3_TD.classList.add("evolutionArrow");
        familyLineTR.insertBefore(evoArrow_3_TD, familyLineTR.firstChild);

      default:
        //Create the input then add label
        var checkBoxInput = generateCheckbox(familyLineArray[0].toString() + "_input");
        familyLineTR.insertBefore(checkBoxInput, familyLineTR.firstChild);

        // Generate the label
        var [checkBoxLabel] = generateLabel(checkBoxInput, [familyLineArray[0]]);

        //Bundle into td objects and insert into familyLineTR
        var checkBoxLabel_TD = document.createElement("td");
        checkBoxLabel_TD.innerHTML += checkBoxLabel.innerHTML;
        checkBoxLabel_TD.classList.add("pokemonPicture");
        familyLineTR.insertBefore(checkBoxLabel_TD, familyLineTR.firstChild);
        checkBoxLabel_TD.appendChild(checkBoxInput);
        break;
    }
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
  // I use subarray[subarray.length - 1] because if subarray.length == 2 then the mon name is given second because its evolution info then name
  var monName = subarray[subarray.length - 1].toString();

  if (fileExists("..\\assets\\RBY\\BW_" + monName + ".png") && fileExists("..\\assets\\RBY\\C_" + monName + ".png")) {
    //TODO: Build out an html element instead of whatever this is
    checkBoxLabel.innerHTML +=
      '<img onclick="toggleLabel(this)" class="pokemonSprite" src="..\\assets\\RBY\\BW_' + monName + '.png" />';
    if (!debug) {
      ref.style.cssText += "display:none;";
    }
  } else {
    checkBoxLabel.innerHTML += monName;
  }

  if (subarray.length == 2) {
    if (subarray[0][0].toString() == "level") {
      var evoArrow = document.createElement("svg");
      evoArrow.innerHTML = generateLevelSVG(subarray[0][1].toString());
    } else if (subarray[0][0].toString() == "item") {
      var evoArrow = document.createElement("svg");
      evoArrow.innerHTML = generateLevelSVG(subarray[0][1].toString());
    }
    return [checkBoxLabel, evoArrow];
  }

  return [checkBoxLabel];
}

/**
 * Helper function for an event listener, changes images BW <=> Color and updates cookies on change
 * @param {object} refObject - the object the needs to change
 */
function toggleLabel(refObject) {
  //Change Image
  toggleImage(refObject);
  var checkBoxInput = refObject.parentElement.lastChild;
  checkBoxInput.checked = !checkBoxInput.checked;

  //Change Cookies
  setCookie(checkBoxInput.id, checkBoxInput.checked, 30); //checkBoxInput.checked is inverted as it changes after this event listener finishes
}

function generateLevelSVG(level) {
  return (
    '<svg width="30" height="36" style="transform: scale(2)">  <text x="-1" y="11" style="fill: white;font: 8px spritendo">Lv.</text>  <polygon points="0,14 0,25 17,25 17,30, 28,20 28,19 17,9 17,14 0,14"   style="fill:rgb(198,206,222);stroke:rgb(173,181,198);stroke-width:1"></polygon>  <text x="14" y="23" style="font: bold 8px sans-serif">' +
    level.toString() +
    "</text></svg>"
  );
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
function generateCheckbox(id) {
  var checkBoxInput = document.createElement("input");
  checkBoxInput.id = id;
  checkBoxInput.type = "checkbox";
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
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/;SameSite=Strict";

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
        console.log(cookieArray[i].split("=")[0].trim());
        console.log(document.getElementById(cookieArray[i].split("=")[0].trim()));
      }
      // document.getElementById(cookieArray[i].split("=")[0].trim()).checked = true;
      //Toggle Images
      var targetCheckbox = document.getElementById(cookieArray[i].split("=")[0].trim());
      if (targetCheckbox) {
        targetCheckbox.parentElement.firstChild.click();
      }
    }
}

//NOT USED
function pulse(polarity) {
  var activeImages = document.getElementsByClassName("pokemonSprite");
  var count = 0;
  for (var i = 0; i < activeImages.length; i++) {
    var element = activeImages.item(i);
    if (element.src.toString().includes("/C_")) {
      var rect = element.getBoundingClientRect();
      console.log(rect.top);
      count++;
    }
  }

  console.log(count);
  setTimeout(function () {
    pulse(!polarity);
  }, 1000);
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
