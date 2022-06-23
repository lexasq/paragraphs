import { Paragraph } from "./paragraph.interface";

export interface Paragraphs {
    insert(p: Paragraph): void;
    delete(id: string): void;
    update(id: string, p: Paragraph): void;
    undo(): void;
    redo(): void;
}
