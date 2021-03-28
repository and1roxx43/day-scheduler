// Declaration of variables
const nine = $('#nine').html();
const ten = $('#ten').html();
const eleven = $('#eleven').html();
const twelve = $('#twelve').html();
const thirteen = $('#thirteen').html();
const fourteen = $('#fourteen').html();
const fifteen = $('#fifteen').html();
const sixteen = $('#sixteen').html();
const seventeen = $('#seventeen').html();

// console.log(fifteen)

// console.log(typeof fifteen);

// Display current time
function timeNow(){
    let currentDateTime = moment().format('Do MMM, YYYY kk:mm:ss a');
    $('#current-time').text(currentDateTime);
}

setInterval(timeNow, 1000);
// timeNow();



// check if current time is equal to calendar time
// Any grey area are in past, red is current, and green future time
function checkTime(){
    // Check current time in hour format.
    var currentTime = moment().format('k:mm');
     console.log(currentTime);

     // Test
    //  let afterTime = '9:00';
    //  console.log(afterTime);

    // console.log(typeof currentTime);

    if(currentTime < nine){
        $('.des-9').css('background-color', 'green');
        $('.des-10').css('background-color', 'green');
        $('.des-11').css('background-color', 'green');
        $('.des-12').css('background-color', 'green');
        $('.des-13').css('background-color', 'green');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }

    if(currentTime >= nine || currentTime < ten){
        $('.des-9').css('background-color', 'red');
        $('.des-10').css('background-color', 'green');
        $('.des-11').css('background-color', 'green');
        $('.des-12').css('background-color', 'green');
        $('.des-13').css('background-color', 'green');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }

    if(currentTime >= ten && currentTime < eleven){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css('background-color', 'red');
        $('.des-11').css('background-color', 'green');
        $('.des-12').css('background-color', 'green');
        $('.des-13').css('background-color', 'green');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }

    if(currentTime >= eleven && currentTime < twelve){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css('background-color', 'red');
        $('.des-12').css('background-color', 'green');
        $('.des-13').css('background-color', 'green');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }
   
    if(currentTime >= twelve && currentTime < thirteen){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css('background-color', 'red');
        $('.des-13').css('background-color', 'green');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }
    
    if(currentTime >= thirteen && currentTime < fourteen){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css('background-color', 'red');
        $('.des-14').css('background-color', 'green');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }
   
    if(currentTime >= fourteen && currentTime < fifteen){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-14').css('background-color', 'red');
        $('.des-15').css('background-color', 'green');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }
    
    if(currentTime >= fifteen && currentTime < sixteen){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-14').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-15').css('background-color', 'red');
        $('.des-16').css('background-color', 'green');
        $('.des-17').css('background-color', 'green');
    }
    if(currentTime >= sixteen && currentTime < seventeen){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-14').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-15').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-16').css('background-color', 'red');
        $('.des-17').css('background-color', 'green');
    }
    if(currentTime >= seventeen && currentTime < '18:00'){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-14').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-15').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-16').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-17').css('background-color', 'red');
    }

    if(currentTime >= '18:00' && currentTime <= '23:59'){
        $('.des-9').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-10').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-11').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-12').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-13').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-14').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-15').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-16').css({'background-color': 'grey', 'pointer-events': 'none'});
        $('.des-17').css({'background-color': 'grey', 'pointer-events': 'none'});
    }
}

checkTime();


// save comments to calendar

$('.save-9').on('click', function(){
    let text = $('.des-9').val();
    localStorage.setItem('text', text);

});
$('.save-10').on('click', function(){
    let text2 = $('.des-10').val();
    localStorage.setItem('text2', text2);

});
$('.save-11').on('click', function(){
    let text3 = $('.des-11').val();
    localStorage.setItem('text3', text3);

});
$('.save-12').on('click', function(){
    let text4 = $('.des-12').val();
    localStorage.setItem('text4', text4);

});
$('.save-13').on('click', function(){
    let text5 = $('.des-13').val();
    localStorage.setItem('text5', text5);

});
$('.save-14').on('click', function(){
    let text6 = $('.des-14').val();
    localStorage.setItem('text6', text6);

});
$('.save-15').on('click', function(){
    let text7 = $('.des-15').val();
    localStorage.setItem('text7', text7);

});
$('.save-16').on('click', function(){
    let text8 = $('.des-16').val();
    localStorage.setItem('text8', text8);

});
$('.save-17').on('click', function(){
    let text9 = $('.des-17').val();
    localStorage.setItem('text9', text9);

});

// Populate calendar and make persists

$('.des-9').val(localStorage.getItem('text'));
$('.des-10').val(localStorage.getItem('text2'));
$('.des-11').val(localStorage.getItem('text3'));
$('.des-12').val(localStorage.getItem('text4'));
$('.des-13').val(localStorage.getItem('text5'));
$('.des-14').val(localStorage.getItem('text6'));
$('.des-15').val(localStorage.getItem('text7'));
$('.des-16').val(localStorage.getItem('text8'));
$('.des-17').val(localStorage.getItem('text9'));

// Clear calendar

$('#btn-clear').on('click', function(){

    $('.descr').val('');
   
    window.localStorage.clear();
});

