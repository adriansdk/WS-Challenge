import React, { useState } from "react";
import { Bar } from "react-chartjs-2";

function Sales(props) {
  const [data] = useState({
    type: "verticalBar",
    labels: ["Janeiro", "Fevereiro", "Março", "Abril"],
    datasets: [
      {
        label: "Produção",
        data: props.user.sales.months,
        backgroundColor: "rgba(0, 0, 255, 0.4)",
        borderColor: "#007ACC",
        hoverBackgroundColor: "rgba(0,0,200,0.6)",
        borderWidth: 1
      }
    ]
  });

  return (
    <div className="sales box-card">
      <div className="container">
        <h3 className="spacing card-title">Sales</h3>
        <div>
          <Bar
            data={data}
            options={{
              maintainAspectRatio: false,
              minBarLenght: 30,
              responsive: false
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Sales;
