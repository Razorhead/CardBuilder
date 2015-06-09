import {RenderUtilities} from "../common/RenderUtilities.js";

export class GemRenderer {
    constructor (props) {
        this.props = props;
    }

    renderGemImage (context, gem, x, y) {
        context.drawImage(RenderUtilities.getDownloadedElement(gem.gemName), x, y);
    }


    renderGemText (context, gem, text, x, y) {
        // RenderUtilities.getColor("gemText")
        // RenderUtilities.getColor(gem.gemName)
        var width =  55;
        var height = 26;
        context.font = "16px Calisto MT W01 Bold";
        var textWidth = context.measureText(text).width;
        var centerLocation = (width / 2) - (textWidth / 2);
        var centerHeight = height / 2;

        
        var textLeft = x + centerLocation;
        var textTop = y + centerHeight;
        context.fillStyle = RenderUtilities.getColor(gem.gemName);
        RenderUtilities.roundRect(context, x, y, width, height, 3, true, false);
        context.fillStyle = RenderUtilities.getColor("gemText");
        context.textBaseline = "middle";
    //  "textShadow": "0px 0px 8.01px rgba(0, 0, 0, 1)",
        context.shadowColor="black";
        context.shadowBlur= "8.01px";
        context.shadowOffsetX = 0;
        context.shadowOffsetY = 0;
        context.fillText(text, textLeft, textTop);
    }

    render (context, canvas) {
        var currY = 496;
        var currX = 46;
        this.props.cardGems.filter((gem) => { return gem.selected; }).forEach((gem, i) => {
            this.renderGemImage(context, gem,currX + (i * 135), currY);
            if (gem.text) {
                this.renderGemText(context, gem, gem.text, currX + (i * 135) + ((198/2) - (55 / 2)),currY+196-75);
            }
        });
    }
}