//process.argv.forEach((val,index)=>{console.log(index,val);});

//5th solution
const fs=require('fs');
const path=require('path');
//const pt='C:/Users/Никита/cwp01/summary.js';
let pt = process.argv[2];

const name='\\summary.js';
let pathh=pt+name;
var getfiles="const fs=require('fs');\n" +
    "const path=require('path');\n \
    const pathh='"+pt+"';\
    const getFiles = function (dir, files_){\n \
        files_ = files_ || [];\n \
        var files = fs.readdirSync(dir);\n \
        for (var i in files){\n\
            var name = dir + '/' + files[i];\n \
            console.log(dir + '/' + files[i]);\n \
            if (fs.statSync(name).isDirectory()){\n \
                getFiles(name, files_);\n \
            } else {\n\
                files_.push(name);\n\
            }\n\
        }\n\
        return files_;\n\
    };\n\
    getFiles('"+pt+"');\n " +
    "" +
    "function createDir(pathh){\n" +
    "let dirs = path.formate().split('\\');\n" +
    "        let prevDir = dirs.pop();\n" +
    "        if(prevDir == '')\n" +
    "{\n" +
    "            prevDir = dirs.pop();\n" +
    "        }\n" +
    " let new_directory = pathh + '/' + prevDir;\n" +
    "        fs.mkdir(new_directory, function (err) {\n" +
    "        if (err)\n" +
    "{\n" +
    "            console.error('Произошла ошибка при создании директории');\n" +
    "        }\n" +
    "else{console.log('Директория создана успешно');}" +
    "    });\n" +
    "    return new_directory;};\n" +
    "createDir(pathh);\n" ;

// noinspection JSAnnotator
fs.open(pathh, "w+", 0644, function(err, file_handle) {
    if (!err) {
        fs.write(file_handle,getfiles, null, 'UTF-8', function(err, written) {
            if (!err) {
                console.log("Текст успешно записан в файл");

            } else {
                console.log("Произошла ошибка при записи");
            }
        });
    } else {
        console.log("Произошла ошибка при открытии");
    }
});


