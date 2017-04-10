export default function(event)  {
    event.preventDefault()
    this.props.stateChanger({
        currentDirection: this.props.direction,
        lastClickPosition: {
            x: event.clientX,
            y: event.clientY
        }
    })
}