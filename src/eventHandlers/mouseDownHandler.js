import { countInnerWidth, countInnerHeight } from '../helpers.js'

export default function(event)  {
    event.preventDefault();

    const hocParent = this.props.hoc.ref.parentNode;

    this.props.stateChanger({
        parentSize: {
            width:  countInnerWidth(hocParent),
            height: countInnerHeight(hocParent)
        },
        currentDirection: this.props.direction,
        lastClickPosition: {
            x: event.clientX,
            y: event.clientY
        }
    }, () => {
        this.onResizeStart && this.onResizeStart(
            this.props.direction,
            this.props.currentSize.width,
            this.props.currentSize.height
        )
    })
}