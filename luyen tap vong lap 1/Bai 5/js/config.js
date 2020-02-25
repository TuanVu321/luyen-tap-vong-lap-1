let a = 0;
let b = 1;
let change;
let sum = 0;
for (i = 1; i <= 20; i++) {
    change = a;
    a = a + b;
    b = change;
    sum = sum + a;
}
alert('tong cua 20 so dau tien trong day fibonaci la: ' + sum);