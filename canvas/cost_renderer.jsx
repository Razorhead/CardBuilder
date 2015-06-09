import {RenderUtilities} from "../common/RenderUtilities.js";

export class CostRenderer {
    constructor (props) {
        this.props = props;
    }

    render (context,canvas) {
        if (this.props.cardCost != 0) {
            context.drawImage(RenderUtilities.getDownloadedElement("cost" + this.props.cardCost), canvas.width - 68, canvas.height - 66);
        }
        //return <img style={{
        //     "position": "absolute",
        //     "right": "68px",
        //     "top": "66px"
        //    }} src={RenderUtilities.getImageSource("cost"+this.props.cardCost)} />;
    }
}