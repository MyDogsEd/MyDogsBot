// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";

import { cmdindex, cmdaliases } from "../MyDogsCmd/cmdindex";

import * as config from "../../config/config";

/**
 * Utility class. Does not need to be Initialized
 */
export class DiscordUtil {


    /**
     * 
     * @param clientid client.id of logged in Discord bot user.
     * 
     * @returns Discord bot invite link for the bot in clientid.
     */
    public static createBotInvite(clientid: string): string {
        return `https://discord.com/oauth2/authorize?client_id=${clientid}&scope=bot&permissions=8`; //Hardcoded permissions value: Administrator. No Touchy!
    };
    

    /**
     * @constant serverInvite Server invite link for the MyDogsBot Discord server.
     */
    public static readonly serverInvite: string = "https://discord.gg/VkSJsABxaX"; 


    /**
     * Attempts to call a command for the given Discord.Message.
     * 
     * @param message the Discord.Message oibject for the command calling message.
     * 
     * @returns a boolean value depending on if the command was executed sucessfully or not.
     */
    public static async callCmd(message: Discord.Message): Promise<boolean> { // TODO: add reason(s) for commands not executing.
        if (!message.content.startsWith(config["commandPrefix"])){ return false; };

        var args: string = message.content.substr(config["commandPrefix"].length);
        var splitArgs: string[] = args.split(" ");

        if (cmdindex[splitArgs[0]] !== undefined) {
            message.channel.startTyping();
            try {
                return await cmdindex[splitArgs[0]].main(message, args, splitArgs);
            } catch(err) {
                message.reply("Error in command execution: " + err);
            } finally {
                message.channel.stopTyping();
            };

        } else if (cmdindex[cmdaliases[splitArgs[0]]] !== undefined) {
            message.channel.startTyping();
            try {
                return await cmdindex[cmdaliases[splitArgs[0]]].main(message, args, splitArgs);
            } catch (err) {
                message.reply("Error in command execution: " + err);
            } finally {
                message.channel.stopTyping();
            };

        } else {
            return false;
        }
    }
    

}
