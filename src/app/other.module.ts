import { InjectionToken, NgModule, ModuleWithProviders } from '@angular/core';

export const TOKEN = new InjectionToken<string[]>('TOKEN');

@NgModule({})
export class OtherModule {
  static forStrings(...parts: string[]): ModuleWithProviders {
    return {
      ngModule: OtherModule,
      providers: [
        {provide: TOKEN, useValue: parts},
      ],
    };
  }
}
