import { useCallback } from 'react'

/**
 *
 * @param {Function} func
 * @return Function
 */
const useCallbackOnce = (func) => (
    useCallback(func, [])
);

export default useCallbackOnce;