import { Hello } from "./Hello"

/**
 * Lists all commands in a `key: string`, `value: Class` object.
 */
export const cmdindex: cmdindex = {
    "hello": Hello,
};

/**
 * Lists all command aliases in
 */
export const cmdaliases: cmdaliases = {
    "hi": "hello"
};

/**
 * Used to define the type for the `cmdindex` object.
 */
interface cmdindex {
    [key: string]: cmdIndexRef
};

interface cmdIndexRef {
    main: Function;
};

/**
 * Used to define the type for the `cmdaliases` object.
 */
interface cmdaliases {
    [key: string]: string;
};

/**
 * Dummy class for refrence.
 */
class Class {};

// This might end up being a bad idea, depending on how much freedom
// there is in calling commands here. Might have to rework this later.
