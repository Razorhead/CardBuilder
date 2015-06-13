import {RenderUtilities} from "../common/RenderUtilities.js";

export class CostPreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.cardCost != null && this.props.cardCost > 0) {
        return <img style={{
             "position": "absolute",
             "right": "68px",
             "top": "66px"
            }} src={RenderUtilities.getImageSource("cost"+this.props.cardCost)} />;
        }
        else {
            return "";
        }
    }
}