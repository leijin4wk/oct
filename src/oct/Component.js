import OctDom from './OctDocument'
class Component {
    constructor() {
        this.state={};
        this.props={};
    }

    getDefaultProps(props) {
        this.props=props;
    }
    render() {

    }
    setState(item) {
        let component=this;
        let state = this.state;
        this.state = {...state, ...item};
        this.parent.removeChild(this.elementObj);
        let newObj= OctDom.createDomObject(this);
        this.parent.appendChild(newObj);
    }
}
export default Component
