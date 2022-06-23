import { Observer, Subject } from "../interfaces/subject-and-observer.interface";
import { ParagraphsController } from "./paragraphs-controller";

export class ParagraphsObserver implements Observer {
    readonly paragraphs = document.getElementById('paragraphs');

    private renderParagraphs(subject: ParagraphsController) {
        let newHTML = ''
        subject.getState().forEach(item => {
            newHTML+=`<p style="color: ${item.color}">${item.text}<p>`
        });
        this.paragraphs.innerHTML = newHTML;
    }

    public triggerViewUpdate(subject: Subject): void {
        if (subject instanceof ParagraphsController) {
            this.renderParagraphs(subject);
        }
    }
}