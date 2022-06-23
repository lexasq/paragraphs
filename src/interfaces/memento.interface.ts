import { Paragraph } from "./paragraph.interface";

export interface Memento {
    getState(): Paragraph[];
}