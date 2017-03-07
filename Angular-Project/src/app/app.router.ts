import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent }  from './app.component';
import { HomeComponent } from './home.component';
import { DatatableComponent } from './datatable/datatable.component';
import { CreateTransactionComponent }   from './createtransaction.component';

export const router: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'datatable', component: DatatableComponent,
		children: 
			[
				{ path: '', redirectTo: 'datatable', pathMatch: 'full' },
				{ path: 'createtrans', component: CreateTransactionComponent }
			]
	},
	{ path: '**', redirectTo: 'home', pathMatch: 'full' },
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);