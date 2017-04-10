export default function () {
    const
        newSizePool = Object.assign({}, this.state.currentSize);

    this.stateChanger({
        currentDirection: null,
        sizePool: newSizePool
    })
}