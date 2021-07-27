/* eslint-disable */

// to convert iso date to dd-mm-yyyy
function formateDate(date) {
    date = new Date(date);
    return date.getDate() + '-' + (date.getMonth() + 1) + '-' + date.getFullYear();
}


function getCurrentTime() {
    var d = new Date();
    var n = d.getHours();
    // var m = d.getMinutes();
    return n + "" + d;
}

const monthNames = ["", "Jan", "Feb", "Mar", "Apr", "May", "June",
    "July", "Aug", "Sept", "Oct", "Nov", "Dec"
];

function leapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

//Get the date N months before the current date
 function getPreMonthDay(date,monthNum)
    {
        var dateArr = date.split('-');
        var year = dateArr[0]; //Get the year of the current date
        var month = dateArr[1]; //Get the month of the current date
        var day = dateArr[2]; //Get the current date
        var days = new Date(year, month, 0);
        days = days.getDate(); //Get the number of days in the month of the current date
        var year2 = year;
        var month2 = parseInt(month) - monthNum;
        if (month2 <=0) {
            year2 = parseInt(year2) - parseInt(month2 / 12 == 0 ? 1 : parseInt(month2) / 12);
            month2 = 12 - (Math.abs(month2) % 12);
        }
        var day2 = day;
        var days2 = new Date(year2, month2, 0);
        days2 = days2.getDate();
        if (day2 > days2) {
            day2 = days2;
        }
        if (month2 < 10) {
            month2 = '0' + month2;
        }
        var t2 = year2 + '-' + month2 + '-' + day2;
        return t2;
 }
 
