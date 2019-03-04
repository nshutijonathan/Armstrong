var result = document.getElementsByClassName('result');
var btn    = document.getElementsByClassName('submit-button');
var app = {
    calclate: function calculate() {
        var value = document.getElementsByClassName('text-input')[0].value;
        var intvalue = parseInt(document.getElementsByClassName('text-input')[0].value);
        var total = 0;

        var split = value.split('');
        for (i = 0; i <= split.length - 1; i++) {
            var number = split[i];
            var cube = this.cube(number,split.length);
            total = total + cube;

            if (i == split.length - 1) {
                //console.log(total);
                if (parseInt(intvalue) != parseInt(total)) {
                    alert('This number is not amstrong');
                }
                else {
                    result[0].innerHTML = total;
                }
            }
        }


    },
    cube: function cube(number,length) {
        var process = Math.pow(number, length);
        return process;
    },
    switch: function SwithBtn() {
        var value = document.getElementsByClassName('text-input');
        //console.log(value[0].value)
        var number =  value[0].value;
        var splited = number.split('');
        if(splited.length == 3)
        {
           btn[0].disabled = false;
         }
         else {
           btn[0].disabled = true;
         }
    }
}

function getNumber() {
    app.calclate();
}

function SwithBtn() {
    app.switch();
}

function chechBtn(el) {
   if (el.disabled == true) {
      alert('You have not enterd 3 digit number');
   }
}
function chectTextnumber()
{
    app.switch();
}







// net algorithm


function three_digit_armstrong_number()
{
 for (var i = 1; i < 10; ++i)
 {
   for (var j = 0; j < 10; ++j)
     {
        for (var k = 0; k < 10; ++k)
        {
          var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
          var plus = (i * 100 + j * 10 +  k);
          if (pow == plus)
           {
             console.log(pow);
            }
         }
       }
    }
  }
three_digit_armstrong_number();
