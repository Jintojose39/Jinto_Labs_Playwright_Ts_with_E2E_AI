import { faker } from '@faker-js/faker';
import {  User } from '../models/Users';
export function generateUser(): User {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    password: faker.internet.password(12),
    company: faker.company.companyName(),
    address: faker.address.streetAddress(),
    state: faker.address.state(),
    city: faker.address.city(),
    zipcode: faker.address.zipCode(),
    mobileNumber: faker.phone.phoneNumber(),
  };
}