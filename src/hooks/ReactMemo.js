import React from 'react';

/**
 * The same like React.memo - except here we can use common shouldComponentUpdate
 * @param {Element, Function} Component
 * @param {String} [Component.displayName]
 * @param {Function} [shouldComponentUpdate]
 * @return {React.NamedExoticComponent<object>}
 * @constructor
 */
const ReactMemo = (Component, shouldComponentUpdate = undefined) => {
    let propsAreEqual;
    if (shouldComponentUpdate) {
        propsAreEqual = (prevProps, newProps) => (
            !shouldComponentUpdate(prevProps, newProps)
        );
    }
    const MemorizedComponent = React.memo(Component, propsAreEqual);
    MemorizedComponent.displayName = `ReactMemo(${Component.displayName || Component.name})`;
    return MemorizedComponent;
};

export default ReactMemo;