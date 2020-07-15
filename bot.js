/* eslint-disable no-sparse-arrays */
const { Client } = require("discord.js");
const client = new Client();
// cleaned data of existing lyrics from a lambda instance
const data = require("./data.json");
const prefix = "!drakesays";

function getRandomInt(max) {
	return Math.floor(Math.random() * Math.floor(max));
}

client.on("ready", () => {
	console.log(`Logged in as ${client.user.tag}!`);
	client.user.setPresence({
		activity: {
			name: "/drakesays",
		},
	});
});

client.on("message", (msg) => {
	if (!msg.content.startsWith(prefix) || msg.author.bot) return;
	msg.channel.send(data[getRandomInt(data.length)]);
});

client.login(process.env.DISCORD_BOT_TOKEN);
