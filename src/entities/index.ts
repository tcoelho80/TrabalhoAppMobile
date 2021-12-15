export interface User {
    id?: number;
    address: string;
    age?: number;
    name: string;
    email: string;
    userPassword: string;    

}

export interface Product {
    id: number;
    name: string;    
    price: number; 
    amount:number;
    factory:Factory; 
}

export interface Factory {
    id: number;
    name: string;    
}