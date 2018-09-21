import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectoryRoutingModule } from './directory-routing.module';
import { DirectoryComponent } from './directory.component';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule } from '@angular/forms';
import { DataViewModule } from 'primeng/dataview';
import { DropdownModule } from 'primeng/dropdown';
import { PanelModule } from 'primeng/panel';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';

@NgModule({
    imports: [
        FormsModule,
        CommonModule,
        DataViewModule,
        DropdownModule,
        ButtonModule,
        PanelModule,
        DialogModule,
        DirectoryRoutingModule,
        TranslateModule
    ],
    declarations: [DirectoryComponent]
})
export class DirectoryModule { }
