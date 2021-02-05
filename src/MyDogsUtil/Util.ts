// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>


import * as Discord from "discord.js";

import * as minify from "jsonminify";

import * as fs from "fs";

/** 
 * Utility Class. Does not need to be Initialized.
 */
export class Util {
    
    /**
     * 
     * @param min The small number.
     * @param max The large number.
     * 
     * @returns A random number between `min` and `max` (Inclusive, Exclusive).
     */
    public static randomInt(min: number, max: number) {
        return Math.floor( Math.random() * (max - min) + min )
    };

    //TODO: command verification function (function that verifies that all commands are callable and are written correctly)
}


