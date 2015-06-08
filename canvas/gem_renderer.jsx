import {RenderUtilities} from "../common/RenderUtilities.js";

export class GemRenderer {
    constructor (props) {
        this.props = props;
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
                    "lineHeight": "26px",
                    "backgroundColor": RenderUtilities.getColor(gem.gemName),
                    "borderRadius": "3px",
                    "bottom": "50px",
                    "left": ((198/2) - (55 / 2)) + "px",
                    "textAlign": "center",
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