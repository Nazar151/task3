import {Routes} from "@angular/router";
import {UsersComponent} from "../userComponents/users/users.component";
import {UserDetailsComponent} from "../userComponents/user-details/user-details.component";
import {HomeComponent} from "../home/home.component";
import {DeactivatedService} from "../services/deactivated.service";


export let userRoutes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'users', component: UsersComponent, canDeactivate: [DeactivatedService] },
  {path: 'users/:id', component: UserDetailsComponent},
]


