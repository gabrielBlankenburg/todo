import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'todo',
  templateUrl: 'todo.html',
  styleUrls: ['/todo.scss'],
})
export class TodoPage {

	private items:any[];
	private task:FormControl;
	private labels:any[];
	private formConfig:any;

	constructor() {
		this.items = [];
		this.task = new FormControl();
		this.labels = [
			{color: '#C9FFE5', name:'Aero Blue'},
			{color: '#6195ED', name:'Cornflower Blue'},
			{color: '#7CB0A1', name:'Acapulco'},
			{color: '#714693', name:'Affair'},
			{color: '#93DFB8', name:'Algae Green'},
			{color: '#E32636', name:'Alizarin Crimson'},
			{color: '#9966CC', name:'Amethyst'},
			{color: '#DFBE6F', name:'Apache'},
			{color: '#DA6304', name:'Bamboo'},
			{color: '#8C055E', name:'Cardinal Pink'},
			{color: '#E3E3E3', name:'Mercury'},
		];
		this.formConfig = {
			task: '',
			label: {color: '#C9FFE5', name:'Aero Blue'},
		}
	}

	private addButton() {
		this.items.push({task: this.formConfig.task, color: this.formConfig.label.color});
		this.formConfig.task = '';
	}

	private remove(item) {
		this.items.splice(item, 1);
	}

}
