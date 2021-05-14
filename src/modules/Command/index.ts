import { Message, PermissionResolvable } from 'discord.js';

class Command {
  private _name: string;

  private _description: string;

  private _type: string;

  private _howTo: string;

  private _permission: PermissionResolvable;

  public get name(): string {
    return this._name;
  }

  public get description(): string {
    return this._description;
  }

  public get type(): string {
    return this._type;
  }

  public get howTo(): string {
    return this._howTo;
  }

  public get permission(): PermissionResolvable {
    return this._permission;
  }

  public run: (msg: Message, args: string[]) => Promise<void>;

  constructor(
    name: string,
    description: string,
    type: string,
    howTo: string,
    permission: PermissionResolvable,
    run: { (msg: Message, args: string[]): Promise<void> },
  ) {
    this._name = name;
    this._description = description;
    this._type = type;
    this._howTo = howTo;
    this._permission = permission;
    this.run = run;
  }
}

export default Command;
