export default function manageLocal(newItem) {
    // localStorage.setItem("portfolio", JSON.stringify(["Home"]));
    let localStorageDump = [];
    let localStorageArray = [];
    
    localStorageDump = JSON.parse(localStorage.getItem("portfolio"));
    
    // if localStorage returned nothing, set new item as first element in array and return LSA
    if (!localStorageDump) {
        localStorageArray = [newItem];
        localStorage.setItem("portfolio", JSON.stringify(localStorageArray));
        return localStorageArray;
    }

    // assign LSD to LSA
    localStorageArray = localStorageDump;

    // while LSA is longer than 4 pop last elelment to keep array at a max of 5
    while (localStorageArray.length > 4) {
        localStorageArray.pop();
    }

    // push array back to local storage to keep it fresh
    localStorage.setItem("portfolio", JSON.stringify(localStorageArray));

    // if array is less than 6 push new item to front of array and set to localStorage
    if (localStorageArray.length < 6) {
        localStorageArray.unshift(newItem);
        localStorage.setItem("portfolio", JSON.stringify(localStorageArray));
    }
    return localStorageArray;
}
