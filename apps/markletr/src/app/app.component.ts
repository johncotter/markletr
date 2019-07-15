import { Component } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFieldConfig } from '@ngx-formly/core';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import * as Chiffon from 'chiffon';

@Component({
  selector: 'markletr-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'markletr';
  form = new FormGroup({});
  model = { email: 'email@gmail.com' };
  markletCode: SafeUrl = '';
  fields: FormlyFieldConfig[] = [
    {
      key: 'ogCode',
      type: 'textarea',
      defaultValue: `function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
      }
      
      async function demo() {
        await sleep(2000);
        alert('test');
      }
      
      demo();`,
      templateOptions: {
        label: 'Your JavaScript Code',
        placeholder: 'Past your code here',
        required: true
      }
    }
  ];

  constructor(private sanitizer: DomSanitizer) {}

  submit(model) {
    const { ogCode } = model;
    const result = Chiffon.minify(ogCode);
    this.markletCode = this.sanitizer.bypassSecurityTrustUrl(
      `javascript:(function(){${result}})()`
    );
  }
}
