import {RenderUtilities} from "../common/RenderUtilities.js";

export class DescriptionPreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        var cardDesc = [];
        if (this.props.cardDescription != null) {
            var newlineSplit = this.props.cardDescription.split("\n");

            for (var i = 0; i < newlineSplit.length; i++) {
                cardDesc.push(<div >{newlineSplit[i] != "" ? newlineSplit[i] : "\u00a0"}</div>);
            }
        }
        return  <div style={{
                    "top": "293px",
                    "position":"absolute",
                    "left": "100px",
                    "fontSize": "26px",
                    "letterSpacing": "-0.025em",
                    "textShadow": "0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6",
                    "width": "625px",
                    "zIndex": "4",
                    "lineHeight": "32px",
                    "fontFamily": "Calisto MT W01 Bold",
                    "color": RenderUtilities.getColor("description"),
                    "textAlign": "justify"
                }}>{cardDesc}</div>;
    }
}