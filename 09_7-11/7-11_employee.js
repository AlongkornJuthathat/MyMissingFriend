function change() {
    p.classList.add('hide');
    setTimeout(function () {
        p.textContent = txtList[idx];
        idx = (idx + 1) % txtList.length;
    }, 1500);
    setTimeout(function () {
        p.classList.remove('hide')
    }, 1500);
    if (idx == 5){
        location.href = '../11_Soi_Lat_Phrao2/Soi_Lat_Phrao2.html'
    };
}
