const fs = require('fs');

const config = 
{
    "homeConfig": {
        "homeGuild": "734502410952769607",
        "botOwner": "335802802335121408"
    },
    
    "isBeta": true,
    "commandPrefix": "|",
    "botToken": JSON.parse(fs.readFileSync("./token.bottoken"))
};

module.exports = config;
