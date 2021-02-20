# MyDogsBot Commands
Commands will be registered in `./MyDogsCmd/cmdindex.ts` in the following way:

``` typescript

export const cmdindex: Object { // This object lists all commands and their aliases.

    "hello": cmds.Hello, // The name of the command is in all lowercase, 
    // And contains a refrence to a class that contains a `main()` method that executes the command.

};
export const cmdaliases: cmdaliases { // Command name Aliases are registered here.
    
    "hi": "hello" // `key: string` is the name of the command alias, `value: string` is the name of the command key in `cmdindex`.

};

```

### Note
- Commands must always return a boolean value! True if the command was executed sucessfully, false if not.
