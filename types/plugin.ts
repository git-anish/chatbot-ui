import { KeyValuePair } from './data';

export interface Plugin {
  id: PluginID;
  name: PluginName;
  requiredKeys: KeyValuePair[];
}

export interface PluginKey {
  pluginId: PluginID;
  requiredKeys: KeyValuePair[];
}

export enum PluginID {
  GOOGLE_SEARCH = 'google-search',
  OPENAI_WHISPER = 'openai-whisper'
}

export enum PluginName {
  GOOGLE_SEARCH = 'Google Search',
  OPENAI_WHISPER = 'OpenAI Whisper'
}

export const Plugins: Record<PluginID, Plugin> = {
  [PluginID.GOOGLE_SEARCH]: {
    id: PluginID.GOOGLE_SEARCH,
    name: PluginName.GOOGLE_SEARCH,
    requiredKeys: [
      {
        key: 'GOOGLE_API_KEY',
        value: '',
      },
      {
        key: 'GOOGLE_CSE_ID',
        value: '',
      },
    ],
  },
  [PluginID.OPENAI_WHISPER]: {
    id: PluginID.OPENAI_WHISPER,
    name: PluginName.OPENAI_WHISPER,
    requiredKeys: [
      {
        key: 'OPENAI_API_KEY',
        value: '',
      },
      {
        key: 'WHISPER_LANGUAGE',
        value: '',
      },
    ],
  },
};

export const PluginList = Object.values(Plugins);
