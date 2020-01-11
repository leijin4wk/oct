import Component from './oct/Component'
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    render() {
        console.log(this.props);
        let {child}=this.props.name;
        return function () {
            return {
                context:{
                },
                octHtml: `<div>this is ${child}</div>`
            }
        }
    }
}