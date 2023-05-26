import { useMemo, useRef } from 'react';
import ReactKeyGen from './index';

const useKeyGen = () => {
  const getKeyCounterRef = useRef(0);

  getKeyCounterRef.current = 0;

  const keyGen = useMemo(() => new ReactKeyGen({
    primitiveToKey: () => {
      getKeyCounterRef.current += 1;

      return getKeyCounterRef.current;
    },
  }), []);

  return keyGen;
};

export default useKeyGen;
