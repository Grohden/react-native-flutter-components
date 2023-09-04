import { Size } from '@lib/styles';
import type { Meta } from '@storybook/react-native';

export type SizeControlsType = {
  sizeType: 'Square' | 'Radius' | 'Only';
  sizeSquare: number;
  sizeRadius: number;
  sizeOnlyWidth: number;
  sizeOnlyHeight: number;
};

export const SizeControls = {
  controls: (): Meta<SizeControlsType>['argTypes'] => ({
    sizeType: {
      label: 'Size type',
      defaultValue: 'Square',
      type: {
        name: 'enum',
        value: ['Square', 'Radius', 'Only'],
      },
    },
    sizeSquare: {
      label: 'Size',
      control: 'number',
      defaultValue: 100,
      if: { arg: 'sizeType', eq: 'Square' },
    },
    sizeRadius: {
      label: 'Size from Radius',
      control: 'number',
      defaultValue: 50,
      if: { arg: 'sizeType', eq: 'Radius' },
    },
    sizeOnlyWidth: {
      label: 'Width',
      control: 'number',
      defaultValue: 100,
      if: { arg: 'sizeType', eq: 'Only' },
    },
    sizeOnlyHeight: {
      label: 'Height',
      control: 'number',
      defaultValue: 100,
      if: { arg: 'sizeType', eq: 'Only' },
    },
  }),
  resolve: (props: SizeControlsType) => {
    switch (props.sizeType) {
      case 'Only':
        return Size.new(props.sizeOnlyWidth, props.sizeOnlyHeight);
      case 'Radius':
        return Size.fromRadius(props.sizeRadius);
      default:
        return Size.square(props.sizeSquare ?? 100);
    }
  },
};
