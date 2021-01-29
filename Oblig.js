
//Funksjonen skal returnere true hvis parameterverdien er en gyldig dato - og false ellers. Du skal ikke bruke Date, som er innebygget i Javascript.

function isDateValid(date){
    return checkLength(date)
    && dotPlacement(date)
    && yearLength(date)
    && monthCheck(date)
    && validDayCheck(date);
}

//Teksten må ha lengde 10.

function checkLength(date){   
    if(date.length == 10){
        return true;
    } return false;
}

//Det må være punktum i tredje posisjon og i sjette posisjon.

function dotPlacement(date){  
    if (date.charAt(2) == '.' && date.charAt(5)=='.'){
        return true;
    } return false;
}

//År er 0000 eller større. Kan sjekkes med year.length === 4 && year >= '0000' && year <= '9999'

function yearLength(date){    
let year = date.substr(6,4);

    if(year.length === 4 && year >= '0000' && year <= '9999'){console.log(year);
        return true;
    } return false;
}

//Måned er fra og med 01 til og med 12. Kan sjekkes som over.

function monthCheck(date){    
    let month = date.substr(3,2)
    if(month.length === 2 && month >= '01' && month <= '12'){
        return true;
    } return false;
}

function validDayCheck(date){            
    let day = date.substr(0,2);
    let month = date.substr(3,2);
    let year = date.substr(6,4);

    let isShortMonth = month === '04' ||  month === '06' || month === '09' || month === '11';

        return day.length === 2 && day >= '01' && day <= '28' 
        ||day === '29' && (month !== '02'  ||leapYear(date)) 
        ||day === '30' && month !== '02' 
        ||day === '31' && !isShortMonth && month !== '02';

}


//sjekk skuddår.

function leapYear(date) {
    let year = date.substr(6,4);
    return ((year % 4 == 0) && (year % 100 != 0)) || (year % 400 == 0);  
}