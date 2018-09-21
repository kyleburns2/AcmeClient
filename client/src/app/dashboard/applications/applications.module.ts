import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ApplicationsRoutingModule } from './applications-routing.module';
import { ApplicationsComponent } from './applications.component';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
    imports: [
        CommonModule,
        ApplicationsRoutingModule,
        TranslateModule
    ],
    declarations: [ApplicationsComponent]
})
export class ApplicationsModule {}
