import * as Discord from "discord.js"

export class Hello {

    public static main(message: Discord.Message, args:string, splitArgs:string): boolean {

        message.reply("Hello!");

        return true;

    };
};