function start() {
    let min = parseInt(prompt('Nhap so nho nhat:'));
    let max = parseInt(prompt('Nhap so lon nhat'));
    let a = Math.floor(Math.random() * (max - min));
    console.log(a);
    for (i = 1; i <= 3; i++) {
        let c = parseInt(prompt('Nhap so ban doan trong khoang so lon nhat va nho nhat'));
        if (a == c) {
            alert('Chuc mung ban da doan dung');
            break;
        } else {
            if (c > a) {
                alert('So ban doan lon hon so duoc chon. Hay chon lai');
            } else {
                alert('So ban doan nho hon so duoc chon. Hay chon lai');
            }
        }
        i++
    }

}