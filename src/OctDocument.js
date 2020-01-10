import { parse } from 'himalaya'
class OctDocument {
    constructor() {
    }
    render(root, component){
        this.root=root;
        let b=component.render()();
        console.log(b);
        const json = parse(b.octHtml);
        console.log(json);
    }
}

let OctDom = new OctDocument();
export default OctDom;
