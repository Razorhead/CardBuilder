import {RenderUtilities} from "../common/RenderUtilities.js";

export class CostPreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {
        return <img style={{
             "position": "absolute",
             "right": "68px",
             "top": "66px"
            }} src={RenderUtilities.getImageSource("cost"+this.props.cardCost)} />;
    }
}