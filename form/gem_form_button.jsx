export class GemFormButton extends React.Component {
    state = {
        selected: false
    }
    constructor (props) {
        super(props);
    }

    onGemClick () {
        this.props.onChange(this.props.value.gemName, null, !this.props.value.selected);
    }
    onGemTextChange (ev) {
        this.props.onChange(this.props.value.gemName, ev.target.value, null);
    }
    render () {
        return <div className="pure-u-12-24">
            <div onClick={this.onGemClick.bind(this)} className="hand" style={{
                            "margin": "5px",
                            "border": "5px solid #443924",
                            "cursor": "pointer",
                            "backgroundColor": (this.props.value.selected ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.2)")
                          }}>
                <image src={this.props.gem.image} className="hand" height="60px"/>
                {(this.props.gem.amount != null
                        ?
                        <input type="number" onClick={(e) => { e.stopPropagation(); }} style={{"width": "60px"}} value={this.props.value.text} onChange={this.onGemTextChange.bind(this)} placeholder={this.props.gem.name} /> :
                        <span>{this.props.gem.name}</span>
                )}
            </div>
        </div>;
    }
}