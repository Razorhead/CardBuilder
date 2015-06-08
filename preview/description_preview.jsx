import {RenderUtilities} from "../common/RenderUtilities.js";

export class DescriptionPreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
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
                }}>{this.props.cardDescription}</div>;
    }
}