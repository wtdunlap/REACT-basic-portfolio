import returnElements from "./returnElements";

export default function manageLocal(newItem) {
    const localStorageDump = JSON.parse(localStorage.getItem("portfolio"));
    let localStorageArray = [];

    if (!localStorageDump) {
        localStorageArray = [newItem];
        localStorage.setItem("portfolio", JSON.stringify(localStorageArray));
        returnElements(localStorageArray);
    }

    localStorageArray = localStorageDump;

    while (localStorageArray.length > 4) {
        localStorageArray.pop();
        console.log("array popped");
    }
    localStorage.setItem("portfolio", JSON.stringify(localStorageArray));

    if (localStorageDump) {
        localStorageArray.unshift(newItem);
        console.log("array shifted");
        localStorage.setItem("portfolio", JSON.stringify(localStorageArray));
    }
    return returnElements(localStorageArray)
}

