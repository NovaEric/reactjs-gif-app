import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const AddCategory = ({setCategories}) => {

    const [InputValue, setInputValue] = useState('');

    const handleInputChange = (e) => {

        setInputValue( e.target.value );
        
    }

    const handleSubmit = (e) => {
        
        e.preventDefault();

        if (InputValue.trim().length > 2) {
            
         setCategories(cat => [InputValue, ...cat  ]);
         setInputValue('');
        }
    }

  return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text"
                value={ InputValue }
                placeholder='Escribe algo'
                onChange={ handleInputChange }
            />
        </form>
  )};

  AddCategory.propTypes = {

    setCategories: PropTypes.func.isRequired
  }
