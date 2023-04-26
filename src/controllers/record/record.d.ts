export interface Record {
  name: string;
  lastName: string;
  phone: number | string;
  email: string;
  stationName: string?;
  stationLocation: string?;
  termsAndConditions: boolean | string;
  promotion: boolean | string;
  photo: string;
}
