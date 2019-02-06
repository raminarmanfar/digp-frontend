import { Component, OnInit } from '@angular/core';
import { ContactService } from 'src/app/services/contact.service';
import { SharedService } from 'src/app/services/shared.service';
import { ServiceResponse } from 'src/app/models/ServiceResponse';
import { DialogData } from 'src/app/models/DialogData';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent {

  constructor(private contactService: ContactService, private sharedService: SharedService) { }

  submit(contactInfo: any) {
    this.contactService.addContactInfo(contactInfo).subscribe((result: ServiceResponse) => {
      const popupData: DialogData = new DialogData('Contact to the admin', result.message);
      this.sharedService.openDialog(400, popupData);
    });
  }
}
