export class NameRenderer {

    constructor (props) {
        this.props = props;
    }

    render () {
        return <span style={{
                    "position": "absolute",
                    "left": "66px",
                    "fontFamily": "'Traditio-AH'",
                    "top": "33px",
                    "color": "#faefe0",
                    "fontSize": "121.6px",
                    "textShadow": "4px 4px 0px rgba(0, 0, 0, 1)",
                }}>{this.props.cardName}</span>;
    }
}