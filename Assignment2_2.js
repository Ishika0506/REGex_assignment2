
  function calculateAmt(){
  var no_of_calls=document.getElementById("no_of_calls").value;
  if(no_of_calls==""){
 alert("Please fill all the fields");
        document.myForm.calls.focus();
        return false;}
	var no_of_sms = document.getElementById('no_of_sms').value;
    if(no_of_sms==""){
        alert("Please fill all the fields");
        document.myForm.sms.focus();
        return false;
    }	
		
		
  var call_charge=0.0,sms_charge=0.0,total_charges=0.0;
  if(no_of_calls<=50)
  call_charge=0.50*no_of_calls;
  else if(no_of_calls<=150)
  call_charge=25+0.70*(no_of_calls-50);
  else if(no_of_calls<=300)
  call_charge=95+0.85*(no_of_calls-150);
  else
  call_charge=222.5+0.95*(no_of_calls-300);
  
  if(no_of_sms<=50)
  sms_charge=0;
  else if(no_of_sms<=200)
  sms_charge=0.25*(no_of_sms-50);
  else if(no_of_sms<=400)
  sms_charge=37.5+0.40*(no_of_sms-200);
  else
  sms_charge=117.5+0.45*(no_of_sms-400);
  
 total_charges=call_charge+sms_charge;
 
alert("Charges for call: "+call_charge +"\n Charges for SMS:"+sms_charge+"\n Total Charges: "+ total_charges);
 return true;}
  