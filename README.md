# Typescript test task

## Task
Create a program using Observer and Command or Memento patterns and corresponds following criteria:
1) Stores in memory an array of paragraphs

   interface Paragraph {
   id: string;
   text: string;
   color: string;
   }


2) Shows all paragraphs on the screen, showing contains of each paragraps as follows:

`<p style="color:{{paragraph.color}}">{{paragraph.text}}<p>`

3) Through the dev console gives you following API:

   interface Paragraphs {
   insert(p: Paragraph): void;
   delete(id: string): void;
   update(id: string, p: Paragraph): void;
   undo(): void;
   redo(): void;
   }


4) Updates screen on paragraphs change

## Basic setup
- Typescript support.
- Webpack
- Html plugin

## Usage

### Install Typescript

```
npm install typescript -g
```

### Start

```
$ git clone https://github.com/lexasq/paragraphs.git
$ cd paragraphs
$ npm install # or yarn
$ npm start
```