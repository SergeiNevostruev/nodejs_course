const {colors} = require('./colors');
const fs = require('fs');
const path = require('path');

const quad_eq_func = (a, b, c) => {
    const d = b*b - 4*a*c;
    if (d<0) {
    console.log(colors.BgYellow, 'У уравнения нет корней.');
    console.log(colors.Reset);
       return [];
    };
    if (d===0) {
        x = (-b)/(2*a);
        return [x];
    };
    const x1 = (-b - (d)^(1/2))/(2*a);
    const x2 = (-b + (d)^(1/2))/(2*a);
    return [x1, x2];
}

exports.quad_eq = (a, b, c) => {
    const resouts = quad_eq_func(+a, +b, +c);
    const text = `${new Date()}--> В результаты вычисления квадратного уравнения ${a}*x^2+${b}*x+${c}=0 найдены корни ${resouts}.\n`;
    console.log(colors.BgYellow, text);
    console.log(colors.Reset);
    fs.appendFile(path.resolve(__dirname, 'results.txt'), text, (err) => {
    if (err) {
        throw err;
        }
    });
}