// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>

export module MyDogsUtil {

    export class Discord {

        public static createBotInvite(client: Discord.Client): string {
            return `https://discord.com/oauth2/authorize?client_id=${client.id}&scope=bot&permissions=8`
        } // Takes the client variable. Returns an invite link for the bot. (ONLY CALL AFTER LOGGED IN - OTHERWISE SHIT WILL BREAK!!!!)

        public static serverInvite(): string {
            return "https://discord.gg/VkSJsABxaX"; 
        } // Takes: Returns: String of MyDogsBot Discord Server Link (Not to be confused with Discord.createBotInvite())


    }
}
