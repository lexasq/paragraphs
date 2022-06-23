import { Memento } from "../interfaces/memento.interface";
import { ParagraphsController } from "./paragraphs-controller";

export class StateSaver {
    private snapshots: Memento[] = [];
    private redoSnapshots: Memento[] = [];

    private paragraphController: ParagraphsController;

    constructor(paragraphController: ParagraphsController) {
        this.paragraphController = paragraphController;
    }

    public backupParagraphs(): void {
        this.redoSnapshots = [];
        this.snapshots.push(this.paragraphController.saveStateSnapshot());
    }

    public undo(): void {
        if (!this.snapshots.length) {
            return;
        }

        const snapshot = this.snapshots.pop();
        this.redoSnapshots.push(this.paragraphController.saveStateSnapshot());
        this.paragraphController.restoreStateToSnapshot(snapshot);
    }

    public redo(): void {
        if (!this.redoSnapshots.length) {
            return;
        }

        const snapshot = this.redoSnapshots.pop();
        this.snapshots.push(this.paragraphController.saveStateSnapshot());
        this.paragraphController.restoreStateToSnapshot(snapshot);
    }
}
