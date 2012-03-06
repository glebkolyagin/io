/*****************************************************************/
// open Yahoo Maps
function openYahooMap(addr, city){
	var url = "http://maps.yahoo.com/py/maps.py?Pyt=Tmap&addr=";
    url += stringReplace(addr, " ", "%20");
	url += "&csz=" + stringReplace(city, " ", "%20");
   	url += "+CA&Get+Map=Get+Map";
   	//alert(url);
   	openit(url);
}

// used by Spanish link to CA site
function popExit(URL)
{
 window.open('popExit.html?url=' + URL ,'','toolbar=no,status=no,location=no,width=400,height=400,scrollbars=yes,resizable=yes');
}

//Author: Harjot Bains, KPMG Consulting
//Version1: Date:10/13/2000

var is_B_Compat=false;
var is_C_Compat=false;
var is_Btype_Compat=true;

var ver_required;
var adjuster='';
var browserName = navigator.appName;
var browserVer = parseFloat(navigator.appVersion);

var opersys;

function reload() {
	
	for (i=0;i<window.document.forms.length; ++i) {	
		for (j=0; j<window.document.forms[i].elements.length; j++) {
			if (window.document.forms[i].elements[j].name == "taskDL") {
				var f = document.forms[i];
				manageTextBox(f);
				validateNumTasksOnReload(f);
				return;
			}
			if (window.document.forms[i].elements[j].name == "checkAvail") {
				window.document.forms[i].elements[j].disabled = true;
				return;
			}
		}
	}	
	for (i=0;i<window.document.forms.length; ++i) {	
		for (j=0; j<window.document.forms[i].elements.length; j++) {
			if (window.document.forms[i].elements[j].name == "safetyCourseCompletedSelection") {
				var f = document.forms[i];
				manageSafetyCourse(f);
				return;
			}
		}
	}	
} 

var reqDate = 0;
var reqTime = 0;

function enableCheckAvail(e) {

	if (e == "formattedRequestedDate") {
		reqDate = document.getElementById("formattedRequestedDate").value;
	}
	
	if (e == "requestedTime") {
		reqTime = document.getElementById("requestedTime").selectedIndex;
	}
	
	if ( reqTime != 0 || reqDate != "") {
		document.getElementById("checkAvail").disabled = false;
	} else {
		document.getElementById("checkAvail").disabled = true;
	}
}

// if two tasks are selected, disable the '1 item' radio
// this method should be called on page load, especially
// after a return to the page.
function validateNumTasksOnReload(f) {

	if (f.taskVR.checked && f.taskDL.checked) {
		f.numberItems[0].disabled = true;
	}
}

// enforces the logical consistency between the number of 'items'
// and the number of 'tasks'. For example, if two tasks are checked,
// then having just '1 item' chosen would be invalid
function validateNumTasks(clickedTask, otherTask) {
	
	// get a reference to the form
	var f = clickedTask.form;
	
	// if a checkbox is being unchecked
	// enable the '1 item' radio button and return
	if (!clickedTask.checked) {
		f.numberItems[0].disabled = false;
		manageTextBox(f);
		return;
	} 
			
	// find the number of tasks checked
	var numTasksSelected = 0;
	for (var i = 0;i < f.numberItems.length; i++) {
		if (f.numberItems[i].checked) {
			numTasksSelected = i + 1;
			break;
		}
	}
	
	// if number of tasks has not been selected
	// then select 1 item
	if (numTasksSelected == 0) {
		f.numberItems[0].checked = true;
	}
	
	// if the other task is checked
	// then disable the '1 item' radio
	if (otherTask.checked) {
		f.numberItems[0].disabled = true;
		// and if currently just one item is selected
		// then change to two items
		if (numTasksSelected == 1) {
			f.numberItems[1].checked = true;
		}
	}
	manageTextBox(f);
}

