function makeid(l) {
    // write your code here
    let ans="";
    for(let i=0;i<l;i++){

        //let's generate the random number and try to do..
        let num=Math.random()*100;
        if(num>=47 && num<=58){
            //It is number character..
            ans+=String.fromCharCode(num);
        }
        else if(num>=65 && num<=90)
        {
            //It is capital letter..
            ans+=String.fromCharCode(num);
        }
        else
        {
            //number is not in range..
            num=num/5;
            num+=97;

            ans+=String.fromCharCode(num);
        }
    }   

   
        return ans;
       
  }
 
  
  // Do not change the code below.
  const l = prompt("Enter a number.");
  alert(makeid(l));
  