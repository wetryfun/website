import { Config } from '@stencil/core';
import { sass } from '@stencil/sass';
import { PluginOptions } from '@stencil/sass/dist/declarations';
import importer from 'node-sass-import';

// https://stenciljs.com/docs/config

export const config: Config = {
  globalStyle: 'src/global/app.css',
  globalScript: 'src/global/app.ts',
  plugins: [
    sass({
      importer: importer
    } as PluginOptions)
  ],
  outputTargets: [
    {
      type: 'www',
      // uncomment the following line to disable service workers in production
      // serviceWorker: null
    }
  ]
};
