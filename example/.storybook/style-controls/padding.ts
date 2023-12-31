import { EdgeInsets } from '@lib/painting';
import type { Meta } from '@storybook/react-native';

export type PaddingControlsType = {
  paddingType: 'All' | 'Symmetric' | 'Only';
  paddingAll: number;
  paddingSymmetricVertical: number;
  paddingSymmetricHorizontal: number;
  paddingOnlyTop: number;
  paddingOnlyLeft: number;
  paddingOnlyRight: number;
  paddingOnlyBottom: number;
};

export const PaddingControls = {
  controls: (): Meta<PaddingControlsType>['argTypes'] => ({
    paddingType: {
      label: 'Padding type',
      defaultValue: 'All',
      type: {
        name: 'enum',
        value: ['All', 'Symmetric', 'Only'],
      },
    },
    paddingAll: {
      label: 'Padding',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'All' },
    },
    paddingSymmetricVertical: {
      label: 'Padding Vertical',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Symmetric' },
    },
    paddingSymmetricHorizontal: {
      label: 'Padding Horizontal',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Symmetric' },
    },
    paddingOnlyTop: {
      label: 'Padding Top',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Only' },
    },
    paddingOnlyLeft: {
      label: 'Padding Left',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Only' },
    },
    paddingOnlyRight: {
      label: 'Padding Right',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Only' },
    },
    paddingOnlyBottom: {
      label: 'Padding Bottom',
      control: 'number',
      defaultValue: 10,
      if: { arg: 'paddingType', eq: 'Only' },
    },
  }),
  resolve: (props: PaddingControlsType) => {
    switch (props.paddingType) {
      case 'Symmetric':
        return EdgeInsets.symmetric({
          vertical: props.paddingSymmetricVertical,
          horizontal: props.paddingSymmetricHorizontal,
        });
      case 'Only':
        return EdgeInsets.only({
          top: props.paddingOnlyTop,
          left: props.paddingOnlyLeft,
          right: props.paddingOnlyRight,
          bottom: props.paddingOnlyBottom,
        });
      default:
        return EdgeInsets.all(props.paddingAll ?? 10);
    }
  },
};
