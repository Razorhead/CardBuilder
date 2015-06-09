import {RenderUtilities} from "../common/RenderUtilities.js";

export class DescriptionRenderer {
    constructor (props) {
        this.props = props;
    }


    render (context, canvas) {
        var font =  "Calisto MT W01 Bold";
        var fontSize = 26;
        var offsetX = 100;
        var offsetY = 293;
        var letterSpacing = "-0.025em";
        var lineHeight = "32px";
        var text = this.props.cardDescription;

        var renderInformation = RenderUtilities.getTextInformation(text, fontSize, font, 625, 600, letterSpacing, lineHeight, true);

        context.fillStyle = RenderUtilities.getColor("description");
        context.font = fontSize + "px "+font;
        context.lineWidth = 4;
        context.strokeStyle = "#dcc6a6";
        context.textBaseline = "top";

        var tSpacing = renderInformation.spacing;
        var tText = renderInformation.text;
        for (var i = 0; i < tSpacing.length; i++) {
            var offset = tSpacing[i];
            context.strokeText(tText[i], offset.left+offsetX, offset.top + offsetY);
        }
        for (var i = 0; i < tSpacing.length; i++) {
            var offset = tSpacing[i];
            context.fillText(tText[i], offset.left+offsetX, offset.top + offsetY);
        }

    }
}