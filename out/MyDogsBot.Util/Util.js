// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot>
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const client = new Discord.Client();
class Util {
    constructor() {
        // TODO: add client.login for token.bottoken.
    }
    randomInt(min, max) {
        return Math.floor(Math.random() * (max - min) + min);
    }
    jsonCommentParser(path, errorCallback) {
        return __awaiter(this, void 0, void 0, function* () {
            var jdog;
            fs.readFile(path, 'utf8', function (err, data) {
                if (err) {
                    errorCallback(err);
                }
                return data;
            });
            jdog = minify(jdog);
            jdog = JSON.parse(jdog);
            return jdog;
        });
    }
}
module.exports = Util;
export {};
