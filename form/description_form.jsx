export class DescriptionForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div className="pure-control-group">
            <label>Card Description</label><br />
            <textarea style={{"marginLeft":"20%", "width":"60%"}} onChange={this.props.onChange} value={this.props.value} rows="10" />
        </div>;
    }
}