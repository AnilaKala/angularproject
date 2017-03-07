import { Component } from '@angular/core';


@Component({
  selector: 'header-area',
  template: `
    <nav class="navbar navbar-default">
        <div class="container-fluid">
          <div class="navbar-header">
            <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
              <span class="sr-only">Toggle navigation</span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
              <span class="icon-bar"></span>
            </button>
            <a class="navbar-brand" href="#">D+H Banking Finance</a>
          </div>
          <div id="navbar" class="navbar-collapse collapse">
            
            <ul class="nav navbar-nav navbar-right">
              <li [routerLinkActive]="['active']"><a routerLink="home">Home <span class="sr-only">(current)</span></a></li>
              <li [routerLinkActive]="['active']"><a routerLink="datatable">Transactions</a></li>
              
            </ul>
          </div><!--/.nav-collapse -->
        </div><!--/.container-fluid -->
      </nav>
	   
  `
})
export class HeaderComponent {
 
}

