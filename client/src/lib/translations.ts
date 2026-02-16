export type Locale = 'en' | 'es';

export const translations: Record<Locale, any> = {
  en: {
    app: {
      newMap: "➕ New Map",
      createMapTitle: "Create a new map",
      filter: "Filter",
      wipe: "🚨 Wipe",
      wipeTitle: "Emergency data wipe",
      encryptionSettings: "Database encryption settings",
      syncing: "Syncing Map..."
    }
  },
  es: {
    app: {
      newMap: "➕ Nuevo Mapa",
      createMapTitle: "Crear un mapa nuevo",
      filter: "Filtrar",
      wipe: "🚨 Borrar",
      wipeTitle: "Borrado de emergencia de datos",
      encryptionSettings: "Ajustes de encriptación",
      syncing: "Sincronizando Mapa..."
    }
  }
};