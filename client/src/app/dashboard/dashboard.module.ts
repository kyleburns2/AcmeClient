import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { NgbDropdownModule } from '@ng-bootstrap/ng-bootstrap';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        CommonModule,
        DashboardRoutingModule,
        DataViewModule,
        ButtonModule,
        PanelModule,
        DialogModule,
        DropdownModule,
        TranslateModule,
        NgbDropdownModule.forRoot()
    ],
    declarations: [DashboardComponent, SidebarComponent, HeaderComponent]
})
export class DashboardModule {}
