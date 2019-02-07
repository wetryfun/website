import { Component } from '@stencil/core';
import '@wetryfun/core';

@Component({
  tag: 'app-home',
  styleUrl: 'app-home.scss',
  shadow: false
})
export class AppHome {
  render() {
    return (
      <wtf-logo color='white'></wtf-logo>
    );
  }
}
