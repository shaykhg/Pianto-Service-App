export interface User {
    lastName: string;
    active: boolean;
    blocked: boolean;
    country: string;
    rate: number;
    role: string;
    email: string;
    name: string;
    id: string;
    city: object[];
    postcode: string;
    phone: string;
    password: string;
    calendar: string;
    slots: Slot[];
}

export interface AllUser {
    results: User[];
    page: number;
    limit: number;
    totalPages: number;
    totalResults: number;
}

export interface Slot {
    date: Date;
    from: string;
    till: string;
    available: string;
}