function manageTextBox(f){
	// the form elements with names such as "firstNames[1]" are
	// not properly treated by JS as array elements. It seems to 
	// treat the "[1]" as non-special characters rather than an array 
	// index. This for-loop finds the needed elements and gives them handles.
	var firstName1 = f.secondCustomerFirstName;
	var lastName1 = f.secondCustomerLastName;
	var firstName2 = f.thirdCustomerFirstName;;
	var lastName2 = f.thirdCustomerLastName;

	for (var i = 0;i < f.numberItems.length; i++) {
		if (f.numberItems[i].checked) {
			break
		}
	}
	if(i == f.numberItems.length) { // nothing checked
			
		firstName1.disabled=true;
		lastName1.disabled=true;
		firstName1.style.backgroundColor = "#EEEEEE";
		lastName1.style.backgroundColor = "#EEEEEE";
		firstName2.disabled=true;
		lastName2.disabled=true;
		firstName2.style.backgroundColor = "#EEEEEE";
		lastName2.style.backgroundColor = "#EEEEEE";
	}
	
	else if(f.numberItems[i].value == "1") {
		firstName1.disabled=true;
		lastName1.disabled=true;
		firstName1.style.backgroundColor = "#EEEEEE";
		lastName1.style.backgroundColor = "#EEEEEE";
		firstName2.disabled=true;
		lastName2.disabled=true;
		firstName2.style.backgroundColor = "#EEEEEE";
		lastName2.style.backgroundColor = "#EEEEEE";	
		firstName1.value="";
		lastName1.value="";
		firstName2.value="";
		lastName2.value="";
	}
	else if (f.numberItems[i].value == "2"){
		firstName1.disabled=false;
		lastName1.disabled=false;
		firstName1.style.backgroundColor = "#FFFFFF";
		lastName1.style.backgroundColor = "#FFFFFF";
		firstName2.disabled=true;
		lastName2.disabled=true;
		firstName2.style.backgroundColor = "#EEEEEE";
		lastName2.style.backgroundColor = "#EEEEEE";
		firstName2.value="";
		lastName2.value="";
	}
	else if(f.numberItems[i].value == "3"){
		firstName1.disabled=false;
		lastName1.disabled=false;
		firstName1.style.backgroundColor = "#FFFFFF";
		lastName1.style.backgroundColor = "#FFFFFF";
		firstName2.disabled=false;
		lastName2.disabled=false;
		firstName2.style.backgroundColor = "#FFFFFF";
		lastName2.style.backgroundColor = "#FFFFFF";
	}
}

function manageSafetyCourse(f){
	var typeOfTestValue;
	if (f.requestedTask!=null){
		for (var i = 0;i < f.requestedTask.length; i++){
			if (f.requestedTask[i].checked) {
				typeOfTestValue = f.requestedTask[i].value;
				break;
			}
		}
	}
	if(typeOfTestValue == ""){
		return true;
	}
	else if(typeOfTestValue == "DT"){
		for (var i = 0;i < f.safetyCourseCompletedSelection.length; i++)
		{
			f.safetyCourseCompletedSelection[i].checked = false;
			f.safetyCourseCompletedSelection[i].disabled = true;
		}	
	}
	else if(typeOfTestValue == "DTM"){
		for (var i = 0;i < f.safetyCourseCompletedSelection.length; i++)
		{
			f.safetyCourseCompletedSelection[i].disabled = false;
		}	
	}
	return true;
}
function testBrowser()
{
	//Check BROWSER for NETSCAPE
	//--------------------------------------------------
	if (browserName == "Netscape"){
		if(browserVer >= ver_required){
			is_B_Compat=true;
		}
	}
	//--------------------------------------------------

	//Check BROWSER for IE
	//--------------------------------------------------
	else if (browserName == "Microsoft Internet Explorer"){
		adjuster='\t';
		var ver = navigator.appVersion;
		var start = ver.indexOf("MSIE") + 5;
		var end = ver.indexOf(";",start);
		browserVer = parseFloat(ver.substring(start,end));
		if (browserVer >= ver_required){
			is_B_Compat=true;
		}

	}
	//--------------------------------------------------
	//Neither IE or Netscape
	else is_Btype_Compat=false

	//--------------------------------------------------

	// This function tests whether the user accepts cookies.

    	// Try to set a cookie.
    	document.cookie = 'BroncoWeb_BROWSER_CHECK=yes';

    	// If it fails, return false; if it succeeds, return true.
    	if(document.cookie == '') is_C_Compat=false; else is_C_Compat=true;

    	// Then clean up by expiring the cookie.
    	document.cookie = 'BroncoWeb_BROWSER_CHECK=yes; expires=Fri, 13-Apr-1970 00:00:00 GMT';


	if (is_B_Compat==true && is_C_Compat==true){
	document.form1.flag.value="goahead";
	return true;	
	}
	else bad_browser(is_B_Compat,is_C_Compat,browserVer,browserName,adjuster,ver_required);
}


