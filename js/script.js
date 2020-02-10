console.log('holiday calculator');

document.getElementById('calculate').addEventListener('click', function(){

  var time1 = document.getElementById('time1').value;
  console.log(time1);

  var time2 = document.getElementById('time2').value;
  console.log(time2);

  var time3 = document.getElementById('time3').value;
  console.log(time3);

  var time4 = document.getElementById('time4').value;
  console.log(time4);

  var time5 = document.getElementById('time5').value;
  console.log(time5);

  var total = parseInt(time1) + parseInt(time2) + parseInt(time3) + parseInt(time4) + parseInt(time5);
  console.log(total);

  document.getElementById('total').value = "";
  document.getElementById('total').value = total;


});
