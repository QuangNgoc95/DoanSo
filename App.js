let Random = Math.floor(Math.random() * 100);
console.log(Random);


let input = document.getElementById('value');
let summit = document.getElementById('summit');
let turn = document.getElementById('turn');
let win = document.getElementById('win');

let CurValue = null;
let max = 3;
turn.innerHTML = max;
input.addEventListener('change', function () {
    CurValue = input.value;
});

input.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        CurValue = input.value;
        input.blur();
        summit.click();
    }
});
summit.addEventListener('click', function Compare() {
    input.value = '';

    if (CurValue != null) {
        max--;
        if (max < 0) {
            confirm('Bạn đã hết lượt chơi !!!');
            return 0;
        }
        else {
            if (CurValue == Random) {
                // alert('Bạn đã đoán chính xác.');
                win.innerHTML = Random + ' LÀ CON SỐ CHÍNH XÁC';
                win.style.opacity = 1;
                win.style.zIndex = 10;
            }
            else {
                alert('Bạn đã đoán sai.\n' + ((CurValue > Random) ? 'Số của bạn lớn quá !!!' : 'Số của bạn nhỏ quá !!!'));

            }

        }
        turn.innerHTML = max;
    } else
        alert('Bạn chưa nhập dữ liệu');




    //reset data    
    CurValue = null;

})

