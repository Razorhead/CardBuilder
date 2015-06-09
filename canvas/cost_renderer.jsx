import {RenderUtilities} from "../common/RenderUtilities.js";

export class CostRenderer {
    constructor (props) {
        this.props = props;
    }

    render (context,canvas) {
        if (this.props.cardCost != 0) {
            var image = RenderUtilities.getDownloadedElement("cost" + this.props.cardCost);
            // console.log("Drawing cost", image);
            context.drawImage(image, canvas.width - image.naturalWidth - 68, 66);
        }
        //return <img style={{
        //     "position": "absolute",
        //     "right": "68px",
        //     "top": "66px"
        //    }} src={RenderUtilities.getImageSource("cost"+this.props.cardCost)} />;
    }
}