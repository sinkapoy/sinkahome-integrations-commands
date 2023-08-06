import { ICommand } from "./ICommand";
import { WritePropertyCommand } from "./commands/WriteProperty";

export * from "./ICommand";
export * from "./commands/WriteProperty";

export const commandsHolder = {
    WritePropertyCommand: WritePropertyCommand
} as Record<string, new (...args: any[])=> ICommand>;