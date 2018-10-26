function Heading(props) {
  return (
    <div className="heading">
      <h2>Welcome to React Transportation</h2>
      <p>The best place to buy vehicles online</p>
    </div>
  );
}

function Category(props) {
  return <h2 className="category-title">{props.title}</h2>;
}

function Checkbox(props) {
  return (
    <div>
      <h2 className="options">Choose Options</h2>
      <br></br>
      <label htmlFor="status">{props.label} </label>
      <input type="checkbox" id="status" name="status" value="status" />
    </div>
  );
}

function Select(props) {
  return (
    <div>
      <label htmlFor="options">{props.label} </label>
      <select>
        <option value="All">{props.options[0]}</option>
        <option value="Cars">{props.options[1]}</option>
        <option value="Trucks">{props.options[2]}</option>
        <option value="Convertibles">{props.options[3]}</option>
      </select>
    </div>
  );
}

function CarFilter(props) {
  let options = ["All", "Cars", "Trucks", "Convertibles"];
  return (
    <div className="filter">
      <Checkbox label="New Only" />
      <Select label="Select Type" options={options} />
    </div>
  );
}

function Vehicle(props) {
  return (
    <ul>
      <table>
        <tbody>
          <tr>
            <th>Year</th>
            <th>Model</th>
            <th>Price</th>
            <th>Buy</th>
          </tr>
          <tr />
          <tr>
            <td>{props.year}</td>
            <td>{props.model}</td>
            <td>${props.price}</td>
            <td>
              <button>Buy Now</button>
            </td>
          </tr>
          <tr />
        </tbody>
      </table>
    </ul>
  );
}

function ReactTransportation() {
  return (
    <div>
      <Heading />
      <CarFilter />
      <Category title="Cars" />
      <Vehicle year={2013} model="A" price={32000} />
      <Vehicle year={2011} model="B" price={4400} />
      <Vehicle year={2016} model="B" price={15500} />
      <Category title="Trucks" />
      <Vehicle year={2014} model="D" price={18000} />
      <Vehicle year={2013} model="E" price={5200} />
      <Category title="Convertibles" />
      <Vehicle year={2009} model="F" price={2000} />
      <Vehicle year={2010} model="G" price={6000} />
      <Vehicle year={2012} model="H" price={12500} />
      <Vehicle year={2017} model="M" price={50000} />
    </div>
  );
}

ReactDOM.render(
    <ReactTransportation />, 
    document.getElementById("root")
);
