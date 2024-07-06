import { Tabs } from 'expo-router';
import React from 'react';

import QueryProvider from '@/components/navigation/QueryProvider';
import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { Routes } from '@/models/route.model';

const Screens: React.ReactElement[] = Object.values(Routes).map(({ name, path }) => (
  <Tabs.Screen
    key={path}
    name={path}
    options={{
      title: name,
      tabBarIcon: ({ color, focused }) => <TabBarIcon name={focused ? 'home' : 'home-outline'} color={color} />,
    }}
  />
));

const TabLayout: React.FC = () => {
  const colorScheme = useColorScheme();

  return (
    <QueryProvider>
      <Tabs
        screenOptions={{
          tabBarActiveTintColor: Colors[colorScheme ?? 'dark'].tint,
          headerShown: false,
        }}
      >
        {Screens}
      </Tabs>
    </QueryProvider>
  );
};

export default TabLayout;