function bad_browser(is_B_Compat,is_C_Compat,browserVer,browserName,adjuster,ver_required)
{

	if(is_B_Compat==true && is_C_Compat==false){
		alert("Sorry!  Your web browser is NOT compatible with DMV Online Appointment System!!\n\n"+
		"Test results:\n\n"+
		"You are using "+browserName+"\t\tPASSED\n"+
		"Your browser is version "+browserVer+adjuster+"\t\tPASSED\n"+
		"Cookies are NOT ENABLED"+adjuster+"\t\t**FAIL**\n"+
		"\nPlease ENABLE cookies to use this Application");
		document.form1.flag.value="donotgoahead";
		return false;
		

	//Right browser, wrong version
	}else if(is_B_Compat==false && is_C_Compat==true){
		alert("Sorry!  Your web browser is NOT compatible with DMV Online Appointment System!!\n\n"+
		"Test results:\n\n"+
		"You are using "+browserName+"\t\tPASSED\n"+
		"Your browser is version "+browserVer+adjuster+"\t\t**FAIL**\n"+
		"Cookies are ENABLED"+adjuster+"\t\tPASSED\n"+
		"\nPlease download a newer "+browserName+" with a version of "+ver_required+" or above")
		document.form1.flag.value="donotgoahead";
		return false;

	//Right browser, wrong version, cookie not enable
	}else if(is_B_Compat==false && is_C_Compat==false){
		alert("Sorry!  Your web browser is NOT compatible with DMV Online Appointment System!!\n\n"+
		"Test results:\n\n"+
		"You are using "+browserName+"\t\tPASSED\n"+
		"Your browser is version "+browserVer+adjuster+"\t\t**FAIL**\n"+
		"Cookies are NOT ENABLED"+adjuster+"\t\t**FAIL**\n"+
		"\nPlease ENABLE cookies to use this Application"+
		"\nPlease download a newer "+browserName+" with a version of "+ver_required+ " or above")
		document.form1.flag.value="donotgoahead";
		return false;

	}else{
		alert("Sorry!  Your web browser is NOT compatible with DMV Online Appointment System!!\n\n"+
		"Would you like to know how to configure your browser?\n\n"+
		"Test results:\n\n"+
		"You are using "+browserName+"\t\t**FAIL**\n\n"+
		"NOTE: This application requires either Internet Explorer"+ver_required+ "or\nNetscape"+ver_required+ "or higher")
		document.form1.flag.value="donotgoahead";
		return false;
		}
}



function show(object) {
	if (document.all) document.all[object].style.visibility = 'visible';
}

function hide(object) {
	if (document.all) document.all[object].style.visibility = 'hidden';
}


function canRunAppt(){

opersys = navigator.platform;
if(opersys == "MacPPC"){
	if (browserName == "Netscape"){
		ver_required= 4.7;
		testBrowser();
	}
	else if(browserName == "Microsoft Internet Explorer"){
		ver_required = 5;
		testBrowser();
	}
	else
		alert("Your Browser is not Compatible with this Application!");
}
else{
	if (browserName == "Netscape"){
			ver_required= 4.05;
			testBrowser();
		}
		else if(browserName == "Microsoft Internet Explorer"){
			ver_required = 4;
			testBrowser();
		}
		else
		alert("Your Browser is not Compatible with this Application!");

}


}


//****************************************************************************************************
  //global variables
  Date.prototype.getCalendarDay = getCalendarDay;
  var today = new Date();
  var now = new Date(y2k(today.getYear()),today.getMonth(),today.getDate()+1); // set today's date
//****************************************************************************************************	
function setNow(dateString) {
	today = new Date(dateString);
	now = new Date(y2k(today.getYear()),today.getMonth(),today.getDate()+1);
}
//****************************************************************************************************	
function createDropDownDate(){
	for (var i=0; i<30; i++) {
    // do this loop 30 times
    now = add_days(now); // move date forward a day
    show_dates(now);       // show dates for beginning
    
	}
  }

//*****************************************************************************************************
  function getCalendarDay() {
    var n = this.getDay();
    var temp;
    var dow = new Array(7);
    dow[0] = "Sunday";
    dow[1] = "Monday";
    dow[2] = "Tuesday";
    dow[3] = "Wednesday";
    dow[4] = "Thursday";
    dow[5] = "Friday";
    dow[6] = "Saturday";
    return dow[n];
  }

//*****************************************************************************************************

function y2k(number) { return (number < 1000) ? number + 1900 : number; }

//*****************************************************************************************************

function add_days(adate,days) {
	//add one day at a time. I used 86399999 because 86400000 was giving problems
    
    return new Date((parseInt(adate.getTime()) + parseInt(86399999)));
}

//*****************************************************************************************************

function format_date(adate) {
    return (adate.getMonth()+1) + '/' + adate.getDate() + '/' + y2k(adate.getYear());
}

//*****************************************************************************************************

function format_dateB(adate) {
	var mm;
	var dd;
	mm = adate.getMonth()+1;
	dd = adate.getDate();

	
	if (mm<10){
		mm = "0"+numToString(mm);
	}
	else {
		mm = numToString(mm);
	}
	
	if (dd<10){
		dd = "0"+numToString(dd);
	}
	else{
		dd = numToString(dd);
	} 

    return (mm +""+ dd +""+ numToString(y2k(adate.getYear())).substring(2,4)); 
}
//*****************************************************************************************************

