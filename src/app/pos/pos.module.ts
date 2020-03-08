import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppMaterialModule } from '../app-material/app-material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// import { FormsModule } from '@angular/forms';

import { PosRoutingModule } from './pos-routing.module';
import { PosComponent } from './pos/pos.component';
import { PosLineComponent } from './pos-line/pos-line.component';
import { ItemsComponent } from './items/items.component';

import { PersonalDetailsComponent } from './personal-details/personal-details.component';
import { ParentComponent } from './parent/parent.component';
import { SiblingComponent } from './sibling/sibling.component';
// import { StockStatusComponent } from './stock-status/stock-status.component';
import { LineComponent } from './line/line.component';
import { MembersComponent } from './members/members.component';
import { MembersSearchComponent } from './members/members-search/members-search.component';
import { MembersListComponent } from './members/members-list/members-list.component';
import { StockStatusComponent } from './stock-status/stock-status.component';

@NgModule({
    declarations: [PosComponent, PosLineComponent, ItemsComponent, PersonalDetailsComponent, ParentComponent, SiblingComponent,
                   // StockStatusComponent,
                   LineComponent, MembersComponent, MembersSearchComponent, MembersListComponent, StockStatusComponent],
  imports: [
      CommonModule,
      FormsModule,
      PosRoutingModule,
      FlexLayoutModule,
      AppMaterialModule,
      FormsModule,
      ReactiveFormsModule,
  ]
})
export class PosModule { }
