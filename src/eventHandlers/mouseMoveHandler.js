function calculateDelta ({ client, parentSize,  dimensionType, lastClickPosition, factor}) {
    const delta = (client - lastClickPosition) * factor

    if(dimensionType === 'percents') {
        return delta / parentSize * 100
    } else {
        return delta
    }
}




function topBottom(event, factor) {
    const
        state     = this.state,
        maxHeight = this.props.maxHeight,
        minHeight = this.props.minHeight;

    let newHeight = state.sizePool.height + calculateDelta({
            client:            event.clientY,
            parentSize:        this.props.parentSize.height,
            dimensionType:     this.props.dimensionType,
            lastClickPosition: this.state.lastClickPosition.y,
            factor
        });

    if(maxHeight < newHeight ) {
        newHeight = maxHeight
    }

    if(minHeight > newHeight) {
        newHeight = minHeight
    }

    {
        const callback = () => this.props.onResize(
            this.state.currentDirection,
            state.currentSize.width,
            newHeight);

        if( this.props.resizeType === 'outer') {
            callback()
        }
        else this.stateChanger({
            currentSize: {
                width:  state.currentSize.width,
                height: newHeight
            }
        }, callback )
    }

}




function rightLeft(event, factor) {
    const
        state    = this.state,
        maxWidth = this.props.maxWidth,
        minWidth = this.props.minHeight;
    
    let newWidth =
        state.sizePool.width + calculateDelta({
            client:            event.clientX,
            parentSize:        this.props.parentSize.width,
            dimensionType:     this.props.dimensionType,
            lastClickPosition: this.state.lastClickPosition.x,
            factor
        });

    if(maxWidth < newWidth ) {
        newWidth = maxWidth
    }

    if(minWidth > newWidth) {
        newWidth = minWidth
    }

    {
        const callback = () => this.props.onResize(
            this.state.currentDirection,
            newWidth,
            state.currentSize.height)

        if( this.props.resizeType === 'outer') {
            callback()
        } else this.stateChanger({
            currentSize: {
                width: newWidth,
                height: state.currentSize.height
            }
        }, callback)
    }
}




export default function (event) {
    let factor;

    switch(this.state.currentDirection) {
        case 'top':
            factor = -1;
            return topBottom.bind(this)( event, factor );

        case 'bottom':
            factor = 1;
            return topBottom.bind(this)( event, factor );

        case 'left':
            factor = -1;
            return rightLeft.bind(this)( event, factor );

        case 'right':
            factor = 1;
            return rightLeft.bind(this)( event, factor );

        default: return
    }
}