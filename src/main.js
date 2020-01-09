import Index from './Index'
import compile from  "string-template/compile"
import { parse } from 'himalaya'
let a=new Index();
let b=a.render()();
console.log(b);
let html=b.template();
console.log(html);
const json = parse(html);
console.log(json);

let greetingTemplate  = compile(html, true);
// -> greetingTemplate generated using new Function

var greeting = greetingTemplate(b.params);
console.log(greeting);
let root=document.getElementById("root");
root.innerHTML=greeting;
console.log(root)