function getDateForDatePicker(data) {
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth() + 1;

    var yyyy = today.getFullYear();
    if (dd < 10) {
        dd = '0' + dd;
    }
    if (mm < 10) {
        mm = '0' + mm;
    }
    switch (data) {
        case 'current-start':
            return yyyy + '-' + mm + '-' + dd 
        case 'current-end':
            return  yyyy + '-' + mm + '-' + dd 
        case '0 day':
            return {
                start: 'Today ',
                end: ' ' + monthNames[parseInt(mm)] + ' ' + dd,
                startDate:  yyyy + '-' + mm + '-' + dd ,
                endDate: yyyy + '-' +  mm + '-' + dd 
            }
        case '1 day':
            var time = new Date();
            var vl = '1';
            var days = parseInt(vl);
            time.setDate(time.getDate() - days);
            var date = time.getDate();
            var month = time.getMonth() + 1;

            var year = time.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return {
                start: 'Yesterday ',
                end: ' ' + monthNames[parseInt(month)] + ' ' + date,
                endDate:  yyyy + '-' + mm + '-' + dd ,
                startDate:  year + '-' + (month) + '-' + date 
            }

        case '7 day':
            var time = new Date();
            var vl = '7';
            var days = parseInt(vl);
            time.setDate(time.getDate() - days);
            // var strdate = time.toString('dd/mm/yyyy');
            var date = time.getDate();
            var month = time.getMonth() + 1;

            var year = time.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return {
                end: ' ' + monthNames[parseInt(mm)] + ' ' + dd,
                start: monthNames[parseInt(month)] + ' ' + date + ' ',
                endDate: yyyy + '-' + mm + '-' + dd  ,
                startDate:  year + '-' + (month) + '-' + date 
            }

        case '30 day':
            var time = new Date();
            var vl = '30';
            var days = parseInt(vl);
            time.setDate(time.getDate() - days);
            var date = time.getDate();
            var month = time.getMonth() + 1;

            var year = time.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return {
                end: ' ' + monthNames[parseInt(mm)] + ' ' + dd,
                start: monthNames[parseInt(month)] + ' ' + date + ' ',
                endDate:  yyyy + '-' + mm + '-' + dd ,
                startDate:  year + '-' + (month) + '-' + date 
            }

        case '1 month':
            var today = new Date();
            var firstdate = new Date(today.getFullYear(), today.getMonth(), 1);
            var date = firstdate.getDate();
            var month = firstdate.getMonth() + 1;

            var year = firstdate.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return {
                end: ' ' + monthNames[parseInt(mm)] + ' ' + dd,
                start: monthNames[parseInt(month)] + ' ' + date + ' ',
                endDate :  yyyy + '-' + mm + '-' + dd ,
                startDate :  year  + '-' + (month) + '-' + date
            }
        case 'prev month':
        
            // var today = new Date();
            // var lastdate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
            // var firstdate = new Date(today.getFullYear(), today.getMonth(), 1);
            // var fdate = firstdate.getDate();
            // var fmonth = firstdate.getMonth() + 1;
            // // var month = time.getMonth() + 1;
            // if (fmonth === 1) {
            //     var fyear = firstdate.getFullYear();
            //     fyear = fyear - 1;
            // } else {
            //     var fyear = firstdate.getFullYear();
            // }

            // if (fdate < 10) {
            //     fdate = '0' + fdate;
            // }
            // if (fmonth < 10) {
            //     if (fmonth === 1) {
            //         fmonth = '01';
            //     } else {
            //         fmonth = '0' + (fmonth - 1);
            //     }
            // }
            // var ldate = lastdate.getDate();
            // var lmonth = lastdate.getMonth() + 1;

            // var lyear = lastdate.getFullYear();
            // if(lmonth === 2){
            // if (leapYear(lyear)) {
            //     ldate = 27
            // } else {
            //     ldate = 28
            // }}

            // if (ldate < 10) {
            //     ldate = '0' + ldate;
            // }
            // if (lmonth < 10) {
            //     if (lmonth === 1) {
            //         fmonth = '12';
            //     } else {
            //         lmon     h = '0' + (lmonth - 1);
            //     }
            // }
                
            var lastDate=new Date(); // current date
            lastDate.setDate(1); // going to 1st of the month
            var currentMonth = lastDate;
            lastDate.setHours(-1);
            var lastmonth=lastDate.getMonth()+1

			if (lastmonth < 10) {
                lastmonth = '0' + lastmonth;
            }
            // return {
            //     start: monthNames[parseInt(fmonth)] + ' ' + fdate + ' ',
            //     end: ' ' + monthNames[parseInt(lmonth)] + ' ' + ldate,
            //     startDate: fmonth + '/' + (fdate) + '/' + fyear,
            //     endDate: lmonth + '/' + (ldate) + '/' + lyear
            // }
            return {
                start: monthNames[parseInt(lastDate.getMonth()+1)] + ' 01' ,
                end: ' ' + monthNames[parseInt(lastDate.getMonth()+1)] + ' ' + lastDate.getDate(),
                startDate :  currentMonth.getFullYear() + '-' + (lastmonth) + '-01' ,
                endDate :  lastDate.getFullYear()  + '-' + (lastmonth) + '-' + (lastDate.getDate())
            }
			
		case 'last biannual':
			
			var last_biannualdate=getPreMonthDay( yyyy + '-' + mm + '-' + dd , 6 )
			var dateArr = last_biannualdate.split('-');
			console.log("last  biannual",dateArr)
            var year = dateArr[0]; //Get the year of the current date
            var month = dateArr[1]; //Get the month of the current date
            var day = dateArr[2];
			return {
                start: monthNames[parseInt(month)] + ' 01' + ' ' + year ,
                end: ' ' + monthNames[parseInt(mm)] + ' ' + day + ' ' + yyyy,
                startDate :  last_biannualdate ,
                endDate :  yyyy + '-' + mm + '-' + dd 
            }
			
		case 'last year':
			 year = parseInt(yyyy) - 1
		     return {
                start: monthNames[parseInt(mm)] + ' 01' + ' ' + year,
                end: ' ' + monthNames[parseInt(mm)] + ' ' + '01' + ' ' + yyyy,
                startDate :  year + '-' + mm + '-' + dd ,
                endDate :  yyyy + '-' + mm + '-' + dd 
            }
		
		case 'last quarter':
		    var last_biannualdate=getPreMonthDay( yyyy + '-' + mm + '-' + dd , 3 )
			var dateArr = last_biannualdate.split('-');
			console.log("last quarter",dateArr)
            var year = dateArr[0]; //Get the year of the current date
            var month = dateArr[1]; //Get the month of the current date
            var day = dateArr[2];
		    return {
                start: monthNames[parseInt(month)] + ' 01' + ' ' + year,
                end: ' ' + monthNames[parseInt(mm)] + ' ' + day + ' ' + yyyy,
                startDate :  last_biannualdate ,
                endDate :  yyyy + '-' + mm + '-' + dd 
            }

        case 'max':

            var today = new Date();
            var date = today.getDate();
            var month = today.getMonth() + 1;

            var year = today.getFullYear();
            if (date < 10) {
                date = '0' + date;
            }
            if (month < 10) {
                month = '0' + month;
            }
            return  year + '-' + month + '-' + (date + 1) ;
			
        default:
            return {
                start: "All",
                end: "",
                startDate: "",
                endDate: ""
            }
    }
}

