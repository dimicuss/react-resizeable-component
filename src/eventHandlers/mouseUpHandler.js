export default (stateChanger, getState) => {
    return function () {
        const
            state = getState(),
            newSizePool = Object.assign({}, state.currentSize);

        stateChanger({
            currentDirection: null,
            sizePool: newSizePool
        })
    }
}