function show_dates(adate) {
    var begin = format_date(now);  // format date With slashes
    var begin2 = format_dateB(now); //format date without slashes
	if(now.getCalendarDay()!="Sunday"){
		document.write("<option value = '");
		document.write( begin2 );
		document.write("'>");
		document.write( begin +", " + now.getCalendarDay());
	}
} 

//******************************************************************************************************
//function replaces a substring text
function stringReplace(originalString, findText, replaceText) {
	var pos = 0;
    var len = findText.length;
    pos = originalString.indexOf(findText);

    while (pos != -1) {
        preString = originalString.substring(0, pos);
        postString = originalString.substring(pos + len, originalString.length);
        originalString = preString + replaceText + postString;
        pos = originalString.indexOf(findText);
    }
      return originalString;
    }//end function

//******************************************************************************************************
function getParams()
{
	var idx = document.URL.indexOf('?');
	var params = new Array();
	if (idx != -1) {
		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
		for (var i=0; i<pairs.length; i++) {
			nameVal = pairs[i].split('=');
			params[nameVal[0]]=stringReplace(nameVal[1],"+"," ")
			
			//params[nameVal[0]] = nameVal[1];
   }
		}
return params;
}

//*******************************************************************************************************
//validation for screen "SelectOfficeNew.htm"
//this function does not work with netscape so is not used
function validateCompleteSelectOfficeNew(formObj)
{
   // alert(formObj);
    grp = formObj.Satask;
    if (emptyField(formObj.oid)){
         alert("Please select an office location"); 
         formObj.oid.focus();}
    else if (emptyField(formObj.atask))  {         
        alert("Please identify the purpose of your visit");
        grp[0].focus();
        }
    else if (emptyField(formObj.fname)) {
          alert("Please enter a First Name");
          formObj.fname.focus();}
     else if (emptyField(formObj.lname)){
          alert("Please enter a Last Name");
          formObj.lname.focus();}
     else if (emptyField(formObj.AreaCode)){
          alert("Please enter a Daytime Telephone number including the Area Code");
          formObj.AreaCode.focus();}
     else if (!isInt(formObj.AreaCode)){
	  alert("Area code can only contain digits");
	  formObj.AreaCode.focus();}
     else if (formObj.AreaCode.value.length < 3){
     	  alert("Please enter a complete Area Code.");	
     	  formObj.AreaCode.focus();}
     else if (emptyField(formObj.TelFirstHalf)){
          alert("Please enter Complete Telephone number");
          formObj.TelFirstHalf.focus();}
     else if (formObj.TelFirstHalf.length < 3){
     	  alert("Local Area Code should contain exactly 3 digits");
     	  formObj.TelFirstHalf.focus();}
     else if (emptyField(formObj.TelSecHalf)){
          alert("Please enter Complete Telephone number");
          formObj.TelSecHalf.focus();}
     else if (formObj.TelSecHalf.length < 4){
     	  alert("Telephone Number should contain exactly 4 digits");
     	  formObj.TelSecHalf.focus();} 
     else return true; 
     
     return false;
}

//*******************************************************************************************************

//validation for screen different "ChooseTimeN.htm"
//does not work with netscape so not used in this application
function validateCompleteChooseTimeN(formObj)
{
    if (emptyField(formObj.adate) && emptyField(formObj.atime)){
         alert("Please Select Date and/or Time"); 
         formObj.adate.focus();}
    else return true;
     
     return false;
}

//*******************************************************************************************************

// Check to see if field is empty

function emptyField(textObj)

{
     // alert("textObj passed is" + textObj);
     //alert("textObj passed has value is" + textObj.value);
     if (textObj.value.length == 0) return true;
     for (var i=0; i<textObj.value.length; ++i) {
          var ch = textObj.value.charAt(i);
          if (ch != ' ' && ch != '\t') return false;
     } 
     return true; 
} 

//*******************************************************************************************************

// Check to see if field is empty

function BlankBean(textObj)

{
    // alert("textObj passed is" + textObj.value);
     if (textObj.length == 0) return true;
     for (var i=0; i<textObj.length; ++i) {
          var ch = textObj.charAt(i);
          if (ch != ' ' && ch != '\t') return false;
     } 
     return true; 
}


//*******************************************************************************************************
//check if the object passed in integer
function isInt(textObj) {
   var newValue = textObj.value;
   var newLength = newValue.length;
   for(var i = 0; i != newLength; i++) {
      aChar = newValue.substring(i,i+1);
      if(aChar < "0" || aChar > "9") {
         return false;
      }
   }
   return true;
}


