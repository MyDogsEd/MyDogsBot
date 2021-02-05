// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

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
     * @returns Server invite link for the MyDogsBot Discord server.
     */
    public static serverInvite(): string {
        return "https://discord.gg/VkSJsABxaX"; 
    };

}
