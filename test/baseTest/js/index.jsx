import ResizerHOC from 'Src/index.jsx'

const size = {
    width: 1000,
    height: 1000
}


class Wrapper extends React.Component {
    constructor(props) {
        super(props)

        this.state = {
            width: 50,
            height: 50
        }
    }

    render() {
        return <div style={{
            width: size.width,
            height: size.height
        }}>
            <ResizerHOC
                className="someClass"

                dimensionType='percents'
                resizeType='outer'
                parentSize={{
                    width: size.width,
                    height: size.height
                }}

                onResizeStart={( direction, width, height ) => {
                    this.setState({ width, height })
                }}

                onResize={(direction, width, height) => {
                    this.setState({ width, height })
                }}

                onResizeStop={( direction, width, height ) => {
                    this.setState({ width, height })
                }}

                width={this.state.width}
                height={this.state.height}

                maxWidth={70}
                maxHeight={70}
                minWidth={40}
                minHeight={40}

                resizersDefinitions={{
                    top:    true,
                    left:   true,
                    right:  true,
                    bottom: true
                }}
                resizersStyles={{
                    top: {
                        backgroundColor: 'yellow'
                    },
                    left: {
                        backgroundColor: 'red'
                    },
                    right: {
                        backgroundColor: 'green'
                    },
                    bottom: {
                        backgroundColor: 'blue'
                    }
                }}
                style={{
                    backgroundColor: 'black'
                }}
            >
                <p>Hello world</p>
            </ResizerHOC>
        </div>
    }
}

ReactDOM.render(<Wrapper/>, document.querySelector('#react-root'))