let select = document.getElementById('selectMt');

for (let i = 0; i < mountainsArray.length; i++) {
    let opt = mountainsArray[i].name;
    let el = document.createElement('option');
    el.textContent = opt;
    el.value = opt;
    select.appendChild(el);
} 
