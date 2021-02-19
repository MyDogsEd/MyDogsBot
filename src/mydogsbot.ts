// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";
const client = new Discord.Client();

import { cmdindex, cmdaliases } from "./MyDogsCmd/cmdindex"

import * as config from "../config/config.js"

export class MyDogsBot {

    public static async main(isBeta: boolean): Promise<void> {
        
        // Register event functions
        client.on('message', function (message){MyDogsBot.onMessage(message);}); // Register this.onMessage to the `message` event.
        console.log("main()");
    };

    public static async onMessage(message: Discord.Message): Promise<void> {

        console.log('OnMessage method called');

        if (message.content.startsWith(config["commandPrefix"])){

            console.log("Message starts with `commandPrefix`");

            var args = message.content.substring(config["commandPrefix"].length);
            console.log(config["commandPrefix"].length) // Should be 1
            console.log(args); // Should print the command without the prefix
            var splitArgs = args.split(" ");
            console.log(splitArgs);

            if (cmdindex[splitArgs[0]] !== undefined) {
                console.log('Command name has been found in `cmdIndex`');

                var completed: boolean = cmdindex[splitArgs[0]].main(message, args, splitArgs);

            } else if (cmdaliases[splitArgs[0]] !== undefined) {
                console.log('Command name has been found in `cmdaliases`');

                var completed: boolean = cmdindex[cmdaliases[splitArgs[0]]].main(message, args, splitArgs);
            } else {
                console.log('Command name has not been found in either `cmdindex` or `cmdaliases`')
            }


        } else {

            return;

        };
        
    };
};

client.login(config["botToken"]);
MyDogsBot.main(config["isBeta"]);
