let a = 0;
let b = 1;
let change;
for (i = 1; i <= 20; i++){
    change=a;
    a=a+b;
    b=change;
    document.write(a+",");

}