import { useMemo } from 'react';
/**
 *
 * @param {Function} func
 * @param {Array} deps
 * @return Function
 */
const useFunction = (func, deps = []) => (
    useMemo(() => {
      const _mutatedFunc = func;
  
      Object.defineProperty(_mutatedFunc, 'name', { value: `${_mutatedFunc.name}_${Date.now()}` });
  
      return _mutatedFunc;
    },deps)
  );
  
  export default useFunction;
  