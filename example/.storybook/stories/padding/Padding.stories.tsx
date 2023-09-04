import {
  BoxConstraints,
  BoxDecoration,
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
  let insets = PaddingControls.resolve(arg);

  return (
    <Container
      constraints={BoxConstraints.expand()}
      boxDecoration={BoxDecoration.new({
        color: 'rgba(126,229,103,0.23)',
      })}
    >
      <Padding padding={insets}>
        <DecoratedBox
          boxDecoration={BoxDecoration.new({
            color: 'white',
          })}
        >
          <Placeholder />
        </DecoratedBox>
      </Padding>
    </Container>
  );
};
