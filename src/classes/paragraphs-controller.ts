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
        this.state = this.replaceAt(this.state, updateIndex, p)
    }

    public replaceAt(array, index, value): Paragraph[] {
        const ret = array.slice(0);
        ret[index] = value;
        return ret;
    }

    public getItemIndexById(id: string): number {
        return this.state.findIndex(item => item.id === id)
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
            observer.update(this);
        }
    }
}
