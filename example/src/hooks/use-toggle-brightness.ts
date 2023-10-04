import { Brightness } from '@lib/std-ui';
import { useCallback, useState } from 'react';

export const useToggleBrightness = () => {
  const [brightness, setBrightness] = useState(Brightness.light);

  return [
    brightness,
    useCallback(() => {
      setBrightness(value =>
        value === Brightness.light ? Brightness.dark : Brightness.light
      );
    }, []),
  ] as const;
};
