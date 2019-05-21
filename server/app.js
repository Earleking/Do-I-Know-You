// Load env vars
const dotenv = require('dotenv');
dotenv.config();

var rAPI = require('./riot-api');

rAPI.getPlayerByName("earleking", (data) => {
    console.log(data);
});