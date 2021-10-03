export type BehaviorMode = (
    | 'auto'
    | 'light'
    | 'dark'
);

export const getColorScheme = (mode: BehaviorMode): string => {
    return ({
      'auto'      : 'light dark',
      'light': 'light',
      'dark' : 'dark',
    } as const)[mode];
};
  