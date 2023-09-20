import { MaterialIcons } from '@expo/vector-icons';
import {
  SizedBox,
  useIconTheme,
} from '@grohden/react-native-flutter-components';
import type { Color, Shadow } from '@grohden/react-native-flutter-components';
import React from 'react';

export const Icon = (props: {
  name: React.ComponentProps<typeof MaterialIcons>['name'];
  size?: number;
  color?: Color;
  fill?: number;
  opticalSize?: number;
  weight?: number;
  grade?: number;
  shadows?: Shadow[];
}) => {
  const iconTheme = useIconTheme();
  const iconSize = props.size ?? iconTheme.size;
  // const iconFill = props.fill ?? iconTheme.fill;
  // const iconWeight = props.weight ?? iconTheme.weight;
  // const iconGrade = props.grade ?? iconTheme.grade;
  // const iconOpticalSize = props.opticalSize ?? iconTheme.opticalSize;
  // const iconShadows = props.shadows ?? iconTheme.shadows;

  return (
    <SizedBox width={iconSize} height={iconSize}>
      <MaterialIcons
        name={props.name}
        size={iconSize}
        color={(props.color || iconTheme.color)?.hex()}
      />
    </SizedBox>
  );
};
