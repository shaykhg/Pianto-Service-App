
  export interface Service {
    enable: boolean;
    _id: string;
    name: string;
    type: string;
    price: number;
    desc: string;
    createdAt: Date;
    updatedAt: Date;
    __v: number;
  }

  export interface Services {
    results: Service[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
  }


