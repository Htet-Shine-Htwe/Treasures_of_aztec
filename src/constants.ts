import { InputData, Locale } from '@/types';
import React from 'react';
import { GithubSvg, LinkedinSvg, PortfolioSvg } from './assets/svg';

const DATABASE_NAME = '@js-slot-machine';
export const COLLECTION_SAVED_STATE = `${DATABASE_NAME}:savedState`;

export const DEFAULT_AUTODISMISS_TIME = 2000;
export const TOAST_OFFSET = 4;

export const LOCALES_DATA: InputData[] = [
  { value: Locale.EN, caption: 'settings.english' },
  { value: Locale.PT, caption: 'settings.portuguese' },
];

export const JS_SLOTS_URL = '';

export const LOADING_TIME: number = 3000; // in milliseconds

export const LINKS: { label: string; icon: React.FC; url: string }[] = [
  {
    label: 'GitHub',
    icon: GithubSvg,
    url: 'https://github.com/Htet-Shine-Htwe/Treasures_of_aztec',
  },
  {
    label: 'Linkedin',
    icon: LinkedinSvg,
    url: 'https://www.linkedin.com/in/htet-shine-61082028a/',
  }
];
