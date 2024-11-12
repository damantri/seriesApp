// archivo: series-list.component.spec.ts
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { SeriesListComponent } from './series-list.component';
import { SeriesService } from '../series.service';
import { Serie } from '../serie';

describe('SeriesListComponent', () => {
  let component: SeriesListComponent;
  let fixture: ComponentFixture<SeriesListComponent>;
  let service: SeriesService;
  let httpMock: HttpTestingController;

  const mockSeries: Serie[] = [
    { id: 1, name: 'Breaking Bad', channel: 'AMC', seasons: 5, description: '', webpage: '', poster: '' },
    { id: 2, name: 'Game of Thrones', channel: 'HBO', seasons: 8, description: '', webpage: '', poster: '' },
    { id: 3, name: 'Sherlock', channel: 'BBC', seasons: 4, description: '', webpage: '', poster: '' }
  ];

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [SeriesListComponent],
      providers: [SeriesService]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriesListComponent);
    component = fixture.componentInstance;
    service = TestBed.inject(SeriesService);
    httpMock = TestBed.inject(HttpTestingController);
    fixture.detectChanges();
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create the component', () => {
    expect(component).toBeTruthy();
  });

  it('should fetch series data from the service', () => {
    component.ngOnInit();
    const req = httpMock.expectOne(service['apiUrl']);
    expect(req.request.method).toBe('GET');
    req.flush(mockSeries);

    expect(component.series.length).toBe(3);
    expect(component.series[0].name).toBe('Breaking Bad');
  });

  it('should calculate the correct average seasons', () => {
    component.series = mockSeries;
    component.calculateAverageSeasons();
    expect(component.averageSeasons).toBe((5 + 8 + 4) / 3);
  });
});
