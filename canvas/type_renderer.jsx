import {RenderUtilities} from "../common/RenderUtilities.js";

export class TypeRenderer {
    constructor (props) {
        this.props = props;
    }
    render (context, canvas) {

//        CanvasRenderingContext2D.prototype.drawImage = function(img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh) {};

        context.drawImage(RenderUtilities.getDownloadedElement(this.props.cardType), 0, 0);
        //return <div style={{
        //        "width": "1000px",
        //        "height": "700px",
        //       "position": "relative",
        //        }}>
        //    <img style={{
        //            "position": "absolute",
        //            "left": "0px",
        //            "top": "0px"
        //         }} src={RenderUtilities.getImageSource(this.props.cardType)} /></div>;
    }
}