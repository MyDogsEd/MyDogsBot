// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>
import * as Discord from "discord.js";
const client = new Discord.Client();
import * as fs from "fs";
export var MyDogsUtil;
(function (MyDogsUtil) {
    class Util {
        static randomInt(min, max) {
            return Math.floor(Math.random() * (max - min) + min);
        } // Takes a min and max int, returns a random int. (Inclusive, Exclusive)
        static createBotInvite(client) {
            return `https://discord.com/oauth2/authorize?client_id=${client.id}&scope=bot&permissions=8`;
        } // Takes the client variable. Returns an invite link for the bot. (ONLY CALL AFTER LOGGED IN - OTHERWISE SHIT WILL BREAK!!!!)
        static serverInvite() {
            return "https://discord.gg/VkSJsABxaX";
        } // Takes: Returns: String of MyDogsBot Discord Server Link (Not to be confused with Util.createBotInvite())
        static importCommandFiles(path) {
            var commandFiles = fs.readdirSync(path).filter(function (file) { return file.endsWith('.js'); });
            var commandCollection = new Discord.Collection();
            for (const files of commandFiles) {
                var command = require(path + '/' + files);
            }
        }
    }
    MyDogsUtil.Util = Util;
    class RandomStatus {
    }
    MyDogsUtil.RandomStatus = RandomStatus;
})(MyDogsUtil || (MyDogsUtil = {}));
