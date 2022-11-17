let select = document.getElementById('selectMt');

for (let i = 0; i < mountainsArray.length; i++) {
    let opt = mountainsArray[i].name;
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
} 

document.getElementById('selectMt').addEventListener("change", function () {
    let eId = document.getElementById('selectMt');
    let selectedOptions = eId.options[eId.selectedIndex].text;
    console.log(selectedOptions);
    let mtsFiltered = mountainsArray.filter(function (mountainsArray) {
        if (mountainsArray.name === selectedOptions) {
        } return selectedOptions === mountainsArray.name;
    }); console.log(mtsFiltered);
    let mtList = document.getElementById('mtList');
    while (mtList.hasChildNodes()) {
        mtList.removeChild(mtList.firstChild);
    }
    for (let i = 0; i < mtsFiltered.length; i++) {
        liTag = document.createElement('li');
        liTag.innerText = mtsFiltered[i].desc;
        mtList.appendChild(liTag);
    }
});


