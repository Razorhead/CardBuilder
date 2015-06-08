export class StaminaForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div className="pure-control-group">
            <label>Stamina</label>
            <input type="number" value={this.props.value} onChange={this.props.onChange}  />
        </div>;
    }
}