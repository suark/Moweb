import { useTheme } from '@react-navigation/native';
import React from 'react';
import { TextInput as DefaultTextInput, TextInputProps } from 'react-native';

export const TextInput = (props: TextInputProps) => {
  const { style, ...otherProps } = props;
  const { colors } = useTheme();

  return (
    <DefaultTextInput
      style={[
        // eslint-disable-next-line react-native/no-inline-styles
        {
          color: colors.text,
          backgroundColor: colors.card,
          borderColor: colors.border,
          borderWidth: 1,
          borderRadius: 2,
        },
        style,
      ]}
      {...otherProps}
    />
  );
};
