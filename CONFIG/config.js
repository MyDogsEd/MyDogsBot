// This configuration file is part of MyDogsBot 
// and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

// import * as fs from "fs";

const fs = require('fs');

//import * as path from "path";

const path = require('path');

const config = 
{
    "homeConfig": {
        "homeGuild": "734502410952769607",
        "botOwner": "335802802335121408"
    },
    
    "isBeta": true,
    "commandPrefix": "|",
    "botToken": JSON.parse(fs.readFileSync(path.resolve(__dirname, "./token.bottoken")).toString()).betatoken
};
module.exports = config;
