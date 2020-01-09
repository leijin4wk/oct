import Component from './Component'
import Home from "./Home";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "index",
            object: {a: "bbbbb", b: 2}
        }
    }

    render() {
        let {name, object} = this.state;
        return function () {
            return {
                params: [name, object.a],
                Home: new Home(),
                template: () => {
                    return '<div><div>Hello {0}!</div><div>Hello {1}!</div><Home name=$object></Home></div>';
                },
            }
        }
    }
}
