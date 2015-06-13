export class TypeForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return  <div className="pure-control-group">
            <label>Card Type</label>
            <select value={this.props.value} onChange={this.props.onChange}>
                <option value="typeAccessory">Accessory Card</option>
                <option value="typeClass">Class Card</option>
                <option value="typeTreasure">Treasure Card</option>
                <option value="typeItem">Item Card</option>
                <option value="typeRace">Race Card</option>
            </select>
        </div>;
    }
}