# drake-says

Aubrey Drake Graham is a Canadian rapper, singer, songwriter, actor, record producer, and entrepreneur.

While he couldn't make it to your Discord server personally, he embodied his persona within this bot and left it as a gift for you. You can have him virtually 🙏🏼 bless your chat with musings, profound sayings, and lessons learned from his life experiences, as documented in songs spanning his entire career. 

> NOTE: I have an AWS free tier, and have a limit warning in place for the EC2 instance this bot AND the [leetcode bot](https://github.com/chakrakan/leetcode-disc) is hosted on. Depending on monthly usage, the service will go down so I don't incur charges for the month. If the leetcode bot is up, which you can check(status green) [here](https://discord.bots.gg/bots/732640663119593493), then so is Drake-bot. Sorry, in advance!

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
