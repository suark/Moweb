import { useTheme } from '@react-navigation/native';
import React from 'react';
import { Platform, Switch as DefaultSwitch, SwitchProps } from 'react-native';

interface HybridSwitchProps extends SwitchProps {
  activeThumbColor?: string | null | undefined;
}

export const Switch = (props: HybridSwitchProps) => {
  const { colors } = useTheme();
  const newProps = { ...props };
  if (Platform.OS === 'web') {
    newProps.activeThumbColor = colors.primary;
  }

  return (
    <DefaultSwitch
      trackColor={{ false: colors.notification, true: colors.notification }}
      thumbColor={colors.primary}
      ios_backgroundColor={colors.background}
      {...props}
    />
  );
};
