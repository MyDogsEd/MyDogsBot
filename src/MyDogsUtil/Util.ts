// This code file is part of MyDogsBot and is Copyright (c) MyDogsEd 2021.
// See the LICENSE file in the project root for full license text.
// <https://github.com/MyDogsEd/MyDogsBot> <mydogsbot@mydogsed.dev>

/** 
 * Utility Class.
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

}
