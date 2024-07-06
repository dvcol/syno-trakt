export const RoutePath = {
  Calendar: 'calendar',
  Downloads: 'downloads',
  Files: 'files',
  Search: 'search',
  Settings: 'settings',
  Web: 'web',
} as const;

export type RoutePaths = (typeof RoutePath)[keyof typeof RoutePath];

type Route = {
  name: string;
  path: RoutePaths;
};
export const Routes: Record<keyof typeof RoutePath, Route> = {
  Downloads: {
    name: 'Downloads',
    path: RoutePath.Downloads,
  },
  Files: {
    name: 'Files',
    path: RoutePath.Files,
  },
  Calendar: {
    name: 'Calendar',
    path: RoutePath.Calendar,
  },
  Web: {
    name: 'Web',
    path: RoutePath.Web,
  },
  Search: {
    name: 'Search',
    path: RoutePath.Search,
  },
  Settings: {
    name: 'Settings',
    path: RoutePath.Settings,
  },
};
