// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>

import * as Discord from "discord.js"
const client = new Discord.Client()

namespace MyDogsBot {
    export class Main {
        public static main(): void {
            client.on ('message', async function(message: Discord.Message): Promise<void>{
                if (message.cleanContent.startsWith(/*TODO: config.prefix */ "|")){
                    
                }
            }
            
        }
    }
}


MyDogsBot.Main.main();