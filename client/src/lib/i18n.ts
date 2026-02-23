import { writable, derived } from 'svelte/store';
import { translations, type Locale } from './translations';

// Default to English, but you can later hook this up to navigator.language
export const locale = writable<Locale>('en');

// Derived store for the translation function
export const t = derived(locale, ($locale) => {
  return (key: string) => {
    const keys = key.split('.');
    let value = translations[$locale];
    
    for (const k of keys) {
      if (value === undefined) break;
      value = value[k];
    }
    
    // Fallback to the key string if translation is missing
    return value || key;
  };
});