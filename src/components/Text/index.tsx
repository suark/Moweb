import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Text as DefaultText, TextProps } from 'react-native';

export const Text = (props: TextProps) => {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultText
      style={[{ color: colors.text }, style]}
      {...otherProps}
    />
  );
};
