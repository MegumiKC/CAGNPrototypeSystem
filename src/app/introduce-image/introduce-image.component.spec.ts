import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IntroduceImageComponent } from './introduce-image.component';

describe('IntroduceImageComponent', () => {
  let component: IntroduceImageComponent;
  let fixture: ComponentFixture<IntroduceImageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [IntroduceImageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(IntroduceImageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
