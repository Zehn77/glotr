export interface Item {
  id: number;
  name: string;
  discount: number | null;
  img: string;
  paymentMethod: string;
  city: string;
  company: string;
  price: number;
}

export interface Character {
  id: number;
  label: string;
  value: string;
}

export interface Payment {
  id: number;
  label: string;
}
