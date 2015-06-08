//import {CostRenderer} from "./canvas/cost_renderer.jsx";
import {DescriptionRenderer} from "./canvas/description_renderer.jsx";
//import {GemRenderer} from "./canvas/gem_renderer.jsx";
//import {NameRenderer} from "./canvas/name_renderer.jsx";
//import {StaminaRenderer} from "./canvas/stamina_renderer.jsx";
//import {TitleRenderer} from "./canvas/title_renderer.jsx";
//import {TypeRenderer} from "./canvas/type_renderer.jsx";
import {RenderUtilities} from "./common/RenderUtilities.js";;

export class CardRenderer {
    canvas;
    context;
    childRenderers = [];

    constructor (options) {
        this.canvas = document.createElement("canvas");
        this.canvas.width = 1000;
        this.canvas.height = 700;
        this.context = this.canvas.getContext("2d");
        //
        //this.addRenderer(new TypeRenderer(options));
        //this.addRenderer(new CostRenderer(options));
        this.addRenderer(new DescriptionRenderer(options));
        //this.addRenderer(new GemRenderer(options));
        //this.addRenderer(new NameRenderer(options));
        //this.addRenderer(new StaminaRenderer(options));
        //this.addRenderer(new TitleRenderer(options));
    }

    addRenderer (RenderClass) {
        this.childRenderers.push(RenderClass);
    }

    render () {
        return RenderUtilities.downloadAllImages()
            .then((images) => {
                this.childRenderers.forEach((renderer) => {
                    renderer.render(this.context, this.canvas);
                });
                return this.canvas;
            });
    }

}