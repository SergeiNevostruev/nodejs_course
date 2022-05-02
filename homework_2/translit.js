const path = require('path');
const fs = require('fs'); 
const {func_translit} = require('./func_translit');


const arg = process.argv;
const prog = path.basename(arg[0], '.exe');
const script = path.basename(arg[1]);

const readFilePath = path.join(path.dirname(arg[1]), `${arg[2]}`);
const resultFilePath = path.join(path.dirname(arg[1]), `translit_${arg[2]}`);

const changeFile = fs.existsSync(readFilePath);

console.log(`Для запуска программы транслитерации наберите ${prog} ${script} <file-name>, для выхода из программы ctrl+C. Файл должен лежать в папке со скриптом.`);

if (!arg[2] || arg.length > 3 || !changeFile) {
    console.log(`Некорректное имя файла или такой файл не существует. <file-name> - должен содержать назмание файла и расширение, например file.txt. Между названием скрипта и фалом один пробел.`);
    // console.log(arg[2], arg.length);
    process.exit(1);
}

const callback = (er, data) => {
    translit_data = func_translit(data.toString());
    fs.writeFile(resultFilePath, translit_data, () => {
        console.log('Файл с транслитерацией записан');
    })
}

fs.readFile(readFilePath, callback);

