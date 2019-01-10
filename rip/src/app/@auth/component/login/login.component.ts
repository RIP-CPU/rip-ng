import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthTokenService } from '../../services/auth-token.service';
import { Router } from '@angular/router';

@Component({
    selector: 'login-component',
    styleUrls: ['login.component.scss'],
    templateUrl: 'login.component.html',
})
export class LoginComponent {

    public buttonLogin: boolean = false;
    private progressBar: number = 25;
    public usernameError: boolean = false;
    public passwordError: boolean = false;

    public form: FormGroup = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });

    constructor(private router: Router, private authTokenService: AuthTokenService) {}

    public login() {
      if (!this.form.get('username').value)
        this.usernameError = true;
      else
        this.usernameError = false;
      if (!this.form.get('password').value)
        this.passwordError = true;
      else
        this.passwordError = false;
      if (!this.usernameError && !this.passwordError) {
        document.querySelectorAll('.pace-done').forEach(pace => {
          pace.className = pace.className.replace('pace-done pace-done', 'pace-running');
          pace.className = pace.className.replace('pace-done', 'pace-running');
        });
        document.querySelectorAll('.pace-inactive').forEach(pace => {
          pace.className = pace.className.replace('pace-inactive pace-inactive', 'pace-active');
          pace.className = pace.className.replace('pace-inactive', 'pace-active');
        });
        const progressDOM = document.getElementsByClassName('pace-progress').item(0) as HTMLElement;
        if (this.progressBar < 35) {
          this.progressBar = 35;
          progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
          progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
          progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
        }
        this.buttonLogin = true;
        this.authTokenService.login(
          this.form.get('username').value,
          this.form.get('password').value)
          .then(() => {
              this.progressBar = 90;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
              this.progressBar = 0;
              this.usernameError = false;
              this.passwordError = false;
              this.router.navigate(['/app/dashboard']);
          })
          .catch(error => {
              this.usernameError = false;
              this.passwordError = false;
              this.progressBar = 85;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
              document.querySelectorAll('.pace-running').forEach(pace => {
                pace.className = pace.className.replace('pace-running', 'pace-done');
              });
              document.querySelectorAll('.pace-active').forEach(pace => {
                pace.className = pace.className.replace('pace-active', 'pace-inactive');
              });
              this.progressBar = 0;
              this.buttonLogin = false;
          });
          if (this.progressBar >= 35 && this.progressBar < 65) {
              this.progressBar = 65;
              progressDOM.style.transform = 'translate3d(' + this.progressBar + '%, 0px, 0px)';
              progressDOM.getAttributeNode('data-progress-text').value = this.progressBar + '%';
              progressDOM.getAttributeNode('data-progress').value = this.progressBar.toString();
          }
      }
    }
}
