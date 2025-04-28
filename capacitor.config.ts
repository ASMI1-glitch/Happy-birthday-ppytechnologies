import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.example.app',
  appName: 'birthday-app',
  // Point to 'out' where the static files are exported
  webDir: 'out',
  bundledWebRuntime: false
};

export default config;
