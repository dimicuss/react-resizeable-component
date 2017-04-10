import ResizerBar       from './resizerBar.jsx'
import { hocStyles }    from '../deafultStyles.js'
import mouseUpHandler   from '../eventHandlers/mouseUpHandler.js'
import mouseMoveHandler from '../eventHandlers/mouseMoveHandler.js'
import { dimensionTypes, resizerDirections } from '../types.js'



class ResizerHOC extends React.Component {
    constructor(props) {
        super(props);
        this.state            = this.getInitialState(props);
        this.stateChanger     = this.stateChanger.bind(this);
        this.mouseUpHandler   = mouseUpHandler.bind(this);
        this.mouseMoveHandler = mouseMoveHandler.bind(this);

        {
            const condition = this.props.dimensionType === 'percents' && !this.props.parentSize;
            const error     = new Error('If you wanna calculate size in percents you must specify "parentSize" parameter (see in documentation).')
            if(condition) throw error
        }
    }


    componentDidMount() {
        window.addEventListener('mouseup',   this.mouseUpHandler);
        window.addEventListener('mousemove', this.mouseMoveHandler);
    }


    componentWillUnmount() {
        window.removeEventListener('mouseup',   this.mouseUpHandler);
        window.removeEventListener('mousemove', this.mouseMoveHandler);
    }


    componentWillReceiveProps(nextProps) {
        const newSize = {
            width:  nextProps.width,
            height: nextProps.height
        }

        if(this.props.resizeType === 'outer'){
            this.setState({
                sizPool: newSize,
                currentSize: newSize
            })
        }
    }


    getInitialState(props) {
        const newSize = {
            width:  props.width,
            height: props.height
        }

        return {
            lastClickPosition: {
                x: null,
                y: null
            },
            currentDirection: null,
            sizePool: newSize,
            currentSize: newSize
        }
    }


    getSize(size) {
        return size + dimensionTypes[this.props.dimensionType]
    }


    stateChanger(newState, cb) { this.setState(newState, cb) }


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
                    stateChanger={this.stateChanger}
                    onResizeStart={this.props.onResizeStart}
                    currentSize={this.state.currentSize}
                    resizeType={this.props.resizeType}
                />

            ])
        }, [])
    }


    getStyle() {
        const style = this.props.style;

        return Object.assign({}, hocStyles, style, {
            width:  this.getSize(this.state.currentSize.width),
            height: this.getSize(this.state.currentSize.height)
        })
    }


    render() {
        return <div style={this.getStyle()}>
            {this.props.children}
            {this.renderResizers()}
        </div>
    }
}



{
    const types = React.PropTypes
    const stringNumber   = types.oneOfType([ types.string , types.number ]);
    const requiredNumber = types.number.isRequired;

    ResizerHOC.propTypes = {
        resizeType:    types.oneOf([ 'inner', 'outer' ]).isRequired,
        dimensionType: types.oneOf([ 'percents', 'pixels' ]).isRequired,

        parentSize: types.shape({
            width:  requiredNumber,
            height: requiredNumber
        }),

        width:  requiredNumber,
        height: requiredNumber,

        minWidth:  types.number,
        minHeight: types.number,
        maxWidth:  types.number,
        maxHeight: types.number,

        onResize:      types.func,
        onResizeStart: types.func,
        onResizeStop:  types.func,

        resizersStyles: types.shape({
            top:    types.objectOf(stringNumber),
            left:   types.objectOf(stringNumber),
            right:  types.objectOf(stringNumber),
            bottom: types.objectOf(stringNumber)
        }),

        resizersDefinitions: types.shape({
            top:    types.bool,
            left:   types.bool,
            right:  types.bool,
            bottom: types.bool,
        }).isRequired
    }

    ResizerHOC.defaultProps = {
        resizersStyles: {}
    }
}



export default ResizerHOC