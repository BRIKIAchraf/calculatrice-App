import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MonCalculatriceComponent } from './mon-calculatrice.component';

describe('MonCalculatriceComponent', () => {
  let component: MonCalculatriceComponent;
  let fixture: ComponentFixture<MonCalculatriceComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MonCalculatriceComponent]
    });
    fixture = TestBed.createComponent(MonCalculatriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
