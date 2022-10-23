import {Component, Input, OnInit} from '@angular/core';
import {FormGroup} from "@angular/forms";
import {AccountService} from "../../account/account.service";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-ckeckout-address',
  templateUrl: './ckeckout-address.component.html',
  styleUrls: ['./ckeckout-address.component.scss']
})
export class CkeckoutAddressComponent implements OnInit {
  @Input() checkoutForm:FormGroup;
  constructor(private accountService:AccountService,private toaster: ToastrService) { }

  ngOnInit(): void {
  }
  saveUserAddress(){
    this.accountService.updateUserAddress(this.checkoutForm.get('addressForm').value).subscribe(()=>{
      this.toaster.success('Address saved')
    },error => {
      this.toaster.error(error(error.message));
      console.log(error)
    })
  }
}
