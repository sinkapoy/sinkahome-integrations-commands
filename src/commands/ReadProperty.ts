import { IProperty, PropertiesComponent, homeEngine, uuidT } from "@sinkapoy/home-core";
import { ICommand } from "../ICommand";

export class ReadPropertyCommand implements ICommand {
    property: Partial<IProperty> = {} as IProperty
    constructor(
        private readonly uuid: uuidT,
        private readonly id: string,
    ) { }

    async execute(): Promise<void> {
        const gadget = homeEngine.getEntityByName(this.uuid);
        const properties = gadget?.get(PropertiesComponent);
        if (!properties) return;
        Object.assign(this.property, properties.get(this.id));
    }
}