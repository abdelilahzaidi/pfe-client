import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighbarComponent } from './highbar.component';

describe('HighbarComponent', () => {
  let component: HighbarComponent;
  let fixture: ComponentFixture<HighbarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HighbarComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HighbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
