

for(let a = 1; a <= 5; a++) {
    for(let b = 1; b <= 5; b++) {
        document.write('*');
    }
    document.write("<br>");
}

for (let a = 1; a <= 5; a++) {
    for (let b = 1; b <= 5; b++) {
        if (a == 1 || a == 5 || b == 1 || b == 5) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}









for (let i = 1; i <= 5; i++) {
    for (let j = 1; j <=5; j++) {
        if (i === j ||  (i+j==6)) {
            document.write("*");
        } else {
            document.write("&nbsp;&nbsp;");
        }
    }
    document.write("<br>");
}



for(let a = 1; a <= 5; a++) {
    for(let b = 1; b <= a; b++) {
        document.write(a);
    }
    document.write("<br>");
}