# MyDogsBot
baby bot

This code runs the bot MyDogsBot and is not *designed* to work outside of it's native enviroment, although there is no reason why it should not.

## Organization
The code for the bot is organized into many diffrent folders to improve readability and development.

All of the working code for the bot is in the `/src/` dir, and is written in TypeScript. The `tsconfig.json` 
file instructs the compiler to only read from this directory, and output all compiled code to the `/out/` dir.
