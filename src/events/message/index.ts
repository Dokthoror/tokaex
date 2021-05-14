import { Message } from 'discord.js';
import commandsHandler from '../../commands/commandsHandler';
import DiscordEvent from '../../modules/DiscordEvent';

const name = 'message';

const run = async (msg: Message) => {
  if (msg.author.bot || msg.channel.type === 'dm') return;

  const args = msg.content.split(/\s+/);
  const commandName: string = args.shift()!.toLowerCase();
  const command = commandsHandler.find((c) => c.name === commandName);

  if (command) {
    if (msg.member!.hasPermission(command.permission)) {
      command.run(msg, args);
    }
  }
};

const messageEvent = new DiscordEvent(name, run);

export default messageEvent;
