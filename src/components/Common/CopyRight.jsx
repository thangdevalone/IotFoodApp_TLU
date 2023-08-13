import React from 'react';
import { Linking } from 'react-native';

import { Text, Link } from 'react-native-paper';

export const Copyright = (props) => {
  return (
    <Text className="text-slate-400 text-base" align="center" {...props}>
      {'Copyright © '}
      <Text className="text-slate-400 text-base underline" href="#">
        Iot Food
      </Text>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Text>
  );
};

