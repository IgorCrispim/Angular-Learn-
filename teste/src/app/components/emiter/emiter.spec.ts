import { ComponentFixture, TestBed } from '@angular/core/testing';
import { Emiter } from './emiter';

describe('Emiter', () => {
  let component: Emiter;
  let fixture: ComponentFixture<Emiter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Emiter],
    }).compileComponents();

    fixture = TestBed.createComponent(Emiter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
