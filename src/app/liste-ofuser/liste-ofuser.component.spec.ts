import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListeOfuserComponent } from './liste-ofuser.component';

describe('ListeOfuserComponent', () => {
  let component: ListeOfuserComponent;
  let fixture: ComponentFixture<ListeOfuserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListeOfuserComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListeOfuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
