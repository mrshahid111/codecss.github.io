function cal1(){

  
  arr_distance=[5,10,8,15,25,50,100];
 
  
  if($("#dist_unit").val()=="km"){
    $('#distance_unit').empty();
    for (var index = 0; index <arr_km.length; index++) {
     
     
        $('#distance_unit').append('<option value="' + arr_km[index]+ '">' +arr_km[index] + ' km'+'</option>');
      
      
   }
   
 $('#distance').autoNumeric('update', {aSign: '  km'}); 
 $('#pace_unit').html(" per km") ;
 $('#pce_unit').html(" per km") ;
  }
   
  else{
    $('#distance_unit').empty();
    for (var index = 0; index <arr_miles.length; index++) {



      if(index==0){
        $('#distance_unit').append('<option value="' + arr_miles[index]+ '">' + arr_miles[index] + ' mile'+'</option>');
      }
      else if(index==1){
        $('#distance_unit').append('<option  value="' + arr_miles[index]+ '">' + arr_miles[index]+ ' miles(half marathon)'+'</option>');
      }
      else if(index==2){
        $('#distance_unit').append('<option  value="' + arr_miles[index]+ '">' + arr_miles[index]+ ' miles(marathon)'+'</option>');
      }
      else{

        $('#distance_unit').append('<option value="' + index+ '">' + index + ' miles'+'</option>');
      }
      
   }
    $('#distance').autoNumeric('update', {aSign: '  miles'}); 
    $('#pace_unit').html(" per mile") ;
 $('#pce_unit').html(" per mile") ;
  }
  
  }
//cal1();
cal2();
function cal(){


  $('.select2-container').css('width','200px')
  $(".auto").autoNumeric("init");
  perc=Array();
//   txt_selected=$( "#distance_opt option:selected" ).text().split("").reverse().join("");
// last_ch=txt_selected.charAt(0);
// if(last_ch=="m"){
//   distance=$('#distance_opt').val() ;
//   $('#pace_unit').html(" per km") ;
//   $('#pce_unit').html(" per km") ;
// }
// else{
//   distance=$('#distance_opt').val()*5/8 ;
//   $('#pace_unit').html(" per mile") ;
//   $('#pce_unit').html(" per mile") ;
// }
distance=$('#distance_opt').val() ;

 // distance=parseInt($('#distance').autoNumeric('get')) ;
 
 
  hrs=parseInt($('#hrs').autoNumeric('get')) ;
  mins=parseInt($('#mins').autoNumeric('get')) ;
  secs=parseInt($('#secs').autoNumeric('get') );
  time_secs=hrs*3600+mins*60 + secs ;
  time_min= hrs*60+ mins + secs/60 ;
  
  pace=time_secs/distance;

pace=Math.round(pace*1000)/1000;
//pace_secs=pace*60;
//pace=parseInt(pace_secs) ;

if(distance!=0){
  $('#pace').html(convertHMS(pace)) ;
  $('#pace_mile').html(convertHMS(pace*8/5)) ;
  $('#pce').html(convertHMS(pace)) ;
  for(i=80;i<=120;i++){
    perc[i] = pace*(200-i)/100;
    $('#perc'+i).html(convertHMS(perc[i])) ;
    $('#percmile'+i).html(convertHMS(perc[i]*8/5)) ;
   // $('#percmile'+i).html(convertHMS(perc[i])*8/5) ;
  }
}





}
function convertHMS(value) {
  const sec = parseInt(value, 10); // convert value to number if it's string
  let hours   = Math.floor(sec / 3600); // get hours
  let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
  let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
  // add 0 if value < 10; Example: 2 => 02
  if (hours   < 10) {hours   = "0"+hours;}
  if (minutes < 10) {minutes = "0"+minutes;}
  if (seconds < 10) {seconds = "0"+seconds;}
  return hours+':'+minutes+':'+seconds; // Return is HH : MM : SS
}
function cal2(){
  distance_unit=parseInt($('#distance_unit').val()) ;
  
  $('#distance').autoNumeric('set',distance_unit);
}
