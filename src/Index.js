import Component from './Component'
import Home from "./Home";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "index",
            object: {name: "bbbbb", b: 2}
        }
    }

    render() {
        let {name, object} = this.state;
        return function () {
            return {
                home: new Home(),
                paramObj:{
                    object:object
                },
                octHtml:`<div id="aa"><div>Hello ${name}!</div><div>Hello ${object.name}!</div><Oct-Home name={object}></Oct-Home></div>`
            }
        }
    }
}
