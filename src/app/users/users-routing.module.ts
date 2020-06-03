import {NgModule} from '@angular/core';
import {Route, RouterModule} from '@angular/router';
import {UsersComponent} from './users.component';
import {UsersTableComponent} from './components/users-table/users-table.component';
import {UserReactiveFormComponent} from './components/user-reactive-form/user-reactive-form.component';

const routes: Route[] = [
  {
    path: '',
    component: UsersComponent,

    children: [
      {
        path: 'users-table',
        component: UsersTableComponent
      },
      {
        path: 'my-profile',
        component: UserReactiveFormComponent
      },
      {
        path: 'my-profile',
        component: UserReactiveFormComponent
      },
      {
        path: '',
        redirectTo: 'my-profile',
        pathMatch: 'full'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule {
}
