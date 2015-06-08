export class CostForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div className="pure-control-group">
            <label>Card Cost</label>
            <select onChange={this.props.onChange} value={this.props.value}>
                <option value={0}>No cost</option>
                <option value={50}>50 Coins</option>
                <option value={100}>100 Coins</option>
                <option value={200}>200 Coins</option>
                <option value={300}>300 Coins</option>
                <option value={400}>400 Coins</option>
                <option value={500}>500 Coins</option>
                <option value={1000}>1000 Coins</option>
            </select>
        </div>;
    }
}