function formatStartDateAndEndDate(data) {
    var startDate = data.startDate;
    var endDate = data.endDate

    var sdate = startDate.getDate();
    var smonth = startDate.getMonth() + 1;
    var syear = startDate.getFullYear();
    if (sdate < 10) {
        sdate = '0' + sdate;
    }
    if (smonth < 10) {
        smonth = '0' + smonth;
    }

    var edate = endDate.getDate();
    var emonth = endDate.getMonth() + 1;
    var eyear = endDate.getFullYear();
    if (edate < 10) {
        edate = '0' + edate;
    }
    if (emonth < 10) {
        emonth = '0' + emonth;
    }
    return {
        start: monthNames[parseInt(smonth, 10)] + ' ' + sdate + ' ' + syear ,
        end: monthNames[parseInt(emonth, 10)] + ' ' + edate + ' ' + eyear,
        startDate:  syear + '-' + smonth + '-' + (sdate) ,
        endDate:  eyear + '-' + emonth + '-' + (edate) 
    }
}

function formatcustomStartDateAndEndDate(data) {
	var startDate_part =data.startDate.split('-');
	var endDate_part =data.endDate.split('-');
	var startDate = new Date(startDate_part[0], startDate_part[1] - 1, startDate_part[2]);
	var endDate = new Date(endDate_part[0], endDate_part[1] - 1, endDate_part[2]);
    //var endDate = new Date(Date.parse(data.endDate));
	
    var sdate = startDate.getDate();
    var smonth = startDate.getMonth() + 1;
    var syear = startDate.getFullYear();
	
    if (sdate < 10) {
        sdate = '0' + sdate;
    }
    if (smonth < 10) {
        smonth = '0' + smonth;
    }

    var edate = endDate.getDate();
    var emonth = endDate.getMonth() + 1;
    var eyear = endDate.getFullYear();
    if (edate < 10) {
        edate = '0' + edate;
    }
    if (emonth < 10) {
        emonth = '0' + emonth;
    }
	
    return {
        start: monthNames[parseInt(smonth, 10)] + ' ' + sdate + ' ' + syear ,
        end: monthNames[parseInt(emonth, 10)] + ' ' + edate + ' ' + eyear,
        startDate:  syear + '-' + smonth + '-' + (sdate) ,
        endDate:  eyear + '-' + emonth + '-' + (edate) 
    }
}

const Utils = {
    getDateForDatePicker,
    formatStartDateAndEndDate,
    formateDate,
	formatcustomStartDateAndEndDate,
    getCurrentTime
}

export default Utils;