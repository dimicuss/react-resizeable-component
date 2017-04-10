export default function () {
    const
        newSizePool = Object.assign({}, this.state.currentSize),
        direction   = this.state.currentDirection;

    this.stateChanger({
        currentDirection: null,
        sizePool: newSizePool
    }, () => {
        this.props.onResizeStop(
            direction,
            this.state.currentSize.width,
            this.state.currentSize.height
        )
    })
}