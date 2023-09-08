import { ICommand } from "./ICommand";
import { WritePropertyCommand } from "./commands/WriteProperty";
import { ReadPropertyCommand } from "./commands/ReadProperty";

export * from "./ICommand";
export * from "./commands/WriteProperty";
export * from "./commands/ReadProperty";

export const commandsHolder = {
    WritePropertyCommand,
    ReadPropertyCommand,
} as Record<string, new (...args: any[])=> ICommand>;