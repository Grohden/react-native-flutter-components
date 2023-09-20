import {
  BoxConstraints,
  BoxDecoration,
  Color,
  Colors,
  Container,
  DecoratedBox,
  Padding,
  Placeholder,
} from '@grohden/react-native-flutter-components';
import type { Meta, Story } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { PaddingControls } from '../../style-controls';
import type { PaddingControlsType } from '../../style-controls';

type StoryProps = PaddingControlsType;

const PaddingMeta: Meta<StoryProps> = {
  title: 'Padding',
  component: Padding,
  argTypes: {
    ...PaddingControls.controls(),
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

export default PaddingMeta;

export const Basic: Story<StoryProps> = (arg) => {
  const insets = PaddingControls.resolve(arg);

  return (
    <Container
      constraints={BoxConstraints.expand()}
      boxDecoration={BoxDecoration({
        color: Color('#7EE5673A'),
      })}
    >
      <Padding padding={insets}>
        <DecoratedBox
          boxDecoration={BoxDecoration({ color: Colors.white })}
        >
          <Placeholder />
        </DecoratedBox>
      </Padding>
    </Container>
  );
};
