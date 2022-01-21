export const date_convert = {
    dateToStr(inDate:Date): string
    {
        let dd = String(inDate.getDate()),
            mm = String(inDate.getMonth() + 1),
            yyyy = String(inDate.getFullYear());
        mm = mm.length<2 ? `0${mm}` : mm;        
        return `${yyyy}-${mm}-${dd}`;
    },
    getRelateDayDate(days:number): Date
    {
        const today = new Date();
        const newDate = new Date(today);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }
}