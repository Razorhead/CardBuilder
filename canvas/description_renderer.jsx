import {RenderUtilities} from "../common/RenderUtilities.js";

export class DescriptionRenderer {
    constructor (props) {
        this.props = props;
    }

    getTextInformation (text, fontSize, fontName, width, height, letterSpacing, lineHeight) {
        var div = document.createElement ("div");
        div.style.fontSize = fontSize + "px";
        div.style.fontFamily = fontName;
        div.style.lineHeight = lineHeight;
        div.style.position = "absolute";
        div.style.textAlign = "justify";
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.zIndex = "10";
        div.style.width = width +"px";
        div.style.height = height + "px";
        //div.style.visibility = "none";
        div.style.letterSpacing = letterSpacing;
        var letters = text.split("");
        var spans = letters.map(function (letter) {
            var span = document.createElement("span");
            span.textContent = letter;
            div.appendChild(span);
            return span;
        });
        // We have to render this to the window to get information.
        document.body.appendChild(div);
        var divPositioning = div.getBoundingClientRect();
        var spacing = [];
        var beginSpacing = {};
        for (var i = 0; i < spans.length; i++) {
            var spanPos = spans[i].getBoundingClientRect();
            if (i == 0) {
                beginSpacing = { "top": spanPos.top - divPositioning.top, "left": spanPos.left - divPositioning.left};
            }
            spacing.push({
                "top": spanPos.top - divPositioning.top - beginSpacing.top,
                "left": spanPos.left - divPositioning.left - beginSpacing.left
            });
        }

        // Done processing. Now remove it.
        document.body.removeChild(div);
        return {"text": letters, "spacing": spacing};
    }

    render (context, canvas) {
        var font =  "Calisto MT W01 Bold";
        var fontSize = 26;
        var offsetX = 100;
        var offsetY = 293;
        var letterSpacing = "-0.025em";
        var lineHeight = "32px";
        var text = this.props.cardDescription;

        var renderInformation = this.getTextInformation(text, fontSize, font, 625, 600, letterSpacing, lineHeight);

        context.fillStyle = RenderUtilities.getColor("description");
        context.font = fontSize + "px "+font;
        context.lineWidth = 4;
        context.strokeStyle = "#dcc6a6";
        context.textBaseline = "top";

        var tSpacing = renderInformation.spacing;
        var tText = renderInformation.text;
        console.log(tSpacing);
        for (var i = 0; i < tSpacing.length; i++) {
            var offset = tSpacing[i];
            context.strokeText(tText[i], offset.left+offsetX, offset.top + offsetY);
        }
        for (var i = 0; i < tSpacing.length; i++) {
            var offset = tSpacing[i];
            context.fillText(tText[i], offset.left+offsetX, offset.top + offsetY);
        }

        //var svg = `<svg width="625px" height="500">
        //    <rect x="0" y="0" width="625px" height="500" />
        //    <foreignObject x="0" y="0" width="625px" height="500">
        //    <style type="text/css">@import url('https://fast.fonts.net/cssapi/26626634-6f87-4afd-83a2-ae604feb5a11.css');</style>
        //       <style>
        //        .cardDescription {
        //
        //            font-size: 26px;
        //            text-shadow: 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6;
        //            line-height: 32px;
        //            font-family: 'Calisto MT W01 Bold';
        //            color: '${RenderUtilities.getColor("description")}';
        //        }
        //        </style>
        //         <body xmlns="http://www.w3.org/1999/xhtml">
        //           <div class="cardDescription">${this.props.cardDescription} Testing!</div>
        //        </body>
        //    </foreignObject>
        //
        //</svg>`;
        //// CanvasRenderingContext2D.prototype.drawImage = function(img_elem,dx_or_sx,dy_or_sy,dw_or_sw,dh_or_sh,dx,dy,dw,dh) {};
        //var svgText = 'data:image/svg+xml;base64,'+btoa(svg);
        //var image = new Image();
        //image.src = svgText;
        //image.onload = function () {
        //    context.drawImage(image,100,293);
        //}


        //return  <div style={{
        //            "top": "293px",
        //            "position":"absolute",
        //            "left": "100px",
        //            "fontSize": "26px",
        //            "textShadow": "0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6, 0 0 4px #dcc6a6",
        //            "width": "625px",
        //            "zIndex": "4",
        //            "lineHeight": "32px",
        //            "fontFamily": "Calisto MT W01 Bold",
        //            "color": "#2e1302",
        //            "textAlign": "justify"
        //        }}>{this.props.cardDescription}</div>;
    }
}