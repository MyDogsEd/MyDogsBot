// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>


import * as Discord from "discord.js";

import * as minify from "jsonminify";

import * as fs from "fs";

export class Util {

    public static randomInt(min: number, max: number) {
        return Math.floor( Math.random() * (max - min) + min )
    } // Takes a min and max int, returns a random int. (Inclusive, Exclusive)

    public static importCommandFiles(path: string): Discord.Collection<string, object>{
        var commandFiles: string[] = fs.readdirSync(path).filter(function (file: string){return file.endsWith('.js')});
        var commandCollection = new Discord.Collection<string, object>();

        for (const file of commandFiles){
            var command = require(path + '/' + file);
            console.log(`commandFile ${file} loaded!`); // TODO: make this Debug.log when i finidh writing that part - MDE
            commandCollection.set(command.Command.commandIndex.name, command.Command.main()); // TODO: make this work KEKW
        }
        return commandCollection;

    } // (hopefully) returns a Discord.Collection of command files in the dir mapped by their names, containing the main() function of each command

    public static async loadConfig(path: string): JSON{
         return JSON.parse(minify(fs.readFileSync(path, null)))
    } // ~Should~ return a json object from a json formatted file with comments (hopefully)

    //TODO: command verification function (function that verifies that all commands are callable and are written correctly)
}


