import { Component, OnInit, Input } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';

@Component({
  selector: 'app-auth-dialog-content',
  templateUrl: './auth-dialog-content.component.html',
  styleUrls: ['./auth-dialog-content.component.sass']
})
export class AuthDialogContentComponent implements OnInit {
  @Input('auth-mode') authMode: 'login' | 'register' = 'login';
  constructor(public bsModalRef: BsModalRef) { }
  ngOnInit() { }

  isLoginMode(){return this.authMode == 'login'}
  isRegisterMode(){return this.authMode == 'register'}
  title(){return this.isLoginMode() ? 'Welcome back!' : 'Join Snifter!';
}

  onLoginFormResult(e){
    if(e.signedIn)
      this.bsModalRef.hide();
    else{
      alert(e.err.json().errors[0])
    }
  }

  onRegisterFormResult(e){
    if(e.signedUp)
      this.bsModalRef.hide();
    else{
      alert(e.err.json().errors.full_messages[0])
    }
  }
}
