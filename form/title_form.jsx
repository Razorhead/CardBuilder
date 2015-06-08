export class TitleForm extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <div className="pure-control-group">
            <label>Card Title</label>
            <input type="text" value={this.props.value} onChange={this.props.onChange} width="300px" placeholder="Title" />
        </div>;
    }
}