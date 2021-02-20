// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as Discord from "discord.js";
import * as MDU from "../../MyDogsUtil";
import * as config from "../../../config/config";

class DiscordLinks {

    public static async serverInvite(message: Discord.Message, args: string, splitArgs: string[]): Promise<boolean> {

        var homeGuild = message.client.guilds.cache.get(config["homeConfig"]["homeGuild"]);
        var exMessageLast = homeGuild.channels.cache.get(config["homeConfig"]["homeGuildMainChannelId"]) as Discord.TextChannel;
        var messageLast = await exMessageLast.messages.fetch({limit: 1});
        // ^ When we request a channel from the cache, we don't know if it is a TextChannel, so Discord.js gives it to us as a GuildChannel; so we have to cast it to TextChannel.
        const serverEmbed = new Discord.MessageEmbed()
            .setColor('#639fff')
            .setFooter('MyDogsBot Discord', homeGuild.iconURL())
            .setThumbnail(homeGuild.iconURL())
            .setTitle('MyDogsBot Discord')
            .setURL(MDU.DiscordUtil.serverInvite)
            .setDescription('We have memes! Try it Today!')
            .addField('Latest message in `#general-stuff', '[' + messageLast.array()[0].author.username + '] ' + messageLast.array()[0].cleanContent)
        
        message.channel.send(serverEmbed);
        return true;
    };
    
    public static async botInvite(message: Discord.Message, args: string, splitArgs: string[]): Promise<boolean> {

        message.channel.send("Link to invite the bot: " + MDU.DiscordUtil.createBotInvite(message.client.user.id));
        return true;

    };
};

export class ServerInvite {
    public static async main(message: Discord.Message, args: string, splitArgs: string[]): Promise<boolean> {
        return DiscordLinks.serverInvite(message, args, splitArgs);
    };
};

export class BotInvite {
    public static async main(message: Discord.Message, args: string, splitArgs: string[]): Promise<boolean> {
        return DiscordLinks.botInvite(message, args, splitArgs);
    };
};
