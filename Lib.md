# MyDogsBot Library Reference

This file lists the inputs and returns for all the functions
in the various MyDogsBot libraries.

The Library reference will be formatted as follows, in order:

- Individual libraries will be listed in level 2 headings. `## Foo.Bar`
- Classes will use level 3 headings. `### class Boo`
- Functions will be bulleted, bolded, and in code blocks. `- **```boo.(boor, far)```**`
- Descriptions for functions will be in plain text under the function.
- Important info will be put in a quote block under the function description. `>TODO: make foo not bar`

## MyDogsCommands
Commands work in a specific way in MyDogsBot:
- Every command is a class. This class must be the name of the file (With the same capitalization, Minus the .ts extention).
- The class must contain an index object (Ref below)
- The class constructor is the 


## MyDogsDebug

### class Debug
- **`Debug.log(message: string)`**
Params: `message: string` string of message to send to the console
Returns: void

## MyDogsUitl

### class Util

- **`Util.randomInt(min, max)`**
Returns a random int between `min` (including) and `max` (not including)

- **`Util.jsonCommentParser(file)`**
Accepts the path of a JSON file with comments as a string,
removes the comments, parses the file, then returns the parsed object.
>TODO: Add error handling via callback -
>Pass the error to where the function is called, rather than
>just handling the error inside the function definition

### class RandomStatus

- **`new RandomStatus()`**


- **`RandomStatus.newRandomStatus()`**
This function randomly selects a status from `randomStatusList.json`
and applies it as the bot's status.
**Accepts:**
**Returns:** Array containing 2 values:
```
[StatusType, StatusText]
// StatusType: `string`, either "WATCHING", "PLAYING", or "LISTENING"
// StatusText: `string`, text of the status sent to Discord.
```
