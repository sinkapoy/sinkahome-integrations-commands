export interface ICommand {
    name?: string;
    execute(): Promise<void>;
    revert?(): Promise<void>;
}