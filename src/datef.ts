export class Datef {
    dateToStr(inDate:Date){
        let dd = String(inDate.getDate()),
            mm = String(inDate.getMonth() + 1),
            yyyy = String(inDate.getFullYear());
        mm = mm.length<2 ? `0${mm}` : mm;        
        return `${yyyy}-${mm}-${dd}`;
    }
    getRelateDayDate(days:number){
        const today = new Date();
        const newDate = new Date(today);
        newDate.setDate(newDate.getDate() + days);
        return newDate;
    }
}