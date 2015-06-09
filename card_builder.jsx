import {CardPreview} from './card_preview.jsx';
import {CardRenderer} from './card_renderer.jsx';
import {CostForm} from './form/cost_form.jsx';
import {DescriptionForm} from './form/description_form.jsx';
import {GemForm} from './form/gem_form.jsx';
import {NameForm} from './form/name_form.jsx';
import {StaminaForm} from './form/stamina_form.jsx';
import {TitleForm} from './form/title_form.jsx';
import {TypeForm} from './form/type_form.jsx';

export class CardBuilder extends React.Component {
    state = {
        "cardName": "Class name",
        "cardType": "typeClass",
        "cardTitle": "A Card Title",
        "cardCost": 0,
        "cardStamina": null,
        "cardGems": [],
        "cardDescription": "Not to be confused with edible. Summons one really annoying editable large card in the middle of your screen for 2 responsive layout damage. If used alongside a table layout take 4 damage. Once you realise this is using 40 text-shadows to make it so it has a text outline get annoyed at W3C."
    };
    _card_names = {
        "typeTreasure": "Treasure",
        "typeItem": "Item"
    };
    titleCards = ["typeClass", "typeRace"];
    costCards = ["typeTreasure"];
    gemCards = ["typeTreasure", "typeClass", "typeItem"];
    _gemAmount = {
        "typeTreasure": 2,
     "typeClass": 5,
     "typeItem": 2,
        "typeRace": 0
    };

    stamCards = ["typeClass"];
	constructor (props) {
		super(props);
	}

    onStaminaChange (ev) {
        this.setState({"cardStamina": ev.target.value });
    }

    onNameChange (ev) {
        this.setState({"cardName": ev.target.value});
    }

    onDescriptionChange (ev) {
        this.setState({"cardDescription": ev.target.value });
    }

    onTypeChange (ev) {
        var cType = ev.target.value;
        var s = { "cardType": cType };
        if (this.costCards.indexOf(cType) == -1) {
            s.cost = 0;
        }

        if (this.titleCards.indexOf(cType) == -1) {
            s.cardName = this._card_names[cType];
        }
        if (this.gemCards.indexOf(cType) == -1) {
            s.cardGems = [];
        }
        if (this.stamCards.indexOf(cType) == -1) {
            s.cardStamina = null;
        }
        if (this.state.cardGems.length > this._gemAmount[cType]) {
            var newArr = this.state.cardGems.splice(0,this.state.cardGems.length - this.maxGems());
            s.cardGems = newArr;
        }
        this.setState(s);
    }
    onCostChange (ev) {
        this.setState({ "cardCost": ev.target.value });
    }

    onTitleChange (ev) {
        this.setState({ "cardTitle": ev.target.value });
    }

    onGemChange (gemName, gemText, selected, ev) {
        var gemIndex = this.indexOfGem(gemName);
        console.log("Gem Clicked", gemName, this.state.cardGems, gemIndex);
        if (gemIndex == -1) {
            let tempGems = this.state.cardGems.slice();
            if ((tempGems.length + 1) > this._gemAmount[this.state.cardType]) {
                console.log("Removing a gem");
                tempGems.shift();
            }
            var state = {"name": gemName};
            if (this.state.gemText.hasOwnProperty(gemName)) {
                state.text = this.state.gemText[gemName];
            }
            tempGems.push(state);
            this.setState({ "cardGems": tempGems });
        }
        else {
            let tempGems = this.state.cardGems.slice();
            tempGems.splice(gemIndex, 1);
            this.setState({ "cardGems": tempGems });
        }
    }

