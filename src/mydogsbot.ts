// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js"
const client = new Discord.Client()

import * as MyDogsUtil from "./MyDogsUtil/index"

const config = new MyDogsUtil.ConfigUtil("../CONFIG/config.jdog", function(err){
    throw err;
});

export class MyDogsBot {

    public static async main(isBeta: boolean): Promise<void> {
            MyDogsUtil.
    }

    
}


if (config.config[])
MyDogsBot.main();
