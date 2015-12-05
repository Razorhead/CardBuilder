// Having to use normal variable since static variable isnt working...
var baseDir = "/widget_code/react/CardBuilder/resources/";
export class RenderUtilities {

    static IMAGE_SOURCES = {
        "passive_v2": "/images/0/04/Passive_Gem.png",
        "passive": "/images/0/04/Passive_Gem.png",
        "pet": "/images/b/b3/Pet_gem.png",
        "limited": "/images/b/be/Limited_gem.png",
        "limitedcombat": "/images/1/15/Limited_Combat_gem.png",
        "limitedround": "/images/b/bd/Limited_Round_gem.png",
        "ability": "/images/3/31/Ability_gem.png",
        "consumable": "/images/4/4c/Consumable_gem.png",
        "buff": "/images/d/d6/Buff_gem.png",
        "interrupt": "/images/7/70/Interrupt_gem.png",
        "spell": "/images/2/29/Spell_gem.png",
        "armour": "/images/9/95/Armor_gem.png",
        "range": "/images/2/29/Range_gem.png",
		"radius": "/images/1/1b/Radius_Gem.png",
        "melee": "/images/d/d9/Melee_gem.png",
        "weapon": "/images/a/ad/Weapon_gem.png",
        "dragon": "/images/c/cc/Dragon_Gem.png",

        "typeClass": baseDir+"class_card.png",
        "typeTreasure": baseDir+"treasure_card.png",
        "typeRace": baseDir+"race_card.png",
        "typeItem": baseDir+"item_card.png",
        "typeAccessory": "/images/9/9d/Accessory_Card_Background.png",
        "cost50": baseDir+"cost_50.png",
        "cost100": baseDir+"cost_100.png",
        "cost200": baseDir+"cost_200.png",
        "cost300": baseDir+"cost_300.png",
        "cost400": baseDir+"cost_400.png",
        "cost500": baseDir+"cost_500.png",
        "cost1000": baseDir+"cost_1000.png",
    };

    static COLORS =  {
        "typeClass": "#002b4e",
        "typeTreasure": "#765313",
        "typeItem": "#253141",
        "typeRace": "#10430b",
        "typeAccessory": "#411e6b",
        "range": "#2a1001",
        "pet": "#141416",
        "gemText": "#d9d9d9",
        "description": "#2e1302",
        "cardName":  "#fff4e4",
        "stamina": "#fff5e1",
    };
    static _LOADED = false;
    static IMAGE_ELEMENTS = {};

    static getImage (key) {
        var image = new Image();

        return new Promise((resolve, reject) => {
            image.addEventListener("error",function (ev) {
                reject({"key":key, "image":image, "ev": ev});
            });
            image.addEventListener("load", function (ev) {
                resolve({"key":key, "image":image, "ev": ev});
            });
            image.src = RenderUtilities.getImageSource(key);
        });
    }
    static getDownloadedElement (key) {
        return RenderUtilities.IMAGE_ELEMENTS[key];
    }
/* http://stackoverflow.com/questions/1255512/how-to-draw-a-rounded-rectangle-on-html-canvas */
    static roundRect(ctx, x, y, width, height, radius, fill, stroke) {
      if (typeof stroke == "undefined" ) {
        stroke = true;
      }
      if (typeof radius === "undefined") {
        radius = 5;
      }
      ctx.beginPath();
      ctx.moveTo(x + radius, y);
      ctx.lineTo(x + width - radius, y);
      ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
      ctx.lineTo(x + width, y + height - radius);
      ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
      ctx.lineTo(x + radius, y + height);
      ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
      ctx.lineTo(x, y + radius);
      ctx.quadraticCurveTo(x, y, x + radius, y);
      ctx.closePath();
      if (stroke) {
        ctx.stroke();
      }
      if (fill) {
        ctx.fill();
      }        
    }
    static getTextInformation (text, fontSize, fontName, width, height, letterSpacing, lineHeight, justify) {
        var div = document.createElement ("div");
        div.style.fontSize = fontSize + "px";
        div.style.fontFamily = fontName;
        div.style.lineHeight = lineHeight;
        div.style.position = "absolute";
        if (justify) {
            div.style.textAlign = "justify";
        }
        div.style.left = "0px";
        div.style.top = "0px";
        div.style.zIndex = "10";
        div.style.width = width +"px";
        div.style.height = height + "px";
        div.style.whiteSpace = "pre-wrap";
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

    static downloadAllImages () {
        if (RenderUtilities._LOADED) {
            return new Promise((resolve) => {
                resolve(RenderUtilities.IMAGE_ELEMENTS);
            })
        }

        var promises = [];
        for (var imageKey in RenderUtilities.IMAGE_SOURCES) {
            if (RenderUtilities.IMAGE_SOURCES.hasOwnProperty(imageKey)) {
                promises.push(RenderUtilities.getImage(imageKey));
            }
        }

        return Promise.all(promises).then(function (images) {
            for (var i = 0; i < images.length; i++) {
                var image = images[i];
                RenderUtilities.IMAGE_ELEMENTS[image.key] = image.image;
            }
            return RenderUtilities.IMAGE_ELEMENTS;
        });
    }

    static getImageSource (key) {
        return RenderUtilities.IMAGE_SOURCES[key];
    }

    static getColor (key) {
        return RenderUtilities.COLORS[key];
    }
}