import Component from './Component'
export default class Home extends Component{
    constructor(props){
        super(props);
        this.state={
            name:"home"
        }
    }
    render() {
        let {name}=this.state;
        return function () {
            return {
                template:()=>{
                    return '<div>this is {name}</div>';
                },
                name
            }
        }
    }
}