import { useState } from 'react';

function useForm(valoresIniciais) {
  const [values, setValues] = useState(valoresIniciais);

  const handleChange = (e) => {
    const chave = e.target.getAttribute('name');
    const valor = e.target.value;
    setValues({
      ...values,
      [chave]: valor,
    });
  };

  const clearForm = () => {
    setValues(valoresIniciais);
  };

  return {
    values,
    handleChange,
    clearForm,
  };
}

export default useForm;
