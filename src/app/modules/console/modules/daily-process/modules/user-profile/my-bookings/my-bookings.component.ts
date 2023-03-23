import {Component, OnInit, TemplateRef, ViewChild} from '@angular/core';

export interface PeriodicElement {
  place: string;
  position: number;
  checkIn: string;
  checkOut: string;
  totAmount: string;
  reason?: string;
  cancelledDate?: string;
  refundAmount?: string;
}


interface PeriodicElementColumn {
  columnDef: string;
  header: string;
  cell: (element: PeriodicElement) => string | TemplateRef<any>;
}

interface TemplatePeriodicElementColumn {
  columnDef: string;
  header: string;
  cell: (element: PeriodicElement) => string | TemplateRef<any>;
}

const MOCK_UPCOMING_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100'},
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },

];

const MOCK_COMPLETED_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100' },

];

const MOCK_CANCELLED_BOOKINGS: PeriodicElement[] = [
  { position: 1, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
  { position: 2, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
  { position: 3, place: 'Place name', checkIn: '02-01-2023', checkOut: '05-01-2023', totAmount: '$100', reason: 'Cancelled due to some reason', cancelledDate: '23-03-2023', refundAmount: '$50' },
];

@Component({
  selector: 'app-my-bookings',
  templateUrl: './my-bookings.component.html',
  styleUrls: ['./my-bookings.component.scss'],
})

export class MyBookingsComponent {
  isTemplateRef(value: any): boolean {
    return value instanceof TemplateRef;
  }



  selectedType: string = 'upcoming';

  onNavLinkClick(type: string) {
    console.log('Clicked:', type);
    this.selectedType = type;
  }


  columns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'place',
      header: 'Place',
      cell: (element: PeriodicElement) => `${element.place}`,
    },
    {
      columnDef: 'checkIn',
      header: 'Check In',
      cell: (element: PeriodicElement) => `${element.checkIn}`,
    },
    {
      columnDef: 'checkOut',
      header: 'Check Out',
      cell: (element: PeriodicElement) => `${element.checkOut}`,
    },
    {
      columnDef: 'totAmount',
      header: 'Total Amount',
      cell: (element: PeriodicElement) => `${element.totAmount}`,
    },
  ];

  cancelledColumns = [
    {
      columnDef: 'position',
      header: 'No.',
      cell: (element: PeriodicElement) => `${element.position}`,
    },
    {
      columnDef: 'place',
      header: 'Place',
      cell: (element: PeriodicElement) => `${element.place}`,
    },
    {
      columnDef: 'reason',
      header: 'Reason for Cancellation',
      cell: (element: PeriodicElement) => `${element.reason}`,
    },
    {
      columnDef: 'cancelledDate',
      header: 'Cancelled Date',
      cell: (element: PeriodicElement) => `${element.cancelledDate}`,
    },
    {
      columnDef: 'refundAmount',
      header: 'Refund Amount',
      cell: (element: PeriodicElement) => `${element.refundAmount}`,
    },
  ];







  dataSource = MOCK_UPCOMING_BOOKINGS;
  dataSourceCompleted = MOCK_COMPLETED_BOOKINGS;
  dataSourceCancelled = MOCK_CANCELLED_BOOKINGS;

  displayedColumns = this.columns.map(c => c.columnDef);
  displayedColumnsCompleted = this.columns.map(c => c.columnDef).concat('review');
  displayedColumnsCancelled = this.cancelledColumns.map(c => c.columnDef);


  addReview(element: PeriodicElement) {
    console.log('Add Review clicked for element:', element);
    // Implement your logic for adding a review here
  }

}
