class Utils{
    static dateFormat(date){
        date = new Date(date)
        let format='';
        if(date.getDate().length < 2){
            format += '0';
        }
        format   +=date.getDate()+'/'
        if((date.getMonth()+1)){
            format += '0';
             
         }
         format +=(date.getMonth()+1)+'/'+date.getFullYear()+' '+date.getHours()+':'+date.getMinutes();
         return format
    }

}