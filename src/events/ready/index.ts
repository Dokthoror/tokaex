import { Client } from 'discord.js';
import DiscordEvent from '../../modules/DiscordEvent';

const name = 'ready';

const run = async (bot: Client) => {
  console.log(`Logged in as ${bot.user!.username}`);
};

const readyEvent = new DiscordEvent(name, run);

export default readyEvent;
