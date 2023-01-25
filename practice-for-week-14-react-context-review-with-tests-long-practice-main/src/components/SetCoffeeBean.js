import { useCoffeeContext } from '../context/CoffeeContext';


const SetCoffeeBean = ({ coffeeBeans }) => {
  const {coffeeBean, setCoffeeBeanId} = useCoffeeContext(coff);
  
  const handleChange = (e) => {
    setCoffeeBeanId(e.target.value)
  }

  return (
    <div className="set-coffee-bean">
      <h2>Select a Coffee Bean</h2>
      <select name="coffee-bean" onClick={handleChange}>
        {coffeeBeans.map(bean => (
          <option
            key={bean.id}
            value={bean.id}
          >
            {bean.name}
          </option>
        ))}
      </select>
    </div>
  );
}

export default SetCoffeeBean;