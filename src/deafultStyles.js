const defaultBarSize = '10px'

export const barStyles = {
    top: {
        width: '100%',
        height: defaultBarSize,
        position: 'absolute',
        top: 0,
        cursor: 'row-resize'
    },

    bottom: {
        width: '100%',
        height: defaultBarSize,
        position: 'absolute',
        bottom: 0,
        cursor: 'row-resize'
    },

    left: {
        width: defaultBarSize,
        height: '100%',
        position: 'absolute',
        left: 0,
        top: 0,
        cursor: 'col-resize'
    },

    right: {
        width: defaultBarSize,
        height: '100%',
        position: 'absolute',
        right: 0,
        top: 0,
        cursor: 'col-resize'
    }
}


export const hocStyles = {
    position: 'relative'
}