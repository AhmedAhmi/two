import { Routes } from '@angular/router';
import { ChildViewComponent } from './child-view/child-view.component';

export const routes: Routes = [
	{ path: '', redirectTo: 'child-view', pathMatch: 'full' },{ path: 'child-view', component: ChildViewComponent, data: { text: 'Child View' } }];
