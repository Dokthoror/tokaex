import { PermissionResolvable, Message } from 'discord.js';
import { commandRun } from '../../types/index';
import Command from '../../modules/Command';

const name = 'ping';

const description = 'pong!';

const type = 'MISCELLANEOUS';

const howTo = '';

const permission: PermissionResolvable = 'SEND_MESSAGES';

const run: commandRun = async (msg: Message, _args: string[]) => {
  msg.reply('pong!');
};

const pingCommand = new Command(name, description, type, howTo, permission, run);

export default pingCommand;
