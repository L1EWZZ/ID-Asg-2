(() => {

    //select hours, minutes and seconds, add to constant variables 
    const hours = Selector(".hours");
    const minutes = Selector('.minutes');
    const seconds = Selector('.seconds');
    const container = Selector('.container');

    //set interval method
    setInterval(() => {
        const time = new Date();

        //getting the current hours. if hours is less than 9, call the conditional statement, show hours with default 0
        hours.textContent = time.getHours() < 9 ? `0${time.getHours()}`: time.getHours();  
        minutes.textContent = time.getMinutes() < 9 ? `0${time.getMinutes()}`: time.getMinutes();  //return the current minutes
        seconds.textContent = time.getSeconds() < 9 ? `0${time.getSeconds()}`: time.getSeconds();  //return the current seconds
        }, 1000);

})();

//instead writing out one by one for each hours, minutes and seconds, i can create this function to select each one
//can be used to select the element from html, do code with it 
function Selector(element)
{
    return document.querySelector(element);
}