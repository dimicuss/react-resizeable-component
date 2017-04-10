function topBottom(event, factor) {
    const
        state     = this.state,
        deltaY    = (event.clientY - state.lastClickPosition.y) * factor,
        newHeight = parseInt(state.sizePool.height) + deltaY

    this.stateChanger({
        currentSize: {
            width:  state.currentSize.width,
            height: newHeight + 'px'
        }
    })
}



function rightLeft(event, factor) {
    const
        state    = this.state,
        deltaX   = (event.clientX - state.lastClickPosition.x) * factor,
        newWidth = parseInt(state.sizePool.width) + deltaX

    this.stateChanger({
        currentSize: {
            width: newWidth + 'px',
            height: state.currentSize.height
        }
    })
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