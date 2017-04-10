export default function(event)  {
    event.preventDefault();

    this.props.stateChanger({
        currentDirection: this.props.direction,
        lastClickPosition: {
            x: event.clientX,
            y: event.clientY
        }
    }, () => {
        this.onResizeStart(
            this.props.direction,
            this.props.currentSize.width,
            this.props.currentSize.height
        )
    })
}