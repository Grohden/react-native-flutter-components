import {
  EdgeInsets,
  MediaQueryData,
} from '@grohden/react-native-flutter-components';
import { useMemo } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

export const useSafeAreaMediaQuery = () => {
  const wrapperInsets = useSafeAreaInsets();

  return useMemo(
    () => MediaQueryData({ padding: EdgeInsets.only(wrapperInsets) }),
    [wrapperInsets],
  );
};
