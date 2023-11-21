const outboundInput = document.getElementById('outbound-input');
const returnInput = document.getElementById('return-input');

outboundInput.addEventListener('change', (e) => {
    // console.log(e.target.value);

    const currentDate = new Date();
    // console.log(currentDate)

    const currentDatePlusOne = new Date();
    currentDatePlusOne.setDate(currentDatePlusOne.getDate() + 1);
    // console.log(currentDatePlusOne)

    const outboundDate = new Date(e.target.value);
    // console.log(outboundDate)

    const outboundDatePlusOne = new Date(e.target.value);
    outboundDatePlusOne.setDate(outboundDatePlusOne.getDate() + 1);
    // console.log(currentDatePlusOne)

    if (outboundDate < currentDate) {
        outboundInput.value = currentDate.toISOString().split("T")[0];
        // console.log(("if"))
        if (returnInput.value.length == 0) {
            returnInput.value = currentDatePlusOne.toISOString().split("T")[0];
            // console.log("if if")
        }
    } else if (outboundInput.value > returnInput.value) {
        returnInput.value = outboundDatePlusOne.toISOString().split("T")[0];
        // console.log("elseif", returnInput, outboundDatePlusOne)
    }
});

returnInput.addEventListener('change', (e) => {
    const currentDate = new Date();
    // console.log(currentDate)

    const currentDatePlusOne = new Date();
    currentDatePlusOne.setDate(currentDatePlusOne.getDate() + 1);
    // console.log(currentDatePlusOne)

    const returnDate = new Date(e.target.value);
    // console.log(returnDate)

    const returnDateMinusOne = new Date(e.target.value);
    returnDateMinusOne.setDate(returnDateMinusOne.getDate() - 1);

    // console.log(currentDatePlusOne)
    if (returnDate <= currentDatePlusOne) {
        returnInput.value = currentDatePlusOne.toISOString().split("T")[0];
        // console.log(("if"))
        if (outboundInput.value.length == 0) {
            outboundInput.value = currentDate.toISOString().split("T")[0];
            // console.log("if if")
        }
    } else if (returnInput.value < outboundInput.value) {
        outboundInput.value = returnDateMinusOne.toISOString().split("T")[0];
        // console.log("elseif", returnInput, outboundDatePlusOne)
    }

});







