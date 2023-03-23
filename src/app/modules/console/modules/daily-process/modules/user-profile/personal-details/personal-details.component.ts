import { Component } from '@angular/core';

@Component({
  selector: 'app-personal-details',
  templateUrl: './personal-details.component.html',
  styleUrls: ['./personal-details.component.scss']
})
export class PersonalDetailsComponent  {

  [key: string]: any;

  firstName: string = 'John';
  lastName: string = 'Doe';
  displayName: string = 'John';
  emailAddress = 'abc@gmail.com';

  phoneNumber = 'Add your phone number';
  isPhoneFieldEmpty = true;


  dateOfBirth: { day: string; month: string; year: string } = {
    day: '00',
    month: '00',
    year: '0000',
  };



  gender: string = 'Add gender';

  address: string = "";
  townCity: string = "";
  regionCountry: string = "";






  getField(field: string): any {
    const parts = field.split('.');
    return parts.length === 2 ? this[parts[0]][parts[1]] : this[field];
  }

  setField(field: string, value: any): void {
    const parts = field.split('.');
    if (parts.length === 2) {
      this[parts[0]][parts[1]] = value;
    } else {
      this[field] = value;
    }
  }


  fields: any[] = [
    {
      title: 'Name',
      content: () => `${this.firstName} ${this.lastName}`,
      isEditing: false,
      inputModel1: 'firstName',
      inputLabel1: 'First Name',
      inputType1: 'text',
      inputModel2: 'lastName',
      inputLabel2: 'Last Name',
      inputType2: 'text',
      inputWrapperClass: 'name-inputs-wrapper', // Add this line
    },
    {
      title: 'Display Name',
      content: () => this.displayName,
      isEditing: false,
      inputModel1: 'displayName',
      inputLabel1: 'Display Name',
      inputType1: 'text',
    },
    {
      title: 'Email Address',
      content: () => this.emailAddress,
      isEditing: false,
      inputModel1: 'emailAddress',
      inputLabel1: 'Email Address',
      inputType1: 'text',
    },

    {

      title: 'Phone Number',
      content: () => this.isPhoneFieldEmpty ? 'Add your phone number' : this.phoneNumber,
      isEditing: false,

      inputModel2: 'phoneNumber',
      inputLabel2: 'Phone Number',
      inputType2: 'text',
    },

    {
      title: 'Date of Birth',
      content: () => this.dateOfBirth.year === '0000' ? 'Add your Birthday' : `${this.dateOfBirth.year}-${this.getMonthName(this.dateOfBirth.month)}-${this.dateOfBirth.day}`,
      isEditing: false,
      inputModel1: 'dateOfBirth.day',
      inputLabel1: 'Day',
      inputType1: 'number',
      inputModel2: 'dateOfBirth.month',
      inputLabel2: 'Month',
      inputType2: 'select',
      inputModel3: 'dateOfBirth.year',
      inputLabel3: 'Year',
      inputType3: 'select',
    },


    {
      title: 'Gender',
      content: () => this.gender,
      isEditing: false,
      inputModel1: 'gender',
      inputLabel1: 'Gender',
      inputType1: 'select',
    },

    {
      title: 'Address',
      content: () => this.address === "" && this.townCity === "" && this.regionCountry === "" ? 'Add your address' : `${this.address} ${this.townCity} ${this.regionCountry}`,
      isEditing: false,
      inputModel1: 'address',
      inputLabel1: 'Address',
      inputType1: 'text',
      inputModel2: 'townCity',
      inputLabel2: 'Town/City',
      inputType2: 'text',
      inputModel3: 'regionCountry',
      inputLabel3: 'Region/Country',
      inputType3: 'select',
    }


    // Add other fields (email address, phone number, date of birth) here with the same structure
  ];

  getMonthName(index: string): string {
    const monthNames = [
      'January', 'February', 'March', 'April', 'May', 'June',
      'July', 'August', 'September', 'October', 'November', 'December'
    ];
    return monthNames[parseInt(index, 10) - 1];
  }

  getYearRange(start: number, end: number): number[] {
    return Array.from({ length: end - start + 1 }, (_, i) => start + i);
  }
  getGenderOptions(): string[] {
    return ['Female', 'Male', 'Other'];
  }
  getCountries(): string[] {
    return [
      'United States',
      'Canada',
      'United Kingdom',
      'Sri Lanka',
    ];
  }



  enableEdit(field: any) {
    if (field.title === 'Phone Number' && this.isPhoneFieldEmpty) {
      this.isPhoneFieldEmpty = false;
      this.phoneNumber = '';
    }
    field.isEditing = true;
  }

  sendCode(field: any) {
    if (field.title === 'Phone Number' && !this.isPhoneFieldEmpty) {
      // Implement logic to send the code to the user's mobile phone
      console.log('Sending code to:', this.phoneNumber);
    }
  }

  save(field: any) {
    field.isEditing = false;
  }

  cancel(field: any) {
    field.isEditing = false;
  }
  onMouseOver(field: any) {
    field.isHovered = true;
  }

  onMouseOut(field: any) {
    field.isHovered = false;
  }

  profileImageUrl?: string;


  constructor() {
    this.profileImageUrl = 'https://www.freeiconspng.com/thumbs/profile-icon-png/profile-icon-9.png';
  }
  isProfileImageHovered: boolean = false;

  onProfileImageMouseEnter() {
    this.isProfileImageHovered = true;
  }

  onProfileImageMouseLeave() {
    this.isProfileImageHovered = false;
  }
  addProfileImage(profileImageInput: HTMLInputElement) {
    profileImageInput.click();
  }

  handleProfileImageChange(event: Event) {
    const fileInput = event.target as HTMLInputElement;
    if (fileInput.files && fileInput.files.length > 0) {
      const file = fileInput.files[0];
      // Implement logic to upload the image to the server
    }
  }


}
