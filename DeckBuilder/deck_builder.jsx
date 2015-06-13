export class DeckBuilder extends React.Component {
	
	constructor (props) {
		super(props);
	}

	render () {
		var cardRows = "";/*this.props.deck.map((card) => { 
			return <DeckCardRow card={card} onClickDelete={this.onDeleteRow.bind(null, card)} onClickEdit={this.onEditRow.bind(null, card)}></DeckCardRow>
		});*/
		return <div className={this.props.className}>
			<div className="pure-u-24-24">
				<div className="deck-heading pure-u-12-24">
					Card Name
				</div>
				<div className="deck-heading pure-u-12-24">
					Actions
				</div>
			</div>
			{cardRows}
		</div>;
	}

}