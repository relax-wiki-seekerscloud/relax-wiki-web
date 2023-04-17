import {Component, OnInit} from '@angular/core';
import {AbstractControl, FormArray, FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {Router} from "@angular/router";
import {HotelListingService} from "../../../../../../share/services/hotel/hotel-listing.service";

@Component({
  selector: 'app-hotel-amenities',
  templateUrl: './hotel-amenities.component.html',
  styleUrls: ['./hotel-amenities.component.scss']
})
export class HotelAmenitiesComponent implements OnInit {
  hotelAmenityForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private hotelListingService: HotelListingService) {
    this.hotelAmenityForm = this.fb.group({
      amenitiesArray: this.fb.array([]),
      roomAmenitiesArray: new FormControl([]),
      foodAndDrinkArray: new FormControl([]),
      entertainmentAndFamilyServicesArray: new FormControl([]),
      mediaAndTechnologyArray: new FormControl([]),
      servicesAndExtrasArray: new FormControl([]),
      safetyAndSecurityArray: new FormControl([]),
      bathroomArray: new FormControl([]),
      outdoorAndViewArray: new FormControl([]),
      accessibilityArray: new FormControl([]),
    })
  }

  Amenity: Array<any> = [
    {name: 'Air Conditioning', value: 'AC'},
    {name: 'Electric Kettle', value: 'electricKettle'},
    {name: 'Bath', value: 'bath'},
    {name: 'Balcony', value: 'balcony'},
    {name: 'Spa Bath', value: 'spaBath'},
    {name: 'View', value: 'view'},
    {name: 'Flat-screen TV', value: 'flatScreenTV'},
    {name: 'Terrace', value: 'terrace'},
  ];

  RoomAmenity: Array<any> = [
    {name: 'Clothes rack', value: 'clothesRack'},
    {name: 'Air conditioning', value: 'airConditioning'},
    {name: 'Drying rack for clothing', value: 'dryingRackForClothing'},
    {name: 'Fold-up bed', value: 'foldUpBed'},
    {name: 'Carpeted', value: 'carpeted'},
    {name: 'Fire', value: 'fire'},
    {name: 'Heating', value: 'heating'},
    {name: 'Iron', value: 'iron'},
    {name: 'Mosquito net', value: 'mosquitoNet'},
    {name: 'Sofa', value: 'sofa'},
  ];

  FoodAndDrink: Array<any> = [
    {name: 'Dining area', value: 'diningArea'},
    {name: 'Dining table', value: 'diningTable'},
    {name: 'Toaster', value: 'toaster'},
    {name: 'Electric kettle', value: 'electricKettle'},
    {name: 'Outdoor dining area', value: 'outdoorDiningArea'},
    {name: 'Mini bar', value: 'miniBar'},
    {name: 'Microwave', value: 'microwave'},
    {name: 'Refrigerator', value: 'refrigerator'},
    {name: 'Tea/Coffee maker', value: 'teaCoffeeMaker'},
    {name: 'Coffee maker', value: 'coffeeMaker'},
  ];

  EntertainmentAndFamilyServices: Array<any> = [
    {name: 'Baby safety gates', value: 'diningArea'},
    {name: 'Board games/puzzles', value: 'boardGamesPuzzles'},
    {name: 'Child safety covers', value: 'childSafetyCovers'},
    {name: 'Books for children', value: 'booksForChildren'},
    {name: 'Children\'s television networks', value: 'childrensTelevisionNetworks'},
    {name: 'DVD player', value: 'dvdPlayer'},
    {name: 'Game console', value: 'gameConsole'},
    {name: 'Playground', value: 'playground'},
    {name: 'Pool toys', value: 'poolToys'},
    {name: 'Stroller', value: 'stroller'},
  ];

  MediaAndTechnology: Array<any> = [
    {name: 'Computer', value: 'computer'},
    {name: 'Game Console', value: 'gameConsole'},
    {name: 'Laptop', value: 'laptop'},
    {name: 'iPad', value: 'iPad'},
    {name: 'Cable channels', value: 'cableChannels'},
    {name: 'CD player', value: 'cdPlayer'},
    {name: 'DVD player', value: 'dvdPlayer'},
    {name: 'Video games', value: 'videoGames'},
    {name: 'Satellite channels', value: 'satelliteChannels'},
    {name: 'Radio', value: 'radio'},
  ];
  ServicesAndExtras: Array<any> = [
    {name: 'Alarm clock', value: 'alarmClock'},
    {name: 'Wake-up service', value: 'wakeUpService'},
    {name: 'Linens', value: 'linens'},
    {name: 'Towels', value: 'towels'},
    {name: 'Executive lounge access', value: 'executiveLoungeAccess'},
  ];

  SafetyAndSecurity: Array<any> = [
    {name: 'Smoke alarm', value: 'smokeAlarm'},
    {name: 'Fire extinguisher', value: 'fireExtinguisher'},
    {name: 'Safety card', value: 'safetyCard'},
    {name: 'Safety deposit box', value: 'safetyDepositBox'},
    {name: 'First aid kit', value: 'firstAidKit'},
  ];

  Bathroom: Array<any> = [
    {name: 'Toilet Paper', value: 'toiletPaper'},
    {name: 'Shower', value: 'shower'},
    {name: 'Hairdryer', value: 'hairdryer'},
    {name: 'Bathrobe', value: 'bathrobe'},
    {name: 'Slippers', value: 'slippers'},
    {name: 'Free toiletries', value: 'freeToiletries'},
    {name: 'Bathtub', value: 'bathtub'},
    {name: 'Bidet', value: 'bidet'},
    {name: 'Toilet', value: 'toilet'},
    {name: 'Private bathroom', value: 'privateBathroom'},
    {name: 'Shared bathroom', value: 'sharedBathroom'},
  ];

  OutdoorAndView: Array<any> = [
    {name: 'Balcony', value: 'balcony'},
    {name: 'Terrace', value: 'terrace'},
    {name: 'View', value: 'view'},
    {name: 'Garden view', value: 'gardenView'},
    {name: 'Mountain view', value: 'mountainView'},
    {name: 'Pool view', value: 'poolView'},
    {name: 'Sea view', value: 'seaView'},
    {name: 'River view', value: 'riverView'},
    {name: 'Landmark view', value: 'landmarkView'},
    {name: 'City view', value: 'cityView'},
    {name: 'Lake view', value: 'lakeView'},
  ];
  Accessibility: Array<any> = [
    {name: 'Room is located on the ground floor', value: 'onTheGroundFloor'},
    {name: 'Room is completely wheelchair accessible', value: 'wheelchairAccessible'},
    {name: 'Upper floors accessible by elevator', value: 'upperFloorAccessibleByElevator'},
    {name: 'Upper floors accessible by stairs only', value: 'upperFloorsStairsOnly'},
    {name: 'Toilet with grab rails', value: 'toiletWithGrabRails'},
  ];


  addToArray(e: any) {
    // console.log(e);
    let array = this.hotelAmenityForm.get('amenitiesArray') as FormArray;

    // } else if (type == 'roomAmenity') {
    //   array = this.hotelAmenityForm.get('roomAmenitiesArray') as FormArray;
    // } else if (type == 'foodAndDrink') {
    //   array = this.hotelAmenityForm.get('foodAndDrinkArray') as FormArray;
    // } else if (type == 'entertainmentAndFamilyServices') {
    //   array = this.hotelAmenityForm.get('entertainmentAndFamilyServicesArray') as FormArray;
    // } else if (type == 'mediaAndTechnology') {
    //   array = this.hotelAmenityForm.get('mediaAndTechnologyArray') as FormArray;
    // } else if (type == 'servicesAndExtras') {
    //   array = this.hotelAmenityForm.get('servicesAndExtrasArray') as FormArray;
    // } else if (type == 'safetyAndSecurity') {
    //   array = this.hotelAmenityForm.get('safetyAndSecurityArray') as FormArray;
    // } else if (type == 'bathroom') {
    //   array = this.hotelAmenityForm.get('bathroomArray') as FormArray;
    // } else if (type == 'outdoorAndView') {
    //   array = this.hotelAmenityForm.get('outdoorAndViewArray') as FormArray;
    // } else {
    //   array = this.hotelAmenityForm.get('accessibilityArray') as FormArray;
    // }
    if (e?.checked) {
      array.push(new FormControl(e.source.value));
      0
    } else {
      let i: number = 0;
      array.controls.forEach((item: AbstractControl) => {
        if (item?.value == e?.source?.value) {
          array.removeAt(i);
          return;
        }
        i++;
      });
    }
  }

  submitHotelAmenity()
    {
      this.hotelListingService.addAmenitiesToHotel(this.hotelAmenityForm.value.amenitiesArray);
      this.hotelListingService.addRoomAmenitiesToHotel(this.hotelAmenityForm.value.roomAmenitiesArray);
      this.hotelListingService.addFoodAndDrinkAmenitiesToHotel(this.hotelAmenityForm.value.foodAndDrinkArray);
      this.hotelListingService.addEntertainmentAndFamilyServicesAmenitiesToHotel(this.hotelAmenityForm.value.entertainmentAndFamilyServicesArray);
      this.hotelListingService.addMediaAndTechnologyAmenitiesToHotel(this.hotelAmenityForm.value.mediaAndTechnologyArray);
      this.hotelListingService.addServicesAndExtrasAmenitiesToHotel(this.hotelAmenityForm.value.servicesAndExtrasArray);
      this.hotelListingService.addSafetyAndSecurityAmenitiesToHotel(this.hotelAmenityForm.value.safetyAndSecurityArray);
      this.hotelListingService.addBathroomAmenitiesToHotel(this.hotelAmenityForm.value.bathroomArray);
      this.hotelListingService.addOutdoorAmenitiesToHotel(this.hotelAmenityForm.value.outdoorAndViewArray);
      this.hotelListingService.addRoomAccessibilityAmenitiesToHotel(this.hotelAmenityForm.value.accessibilityArray);
      console.log(this.hotelListingService.hotelListDto);

    //
    //
    // console.log(this.hotelAmenityForm.value);
    // console.log(this.hotelAmenityForm.value.roomAmenitiesArray);
    // console.log(this.hotelAmenityForm.value.foodAndDrinkArray);
    // console.log(this.hotelAmenityForm.value.entertainmentAndFamilyServicesArray);
    // console.log(this.hotelAmenityForm.value.mediaAndTechnologyArray);
    // console.log(this.hotelAmenityForm.value.servicesAndExtrasArray);
    // console.log(this.hotelAmenityForm.value.safetyAndSecurityArray);
    // console.log(this.hotelAmenityForm.value.bathroomArray);
    // console.log(this.hotelAmenityForm.value.outdoorAndViewArray);
    // console.log(this.hotelAmenityForm.value.accessibilityArray);
  }

  ngOnInit(): void {
  }

}
