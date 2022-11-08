
import '../App.css';

const Form = (props) => {

    const handleSubmit = (e) => {
        e.preventDefault();
        if (props.pseudo === '') {
            alert("Merci de renseigner votre pseudo");
        }else {
            props.setIsOnline(true);
        }
    };

    const handleChange = (e) => {
        props.setPseudo(e.target.value);
    };


    return ( 

        <form action="submit">
            <input 
            onChange={handleChange} 
            type="text" 
            placeholder="Entrer votre pseudo"/>


            <input 
            onClick={handleSubmit} 
            type="submit" 
            value="Valider" 
            class="btn-submit" />

        </form>
     );
}
 
export default Form;