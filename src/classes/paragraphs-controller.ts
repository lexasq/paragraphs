import { Paragraph } from "../interfaces/paragraph.interface";
import { Subject } from "../interfaces/subject-and-observer.interface";
import { Memento } from "../interfaces/memento.interface";
import { Observer } from "../interfaces/subject-and-observer.interface";
import { ParagraphsMemento } from "./paragraphs-memento";


export class ParagraphsController implements Subject {

    private state: Paragraph[];
    private observers: Observer[] = [];

    constructor(state: Paragraph[]) {
        this.state = state;
    }

    private static replaceAt(array: Paragraph[], index: number, value: Paragraph): Paragraph[] {
        const ret = array.slice(0);
        ret[index] = value;
        return ret;
    }

    private getItemIndexById(id: string): number {
        return this.state.findIndex(item => item.id === id)
    }

    public getState(): Paragraph[] {
        return this.state;
    }

    public insert(p: Paragraph): void {
        this.state = [
            ...this.state,
            p
        ]
    }

    public delete(id: string): void {
        this.state = this.state.filter(item => item.id !== id);
    }

    public update(id: string, p: Paragraph): void {
        const updateIndex = this.getItemIndexById(id);
        this.state = ParagraphsController.replaceAt(this.state, updateIndex, p)
    }

    public saveStateSnapshot(): Memento {
        return new ParagraphsMemento(this.state);
    }

    public restoreStateToSnapshot(memento: Memento): void {
        this.state = memento.getState();
    }

    public attach(observer: Observer): void {
        const isExist = this.observers.includes(observer);
        if (isExist) {
            return console.log('Subject: Observer has been attached already.');
        }

        this.observers.push(observer);
    }

    public detach(observer: Observer): void {
        const observerIndex = this.observers.indexOf(observer);
        if (observerIndex === -1) {
            return console.log('Subject: Nonexistent observer.');
        }

        this.observers.splice(observerIndex, 1);
    }

    public notify(): void {
        for (const observer of this.observers) {
            observer.triggerViewUpdate(this);
        }
    }
}
