import { platformBrowser } from '@angular/platform-browser';
import { AppModule } from './app/app-module';

(window as any).CESIUM_BASE_URL = '/assets/cesium';
platformBrowser().bootstrapModule(AppModule, {
  ngZoneEventCoalescing: true,
})
  .catch(err => console.error(err));
