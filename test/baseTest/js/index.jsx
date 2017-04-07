import ResizerHOC from 'Src/index.jsx'


ReactDOM.render(
    <ResizerHOC
        width={'200px'}
        height={'200px'}
        resizersDefinitions={{
            top: true,
            left: true,
            right: true,
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
    </ResizerHOC>,
    document.querySelector('#react-root')
)