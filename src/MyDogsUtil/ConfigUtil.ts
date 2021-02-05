// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

import * as minify from "jsonminify";
import * as fs from "fs"

export class ConfigUtil {

    private _config: JSON;

    /** 
    * Initlize the ConfigUtil object with the constructor.
    * 
    * @param path - File path to the json file to load.
    * 
    * @param callback - Callback function to handle file load/parse errors
    * 
    */
    constructor(path: fs.PathLike, callback?: errorCallback) {
        try {
            this._config = JSON.parse(minify(fs.readFileSync(path)));
        } catch (err) {
            callback(err);
        };

    };

    /**
     * Get the config json object set in the constructor.
     * 
     * @returns JSON object initilized in constructor. 
     */
    public get config():JSON {

        return this._config;

    };

    /**
     * Techinically, this value has a setter, but the setter only returns an error.
     * @readonly
     */
    public set config(value: JSON) {

        throw new Error('This properity is read-only!');

    }

}

interface errorCallback {

    (err:Error): void;

}
