import React from 'react';
import { NativeModules } from 'react-native';
import { device } from '../utils';
import I18n from 'i18n-js';
import en from './en-US';
import pt from './pt-BR';
import stores from '../stores';

export const enumType = {
  pt_BR: 'pt_BR',
  pt_US: 'pt_BR',
  en_US: 'en_US',
  br: 'pt_BR',
  en: 'en_US',
};

const getLanguageByDevice = () => {
  return device === 'ios'
    ? NativeModules.SettingsManager.settings.AppleLocale
    : NativeModules.I18nManager.localeIdentifier;
};

I18n.fallbacks = true;

I18n.translations = {
  en_US: en,
  pt_BR: pt,
};

export const setLanguageToI18n = locale => {
  I18n.defaultLocale = stores.getState().language.locale;
  I18n.locale = stores.getState().language.locale;
  console.log(stores.getState().language.locale);
  const language = locale;
  const translateNormalize = enumType[language];
  const iHaveThisLanguage =
    I18n.translations.hasOwnProperty(translateNormalize);
  iHaveThisLanguage
    ? (I18n.locale = translateNormalize)
    : (I18n.defaultLocale = 'en_US');
};

setLanguageToI18n();

export const translate = key => I18n.t(key);
