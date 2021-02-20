// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js"

/**
 * Example command class.
 */
export class Hello {

    public static async main(message: Discord.Message, args:string, splitArgs:string[]): Promise<boolean> {

        message.reply("Hello!");

        return true;

    };
};
