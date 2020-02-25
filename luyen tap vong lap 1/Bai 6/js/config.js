let count = 0;
let sum = 0;
for (i = 1; count <= 30; i++) {
    if (i % 7 == 0) {
        sum = sum + i;
        count++;
    }
}
alert('Tong cua 30 so dau tien chia het cho 7 la: ' + sum);