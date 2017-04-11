export default function () {
    const
        newSizePool = Object.assign({}, this.state.currentSize),
        direction   = this.state.currentDirection;

    console.log(direction)

    this.stateChanger({
        currentDirection: null,
        sizePool: newSizePool
    }, () => {
        this.props.onResizeStop && this.props.onResizeStop(
            direction,
            this.state.currentSize.width,
            this.state.currentSize.height
        )
    })
}