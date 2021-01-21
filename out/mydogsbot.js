// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>
import * as Discord from "discord.js";
const client = new Discord.Client();
var MyDogsBot;
(function (MyDogsBot) {
    class Main {
        static main() {
            client.on('message', async function (message) {
                if (message.cleanContent.startsWith(/*TODO: config.prefix */ "|")) {
                }
            });
        }
    }
    MyDogsBot.Main = Main;
})(MyDogsBot || (MyDogsBot = {}));
MyDogsBot.Main.main();
