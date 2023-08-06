import { homeEngine, uuidT } from "@sinkapoy/home-core";
import { ICommand } from "../ICommand";

export class WritePropertyCommand implements ICommand {
    name: 'write property';

    constructor(private readonly uuid: uuidT, private readonly id: string, private readonly value: string | number | boolean) {    }

    async execute(): Promise<void> {
        const gadget = homeEngine.getEntityByName(this.uuid);
        if(!gadget) return;

        homeEngine.emit('writeGadgetProperty', gadget, this.id, this.value);
    }
}