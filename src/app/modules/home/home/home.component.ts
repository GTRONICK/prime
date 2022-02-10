import { UtilsService } from '../../../services/utils.service';
import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  basicData: any;
  basicOptions: any;
  product: any[] = [{height: 10, width: 15, length: 25, weight: 45}];
  lastItems: {id: number, type: number, desc: string, status: string}[] = [
      {id: 1731, type: 0, desc: 'Bag', status: 'test-pending'},
      {id: 1732, type: 2, desc: 'Adapter', status: 'ok'},
      {id: 1733, type: 5, desc: 'Cable', status: 'ok'},
      {id: 1734, type: 0, desc: 'Bag', status: 'damaged'},
      {id: 1735, type: 3, desc: 'Mouse', status: 'discharged'},
      {id: 1736, type: 7, desc: 'Keyboard', status: 'test-pending'},
      {id: 1737, type: 2, desc: 'Adapter', status: 'ok'},
      {id: 1738, type: 3, desc: 'Mouse', status: 'ok'},
      {id: 1739, type: 1, desc: 'Battery', status: 'discharged'},
      {id: 1740, type: 0, desc: 'Bag', status: 'ok'},
      {id: 1741, type: 0, desc: 'Bag', status: 'damaged'},
    ];

  constructor(public utilsService: UtilsService) { }

  ngOnInit(): void {
    this.basicData = {
      labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
      datasets: [
          {
              label: 'Average size',
              data: [65, 59, 80, 81, 56, 55, 40],
              fill: false,
              borderColor: '#42A5F5',
              tension: .4
          },
          {
              label: 'Average weight',
              data: [28, 48, 40, 19, 86, 27, 90],
              fill: false,
              borderColor: '#FFA726',
              tension: .4
          }
      ]
    };

    this.basicOptions = {
      plugins: {
          legend: {
              labels: {
                  color: '#495057'
              }
          }
      },
      scales: {
          x: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          },
          y: {
              ticks: {
                  color: '#495057'
              },
              grid: {
                  color: '#ebedef'
              }
          }
      }
    };
  }
}
