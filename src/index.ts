import { Paragraph } from "./interfaces/paragraph.interface";
import { Paragraphs } from "./interfaces/paragraphs.interface";
import { ParagraphsController } from "./classes/paragraphs-controller";
import { ParagraphsObserver } from "./classes/paragraphs-observer";
import { StateSaver } from "./classes/state-saver";

// Hack to populate window object with new function properties
interface Window extends Paragraphs {}
// Hack to allow normal imports while we're violating window object
declare const window: any;

const paragraphController = new ParagraphsController([]);
const stateSaver = new StateSaver(paragraphController);
const paragraphRenderer = new ParagraphsObserver();

paragraphController.attach(paragraphRenderer);

window.insert = (p: Paragraph) => {
  stateSaver.backupParagraphs();
  paragraphController.insert(p);
  paragraphController.notify();
}

window.delete = (id: string) => {
  stateSaver.backupParagraphs();
  paragraphController.delete(id);
  paragraphController.notify();
}

window.update = (id: string, p: Paragraph) => {
  stateSaver.backupParagraphs();
  paragraphController.update(id, p);
  paragraphController.notify();
}

window.undo = () => {
  stateSaver.undo();
  paragraphController.notify();
}

window.redo = () => {
  stateSaver.redo();
  paragraphController.notify();
}