import { useState } from 'react'
import '../styles/Footer.css'


function Footer(){
    const [inputValue, setInputValue] = useState('')

    function checker(){
        if (!inputValue.includes("@")){
            alert("Attention, il n'ya pas d'@ dans votre email")
        }
    }
    
    function handleInput(e){
        setInputValue(e.target.value)
    }
    
    

    return(
        <footer className="lmj-footer">
            <div className="lmj-footer-elem">
                Pour les passionné·e·s de plantes 🌿🌱🌵
            </div>
            <div className="lmj-footer-elem">Laissez-nous votre mail :</div>
            <input 
                placeholder='Entrez votre email'
                onChange={handleInput}
                onBlur={checker} 
                value={inputValue}
            />
        </footer>
    )
}

export default Footer