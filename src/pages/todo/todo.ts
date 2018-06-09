import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html',
  styleUrls: ['/todo.scss'],
})
export class TodoPage {

	private items:string[];
	private fc;

	constructor(public navCtrl: NavController) {
		this.items = [];
		this.fc = new FormControl();
	}

	private addButton() {
		this.items.push(this.fc.value);
		this.fc.setValue('');
	}

	private remove(item) {
		this.items.splice(item, 1);
	}

}
