import {useState, useEffect} from "react";

export default function checkLocal() {
    const [firstLoad, setFirstLoad] = useState(0)
    const localCheck = JSON.parse(localStorage.getItem("portfolio"));
    if (!localCheck) { setFirstLoad(1) }
    else { setFirstLoad(0) }
}