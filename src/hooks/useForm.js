import {useState} from 'react'

export default function useForm (formValue = {}) {

    const [values, setvalue] = useState(formValue)
    
    const resetForm = () => {
         setvalue(formValue);  
    }

    const handleInputChange = ({target}) => {
            setvalue({...values, [target.name]:  target.value})
    }

    return [
        values, 
        handleInputChange,
        resetForm,
    ]
}
