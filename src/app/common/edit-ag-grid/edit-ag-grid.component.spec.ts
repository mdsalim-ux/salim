import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditAgGridComponent } from './edit-ag-grid.component';

describe('EditAgGridComponent', () => {
  let component: EditAgGridComponent;
  let fixture: ComponentFixture<EditAgGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditAgGridComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditAgGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
