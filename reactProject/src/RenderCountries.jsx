import { useContext } from "react";
import { Context } from "./Context";
import './App.css'

function RenderCountry () {
    const context = useContext(Context);

    return (
        <div className="container">
        {context.map((c) => {
          return (
            <div key={c.name.common} className="countryContainer">
              <h1>{c.name.common}</h1>
              <h3>{c.capital}</h3>
              <img src={c.flags.svg} alt={c.name.common} className="images" />
            </div>
          )
        })}
      </div>
    )
}

export default RenderCountry;