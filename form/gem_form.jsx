import {GemFormButton} from './gem_form_button.jsx';

export class GemForm extends React.Component {
    gems = {
        "passive": {"image":"/images/0/04/Passive_Gem.png", "name":"Passive"},
        "pet": {"image":"/images/b/b3/Pet_gem.png", "amount": true, "name":"Pets"},
        "limitedcombat": {"image":"/images/1/15/Limited_Combat_gem.png", "name":"Once Per Combat"},
        "limitedround": {"image":"/images/b/bd/Limited_Round_gem.png", "name":"Once Per Round"},
        "ability": {"image":"/images/3/31/Ability_gem.png", "name":"Ability"},
        "consumable": {"image":"/images/4/4c/Consumable_gem.png", "name":"Consumable"},
        "buff": {"image":"/images/d/d6/Buff_gem.png", "name":"Buff"},
        "interrupt": {"image":"/images/7/70/Interrupt_gem.png", "name":"Interrupt"},
        "spell": {"image":"/images/2/29/Spell_gem.png", "name":"Spell"},
        "armour": {"image":"/images/9/95/Armor_gem.png", "name":"Armour"},
        "range": {"image":"/images/2/29/Range_gem.png", "amount": true, "name":"Range"},
		"radius": {"image":"/images/1/1b/Radius_Gem.png", "amount": true, "name":"Radius"},
        "melee": {"image":"/images/d/d9/Melee_gem.png", "name":"Melee"},
        "weapon": {"image":"/images/a/ad/Weapon_gem.png", "name":"Weapon"},
        "dragon": {"image":"/images/c/cc/Dragon_Gem.png", "name":"Dragon?"}
    };


    constructor (props) {
        super(props);
    }

    setOpts (standard, user) {
        var newObj = {};
        for (var key in standard) {
            newObj[key] = standard[key];
        }
        if (typeof user === 'object') {
            for (var key in user) {
                newObj[key] = user[key];
            }
        }
        return newObj;
    }
    convertToMap () {
        var map = {};
        for (var i = 0; i< this.props.value.length; i++) {
            var gem = this.props.value[i];
            map[gem.gemName] = gem;
        }
        return map;
    }
    render () {
        var gemComp = [];
        var gemMap = this.convertToMap();
        for (var gemName in this.gems) {
            if (this.gems.hasOwnProperty(gemName)) {
                var gem = this.gems[gemName];
                gem.gemName = gemName;

                var gemData = this.setOpts({ "gemName": gemName, "selected": false, "text": "" }, gemMap[gemName]);

                gemComp.push(<GemFormButton key={gemName} gem={gem} value={gemData} onChange={this.props.onChange} ></GemFormButton>);
            }
        }
        ///{gemComp}
        return <div className="pure-g" style={{"padding": "30px"}}>
            {gemComp}
        </div>;
    }
}
