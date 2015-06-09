import {RenderUtilities} from "../common/RenderUtilities.js";

export class TitleRenderer {
    constructor (props) {
        this.props = props;
    }

    render (context, canvas) {
        var titleColor = RenderUtilities.getColor(this.props.cardType);
        context.font = "33px Calisto MT W01 Bold";
        context.fillStyle = titleColor;
        context.textBaseline = "alphabetic";
        context.fillText(this.props.cardTitle, 102, 252);

        // 
        // return  <span style={{
        //             "position": "absolute",
        //             "left": "102px",
        //             "top": "214px",
        //             "fontSize": "33px",

        //             "letterSpacing": "-0.025em",
        //             "fontFamily": "Calisto MT W01 Bold",
        //             "color": titleColor
        //         }}>{this.props.cardTitle}</span>;
    }
}