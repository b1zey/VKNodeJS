const TOKEN = "";

const VERSION = "5.103";

const api = new (require('./api/api'))(TOKEN, VERSION);

api.getUser(['bizey'])
    .then((result) => console.log(result));