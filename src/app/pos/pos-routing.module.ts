import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PosComponent } from './pos/pos.component';
import { PosLineComponent } from './pos-line/pos-line.component';
import { ItemsComponent } from './items/items.component';
import { LineComponent } from './line/line.component';
import { MembersComponent } from './members/members.component';

const routes: Routes = [
  // { path: '', component: PosComponent },
  { path: 'pos', component: PosComponent },
  { path: 'posline', component: PosLineComponent },
  { path: 'items', component: ItemsComponent },
  { path: 'line', component: LineComponent },
  { path: 'members', component: MembersComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PosRoutingModule { }
