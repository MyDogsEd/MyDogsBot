// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>

import * as Discord from "discord.js"
const client = new Discord.Client()

export class Command {
    public static commandIndex: object = {
        name: "hello",
        short: "hi",

    };
    constructor(message: Discord.Message){
    message.reply("Hello!")
    }
}