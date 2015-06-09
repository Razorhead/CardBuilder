import {RenderUtilities} from "../common/RenderUtilities.js";

export class TitlePreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        var titleColor = RenderUtilities.getColor(this.props.cardType);
        return  <span style={{
                    "position": "absolute",
                    "left": "102px",
                    "top": "214px",
                    "fontSize": "33px",

                    "letterSpacing": "-0.025em",
                    "fontFamily": "Calisto MT W01 Bold",
                    "color": titleColor
                }}>{this.props.cardTitle}</span>;
    }
}