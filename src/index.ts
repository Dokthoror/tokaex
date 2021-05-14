import * as dotenv from 'dotenv';
import { Client } from 'discord.js';

import eventsHandler from './events/eventsHandler';

dotenv.config();

const bot = new Client();

bot.on('ready', () => {
  eventsHandler.find((e) => e.name == 'ready')!.run(bot);
});

bot.on('message', (msg) => {
  eventsHandler.find((e) => e.name == 'message')!.run(msg);
});

bot.login(process.env.TOKEN);
