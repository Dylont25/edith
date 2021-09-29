const fs = require('fs');

let date_ob = new Date();
let date = ("0" + date_ob.getDate()).slice(-2);
let month = ("0" + (date_ob.getMonth() + 1)).slice(-2);
let year = date_ob.getFullYear();
let hours = date_ob.getHours();
let minutes = date_ob.getMinutes();
let seconds = date_ob.getSeconds();

module.exports = (type, message, title) => {
    if (!title) title = "SYSTEM";
    console.log(`- ${message}`);
    fs.appendFile('storage/logs.txt', `\n ${year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds} [${type}] ${message}`, (err) => {
        if (err) throw fs.appendFile('storage/logs.txt', `\n ${year + "-" + month + "-" + date + " " + hours + ":" + minutes + ":" + seconds} [ERROR] ${err}`);
    });
}