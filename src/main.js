import Index from './Index'
import OctDom  from './OctDocument'
let root=document.getElementById("root");
OctDom.render(root,new Index());
console.log(root);
