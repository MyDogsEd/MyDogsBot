// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";
const client = new Discord.Client();

const config = require("../config/config.json");

export class MyDogsBot {

    public static async main(isBeta: boolean): Promise<void> {
        
        // Register event functions
        client.on('message', function (message){this.onMessage(message);}); // Register this.onMessage to the `message` event.

    };

    public static async onMessage(message: Discord.Message): Promise<void> {
        
        
    };
};

client.login(config["botToken"]);
MyDogsBot.main(config["isBeta"]);
