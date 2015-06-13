import {RenderUtilities} from "../common/RenderUtilities.js";

export class StaminaPreview extends React.Component {
    constructor (props) {
        super(props);
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
                "color": RenderUtilities.getColor("stamina"),
                "textShadow": "3px 4px 0px rgba(0, 0, 0, 1)",
            }}>{this.props.cardStamina}</div>;
    }
}