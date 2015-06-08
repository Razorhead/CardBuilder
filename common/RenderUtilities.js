// Having to use normal variable since static variable isnt working...
var baseDir = "/widget_code/react/CardBuilder/resources/";
export class RenderUtilities {

    static IMAGE_SOURCES = {
        "passive": "/images/e/e7/Passive_gem.png",
        "pet": "/images/b/b3/Pet_gem.png",
        "limited": "/images/b/be/Limited_gem.png",
        "ability": "/images/3/31/Ability_gem.png",
        "consumable": "/images/4/4c/Consumable_gem.png",
        "buff": "/images/d/d6/Buff_gem.png",
        "interrupt": "/images/7/70/Interrupt_gem.png",
        "spell": "/images/2/29/Spell_gem.png",
        "armour": "/images/9/95/Armor_gem.png",
        "range": "/images/2/29/Range_gem.png",
        "melee": "/images/d/d9/Melee_gem.png",
        "weapon": "/images/a/ad/Weapon_gem.png",

        "typeClass": baseDir+"class_card.png",
        "typeTreasure": baseDir+"treasure_card.png",
        "typeRace": baseDir+"race_card.png",
        "typeItem": baseDir+"item_card.png",
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
        var image = new Image(key);
        image.src = RenderUtilities.getImageSource(key);

        return new Promise((resolve, reject) => {
            image.addEventListener("error",function (ev) {
                reject({"key":key, "image":image, "ev": ev});
            });
            image.addEventListener("load", function (ev) {
                resolve({"key":key, "image":image, "ev": ev});
            });
        });
    }
    static getDownloadedElement (key) {
        return RenderUtilities.IMAGE_ELEMENTS[key];
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