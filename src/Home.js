import Component from './oct/Component'
export default class Home extends Component{
    constructor(props){
        super(props);
    }
    render() {
        let {child}=this.props;
        return function () {
            return {
                context:{
                },
                octHtml: `<div>this is ${child}</div>`
            }
        }
    }
}