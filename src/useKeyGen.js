import { useMemo } from 'react';
import ReactKeyGen from './index';

const useKeyGen = () => {
  const keyGen = useMemo(() => new ReactKeyGen(), []);

  return keyGen;
};

export default useKeyGen;
