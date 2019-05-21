const request = require('request');
const host = "https://na1.api.riotgames.com"
const key = process.env.RIOT_KEY;
var getPlayerByName = function (playerName, callback) {
    const endpoint = "/lol/summoner/v4/summoners/by-name/" + playerName;
    var url = host + endpoint + "?api_key=" + key;
    request.get(url, (err, res, body) => {
        if(err)
            callback(err);
        else
            callback(JSON.parse(body));
    });
}

module.exports = {
    getPlayerByName: getPlayerByName
}