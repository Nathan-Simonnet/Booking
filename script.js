const outboundInput = document.getElementById('outbound-input');
const returnInput = document.getElementById('return-input');
const price = document.getElementById('price');

const priceEvaluation = function () {

    let priceDateOutbound = new Date(outboundInput.value);
    let outboundParse = priceDateOutbound.getTime();
    console.log(priceDateOutbound, outboundParse);

    let priceDateReturn = new Date(returnInput.value);
    let returnParse = priceDateReturn.getTime();
    console.log(priceDateReturn, returnParse);

    let days = returnParse - outboundParse;
    console.log("d" + returnParse, "a" + outboundParse);

    price.textContent = (days / (1000 * 60 * 60 * 24)) * 34;
}

// Transform a ISO date in date formated for our input date
// ======================================================
const formatDate = function (date) {
    return date.toISOString().split("T")[0];
}
// Used for both eventlistener
// ======================================================
const currentDate = new Date();
const currentDatePlusOne = new Date();
currentDatePlusOne.setDate(currentDatePlusOne.getDate() + 1);

// set currentdate and next day to our inputs
// ======================================================
function setDefaultDates() {
    outboundInput.value = formatDate(currentDate);
    returnInput.value = formatDate(currentDatePlusOne);
}

setDefaultDates();

// Input outbound only >= today 
// ======================================================

outboundInput.addEventListener('change', (e) => {

    const outboundDate = new Date(e.target.value);

    const outboundDatePlusOne = new Date(e.target.value);
    outboundDatePlusOne.setDate(outboundDatePlusOne.getDate() + 1);

    if (outboundDate < currentDate) {
        outboundInput.value = formatDate(currentDate);
    } else if (outboundInput.value >= returnInput.value) {
        returnInput.value = formatDate(outboundDatePlusOne);
    }

    priceEvaluation()
});

// Input return only >= today +1 , or current day + 1 
// ======================================================
returnInput.addEventListener('change', (e) => {
    const returnDate = new Date(e.target.value);

    const returnDateMinusOne = new Date(e.target.value);
    returnDateMinusOne.setDate(returnDateMinusOne.getDate() - 1);

    if (returnDate <= currentDatePlusOne) {
        returnInput.value = formatDate(currentDatePlusOne);
    } else if (returnInput.value <= outboundInput.value) {
        outboundInput.value = formatDate(returnDateMinusOne);
    }

    priceEvaluation()
});




