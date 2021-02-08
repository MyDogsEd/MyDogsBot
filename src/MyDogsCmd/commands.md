# MyDogsBot Commands
Commands will be registered in `./MyDogsCmd/cmdindex.ts` in the following way:
``` typescript
export const cmdindex: Object { // This object lists all commands and their aliases.

    "hello": Hello.main(), // The name of the command is in all lowercase, 
    // And points to the function that will execute the command.

    Aliases : {
        "hi": "hello" // Command name Aliases are registered here. 
        // This will be searched if cannot find command normally.
    };
};
```

### Note
- Commands must always return a boolean value! True if the command was executed sucessfully, false if not.
