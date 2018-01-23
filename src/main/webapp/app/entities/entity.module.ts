import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterAngularMonolithicApplicationRegionMySuffixModule } from './region-my-suffix/region-my-suffix.module';
import { JhipsterAngularMonolithicApplicationCountryMySuffixModule } from './country-my-suffix/country-my-suffix.module';
import { JhipsterAngularMonolithicApplicationLocationMySuffixModule } from './location-my-suffix/location-my-suffix.module';
import { JhipsterAngularMonolithicApplicationDepartmentMySuffixModule } from './department-my-suffix/department-my-suffix.module';
import { JhipsterAngularMonolithicApplicationTaskMySuffixModule } from './task-my-suffix/task-my-suffix.module';
import { JhipsterAngularMonolithicApplicationEmployeeMySuffixModule } from './employee-my-suffix/employee-my-suffix.module';
import { JhipsterAngularMonolithicApplicationJobMySuffixModule } from './job-my-suffix/job-my-suffix.module';
import { JhipsterAngularMonolithicApplicationJobHistoryMySuffixModule } from './job-history-my-suffix/job-history-my-suffix.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    imports: [
        JhipsterAngularMonolithicApplicationRegionMySuffixModule,
        JhipsterAngularMonolithicApplicationCountryMySuffixModule,
        JhipsterAngularMonolithicApplicationLocationMySuffixModule,
        JhipsterAngularMonolithicApplicationDepartmentMySuffixModule,
        JhipsterAngularMonolithicApplicationTaskMySuffixModule,
        JhipsterAngularMonolithicApplicationEmployeeMySuffixModule,
        JhipsterAngularMonolithicApplicationJobMySuffixModule,
        JhipsterAngularMonolithicApplicationJobHistoryMySuffixModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterAngularMonolithicApplicationEntityModule {}
