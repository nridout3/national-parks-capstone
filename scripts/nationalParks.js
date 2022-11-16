let selectedStates;
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

        }
        return selectedOptions === nationalParksArray.State;

    }); console.log(parksFiltered)
    
    let parkList = document.getElementById('parkList');
    for (let i = 0; i < parksFiltered.length; i++) {
         liTag = document.createElement('li');
        liTag.innerText = " Park Name: " + parksFiltered[i].LocationName + " Park Address: " + parksFiltered[i].Address;
        parkList.appendChild(liTag);
        // if (liTag) {
        //     selectedOptions[i] =
        // }
       
    } 

});



const parkTypesArray = [
    "National Park",
    "National Monument",
    "Recreation Area",
    "Scenic Trail",
    "Battlefield",
    "Historic",
    "Memorial",
    "Preserve",
    "Island",
    "River",
    "Seashore",
    "Trail",
    "Parkway"
];



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

document.getElementById('parkType').addEventListener("change", function () {
    let eId = document.getElementById('parkType');
    let selectedOptions = eId.options[eId.selectedIndex].text;
    console.log(selectedOptions);
    let parkNames = nationalParksArray.map(({LocationName }) => LocationName);
    console.log(parkNames)
    //  let parkTypesFiltered = nationalParksArray.filter(function (nationalParksArray) {
    //        if ( parkNames == 'Historic') {

    //       }
    //      return  == 'River';
    //    }); console.log(parkTypesFiltered)




});

