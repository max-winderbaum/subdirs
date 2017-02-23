const fs = require('fs-extra');

const folder = './fromDir';
const otherFolder = './toDir';
const numSubfolders = 20;

const subfolderNames = [];
for(let i=0; i<numSubfolders; i++) {
    subfolderNames.push(`subfolder_${Number(i).toString()}`);
}

subfolderNames.forEach(name => fs.mkdirSync(`${otherFolder}/${name}`));

fs.readdir(folder, (err, files) => {
    let currentSubfolder = 0;
    files.forEach(file => {
        if (currentSubfolder >= numSubfolders) {
            currentSubfolder = 0;
        }

        fs.copySync(`${folder}/${file}`, `${otherFolder}/${subfolderNames[currentSubfolder]}/${file}`);
        currentSubfolder++;
    });
});
