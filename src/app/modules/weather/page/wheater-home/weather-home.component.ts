import { Component, OnDestroy, OnInit } from '@angular/core';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { Subject, takeUntil } from 'rxjs';
import { WeatherDatas } from 'src/app/models/interface/WeatherDatas';

import { WeatherService } from '../../services/weather.service';
import { NgxSpinnerService } from 'ngx-spinner';

@Component({
  selector: 'app-weather-home',
  templateUrl: './weather-home.component.html',
  styleUrls: []
})
export class WeatherHomeComponent implements OnInit, OnDestroy {

  private readonly destroy$: Subject<void> = new Subject();

  initialCityName: String = "São Paulo";
  weatherData!: WeatherDatas;
  searchIcon = faMagnifyingGlass;

  constructor(
    private service: WeatherService,
    private spinner: NgxSpinnerService
  ) { }

  ngOnInit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  getWeatherDatas(cityName: String): void {
    this.spinner.show();
    this.service.getWeatherDatas(cityName)
      .pipe(
        takeUntil(this.destroy$)
      ).subscribe({
        next: (response) => {
          response && (this.weatherData = response)
        },
        error: (error) => {
          if (error.error.cod == 404) {
            alert(error.error.message);
          }
          this.spinner.hide();
        },
        complete: () => {
          this.spinner.hide();
          this.initialCityName = '';
        }
      });
  }

  onSubmit(): void {
    this.getWeatherDatas(this.initialCityName);
  }

  ngOnDestroy(): void {
    this.destroy$.next();
    this.destroy$.complete();
  }

}
