import { Hello } from "./Hello"

export const cmdindex: Object = {
    "hello": Hello.main(),

    Aliases : {
        "hi": "hello"
    }
}
// This might end up being a bad idea, depending on how much freedom
// there is in calling commands here. Might have to rework this later.
