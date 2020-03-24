import { TestBed, async, tick, fakeAsync } from '@angular/core/testing';
import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import { DataService } from './data.service';
import { HttpClient, HttpHandler } from '@angular/common/http';
import { BrowserModule, By } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

describe('AppComponent', () => {
  let fixture;
  let component;
  let dataService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent
      ],
      imports: [CommonModule, BrowserModule, BrowserAnimationsModule],
      providers: [DataService, HttpClient, HttpHandler]
    }).compileComponents();

    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    dataService = TestBed.get(DataService)
    component.ngOnInit()

  }));

  it('should create the app', () => {
    expect(component).toBeTruthy()
  });

  it('should contain a title of Angular testing and a button', () => {
    const h1Element = fixture.debugElement.nativeElement.querySelector('.title')
    expect(h1Element.textContent).toContain('Angular Testing')
  })

  it('should call showData and dataService::fetchData when button is clicked',() => {
    const showDataSpy = spyOn(component, 'showData').and.callThrough()

    const fetchDataSpy = spyOn(dataService, 'fetchData').and.callThrough()
    
    fixture.debugElement.query(By.css('.btn')).triggerEventHandler('click', null)

    fixture.detectChanges()

    expect(showDataSpy).toHaveBeenCalled()
    expect(fetchDataSpy).toHaveBeenCalled()

  })

});

