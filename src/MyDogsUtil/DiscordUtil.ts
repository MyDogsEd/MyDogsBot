// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";



export class DiscordUtil {

    public static createBotInvite(clientid: string): string {
        return `https://discord.com/oauth2/authorize?client_id=${clientid}&scope=bot&permissions=8`
    } // Takes the client variable. Returns an invite link for the bot. (ONLY CALL AFTER LOGGED IN - OTHERWISE SHIT WILL BREAK!!!!)

    public static serverInvite(): string {
        return "https://discord.gg/VkSJsABxaX"; 
    } // Takes: Returns: String of MyDogsBot Discord Server Link (Not to be confused with Discord.createBotInvite())


}
