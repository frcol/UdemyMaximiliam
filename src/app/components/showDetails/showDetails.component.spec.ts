import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowDetails } from './showDetails.component';

describe('OutroComponent', () => {
  let component: ShowDetails;
  let fixture: ComponentFixture<ShowDetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowDetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowDetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
