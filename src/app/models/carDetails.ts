import { Car } from "./car";
import { CarImages } from "./carImages";

export interface CarDetails extends Car {
  brandName: string
  colorName: string
  carImages: CarImages[]
  }