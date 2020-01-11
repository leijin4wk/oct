import Component from './oct/Component'
import Home from "./Home";

export default class Index extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: "index",
            object: {
                name: "world",
                child: "oct"
            }
        }
    }

    onClickButton() {
        this.setState({name: "oct"})
    };

    render() {
        console.log("Index render 执行了");
        let _this = this;
        let {name, object} = this.state;
        let onClickButton = this.onClickButton;
        return function () {
            return {
                context: {
                    home: new Home(),
                    object: object,
                    onClickButton: onClickButton.bind(_this),
                },
                octHtml: `<div>
                                <div>hello ${name}</div>
                                <div>Hello ${object.name}!</div>
                                <button onClick="onClickButton">按钮</button>
                                <Oct-Home name="object"/>
                          </div>`
            }
        }
    }
}