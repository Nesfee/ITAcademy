const fs = require('fs-extra');
fs.mkdirSync('Folder1');
fs.writeFileSync('Folder1/text.txt', "Hello");
fs.mkdirSync('Folder2');
fs.moveSync('Folder1/text.txt', 'Folder2/text.txt');
fs.mkdirSync('Folder3');
fs.copyFileSync('Folder2/text.txt', 'Folder3/text.txt');
fs.rmSync('Folder2/text.txt');
fs.rmSync('Folder3/text.txt');
fs.rmdirSync('Folder1');
fs.rmdirSync('Folder2');
fs.rmdirSync('Folder3')