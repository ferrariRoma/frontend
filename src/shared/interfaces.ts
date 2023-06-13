import { ReactNode } from 'react';

export interface IChildProps {
  children?: ReactNode | string;
}

export interface ILayoutProps {
  margin?: number;
  padding?: number;
  borderRadius?: number;
}

export interface ITotalFocusTime {
  daily: number;
  weekly: number;
  monthly: number;
}

export interface IRanking {
  group: Record<string, number>[];
  user: {
    id: number;
    time: number;
  };
}
