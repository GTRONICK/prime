import { Enchantments } from './../../../models/generic.model';
import { Qualities, GenericModel } from '../../../models/generic.model';
import { MarketResponse } from './../../../models/marketResponse.model';
import { AlbionService } from '../../../services/albion.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { map } from 'rxjs/operators';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-analyze',
  templateUrl: './analyze.component.html',
  styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {

  marketPrices: MarketResponse[] = [];
  gobLocations: string[] = ['Marlock', 'Thetford', 'Fortsterling', 'Lymhurst', 'Bridgewatch', 'Caerleon'];
  searchTerms: string[] = [];
  gobForm: FormGroup = new FormGroup({});
  qualities = Qualities;
  enchantments = Enchantments;
  choosenQuality: number = 1;

  constructor(
    private albionService: AlbionService,
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {

    this.initForm();

    this.gobForm.controls.quality.valueChanges.subscribe( key => {
      this.choosenQuality = key;
      this.getItemPrice(this.gobForm.controls.searchTerm.value);
    });
  }

  initForm(): void {
    this.gobForm = this.fb.group({
      searchTerm: ['', Validators.required],
      quality: [],
      enchantments: [],
    });
  }

  getItemPrice(itemName: string): void {

    if ( itemName && itemName.length > 0 ) {

      let itemUidList = this.albionService.getItemUniqueName(itemName);
      this.albionService.getItemPrice(this.gobLocations, itemUidList, this.choosenQuality)
      .pipe(
        map( data => {
          data.forEach(element => {
            element.qualityName = this.normalizeQuality(element.quality);
          });
          return data.filter( item => item.sell_price_max > 0);
        })
      ).subscribe( elements => {
        this.marketPrices = elements;
      });
    }
  }

  /**
   * Gets the common localized name for the specified item ID
   * @param uniqueName Unique item ID
   * @returns string
   */
  normalizeName(uniqueName: string): string {
    return this.albionService.getItemLocalizedName(uniqueName);
  }

  normalizeQuality(quality: number | string): string {
    let lobArray = Qualities.filter( (item) => item.value === quality );
    return lobArray.length > 0 ? lobArray[0].name : '';
  }
}