    indexOfGem (gemName) {
        for (let i = this.state.cardGems.length-1; i >= 0; i--) {
            if (this.state.cardGems[i].gemName == gemName) {
                return i;
            }
        }
        return -1;
    }
    updateOrNewGem (gemNameOrObject, key, value) {
        let gem;
        if (typeof gemNameOrObject == "string") {
            let gemNumber = this.indexOfGem(gemNameOrObject);
            if (gemNumber != -1) {
                gem = this.state.cardGems[gemNumber];
            }
            else {
                gem = { "gemName": gemNameOrObject, "selected": false, "text": ""};
            }
        }
        else {
            gem = gemNameOrObject;
        }
        if (value !== null) {
            gem[key] = value;
        }
        return gem;
    }
    onGemChange (gemName, gemText, gemSelected) {
        var currGem = this.updateOrNewGem(gemName, "text", gemText);
        this.updateOrNewGem(currGem, "selected", gemSelected != null ? gemSelected : false);
        var nId =this.indexOfGem(gemName);
        currGem.gemName = gemName;
        var newArr = this.state.cardGems.slice();
        if (gemSelected !== null && gemSelected && nId !== -1) {
            newArr.splice(nId,1,currGem);
        }
        else if (gemSelected === false) {
            newArr.splice(nId, 1);
        }
        else {
            newArr.push(currGem);
        }
        if (newArr.length > this.maxGems()) {
            newArr.splice(0, newArr.length - this.maxGems());
        }
        this.setState({ "cardGems": newArr });
        console.log(this.state.cardGems);
    }

    maxGems () {
        return this._gemAmount[this.state.cardType];
    }

    outputIfCardTypeIsIn (reactComponent, toCheck) {
        if (toCheck.indexOf(this.state.cardType) != -1) {
            return reactComponent;
        }
        return "";
    }

    save () {
       var renderer = new CardRenderer(this.state);
        return renderer.render().then((canvas) => {
            canvas.toBlob((blob) => {
                saveAs(blob, "URLiveWiki.com Card "+this.state.cardTitle+".png");
            });
        });
    }

	render () {

        return <div>
            <div className="content-box ">
            <div className="content-box-heading">Card Builder</div>
                <div className="alert alert-info">
                Updated to the proper card colours and now (experimental) saving! If it doesnt work please leave an issue in the discussion page (second tab at the top). Know how to code and want to help out? Visit our <a href="https://github.com/Unforgotten-Realms-Live-Wiki/CardBuilder">GitHub Page</a>
                </div>
                <div className="pure-g">
                <form className="pure-form pure-form-aligned pure-u-11-24">
                <fieldset>
                    <TypeForm onChange={this.onTypeChange.bind(this)} value={this.state.cardType}></TypeForm>
                    <DescriptionForm onChange={this.onDescriptionChange.bind(this)} value={this.state.cardDescription}></DescriptionForm>

                        <TitleForm onChange={this.onTitleChange.bind(this)} value={this.state.cardTitle}></TitleForm>

                    {this.outputIfCardTypeIsIn(
                        <CostForm value={this.state.cardCost} onChange={this.onCostChange.bind(this)}></CostForm>,
                        this.costCards
                    )}
                    {this.outputIfCardTypeIsIn(
                    <NameForm value={this.state.cardName} onChange={this.onNameChange.bind(this)}></NameForm>,
                        this.titleCards
                    )}
                    {this.outputIfCardTypeIsIn(
                        <StaminaForm value={this.state.cardStamina} onChange={this.onStaminaChange.bind(this)}></StaminaForm>,
                        this.stamCards
                    )}

                    {this.outputIfCardTypeIsIn(
                        <GemForm value={this.state.cardGems} onChange={this.onGemChange.bind(this)}></GemForm>,
                        this.gemCards
                    )}

                </fieldset>
               </form>
                <div className="pure-u-12-24">
                    <CardPreview ref="cardImage" cardStamina={this.state.cardStamina} cardGems={this.state.cardGems} cardTitle={this.state.cardTitle} cardCost={this.state.cardCost} cardType={this.state.cardType} cardName={this.state.cardName} cardDescription={this.state.cardDescription}></CardPreview>
                   
                    <br />
                    <button className="pure-button pure-button-primary" onClick={this.save.bind(this)}>Save Output (Experimental!)</button>

                </div>

                </div>
            </div>
        </div>;
    }
}