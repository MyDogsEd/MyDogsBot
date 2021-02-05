// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as minify from "jsonminify";
import * as fs from "fs"

export class Config {

    config: JSON;

    constructor(path: string) {
        this.config = require(minify(fs.readFileSync(path)))
    }
}