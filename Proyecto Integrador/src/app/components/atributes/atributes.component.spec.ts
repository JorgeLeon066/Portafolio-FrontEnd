import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributesComponent } from './atributes.component';

describe('AtributesComponent', () => {
  let component: AtributesComponent;
  let fixture: ComponentFixture<AtributesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AtributesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