//********************************************************************************************************

function numToString(number){
	number +="";
	return number
}

//********************************************************************************************************


function time (atime)
   {

   
   var ampm = (atime.substring(0,2) >= 12) ? " PM" : " AM"
   var hours = atime.substring(0,2);
         hours = ((hours > 12) ? hours - 12 : hours);

   var minutes = atime.substring(2,4);

   // String to display current time.

   var TimeValue =(" "

       + hours
       
       + ":"

       + minutes

       + " "
       + ampm);
   // Displays the current time.
 //  document.forms[0].elements[2].value = TimeValue;
 
 return TimeValue


   }
   
   //********************************************************************************************************
   
   
   function date (adate)
      {
   
      var yr = "20" + adate.substring(4,6);
      var Day = " ";
      var Month = " ";
      var yy = "20"+ adate.substring(4,6);
      var mm = new Number(adate.substring(0,2) - 1);
      var dd = new Number(adate.substring(2,4));
      var dateo = new Date(yy,mm,dd);
                  
   
      var mName = adate.substring(0,2);
      var dName = dateo.getDay();
      
   
      var dayNr = adate.substring(2,4);
     
     
   
      if(dName==0) Day = "Sunday";
      if(dName==1) Day = "Monday";
      if(dName==2) Day = "Tuesday";
      if(dName==3) Day = "Wednesday";
      if(dName==4) Day = "Thursday";
      if(dName==5) Day = "Friday";
      if(dName==6) Day = "Saturday";

   
      if(mName=="01") Month="January";
      if(mName=="02") Month="February";
      if(mName=="03") Month="March";
      if(mName=="04") Month="April";
      if(mName=="05") Month="May";
      if(mName=="06") Month="June";
      if(mName=="07") Month="July";
      if(mName=="08") Month="August";
      if(mName=="09") Month="September";
      if(mName=="10") Month="October";
      if(mName=="11") Month="November";
      if(mName=="12") Month="December";
   
   
      // String to display current date.
   
      var DayOfWeek =(" "
   
          + Day
   
          + "");

   
      // String to display month, day, & year.
   
      var MonthDayYear =(" "
   
          + Month
   
          + " "
   
          + dayNr
   
          + ", "
   
             + yr
          + "  ");

      
    
    return DayOfWeek +", " + MonthDayYear 
   
   
   }
   
var isNN = (navigator.appName.indexOf("Netscape")!=-1);
function autoTab(input,len, e) {
var keyCode = (isNN) ? e.which : e.keyCode; 
var filter = (isNN) ? [0,8,9] : [0,8,9,16,17,18,37,38,39,40,46];
if(input.value.length >= len && !containsElement(filter,keyCode)) {
input.value = input.value.slice(0, len);
input.form[(getIndex(input)+1) % input.form.length].focus();
}



function containsElement(arr, ele) {
var found = false, index = 0;
while(!found && index < arr.length)
if(arr[index] == ele)
found = true;
else
index++;
return found;
}



function getIndex(input) {
var index = -1, i = 0, found = false;
while (i < input.form.length && index == -1)
if (input.form[i] == input)index = i;
else i++;
return index;
}
return true;
}

