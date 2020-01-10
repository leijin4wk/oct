import { parse } from 'himalaya'

let processHtmlTagAttributes=(item,elementObj,paramObj)=>{
    console.log("paramObj",paramObj);
    item.attributes.forEach(attribute=>{
        console.log(attribute)




    });
};

let processOctTagAttributes=(item,elementObj,param)=>{


    item.attributes.forEach(attribute=>{
        console.log(attribute)




    });
};



let addEvent=(name,elementObj,func)=>{
    if (name==="onClick") {
        elementObj.addEventListener('click', func)
    }
    if (name==="onChange") {
        elementObj.addEventListener('change', func)
    }
};
class OctDocument {
    constructor() {
    }
    render(parent, component){
        let evn=component.render()();
        const json = parse(evn.octHtml);
        json.forEach(item=>{
            if (item.tagName.startsWith("oct")) {
                console.log("自定义：",item)
            }else{
                console.log(item);
                let elementObj = document.createElement(item.tagName);
                processHtmlTagAttributes(item,elementObj,evn.paramObj);
                item["parent"]=parent;
                item["elementObj"]=elementObj;
                console.log(item)
            }
        });
    }
}

let OctDom = new OctDocument();
export default OctDom;
