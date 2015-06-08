export class NameForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div className="pure-control-group">
            <label>Card Name</label>
            <input type="text" value={this.props.value} onChange={this.props.onChange} width="300px" placeholder="Card Name" />
        </div>;
    }

}