count = 0
function change() {
    let body = document.querySelector('body');
    p.classList.add('hide');
    setTimeout(function () {
        p.textContent = txtList[idx];
        idx = (idx + 1) % txtList.length;
    }, 1500);
    setTimeout(function () {
        p.classList.remove('hide')
    }, 1500);

    if (count == 0) {
        body.style.setProperty('--bgposition', '67% 35%');
        document.getElementById("text-box").style.opacity = "0";
        document.getElementById("text-box3").style.display = "none";
        }
    if (count == 1) {
        body.style.setProperty('--bgposition', '40% 55%');
        }

    if (count == 2){
        body.style.setProperty('--bgposition', '50% 50%');
        body.style.setProperty('--bgsize', 'cover');
    }
    if (count == 3){
        location.href = '../04_tableclass/tableclass.html'
    }
    count++;
}