function lookupoffice() {
document.write('<select name="oid" size="1" onchange="MM_changeProp(this)">');
document.write('<Option Value="">	</option>');
document.write('<Option Value="537">ALTURAS	</option>');
document.write('<Option Value="587">ARLETA	</option>');
document.write('<Option Value="661">ARVIN	</option>');
document.write('<Option Value="AUBURNAUBURN">AUBURN	</option>');
document.write('<Option Value="529">BAKERSFIELD	</option>');
document.write('<Option Value="679">BAKERSFIELD SW	</option>');
document.write('<Option Value="641">BANNING	</option>');
document.write('<Option Value="582">BARSTOW	</option>');
document.write('<Option Value="576">BELL GARDENS	</option>');
document.write('<Option Value="606">BELLFLOWER	</option>');
document.write('<Option Value="585">BISHOP	</option>');
document.write('<Option Value="528">BLYTHE	</option>');
document.write('<Option Value="597">BRAWLEY	</option>');
document.write('<Option Value="550">CAPITOLA	</option>');
document.write('<Option Value="625">CARMICHAEL	</option>');
document.write('<Option Value="520">CHICO	</option>');
document.write('<Option Value="613">CHULA VISTA	</option>');
document.write('<Option Value="580">CLOVIS	</option>');
document.write('<Option Value="603">COALINGA	</option>');
document.write('<Option Value="564">COLUSA	</option>');
document.write('<Option Value="581">COMPTON	</option>');
document.write('<Option Value="523">CONCORD	</option>');
document.write('<Option Value="534">CORTE MADERA	</option>');
document.write('<Option Value="628">COSTA MESA	</option>');
document.write('<Option Value="524">CRESCENT CITY	</option>');
document.write('<Option Value="514">CULVER CITY	</option>');
document.write('<Option Value="599">DALY CITY	</option>');
document.write('<Option Value="598">DAVIS	</option>');
document.write('<Option Value="615">DELANO	</option>');
document.write('<Option Value="669">EL CAJON	</option>');
document.write('<Option Value="527">EL CENTRO	</option>');
document.write('<Option Value="556">EL CERRITO	</option>');
document.write('<Option Value="620">ESCONDIDO	</option>');
document.write('<Option Value="526">EUREKA	</option>');
document.write('<Option Value="621">FAIRFIELD	</option>');
document.write('<Option Value="643">FALL RIVER MILLS	</option>');
document.write('<Option Value="655">FOLSOM	</option>');
document.write('<Option Value="657">FONTANA	</option>');
document.write('<Option Value="590">FORT BRAGG	</option>');
document.write('<Option Value="644">FREMONT	</option>');
document.write('<Option Value="505">FRESNO	</option>');
document.write('<Option Value="646">FRESNO NORTH	</option>');
document.write('<Option Value="607">FULLERTON	</option>');
document.write('<Option Value="627">GARBERVILLE	</option>');
document.write('<Option Value="623">GILROY	</option>');
document.write('<Option Value="510">GLENDALE	</option>');
document.write('<Option Value="670">GOLETA	</option>');
document.write('<Option Value="541">GRASS VALLEY	</option>');
document.write('<Option Value="565">HANFORD	</option>');
document.write('<Option Value="609">HAWTHORNE	</option>');
document.write('<Option Value="579">HAYWARD	</option>');
document.write('<Option Value="635">HEMET	</option>');
document.write('<Option Value="546">HOLLISTER	</option>');
document.write('<Option Value="508">HOLLYWOOD	</option>');
document.write('<Option Value="652">HOLLYWOOD/VINE	</option>');
document.write('<Option Value="578">INDIO	</option>');
document.write('<Option Value="610">INGLEWOOD	</option>');
document.write('<Option Value="521">JACKSON	</option>');
document.write('<Option Value="647">KING CITY	</option>');
document.write('<Option Value="605">LAGUNA HILLS	</option>');
document.write('<Option Value="687">LAKE ISABELLA	</option>');
document.write('<Option Value="530">LAKEPORT	</option>');
document.write('<Option Value="595">LANCASTER	</option>');
document.write('<Option Value="617">LINCOLN PARK	</option>');
document.write('<Option Value="622">LODI	</option>');
document.write('<Option Value="589">LOMPOC	</option>');
document.write('<Option Value="507">LONG BEACH	</option>');
document.write('<Option Value="502">LOS ANGELES	</option>');
document.write('<Option Value="650">LOS BANOS	</option>');
document.write('<Option Value="640">LOS GATOS	</option>');
document.write('<Option Value="533">MADERA	</option>');
document.write('<Option Value="658">MANTECA	</option>');
document.write('<Option Value="566">MARIPOSA	</option>');
document.write('<Option Value="536">MERCED	</option>');
document.write('<Option Value="557">MODESTO	</option>');
document.write('<Option Value="511">MONTEBELLO	</option>');
document.write('<Option Value="639">MOUNT SHASTA	</option>');
//document.write('<Option Value="518">MOUNTAIN VIEW	</option>');
document.write('<Option Value="540">NAPA	</option>');
document.write('<Option Value="584">NEEDLES	</option>');
document.write('<Option Value="662">NEWHALL	</option>');
document.write('<Option Value="586">NORCO	</option>');
document.write('<Option Value="686">NOVATO	</option>');
document.write('<Option Value="504">OAKLAND CLAREMONT	</option>');
document.write('<Option Value="604">OAKLAND COLISEUM	</option>');
document.write('<Option Value="596">OCEANSIDE	</option>');
//document.write('<Option Value="645">ORLAND	</option>');
document.write('<Option Value="522">OROVILLE	</option>');
document.write('<Option Value="636">OXNARD	</option>');
document.write('<Option Value="659">PALM SPRINGS	</option>');
document.write('<Option Value="690">PALMDALE	</option>');
document.write('<Option Value="601">PARADISE	</option>');
document.write('<Option Value="509">PASADENA	</option>');
document.write('<Option Value="574">PASO ROBLES	</option>');
document.write('<Option Value="634">PETALUMA	</option>');
document.write('<Option Value="592">PITTSBURG	</option>');
document.write('<Option Value="525">PLACERVILLE	</option>');
document.write('<Option Value="631">PLEASANTON	</option>');
document.write('<Option Value="532">POMONA	</option>');
document.write('<Option Value="573">PORTERVILLE	</option>');
document.write('<Option Value="676">POWAY	</option>');
document.write('<Option Value="544">QUINCY	</option>');
document.write('<Option Value="612">RANCHO CUCAMONGA	</option>');
document.write('<Option Value="558">RED BLUFF	</option>');
document.write('<Option Value="551">REDDING	</option>');
document.write('<Option Value="626">REDLANDS	</option>');
document.write('<Option Value="548">REDWOOD CITY	</option>');
document.write('<Option Value="633">REEDLEY	</option>');
document.write('<Option Value="577">RIDGECREST	</option>');
document.write('<Option Value="545">RIVERSIDE	</option>');
document.write('<Option Value="656">RIVERSIDE EAST	</option>');
document.write('<Option Value="673">ROCKLIN	</option>');
document.write('<Option Value="543">ROSEVILLE	</option>');
document.write('<Option Value="501">SACRAMENTO	</option>');
document.write('<Option Value="602">SACRAMENTO SOUTH 	</option>');
document.write('<Option Value="539">SALINAS	</option>');
document.write('<Option Value="568">SAN ANDREAS	</option>');
document.write('<Option Value="512">SAN BERNARDINO	</option>');
document.write('<Option Value="648">SAN CLEMENTE	</option>');
document.write('<Option Value="506">SAN DIEGO	</option>');
document.write('<Option Value="519">SAN DIEGO CLAIREMONT	</option>');
document.write('<Option Value="503">SAN FRANCISCO	</option>');
document.write('<Option Value="516">SAN JOSE	</option>');
document.write('<Option Value="547">SAN LUIS OBISPO	</option>');
document.write('<Option Value="593">SAN MATEO	</option>');
document.write('<Option Value="619">SAN PEDRO	</option>');
document.write('<Option Value="677">SAN YSIDRO	</option>');
document.write('<Option Value="542">SANTA ANA	</option>');
document.write('<Option Value="549">SANTA BARBARA	</option>');
document.write('<Option Value="632">SANTA CLARA	</option>');
document.write('<Option Value="563">SANTA MARIA	</option>');
document.write('<Option Value="616">SANTA MONICA	</option>');
document.write('<Option Value="630">SANTA PAULA	</option>');
document.write('<Option Value="555">SANTA ROSA	</option>');
document.write('<Option Value="668">SANTA TERESA	</option>');
document.write('<Option Value="567">SEASIDE	</option>');
document.write('<Option Value="660">SHAFTER	</option>');
document.write('<Option Value="680">SIMI VALLEY	</option>');
document.write('<Option Value="569">SONORA	</option>');
document.write('<Option Value="538">SOUTH LAKE TAHOE	</option>');
document.write('<Option Value="517">STOCKTON	</option>');
document.write('<Option Value="531">SUSANVILLE	</option>');
document.write('<Option Value="575">TAFT	</option>');
document.write('<Option Value="672">TEMECULA	</option>');
document.write('<Option Value="663">THOUSAND OAKS	</option>');
document.write('<Option Value="608">TORRANCE	</option>');
document.write('<Option Value="642">TRACY	</option>');
document.write('<Option Value="513">TRUCKEE	</option>');
document.write('<Option Value="594">TULARE	</option>');
document.write('<Option Value="553">TULELAKE	</option>');
document.write('<Option Value="649">TURLOCK	</option>');
document.write('<Option Value="638">TWENTYNINE PALMS	</option>');
document.write('<Option Value="535">UKIAH	</option>');
document.write('<Option Value="588">VACAVILLE	</option>');
document.write('<Option Value="554">VALLEJO	</option>');
document.write('<Option Value="515">VAN NUYS	</option>');
document.write('<Option Value="560">VENTURA	</option>');
document.write('<Option Value="629">VICTORVILLE	</option>');
document.write('<Option Value="559">VISALIA	</option>');
document.write('<Option Value="624">WALNUT CREEK	</option>');
document.write('<Option Value="583">WATSONVILLE	</option>');
document.write('<Option Value="572">WEAVERVILLE	</option>');
document.write('<Option Value="618">WEST COVINA	</option>');
document.write('<Option Value="611">WESTMINSTER	</option>');
document.write('<Option Value="591">WHITTIER	</option>');
document.write('<Option Value="571">WILLOWS	</option>');
document.write('<Option Value="637">WINNETKA	</option>');
document.write('<Option Value="561">WOODLAND	</option>');
document.write('<Option Value="552">YREKA	</option>');
document.write('<Option Value="562">YUBA CITY	</option>');
document.write('</select>'); 
}

