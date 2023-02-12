import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegistrationService {
  public email: string;
  constructor() { }

  public setEmail(data: string): void {
    this.email = data;
  }

  public getEmail(): string {
    return this.email;
  }
}
