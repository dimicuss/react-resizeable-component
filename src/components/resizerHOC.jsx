import ResizerBar            from './resizerBar.jsx'
import { hocStyles }         from '../deafultStyles.js'
import { resizerDirections } from '../types.js'
import mouseUpHandler from    '../eventHandlers/mouseUpHandler.js'
import mouseMoveHandler from '../eventHandlers/mouseMoveHandler.js'



class ResizerHOC extends React.Component {
    constructor(props) {
        super(props)

        this.state = this.getInitialState(props);
        this.getState = this.getState.bind(this);
        this.stateChanger = this.stateChanger.bind(this);
        this.mouseUpHandler = mouseUpHandler(
            this.stateChanger,
            this.getState
        );
        this.mouseMoveHandler = mouseMoveHandler(
            this.stateChanger,
            this.getState
        );
    }


    componentDidMount() {
        window.addEventListener('mouseup', this.mouseUpHandler);
        window.addEventListener('mousemove', this.mouseMoveHandler);
    }


    componentWillUnmount() {
        window.removeEventListener('mouseup', this.mouseUpHandler);
        window.removeEventListener('mousemove', this.mouseMoveHandler);
    }


    componentDidUpdate() {
        console.log(this.state)
    }


    getInitialState(props) {
        return {
            lastClickPosition: {
                x: null,
                y: null
            },
            currentDirection: null,
            sizePool: {
                width: props.width,
                height: props.height
            },
            currentSize: {
                width: props.width,
                height: props.height
            }
        }
    }


    getState() { return this.state }


    stateChanger(newState, cb) {
        this.setState(newState, cb)
    }


    renderResizers() {
        const
            resizersStyles      = this.props.resizersStyles,
            resizersDefinitions = this.props.resizersDefinitions;

        return resizerDirections.reduce( (acc, resizerDirection, i) => {
            const isNotExists = !resizersDefinitions[resizerDirection];

            if(isNotExists) return acc

            return acc.concat([
                <ResizerBar
                    key={i}
                    style={resizersStyles[resizerDirection]}
                    direction={resizerDirection}
                    stateChanger={this.stateChanger}/>
            ])
        }, [])
    }


    getStyle() {
        const style = this.props.style;

        return Object.assign({}, hocStyles, style, {
            width:  this.state.currentSize.width,
            height: this.state.currentSize.height
        })
    }


    render() {
        return <div style={this.getStyle()}>
            {this.props.children}
            {this.renderResizers()}
        </div>
    }
}



(() => {
    const types = React.PropTypes
    const stringNumber = types.oneOfType([ types.string , types.number ]);

    ResizerHOC.propTypes = {
        width: stringNumber,
        height: stringNumber,

        maxWidth: stringNumber,
        maxHeight: stringNumber,

        onResize:      types.func,
        onResizeStart: types.func,
        onResizeStop:  types.func,

        resizersStyles: types.shape({
            top: types.objectOf(stringNumber),
            left: types.objectOf(stringNumber),
            right: types.objectOf(stringNumber),
            bottom: types.objectOf(stringNumber),
        }),

        resizersDefinitions: types.shape({
            top: types.bool,
            left: types.bool,
            right: types.bool,
            bottom: types.bool,
        }).isRequired
    }

    ResizerHOC.defaultProps = {
        resizersStyles: {}
    }
})()



export default ResizerHOC