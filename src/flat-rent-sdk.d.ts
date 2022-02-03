declare module 'flat-rent-sdk' {
    
    export interface flatObj {
        id: string
        title: string
        details: string
        photos: string[]
        coordinates: Float32Array
        bookedDates: Date[]
        price: number
    }
    export type database = flatObj[];

    export function cloneDate(date: Date): Date;
    export function addDays(date: Date, days: number): Date;
    
    export interface SearchParameters {
        city: string
        checkInDate: Date
        checkOutDate: Date
        priceLimit: number
    }
    export function search(parameters: SearchParameters): database;

    export interface SearchParameters {
        city: string
        checkInDate: Date
        checkOutDate: Date
        priceLimit: number
    }
   export function book(flatId: number , checkInDate: Date, checkOutDate: Date): number;


}