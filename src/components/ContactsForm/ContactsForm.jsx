import React, {useState} from "react";
import css from './Contacts.module.css';

export function ContactsForm ({onSubmit}) {
     const [name, setName] = useState('');
     const [number, setNumber] = useState('');

   const hendleChange = event =>{
     switch(event.target.name){
      case 'name':
        setName(event.target.value);
        break;
        
      case 'number':
        setNumber(event.target.value);
        break;

        default:
          return;
     }  
    }

    const handleSubmit = event => {
        event.preventDefault(); 
        onSubmit(name, number);
        setName('');
        setNumber('');
    };


        return(
            <form onSubmit={handleSubmit} className={css.contacts__form}>
            <div className={css.input__name}> 
            <label > 
            <span>Name</span> 
             <input
               type="text"
               name='name'
               value={name}
               className={css.input}
               onChange={hendleChange}
               pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
               title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
               required
           />
             </label>
            </div>
            <div>
            <label>
            <span>Number</span> 
             <input
               type="tel"
               name='number'
               value={number}
               className={css.input}
               onChange={hendleChange}
               pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
               title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
               required
            />
             </label>
             <button type="submit" className={css.btn__add}>Add contact</button>
            </div>
            </form>

        )
    }