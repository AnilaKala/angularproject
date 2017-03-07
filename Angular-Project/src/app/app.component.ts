import { Component } from '@angular/core';

@Component({
  selector: 'my-app',
  template: `
	  <div class="container">
		<header-area></header-area>
		
		<router-outlet></router-outlet>
		<footer-area></footer-area>
	  </div>
	  `,
})
export class AppComponent  { }
