import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormControl } from '@angular/forms';

/**
 * Generated class for the LabelPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
	selector: 'page-label',
	templateUrl: 'label.html',
	styleUrls: ['/label.scss'],
})
export class LabelPage {

	protected colors;

	protected pickedColors;

	protected color;

	constructor(public navCtrl: NavController, public navParams: NavParams) {
		this.colors = {red: 100, green: 100, blue: 100};

		this.pickedColors = {};
	}

	ngDoCheck() {
		this.pickedColors.red = 'rgb('+this.colors.red+',0,0)';
		this.pickedColors.green = 'rgb(0,'+this.colors.green+',0)';
		this.pickedColors.blue = 'rgb(0,0,'+this.colors.blue+')';

		this.color = 'rgb('+this.colors.red+','+this.colors.green+','+this.colors.blue+')';
	}



}
