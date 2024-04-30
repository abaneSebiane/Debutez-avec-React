import "../styles/PlantItem.css"
import Sun from "../assets/sun.svg"
import Water from "../assets/water.svg"


function CareScale({careType, scaleValue}){
    const range = [1, 2, 3]
    const scaleType = 
        careType === "light" ? (
            <img src={Sun} alt="sun-icon" />
        ) : (
            <img src={Water} alt="water-icon" />
        )
    
    const icons = [];
    for (let i = 0; i < range.length; i++) {
        if (scaleValue >= range[i]) {
        icons.push(<span key={i.toString()}>{scaleType}</span>);
        }
    }
    
    return <div onClick={() => CareScaleClick(careType, scaleValue)}>{icons}</div>;
}

function CareScaleClick(careType, scaleValue){
    const scaleType = careType === "light" ? "de lumière" : "d'arrosage"
    const amount = ["peu", "modérement", "beaucoup"]
    const value = "Cette plante a besoin de " + amount[scaleValue-1] + " " + scaleType
    alert(value)
}


function handleClick(plantName){
    alert(`Vous voulez achetez 1 ${plantName}? Très bon choix 😎`)
}



function PlantItem({ id, cover, name, water, light, price }){
    return(
        <li key={id} className="lmj-plant-item" >
            <span className="lmj-plant-item-price">{price}€</span>
            <img className='lmj-plant-item-cover' src={cover} alt={`${name} cover`} onClick={() => handleClick(name)} />
            {name}
            <div>
                {CareScale ({careType:"water", scaleValue:water})}
                {CareScale ({careType:"light", scaleValue:light})}
            </div>
        </li>
    )
}

export default PlantItem