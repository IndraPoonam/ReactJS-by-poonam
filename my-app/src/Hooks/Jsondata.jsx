import React from "react";
function Jsondata(props) {
  // console.log("data component", Object.keys(props.data[0]));
  return <>
    <table className="table">
      <thead>
        <tr>
          {Object.keys(props.data[0]).map((key) => (
            <th>{key}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {props.data.map((data) => (
          <tr>
            {Object.keys(data).map((key) => (
              typeof data[key] === "object" ?
                <td>
                  <select>
                    {Object.entries(data[key]).map(([x, y]) => (
                      <option>{x}==={typeof (y) === 'object' ? "aman" : y}</option>
                    ))}
                    {Object.entries(data[key]).map(([x, y]) => (
                      <option>{x}==={typeof (y) === 'object' ? "singh" : y}</option>
                    ))}
                  </select>
                  {/* <td>
                    <select>
                      {Object.entries(data[key],[key]).map(([x,y])=>(
                      <option>pppp</option>
                      ))}
                    </select>
                  </td> */}
                </td>
                :
                <td>{data[key]}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </>;
}
export default Jsondata;