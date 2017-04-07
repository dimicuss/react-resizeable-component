function bottom(stateChanger, state,  event) {
    const
        deltaY = event.clientY - state.lastClickPosition.y,
        newHeight = parseInt(state.sizePool.height) + deltaY

    stateChanger({
        currentSize: {
            width: state.currentSize.width,
            height: newHeight + 'px'
        }
    })
}


function right(stateChanger, state,  event) {
    const
        deltaY = event.clientY - state.lastClickPosition.y,
        newHeight = parseInt(state.sizePool.height) + deltaY


    stateChanger({
        currentSize: {
            width: state.currentSize.width,
            height: newHeight + 'px'
        }
    })
}






export default (stateChanger, getState) => {
    return (event) => {

        const state = getState()

        switch(state.currentDirection) {
            case 'top':
                console.log('top')
                return;

            case 'bottom': return bottom( stateChanger, state, event )

            case 'left':
                console.log('left')
                return;

            case 'right':
                console.log('right')
                return;

            default: return
        }

    }
}