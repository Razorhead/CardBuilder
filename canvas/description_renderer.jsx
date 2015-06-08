import {RenderUtilities} from "../common/RenderUtilities.js";

export class DescriptionRenderer {
    constructor (props) {
        this.props = props;
    }


    render (context, canvas) {

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