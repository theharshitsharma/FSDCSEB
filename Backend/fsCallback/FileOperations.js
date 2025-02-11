const fs = require('fs');

function dataWrite() {
    fs.writeFile('data.txt', "Welcome to fsd session", (err) => {
        if (err) {
            console.log("Error while writing the data: " + err);
        } else {
            console.log("Data written successfully");
        }
    });
}

function dataRead() {
    fs.readFile("data.txt", (err, data) => {
        if (err) {
            console.log("Error while reading the data: " + err);
        } else {
            console.log(data.toString());
        }
    });
}

function dataAppend() {
    fs.appendFile('data.txt', '\nThis is appended content.', (err) => {
        if (err) {
            console.log("Error while appending data: " + err);
        } else {
            console.log("Data appended successfully");
        }
    });
}

function dataDelete() {
    fs.unlink('data.txt', (err) => {
        if (err) {
            console.log("Error while deleting the file: " + err);
        } else {
            console.log("File deleted successfully");
        }
    });
}

// Exporting the functions as an object
module.exports = { dataWrite, dataRead, dataAppend, dataDelete };
