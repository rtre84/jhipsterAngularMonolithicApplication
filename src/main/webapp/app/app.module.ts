import './vendor.ts';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Ng2Webstorage } from 'ngx-webstorage';

import { JhipsterAngularMonolithicApplicationSharedModule, UserRouteAccessService } from './shared';
import { JhipsterAngularMonolithicApplicationAppRoutingModule} from './app-routing.module';
import { JhipsterAngularMonolithicApplicationHomeModule } from './home/home.module';
import { JhipsterAngularMonolithicApplicationAdminModule } from './admin/admin.module';
import { JhipsterAngularMonolithicApplicationEntityModule } from './entities/entity.module';
import { customHttpProvider } from './blocks/interceptor/http.provider';
import { PaginationConfig } from './blocks/config/uib-pagination.config';

// jhipster-needle-angular-add-module-import JHipster will add new module here

import {
    JhiMainComponent,
    NavbarComponent,
    FooterComponent,
    ProfileService,
    PageRibbonComponent,
    ActiveMenuDirective,
    ErrorComponent
} from './layouts';

@NgModule({
    imports: [
        BrowserModule,
        JhipsterAngularMonolithicApplicationAppRoutingModule,
        Ng2Webstorage.forRoot({ prefix: 'jhi', separator: '-'}),
        JhipsterAngularMonolithicApplicationSharedModule,
        JhipsterAngularMonolithicApplicationHomeModule,
        JhipsterAngularMonolithicApplicationAdminModule,
        JhipsterAngularMonolithicApplicationEntityModule,
        // jhipster-needle-angular-add-module JHipster will add new module here
    ],
    declarations: [
        JhiMainComponent,
        NavbarComponent,
        ErrorComponent,
        PageRibbonComponent,
        ActiveMenuDirective,
        FooterComponent
    ],
    providers: [
        ProfileService,
        customHttpProvider(),
        PaginationConfig,
        UserRouteAccessService
    ],
    bootstrap: [ JhiMainComponent ]
})
export class JhipsterAngularMonolithicApplicationAppModule {}
