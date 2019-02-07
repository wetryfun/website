import { Component } from '@stencil/core';
import '@stencil/router';

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.scss',
  shadow: false
})
export class AppRoot {
  render() {
    return (
      <div class='mdc-layout-grid'>
        <div class='mdc-layout-grid__inner'>
        <div class='mdc-layout-grid__cell'>
          <stencil-router>
            <stencil-route-switch scrollTopOffset={0}>
                <stencil-route url='/' component='app-home' exact={true} />
            </stencil-route-switch>
          </stencil-router>
          </div>
        </div>
      </div>
    );
  }
}
