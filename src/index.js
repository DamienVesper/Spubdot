import Discord, { Intents } from 'discord.js';

import * as dotenv from 'dotenv';
dotenv.config();

const client = new Discord.Client({
    intents: [
        Intents.FLAGS.GUILD_MEMBERS,
        Intents.FLAGS.GUILDS
    ]
});

const prefix = `!`;

client.on(`message`, async (message) => {
    if (message.content.slice(0, prefix.length) === prefix) message.

});

client.login(process.env.DISCORD_TOKEN);
