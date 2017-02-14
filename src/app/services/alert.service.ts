import { Injectable } from '@angular/core';

import swal, { SweetAlertOptions } from 'sweetalert2';

@Injectable()
export class AlertService {

  alert(title, text, type) {
    const options: SweetAlertOptions = {
      type,
      title,
      text,
    };

    return swal(options);
  }

  //Error messages
  error(title, text) {
    this.alert(title, text, 'error');
  }

  genericError() {
    this.error('Error', 'Something went wrong.');
  }

  unauthorized() {
    this.error('User not authorized', 'Please contact the admin to get access rights.');
  }

  notFound() {
    this.error('Not found', 'Ups! What you are looking for was not found.');
  }

}
