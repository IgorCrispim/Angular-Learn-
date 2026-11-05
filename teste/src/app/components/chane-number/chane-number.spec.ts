import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ChaneNumber } from './chane-number';

describe('ChaneNumber', () => {
  let component: ChaneNumber;
  let fixture: ComponentFixture<ChaneNumber>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChaneNumber],
    }).compileComponents();

    fixture = TestBed.createComponent(ChaneNumber);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
