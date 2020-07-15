# drake-says

Discord bot that imitates the rapper Drake and spits out a 🔥 verse for the memes. 

### Installation and running locally

1. Clone this project to your system using 
```bash
git clone https://github.com/chakrakan/drake-says.git
```

2. `cd drake-says` to switch directory to the bot's directory
3. `npm i` or `npm install` to get all its dependencies
4. Create a `.env` file at the root of the project folder
```bash
touch .env
```
Add a variable `DISCORD_BOT_TOKEN=` and leave it empty for now.  

5. Now make sure to create a `New Application` on Discord from their [portal](https://discord.com/developers/applications/)
    - once created, visit its `Bot` tab and grab the `token` and paste it as the value for `DISCORD_BOT_TOKEN`
6. Run the bot using `npm start` and you should be able to use the commands once you invite your own app to a server of your choice.

### Usage

The only trigger command is `!drakesays`

![demo](https://github.com/chakrakan/drake-says/blob/master/demo/demo.gif)
