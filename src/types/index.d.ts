import { Message } from 'discord.js';

export interface commandRun {
  (msg: Message, args: string[]): Promise<void>;
}
