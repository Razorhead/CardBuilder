import {RenderUtilities} from "../common/RenderUtilities.js";
export class NameRenderer {

    constructor (props) {
        this.props = props;
    }

    render (context) {
        context.font = "121.6px Traditio-AH";
        context.fillStyle = RenderUtilities.getColor("cardName");
        context.shadowColor = "black";
        context.shadowBlur= "0x";
        context.shadowOffsetX = "5";
        context.shadowOffsetY = "5";
        context.textBaseline = "alphabetic";
        console.log("Filling Card Name");
        context.fillText(this.props.cardName, 66, 173);

        // return <span style={{
        //             "position": "absolute",
        //             "left": "66px",
        //             "fontFamily": "'Traditio-AH'",
        //             "top": "33px",
        //             "color": "#faefe0",
        //             "fontSize": "121.6px",
       //             "textShadow": "5px 5px 0px rgba(0, 0, 0, 1)",
        //         }}>{this.props.cardName}</span>;
    }
}