import { useState } from "react";

const useForm = () => {
    const [values, setValues] = useState({});

    const handleChange = (event) => {
        setValues({...values, })
    }
}