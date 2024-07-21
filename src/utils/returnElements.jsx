
// Returns an array of html elements that need to be parsed and replaced using imported pages
export default function returnElements(inboundArray) {
    const localArray = inboundArray;

    // establish var types to help with type mismatch
    let html = [];
    let formattedString = "";

    // add formatted html to array
    localArray.map((current, index) => {
        html[index] = `<div key=${index}><${current} id="${current}"/></div>`;
    });

    // convert array to string to parse html to react
    formattedString = Array.from(html).join("");

    if (localArray.length < 1)

    return formattedString

}
