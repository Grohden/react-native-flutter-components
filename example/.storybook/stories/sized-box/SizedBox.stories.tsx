import {
  Border,
  BorderRadius,
  BoxDecoration,
  Center,
  DecoratedBox,
  Placeholder,
  SizedBox,
} from '@grohden/react-native-flutter-components';
import type { Meta, Story } from '@storybook/react-native';
import React from 'react';
import { View } from 'react-native';

import { SizeControls } from '../../style-controls';
import type { SizeControlsType } from '../../style-controls';

type StoryProps = SizeControlsType;

const SizedBoxMeta: Meta<StoryProps> = {
  title: 'SizedBox',
  component: SizedBox,
  argTypes: {
    ...SizeControls.controls(),
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

export default SizedBoxMeta;

export const Basic: Story<StoryProps> = (arg) => {
  const size = SizeControls.resolve(arg);
  const border = Border.all({ color: 'red', width: 1 });

  let child;
  if (arg.sizeType === 'Radius') {
    const borderRadius = BorderRadius.circular(arg.sizeRadius);

    child = (
      <DecoratedBox boxDecoration={BoxDecoration.new({ border })}>
        <DecoratedBox
          boxDecoration={BoxDecoration.new({ border, borderRadius })}
        >
          <SizedBox.fromSize size={size} />
        </DecoratedBox>
      </DecoratedBox>
    );
  } else {
    child = (
      <SizedBox.fromSize size={size}>
        <Placeholder />
      </SizedBox.fromSize>
    );
  }

  return (
    <Center>
      {child}
    </Center>
  );
};
