class Event {
  private _name: string;

  public get name(): string {
    return this._name;
  }

  public run: (...args: any[]) => Promise<void>;

  constructor(name: string, run: { (...args: any[]): Promise<void> }) {
    this._name = name;
    this.run = run;
  }
}

export default Event;