function rmLeadY(inString) {
	var outString;
	var startPos;
	var endPos;
	var ch;

	// where do we start?
	startPos = 0;
	endPos = inString.length;

	ch = inString.charAt(startPos);
	//to remove 'Y'
	if ((ch == "Y") )	startPos++;

	// get the string
	outString = inString.substring(startPos, endPos + 1);
    alert(outString);
	return outString;
}

function isLeadY(inString) {
	var startPos;
	var ch;
	// where do we start?
	startPos = 0;

	ch = inString.charAt(startPos);
	//to remove 'Y'
	if ((ch == "Y") )
	   return true;
	else
		return false;
}
//***************************************************************************
 //the following function calls restart button on the form (calls AP4)
  //if the user has not responded in a fixed amount of time
  
  function releaseRecords(subbtnName, inmins)
  {
  
  	
  	
  	
  	setTimeout("document." + subbtnName +".submit();",inmins * 60000);
  	setTimeout('Set_Cookie ("needfillform", "NO")',inmins * 60000);
  	setTimeout('Set_Cookie ("needAP4", "NO")',inmins * 60000);
  	setTimeout('alert("Appointment has been released! Please click `OK` to restart the appointment Process.")',inmins * 60000);	
  	//setTimeout("document." + subbtnName +".timeout.value = 'Yes'",inmins * 60000);	
  		
   }
