import { Stack } from 'expo-router';
import 'react-native-reanimated';
import React from 'react';

const CalendarLayout: React.FC = () => {
  return (
    <Stack>
      <Stack.Screen name="index" />
    </Stack>
  );
};

export default CalendarLayout;
