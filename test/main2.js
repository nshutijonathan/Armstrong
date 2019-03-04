// Submit button variable
var btn   = document.getElementsByClassName('submit-button');
var value = document.getElementsByClassName('text-input');
// Our app object
var App = {
  onload:function () {
    this.switchBtn();
  },
  onkeyup:function () {
     this.switchBtn();
     var result = document.getElementsByClassName('result');
      result[0].innerHTML = '';

  },
  switchBtn:function () {
    // Function to switch button
    var value = document.getElementsByClassName('text-input');
    var number =  value[0].value;
    var splited = number.split('');
    if(splited.length == 3)
    {
       btn[0].disabled = false;
     }
     else {
       btn[0].disabled = true;
     }
  },
  onMouseOver:function () {
    var btn   = document.getElementsByClassName('submit-button');
    if (btn[0].disabled == true) {
       alert('You have not enterd 3 digit number');
    }
  },
  Calculate:function () {
        var value = parseInt(document.getElementsByClassName('text-input')[0].value);
        var final = 0;
        // =====================
        for (var i = 1; i < 10; ++i)
        {
          for (var j = 0; j < 10; ++j)
            {
               for (var k = 0; k < 10; ++k)
               {
                 var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
                 var plus = (i * 100 + j * 10 +  k);
                 if (pow == plus && pow == value)
                  {
                     final = plus;
                   }
                }
              }
           }

        var result = document.getElementsByClassName('result');
           if(value != final )
             {
               result[0].innerHTML = value+' This number is not amstrong';
             }
           else {
               result[0].innerHTML = final+' This number is an Armstrong';
            }


           // ====================


  }
}

function LoadApp(fun) {
  if(fun == 'onload')
  {
    App.onload();
  }
  else if(fun =='onkeyup')
  {
    App.onkeyup();
  }
  else if(fun =='btnonmouseover')
  {
    App.onMouseOver();
  }
  else if(fun =='calculate')
  {
    App.Calculate();
  }


}
