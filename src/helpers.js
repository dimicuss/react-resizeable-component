function getCssStyle (domElm, style) {
    const styles = getComputedStyle(domElm);
    return styles[style]
}

export function countInnerWidth(domElm) {
    const paddingLeft  = parseInt(getCssStyle(domElm, 'padding-left'));
    const paddingRight = parseInt(getCssStyle(domElm, 'padding-right'));

    return domElm.offsetWidth - paddingLeft - paddingRight;
}

export function countInnerHeight(domElm) {
    const paddingTop  = parseInt(getCssStyle(domElm, 'padding-top'));
    const paddingBottom = parseInt(getCssStyle(domElm, 'padding-bottom'));

    return domElm.offsetHeight - paddingTop - paddingBottom;
}