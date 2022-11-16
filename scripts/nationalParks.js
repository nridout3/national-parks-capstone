
let select = document.getElementById('selectLocation');



for (let i = 0; i < locationsArray.length; i++) {
    let opt = locationsArray[i];
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
}



document.getElementById('selectLocation').addEventListener("change", function () {
    let eId = document.getElementById('selectLocation');
    let selectedOptions = eId.options[eId.selectedIndex].text;
    console.log(selectedOptions);
    let parksFiltered = nationalParksArray.filter(function (nationalParksArray) {
        if (nationalParksArray.State === selectedOptions) {
        } return selectedOptions === nationalParksArray.State;
    }); console.log(parksFiltered)
    
    let parkList = document.getElementById('parkList');
    while (parkList.hasChildNodes()) {
        parkList.removeChild(parkList.firstChild);
    }
    for (let i = 0; i < parksFiltered.length; i++) {
        liTag = document.createElement('li');
        liTag.innerText = " " + "  Name: " + parksFiltered[i].LocationName + "  Address: " + parksFiltered[i].Address + "  City:  " + parksFiltered[i].City + " Zip: " + parksFiltered[i].ZipCode + " Phone:  " + parksFiltered[i].Phone + "  " + "  " + "  " + "  " + " " + " ";
        parkList.appendChild(liTag);
        const ulElement = document.querySelector('.parkOutput');
        ulElement.style.backgroundColor = 'green';
        document.getElementById('parkList').style.color = "aliceblue";
    } 

});






let selectParkTypes = document.getElementById('parkType');

for (let i = 0; i < parkTypesArray.length; i++) {
    let options = parkTypesArray[i];
    //console.log(options);
    let element = document.createElement('option');
    //console.log(element);
    element.textContent = options;
    element.value = options;
    selectParkTypes.appendChild(element);
}


