import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IpjSidenavComponent } from './ipj-sidenav.component';

describe('IpjSidenavComponent', () => {
  let component: IpjSidenavComponent;
  let fixture: ComponentFixture<IpjSidenavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IpjSidenavComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IpjSidenavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
