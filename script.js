let paynow = document.querySelector('button');
paynow.addEventListener('click',inputMsg);

function inputMsg(){
    alert("Confirm");
   let name = prompt('Enter your name');
    const price = 500;
    var ispaid = true;
    var modeofpayment;
    modeofpayment= prompt('Mode of payment');
    alert ("Payment succesfull through " + modeofpayment);
  }