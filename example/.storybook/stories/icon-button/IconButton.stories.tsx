import { MaterialIcons } from '@expo/vector-icons';
import { Center, IconButton } from '@grohden/react-native-flutter-components';
import { IconButtonThemeDefaults, useIconTheme } from '@lib/theme-data';
import type { Meta, Story } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

type StoryProps = {
  size: number;
  containerSize: number;
};

const IconButtonMeta: Meta<StoryProps> = {
  title: 'IconButton',
  component: IconButton,
  argTypes: {
    containerSize: {
      label: 'Container Size',
      type: 'number',
      defaultValue: IconButtonThemeDefaults.containerSize,
    },
    size: {
      label: 'Size',
      type: 'number',
      defaultValue: IconButtonThemeDefaults.size,
    },
  },
  args: {},
  decorators: [
    (Story) => (
      <View style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}>
        <Story />
      </View>
    ),
  ],
};

const Icon = (
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

export default IconButtonMeta;

export const Basic: Story<StoryProps> = (args) => (
  <Center>
    <IconButton {...args}>
      <Icon name="menu" />
    </IconButton>
  </Center>
);
