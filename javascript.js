(() => {
const hours = Selector(".hours");
const minutes = Selector(".minutes");
const seconds = Selector(".seconds");

})();

//instead writing out one by one for each hours, minutes and seconds, i can create this function to select all
function Selector(element)
{
    return document.querySelector(element);
}