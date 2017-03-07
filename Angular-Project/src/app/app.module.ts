import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { DataTableModule } from "angular2-datatable";
import { HttpModule } from "@angular/http";
import { routes } from './app.router';
import { AppComponent }  from './app.component';
import { HeaderComponent } from './header.component';
import { HomeComponent } from './home.component';
import { FooterComponent } from './footer.component';
import { DatatableComponent } from './datatable/datatable.component';
import { DataFilterPipe }   from './datatable/data-filter.pipe';

import { CreateComponent }   from './create.component';
import { TableDetailComponent }   from './datatable/tabledetail.component';
import { CreateTransactionComponent }   from './createtransaction.component';
@NgModule({
  imports:      [ 
					BrowserModule,
					routes,
					DataTableModule, 
					FormsModule,
					HttpModule
				],
  declarations: [ 
					AppComponent,
					HeaderComponent,
					HomeComponent,
					FooterComponent,
					DatatableComponent,
					DataFilterPipe,
					CreateComponent,
					TableDetailComponent,
					CreateTransactionComponent
					
				],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