//****************************************************************************** 
   
   
   //the following function calls AP4 from SelectOfficeNew.jsp
    
     
     function releaseRecordsOnBack(subbtnName, inmins)
     {
     	callAP4func = getCookie("needAP4");
     	if(callAP4func =="YES" ){
     		setTimeout("document." + subbtnName +".submit()",inmins * 10);
     		setTimeout("Set_Cookie ('needAP4', 'NO')", inmins * 15);
    	}
     		
   }
   
   
   
   
   
 //******************************************************************************
 //function to open a new window
// function openit(sURL)
// {
// newwindow=open(sURL,"newwin","scrollbars=yes, toolbar=yes, directories=yes, location = yes menubar=yes, resizable=yes, status=yes, width=600, height=400");
 
//}

function openit(url) {

    	var ItsTheWindow;
    	ItsTheWindow = window.open(url, "newwin",
    	"status=no,height=400,width=600,scrollbars=yes,resizable=yes,toolbar=yes");

}

function openit2(url) {
	// this is a hack to make the spanish link call the popExit function
	if (arguments[1])
		arguments[1](url);
	else {	
    	var ItsTheWindow;
    	ItsTheWindow = window.open(url, "newwin",
    	"status=no,height=400,width=600,scrollbars=yes,resizable=yes,toolbar=yes");
    }
}


//********************************************************************************

function Set_Cookie(name,value) {
    document.cookie = name + "=" +escape(value) + "; path= /";
        
}

//********************************************************************************
// Let's define a function that will read in a specific cookie value.

function getCookie(name) {    var start = document.cookie.indexOf(name+"=");
    var len = start+name.length+1;
    if ((!start) && (name != document.cookie.substring(0,name.length))) return null;
    if (start == -1) return null;    var end = document.cookie.indexOf(";",len);
    if (end == -1) end = document.cookie.length;
    return unescape(document.cookie.substring(len,end));
    }
    
 //*******************************************************************************
 //clears the cookies set in the present application ; used in restart button
function ClearCookies () {
alert("in clear cookies");
  var ThreeDays = 3 * 24 * 60 * 60 * 1000;
  var expDate = new Date();
  expDate.setTime (expDate.getTime() - ThreeDays);
  document.cookie = "needAP4 =ImOutOfHere; expires=" + expDate.toGMTString();
  document.cookie = "AP4Info =ImOutOfHere; expires=" + expDate.toGMTString();
  document.cookie = "telnumber =ImOutOfHere; expires=" + expDate.toGMTString();
  document.cookie = "lareaC =ImOutOfHere; expires=" + expDate.toGMTString();
  document.cookie = "tel =ImOutOfHere; expires=" + expDate.toGMTString();
  document.cookie = "getatask =ImOutOfHere; expires=" + expDate.toGMTString();
  
  
}

//******************************************************************************
//clears input fields of SelectOfficeNew.jsp and SelectOfficeNewj.jsp whenever required
function clearfields(){
    cneedfillform = getCookie("needfillform");
	if(cneedfillform=="NO"){
		isodatetime();
		document.myform.reset();
		
	}
}

//*******************************************************************************



//  End 

