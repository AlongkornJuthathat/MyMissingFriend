function change() {
    p.classList.add('hide');
    setTimeout(function () {
        p.textContent = txtList[idx];
        idx = (idx + 1) % txtList.length;
    }, 1500);
    setTimeout(function () {
        p.classList.remove('hide')
    }, 1500);
    if (idx == 3){
        location.href = '../08_Soi_Lat_Phrao1/Soi_Lat_Phrao1.html';
    };
}

function myFunction() {
    var popup = document.getElementById("myPopup");
    popup.classList.toggle("show");
}
function myFunction2() {
    var popup = document.getElementById("myPopup2");
    popup.classList.toggle("show2");
}