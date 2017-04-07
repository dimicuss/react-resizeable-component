function topBottom(stateChanger, state,  event, factor) {
    const
        deltaY    = (event.clientY - state.lastClickPosition.y) * factor,
        newHeight = parseInt(state.sizePool.height) + deltaY

    stateChanger({
        currentSize: {
            width: state.currentSize.width,
            height: newHeight + 'px'
        }
    })
}


function rightLeft(stateChanger, state,  event, factor) {
    const
        deltaX   = (event.clientX - state.lastClickPosition.x) * factor,
        newWidth = parseInt(state.sizePool.width) + deltaX

    stateChanger({
        currentSize: {
            width: newWidth + 'px',
            height: state.currentSize.height
        }
    })
}






export default (stateChanger, getState) => {
    return (event) => {

        const state = getState()

        switch(state.currentDirection) {
            case 'top': return topBottom( stateChanger, state, event, -1 );

            case 'bottom': return topBottom( stateChanger, state, event, 1 );

            case 'left': return rightLeft( stateChanger, state, event, -1 );

            case 'right': return rightLeft( stateChanger, state, event, 1 );

            default: return
        }

    }
}