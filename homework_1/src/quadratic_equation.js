const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { stdin: input, stdout: output } = require('process');
const {colors} = require('./colors');
const {help} = require('./help')
const {quad_eq} = require('./func_quad')

const arg = process.argv;
const prog = path.basename(arg[0], '.exe');
const file = path.basename(arg[1]);

console.log(colors.FgGreen, `Для получения справки укажите запустите ${prog} ${file} -help, для выхода из программы ctrl+C`);
console.log(colors.Reset);

console.log(colors.BgBlack);

if (arg[2] === '-help') {
    console.log(colors.FgBlue, 'Справка:');
    console.log(help);
    console.log(colors.Reset);
    process.exit(0);
}

if ((+ arg[2]) && (+ arg[3]) && (+ arg[4])) {
    quad_eq(+arg[2], +arg[3], +arg[4]);
} else {
    console.log(colors.BgRed, 'Не введены или введены некорректные данные в аргументах коммандной строки, посмотрите справку');
    console.log(colors.Reset);
    console.log(colors.BgGreen, 'Вы можете внести значения коэффициентов снова');
    console.log(colors.Reset);

    const rl = readline.createInterface({ input, output });
    let factor = [];
    const factor_name = ['a', 'b', 'c']
    rl.setPrompt(`Введите значение ${factor_name[factor.length]} = `);
    rl.prompt();
    rl.on('line', (input) => {
        if(+input) {
            factor.push(input);
            console.log(input);
            rl.setPrompt(`Введите значение ${factor_name[factor.length]} = `);
            if (factor.length === 3) rl.setPrompt(`Результат >>>> `);
            rl.prompt();  
        } else {
            rl.prompt(); 
        }
        if (factor.length === 3) {
            rl.close();
        };    

    }).on('close', () => {
        quad_eq(+factor[0], +factor[1], +factor[2]);
    });
}





