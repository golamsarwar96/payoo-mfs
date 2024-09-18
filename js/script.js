//Step-1 Make a event handler for login button

const btn = document.getElementById('login').addEventListener('click',function(e){
    //Prevent reloading
    e.preventDefault();

    //Step-2 Add mobile number
    const mobile = document.getElementById('mobile').value;

    //Step-3 Add pin
    const pin = document.getElementById('pin').value;

    //Step-4 Validate phone and pin number
    if(mobile === "01631624674" &&  pin === "1234"){
        //Step-5 Allow user to use website
        window.location.href="./home.html"
    }
    else{
        console.log("Wrong pin and password");
    }

})

