export class StaminaRenderer {
    constructor (props) {
        this.props = props;
    }

    render () {
        return <div style={{
                "position": "absolute",
                "top": "523px",
                "right": "61px",
                "width": "115px",
                "height": "115px",
                "lineHeight": "115px",
                "fontFamily": "Calisto MT W01 Bold",
                "textAlign": "center",
                "fontSize": "73px",
                "textShadow": "2px 2px 0px rgba(0, 0, 0, 0.59)",
            }}>{this.props.cardStamina}</div>;
    }
}