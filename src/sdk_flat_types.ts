
// export type database = 'array';
export type flatObj = {
    id: string;
    title: string;
    details: string;
    photos: string[];
    coordinates: Float32Array,
    bookedDates: Date[],
    price: number
};

export type customType = 'number | string';
