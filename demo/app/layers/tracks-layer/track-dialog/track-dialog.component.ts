import { ChangeDetectorRef, Component, Inject, ViewEncapsulation } from '@angular/core';
import { MD_DIALOG_DATA, MdDialogRef } from '@angular/material';
import { Observable } from 'rxjs';

@Component({
	selector: 'track-dialog',
	templateUrl: './track-dialog.component.html',
	styleUrls: ['./track-dialog.component.css'],
	encapsulation: ViewEncapsulation.None,

})
export class TracksDialogComponent {
	public track$: Observable<any>;

	constructor(public dialogRef: MdDialogRef<TracksDialogComponent>, @Inject(MD_DIALOG_DATA) public data: any,
							private cd: ChangeDetectorRef) {
		this.track$ = data.trackObservable;
	}

	toRadians(value) {
		const result = (360 - Math.round(180 * value / Math.PI)) % 360;
		return result < 0 ? result + 360 : result;
	}
}
