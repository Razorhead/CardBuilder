import {CostPreview} from "./preview/cost_preview.jsx";
import {DescriptionPreview} from "./preview/description_preview.jsx";
import {GemPreview} from "./preview/gem_preview.jsx";
import {NamePreview} from "./preview/name_preview.jsx";
import {StaminaPreview} from "./preview/stamina_preview.jsx";
import {TitlePreview} from "./preview/title_preview.jsx";
import {TypePreview} from "./preview/type_preview.jsx";

export class CardPreview extends React.Component {

    constructor (props) {
        super(props);
    }

    render () {
        if (this.props.cardCost != null && this.props.cardCost > 0) {
            var costPreview = <CostPreview cardType={this.props.cardType} cardCost={this.props.cardCost}></CostPreview>;
        }
        return <div data-zoomed-element="true" style={{ "zoom": "0.5", "MozScale": "scale(0.5)"}}>
            <div style={{ "position": "relative", "width":"1000px","height":"700px"}}>
                <TypePreview cardType={this.props.cardType}></TypePreview>
                {costPreview}
                <DescriptionPreview cardType={this.props.cardType} cardDescription={this.props.cardDescription}></DescriptionPreview>
                <GemPreview cardType={this.props.cardType} cardGems={this.props.cardGems}></GemPreview>
                <NamePreview cardType={this.props.cardType} cardName={this.props.cardName}></NamePreview>
                <StaminaPreview cardType={this.props.cardType} cardStamina={this.props.cardStamina}></StaminaPreview>
                <TitlePreview cardType={this.props.cardType} cardTitle={this.props.cardTitle}></TitlePreview>
            </div>
        </div>;
    }
}