export interface Users {
    complete: boolean;
    items: User[];
    error: any;
    loading: boolean;
}

export interface User {
    id: string;
    name: string;
    surname: string;
    birthDate: string;
    phone: string;
    city: string;
    street: string;
    number: string;
}
