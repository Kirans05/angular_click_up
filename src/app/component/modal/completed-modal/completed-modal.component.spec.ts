import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompletedModalComponent } from './completed-modal.component';

describe('CompletedModalComponent', () => {
  let component: CompletedModalComponent;
  let fixture: ComponentFixture<CompletedModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompletedModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompletedModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
