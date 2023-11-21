import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'news_api_demo',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
