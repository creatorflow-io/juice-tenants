import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TenantDetailComponent } from './tenant-detail.component';
import { TranslateModule } from '@ngx-translate/core';
import { TenantsTestingModule } from '../shared/tenant-testing';

describe('TenantDetailComponent', () => {
  let component: TenantDetailComponent;
  let fixture: ComponentFixture<TenantDetailComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        TranslateModule.forRoot(),
        TenantsTestingModule.forTest({}),
      ],
      declarations: [ TenantDetailComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TenantDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
