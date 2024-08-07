import { fromEvent } from "rxjs";

const doc = document.createElement("div");

const source = fromEvent(doc, "click");
source.subscribe((event) => console.log(event));
