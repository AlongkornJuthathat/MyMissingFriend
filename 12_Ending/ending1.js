function change() {
    p.classList.add('hide');
    setTimeout(function () {
        p.textContent = txtList[idx];
        idx = (idx + 1) % txtList.length;
    }, 1500);
    setTimeout(function () {
        p.classList.remove('hide')
    }, 1500);
    if (idx == 1){
        location.href = '../12_Ending/ending2.html'
    }
}

/*
let count = 0;

function change() {
    if (count % 4 == 0) {
      document.getElementById("text-box").innerText = "แต่ความจริงแล้วมีเพื่อน ๆ อีกหลายคนถูกทอดทิ้งให้หลุดออกจากระบบศึกษา";
    }
    else if (count % 4 == 1) {
      document.getElementById("text-box").innerText = "จากข้อมูลพบว่า 1 ใน 5 ของเด็กและเยาวชนไทยกำลังเผชิญกับความเหลื่อมล้ำทางการศึกษา";
    }
    else if (count % 4 == 2) {
      document.getElementById("text-box").innerText = "และนี่คือเรื่องราวของเขา";
    }

    count++
}*/
