import { Paragraph } from "./interfaces/paragraph.interface";
import { Paragraphs } from "./interfaces/paragraphs.interface";
import { ParagraphsController } from "./classes/paragraphs-controller";

// Hack to populate window object with new function properties
interface Window extends Paragraphs {}
// Hack to allow normal imports while we violating window object
declare const window: any;

const paragraphController = new ParagraphsController([]);

window.insert = (p: Paragraph) => {
  paragraphController.insert(p);
  paragraphController.notify();
}

window.delete = (id: string) => {
  paragraphController.delete(id);
  paragraphController.notify();
}

window.update = (id: string, p: Paragraph) => {
  paragraphController.update(id, p);
  paragraphController.notify();
}

window.undo = () => {
  //TODO
  console.log('undo');
}

window.redo = () => {
  //TODO
  console.log('redo');
}