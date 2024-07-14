
// Returns an array of html elements that need to be parsed and replaced using imported pages
export default function returnElements(inboundArray) {
    const localArray = inboundArray;
    console.log("localArray before being touched", localArray);

    // establish var types to help with type mismatch
    let html = [];
    let formattedString = "";

    // add formatted html to array
    localArray.map((current, index) => {
        console.log("current item from returnElements", current);
        html[index] = `<div key=${index}><${current} id="${current}"/></div>`;
        console.log("results of html map:", html);
    });

    // convert array to string to parse html to react
    formattedString = Array.from(html).join("");
    console.log(formattedString);

    return formattedString

}
