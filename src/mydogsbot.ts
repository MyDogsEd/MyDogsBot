// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";
const client = new Discord.Client();

//import { cmdindex, cmdaliases } from "./MyDogsCmd/cmdindex"

import * as config from "../config/config"

export class MyDogsBot {

    public static async main(isBeta: boolean): Promise<void> {
        
        // Register event functions
        client.on('message', function (message){MyDogsBot.onMessage(message);}); // Register this.onMessage to the `message` event.

    };

    /**
     * Checks to see of a command exists for a set of args, then executes the command.
     * (Keep in mind that commands are executed by calling the `main()` method from the class refrenced in the command index.)
     * 
     * @param message the Discord.Message of the command message. 
     * 
     * @returns Boolean value of whether or not the command was executed sucessfully.
     */
    //public static async callCmd(message: Discord.Message): boolean {

    //}

    static async onMessage(message: Discord.Message): Promise<void> {

        if (message.content.startsWith(config["commandPrefix"])){ // TODO: Make it so servers can change their own commandprefix. do with database and things.

            //const result = this.callCmd(message);

        } else {

            return;

        };
        
    };
};

client.login(config["botToken"]);
MyDogsBot.main(config["isBeta"]);
