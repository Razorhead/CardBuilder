import {RenderUtilities} from "../common/RenderUtilities.js";

export class GemPreview extends React.Component {
    constructor (props) {
        super(props);
    }

    render () {

        var currY = 499;
        var currX = 46;
        var gemData = this.props.cardGems.filter((gem) => { return gem.selected; }).map((gem, i) => {
            return <div style={{
                    "position": "absolute",
                    "top": currY+"px",
                    "left": (currX + (i * 135))+"px",
                    "zIndex": "4",
                    "width": "198px",
                    "height": "196px"
                }}><img style={{
                    "position": "absolute",
                    "top": "0px",
                    "left": "0px"
                }}
                        src={RenderUtilities.getImageSource(gem.gemName)}/>
                {(gem.text != null && gem.text != "" ? <span style={{
                    "position": "absolute",
                    "width": "55px",
                    "height": "26px",
                    "color": RenderUtilities.getColor("gemText"),
                    "lineHeight": "26px",
                    "backgroundColor": RenderUtilities.getColor(gem.gemName),
                    "borderRadius": "3px",
                    "bottom": "50px",
                    "textShadow": "0px 0px 8.01px rgba(0, 0, 0, 1)",
                    "left": ((198/2) - (55 / 2)) + "px",
                    "textAlign": "center",
                    "letterSpacing": "-0.01em",
                    "fontFamily": "Calisto MT W01 Bold",
                    "fontSize": "16px",
                    "zIndex": "5"

                }}>{gem.text}</span> : "")}
            </div>;
        });
        return <div>
            {gemData}
        </div>;
    }
}