import {RenderUtilities} from "../common/RenderUtilities.js";

export class StaminaRenderer {
    constructor (props) {
        this.props = props;
    }

    render (context,canvas) {
        if (this.props.cardStamina != null) {
            context.font = "73px Calisto MT W01 Bold";
            context.fillStyle = RenderUtilities.getColor("stamina");

            context.shadowOffsetX = 3;
            context.shadowOffsetY = 3;
            context.shadowColor = "rgba(0, 0, 0, 1)";
            context.textBaseline = "middle";
            var textMetrics = context.measureText(this.props.cardStamina);
            console.log(canvas.width - 115 - (textMetrics.width / 2));
            context.fillText(this.props.cardStamina, canvas.width - 61 - (115/ 2) - (textMetrics.width / 2), 523 + (115/2));
        }




        // return <div style={{
        //         "position": "absolute",
        //         "top": "523px",
        //         "right": "61px",
        //         "width": "115px",
        //         "height": "115px",
        //         "lineHeight": "115px",
        //         "fontFamily": "Calisto MT W01 Bold",
        //         "textAlign": "center",
        //         "fontSize": "73px",
        //         "color": RenderUtilities.getColor("stamina"),
        //         "textShadow": "3px 4px 0px rgba(0, 0, 0, 1)",
        //     }}>{this.props.cardStamina}</div>;
    }
}