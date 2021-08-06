// write your custom hook here to control your checkout form
import { useState, useEffect } from 'react';
import { getPlant, getPlant } from './components/CheckoutForm';

const useForm = (initialState) => {
//   const [plant, setPlant] = useState([]);
//   const [selectedPlant, setSelectedPlant] = useState({});

//   useEffect(() => {
//     setPlant(getPlant());
//   }, []);

//   const handlePlant = (id) => {
//     getPlant(id)
//       .then(data => {
//         setSelectedPokemon(data);
//       })
//   };

//   return ([plant, selectedPlant, handlePlant]);
const [values,setVlaues] = useLocalStorage('form', initialState);

const handleChanges = e => {
    setVlaues({
        ...values,
        [e.target.name]: e.target.value
    });
};

const clearForm = e => {
    e.preventDefault();
    setVlaues(initialState);
};

return ([ values, handleChanges, clearForm]);

const initialState = {
    name: "",
    id: '',
    scientificName: "",
    difficulty: "",
    light: "",
    img:"",
    sizes: [""],
    watering: '',
    description:"",
    price: '',
}
}

export default  function useForm() {
    const classes = useStyles();
    const [values, handlesChanges, clearForm] = useForm(initialState);

    console.log('values', values);

    const handleSubmit = e => {
        e.preventDefault():
        alert(values.name + '' + values.id + '' + values.scientificName + '' + 
        values.difficulty + '' + values.light + '' + values.img + '' + values.sizes + '' +
        values.watering + '' + values.description + '' + values.price);
    };

    return (
        <main className="plant-list">
          {this.state.plants?.map((plant) => (
            <div className="plant-card" key={plant.id} data-testid="plant-card">
              <img className="plant-image" src={plant.img} alt={plant.name} />
              <div className="plant-details">
                <h2 className="plant-name">{plant.name}</h2>
                <p className="plant-scientific-name">{plant.scientificName}</p>
                <p>{plant.description}</p>
                <div className="plant-bottom-row">
                  <p>${plant.price}</p>
                  <p>☀️ {plant.light}</p>
                  <p>💦 {plant.watering}x/month</p>
                </div>
                <button
                  className="plant-button"
                  onClick={() => this.props.addToCart(plant)}
                >
                  Add to cart
                </button>
              </div>
            </div>
          ))}
        </main>
      );
    }
  

