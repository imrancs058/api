module.exports = {

    liveDb : {
        host: 'us-cdbr-iron-east-04.cleardb.net',
        user: 'be4633b15bf075',
        pass:'e017f0f3',
        port:3306,
        database:'heroku_94c78d6885239c4',
        dialect:'mysql',
        pool:{
            min:0,
            max:5,
            idle:10000
        }
    },

    server : {
        host:'http://127.0.0.1',
        port : 1234
    },
    admin : {
        username:'admin',
        password : 'admin123'
    },
    dirPath : {
        model:'../models',

    },
};