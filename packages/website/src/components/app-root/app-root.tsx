import { Component } from '@stencil/core';
import '@stencil/router'

@Component({
  tag: 'app-root',
  styleUrl: 'app-root.css',
  shadow: true
})
export class AppRoot {

  render() {
    return (
      <main>
        <stencil-router>
          <stencil-route-switch scrollTopOffset={0}>
            <stencil-route url='/' component='app-home' exact={true} />
          </stencil-route-switch>
        </stencil-router>
      </main>
    );
  }
}
