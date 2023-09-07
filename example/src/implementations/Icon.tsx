import { MaterialIcons } from '@expo/vector-icons';
import { useIconTheme } from '@lib/theme-data';
import React from 'react';

export const Icon = (
  { name, size, color }: {
    name: React.ComponentProps<typeof MaterialIcons>['name'];
    size?: number;
    color?: string;
  },
) => {
  const theme = useIconTheme();

  return (
    <MaterialIcons
      name={name}
      size={size ?? theme.size}
      color={color ?? theme.color}
    />
  );
};
