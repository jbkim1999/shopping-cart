import React, {useState, useEffect} from "react";

function Shopping(props) {

  const [champions, setChampions] = useState([]);

  const fetchChampions = async () => {
    const response = await fetch("https://ddragon.leagueoflegends.com/cdn/9.3.1/data/en_US/champion.json");
    const championsData = await response.json();

    const championsTemp = [];
    Object.keys(championsData.data).forEach(champion => {
      championsTemp.push(championsData.data[champion]);
    });// TIL 

    setChampions(championsTemp);
  };

  useEffect(() => {
    fetchChampions();
  }, []);

  const calculatePrice = (info) => {
    return (info.attack + info.defense + info.magic + info.difficulty) * 100;
  };
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const championAdded = {
      key : event.target.key.value,
      name : event.target.name.value,
      quantity : event.target.quantity.value,
      price : event.target.price.value,
    };
    props.handleSubmit(championAdded);
  };
  
  return(
    <div>
      {champions.map(champion => {
        return (
          <div key={champion.key} className="individual-champion">
            <h3>
                {champion.name}, {champion.title}
            </h3>
            <h4>
              {calculatePrice(champion.info)} RP
            </h4>
            <form onSubmit={handleSubmit}>
              <input type="hidden" name="key" value={champion.key} />
              <input type="hidden" name="name" value={champion.name} />
              <input type="hidden" name="price" value={calculatePrice(champion.info)} />
              <label htmlFor="quantity">Quantity: </label>
              <input type="number" id="quantity" name="quantity" min="1" required></input>
              <button>Add to Cart</button>
            </form>
          </div>
        );
      })}
    </div>
  );
};

export default Shopping;