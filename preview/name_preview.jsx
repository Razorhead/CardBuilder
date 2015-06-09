import {RenderUtilities} from "../common/RenderUtilities.js";

export class NamePreview extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        return <span style={{
                    "position": "absolute",
                    "left": "66px",
                    "fontFamily": "'Traditio-AH'",
                    "top": "33px",
                    "letterSpacing": "-0.01em",
                    "color": RenderUtilities.getColor("cardName"),
                    "fontSize": "121.6px",//"fontSize": "124.55pt",
                    "textShadow": "5px 5px 0px rgba(0, 0, 0, 1)",
                }}>{this.props.cardName}</span>;
    }
}