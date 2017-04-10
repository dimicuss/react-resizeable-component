import { barStyles }         from '../deafultStyles.js'
import { resizerDirections } from '../types.js'
import mouseDownHandler      from '../eventHandlers/mouseDownHandler.js'

class ResizerBar extends React.Component {
    constructor(props) {
        super(props)
        this.onMouseDown = mouseDownHandler.bind(this)
    }


    getStyle() {
        const direction = this.props.direction;
        const style     = this.props.style

        return Object.assign({}, barStyles[direction], style)
    }


    render() {
        const style = this.getStyle();
        return <div {...{
            style,
            onMouseDown: this.onMouseDown
        }}></div>
    }
}



(() => {
    const types = React.PropTypes
    const stringNumber = types.oneOfType([ types.string , types.number ]);

    ResizerBar.propTypes = {
        style:        types.objectOf(stringNumber),
        direction:    types.oneOf(resizerDirections).isRequired,
        stateChanger: types.func.isRequired
    }
})();



export default ResizerBar