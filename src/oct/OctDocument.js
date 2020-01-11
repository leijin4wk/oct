//这个类就还模拟虚拟dom的实现
import { parse } from 'himalaya'
//普通html标签属性设置
let processHtmlTagAttributes=(item,elementObj,componentContext)=>{
    item.attributes.forEach(attribute=>{
        //目前只处理事件 可以自己扩张其他
        addEvent(attribute,elementObj,componentContext)
    });
};
//处理html子元素
let processHtmlTagChildren=(item,elementObj,componentContext)=>{
    let regExp = /\s*\S+?/;
    item.children.forEach(son=>{
        if (son.type==="text"){
            if (regExp.test(son.content)) {
                elementObj.innerText = son.content;
            }
        }
        if (son.type==="element"){
            if (son.tagName.startsWith("oct-")){
                elementObj.appendChild(processOctTag(son,componentContext,elementObj));
            }else {
                let sonElementObj = document.createElement(son.tagName);
                elementObj.appendChild(sonElementObj);
                processHtmlTagAttributes(son, sonElementObj, componentContext);
                processHtmlTagChildren(son, sonElementObj, componentContext);
            }
        }
    });
};
//自定义标签属性设置
let processOctTag=(octItem,componentContext,parent)=>{
    let componentName=octItem.tagName.replace("oct-","");
    let component=componentContext[componentName];
    component["parent"]=parent;
    let props={};
    octItem.attributes.forEach(attribute=>{
        props={...props,...componentContext[attribute.value]}
    });
    //执行getDefaultProps 生命周期方法（生命周期原理）
    component.getDefaultProps(props);
    return createDomObject(component)
};



let addEvent=(attribute,elementObj,componentContext)=>{
    //目前只处理onclick 以自己扩张其他
    if (attribute.key==="onClick") {
        elementObj.onclick= componentContext[attribute.value]
    }
};
/**
 * 创建单个dom对象
 * @param component
 */
let createDomObject=(component)=>{
    //返回的是个闭包，包括函数和上下文(整个程序的灵魂所在)
    //其实这个过程就是执行render生命周期方法  重点
    let closure=component.render()();
    //上下文对象
    let componentContext=closure.context;
    //一个组件是一个div组成的所以取第一个，就如一个vue中只有一个template一样
    let item=parse(closure.octHtml)[0];
    let elementObj = document.createElement(item.tagName);
    processHtmlTagAttributes(item, elementObj,componentContext);
    processHtmlTagChildren(item,elementObj,componentContext);
    component["elementObj"] = elementObj;
    return elementObj;
};
let render=(parent, component)=>{
    component["parent"]=parent;
    createDomObject(component);
    parent.appendChild(component.elementObj)
};
class OctDocument {
}
OctDocument.prototype.createDomObject=createDomObject;
OctDocument.prototype.render=render;
let OctDom = new OctDocument();
export default OctDom;
