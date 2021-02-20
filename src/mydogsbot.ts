// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";
const client = new Discord.Client();

import * as config from "../config/config";

import * as MyDogsUtil from "./MyDogsUtil";

export class MyDogsBot {

    public static async main(isBeta: boolean): Promise<void> {
        
        // Register event functions
        client.on('message', function (message){MyDogsBot.onMessage(message);}); // Register this.onMessage to the `message` event.
        client.on('ready', function (){MyDogsBot.onReady();});

    };

    static async onMessage(message: Discord.Message): Promise<void> {

        if (message.content.startsWith(config["commandPrefix"])){ // TODO: Make it so servers can change their own commandprefix. do with database and things.

            var completed = await MyDogsUtil.DiscordUtil.callCmd(message);
            
            if (completed === false){
                message.reply("Command was called incorrectly")
            };

        } else {

            return;

        };
        
    };

    static async onReady(): Promise<void> {

        console.log()
    }
};

client.login(config["botToken"]);
MyDogsBot.main(config["isBeta"]);
