(() => {

    //select hours, minutes and seconds, add to constant variables 
    const hours = Selector(".hours");
    const minutes = Selector('.minutes');
    const seconds = Selector('.seconds');
    const container = Selector('.container');

    //set interval method
    setInterval(() => {
        const time = new Date();
        hours.textContent = time.getHours();  //return the current hours
        minutes.textContent = time.getMinutes();  //return the current hours
        seconds.textContent = time.getSeconds();  //return the current hours
        }, 1000);

})();

//instead writing out one by one for each hours, minutes and seconds, i can create this function to select each one
//can be used to select the element from html, do code with it 
function Selector(element)
{
    return document.querySelector(element);
}