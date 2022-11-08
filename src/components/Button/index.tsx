import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Button as DefaultButton, ButtonProps } from 'react-native';

export const Button = (props: ButtonProps) => {
  const { colors } = useTheme();

  return (
    <DefaultButton
      color={colors.primary}
      {...props}
    />
  );
};
