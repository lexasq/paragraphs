import { Paragraph } from "../interfaces/paragraph.interface";
import { Memento } from "../interfaces/memento.interface";

export class ParagraphsMemento implements Memento {
    readonly state: Paragraph[];

    constructor(state: Paragraph[]) {
        this.state = state;
    }

    public getState(): Paragraph[] {
        return this.state;
    }

}