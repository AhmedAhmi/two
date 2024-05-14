import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './error-routing/not-found/not-found.component';
import { UncaughtErrorComponent } from './error-routing/error/uncaught-error.component';
import { PagemComponent } from './pagem/pagem.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'main', pathMatch: 'full' },
  { path: 'error', component: UncaughtErrorComponent },
  { path: 'main', loadChildren: () => import('./main/main.routes').then(m => m.routes), data: { text: 'main' } },
  { path: 'pagem', component: PagemComponent, data: { text: 'pagem' } },
  { path: '**', component: PageNotFoundComponent } // must always be last
];
