import {RenderUtilities} from "../common/RenderUtilities.js";

export class TypeRenderer {
    constructor (props) {
        this.props = props;
    }
    render () {
        return <div style={{
                "width": "1000px",
                "height": "700px",
               "position": "relative",
                }}>
            <img style={{
                    "position": "absolute",
                    "left": "0px",
                    "top": "0px"
                 }} src={RenderUtilities.getImageSource(this.props.cardType)} /></div>;
    }
}