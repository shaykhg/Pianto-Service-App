
  export interface Charges {
    charge: string;
  }

  export interface Service {
    name: string;
  }

  class Additional {
    services: any;
  }

  export interface Order {
      notes: any;
      pianoName: string;
      time: string;
    total: number;
    created: Date;
    date: Date;
    _id: string;
    address: string;
    charges: Charges;
    city: string;
    coupon: string;
    discount: number;
    email: string;
    name: string;
    paymentMethod: string;
    postcode: string;
    service: Service[];
    lastService: string;
    status: string;
    phone: string;
    payment: object;
    serviceMan: string;
    subtotal: number;
    type: string;
    createdAt: Date;
    updatedAt: Date;
    serial: string;
    __v: number;
    extended: boolean;
    additional: any;
  }

  export interface Orders {
    results: Order[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  }

