import { Paragraph } from "./interfaces/paragraph.interface";
import { Paragraphs } from "./interfaces/paragraphs.interface";

interface Window extends Paragraphs {}
declare const window: any;

window.insert = (p: Paragraph) => {
  //TODO
  console.log('insert');
}

window.delete = (id: string) => {
  //TODO
}

window.update = (id: string, p: Paragraph) => {
  //TODO
}

window.undo = () => {
  //TODO
  console.log('undo');
}

window.redo = () => {
  //TODO
  console.log('redo');
}