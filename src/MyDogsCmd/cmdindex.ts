// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as cmd from "./cmds/index";

import * as Discord from "discord.js";

/**
 * Lists all commands in a `key: string`, `value: Class` object.
 */
export const cmdindex: cmdindex = {
    "hello": cmd.Hello,
};

/**
 * Lists all command aliases in a `key: string`, `value: string` object.
 * (The `value` points to a key in `cmdindex`)
 */
export const cmdaliases: cmdaliases = {
    "hi": "hello",
};

class CommandClass {
    public async main(message: Discord.Message, args: string, splitArgs: string[]): Promise<boolean> {
        return false;
    }
}

interface cmdindex {
    [key: string]: CommandClass;
};

interface cmdaliases {
    [key: string]: string;
};



// This might end up being a bad idea, depending on how much freedom
// there is in calling commands here. Might have to rework this later.

// Update on the above: 2021/2/18:
// It kind of works... Seems hacky though. Might still need to rework this later.
