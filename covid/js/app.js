const form = document.querySelector("form");
const heading = document.querySelector(".heading");
let linechart = document.getElementById("myChart").getContext("2d");
let barchart = document.getElementById("myBarChart").getContext("2d");

const api = async request => {
  const response = await fetch(request);

  if (response.status !== 200) {
    throw new Error("Status error");
  }

  const data = await response.json();
  return data;
};

let country = "bosnia and herzegovina";

api(`https://corona.lmao.ninja/v2/historical/${country}`)
  .then(data => {
    cases(data);
    return api(`https://corona.lmao.ninja/countries/${country}`);
  })
  .then(data => {
    console.log("country data", data);
    daily(data);
  })
  .catch(err => {
    console.log("Error while fetching data", err.message);
  });

form.addEventListener("submit", e => {
  e.preventDefault();
  country = form.search.value.trim();
  dates = [];
  casesDates = [];
  casesValues = [];
  recoveredValues = [];
  deathsValues = [];
  values = [];
  api(`https://corona.lmao.ninja/v2/historical/${country}`)
    .then(data => {
      chart.destroy();
      let text = `Statistika za ${country}`;
      heading.textContent = text;
      cases(data);
      return api(`https://corona.lmao.ninja/countries/${country}`);
    })
    .then(data => {
      console.log("country data", data);
      barChart.destroy();
      daily(data);
    })
    .catch(err => {
      console.log("Error while fetching data", err.message);
    });
});

let dates = [];
let casesDates = [];
let casesValues = [];
let recoveredValues = [];
let deathsValues = [];
let values = [];
let chart;
let barChart;

const cases = data => {
  const getCases = data => {
    const cases = data.timeline.cases;
    dates = Object.keys(cases);

    const filtered = {};
    dates.forEach(date => {
      if (cases[date] > 0) {
        filtered[date] = cases[date];
        casesValues.push(cases[date]);
      }
    });
    casesDates = Object.keys(filtered);

    chart = new Chart(linechart, {
      type: "line",

      data: {
        labels: casesDates,
        datasets: [
          {
            label: "Ukupan broj slučajeva",
            backgroundColor: "rgb(255, 99, 132)",
            borderColor: "rgb(255, 99, 132)",
            data: casesValues,
            fill: false
          },
          // {
          //   label: "Oporavljeni",
          //   backgroundColor: "rgb(26, 173, 156)",
          //   borderColor: "rgb(26, 173, 156)",
          //   data: recoveredValues,
          //   fill: false
          // },
          {
            label: "Preminuli",
            backgroundColor: "rgb(188, 188, 188)",
            borderColor: "rgb(188, 188, 188)",
            data: deathsValues,
            fill: false
          }
        ]
      },

      // Configuration options go here
      options: {
        responsive: true
      }
    });
  };
  getCases(data);

  // const getRecovered = data => {
  //   const recovered = data.timeline.recovered;

  //   casesDates.forEach(date => {
  //     recoveredValues.push(recovered[date]);
  //   });
  // };
  // getRecovered(data);

  const getDeaths = data => {
    const deaths = data.timeline.deaths;

    casesDates.forEach(date => {
      deathsValues.push(deaths[date]);
    });
  };
  getDeaths(data);
};

const daily = data => {
  const key = [
    "cases",
    "todayCases",
    "deaths",
    "todayDeaths",
    "recovered",
    "active",
    "critical"
  ];
  key.forEach(k => {
    values.push(data[k]);
  });
  barChart = new Chart(barchart, {
    type: "bar",
    data: {
      labels: [
        "slučajevi",
        "današnji slučajevi",
        "smrtni slučaevi",
        "današnji smrtni slučajevi",
        "oporavljeni",
        "aktivni",
        "u kritičnom stanju"
      ],
      datasets: [
        {
          label: "broj slučajeva",
          data: values,
          backgroundColor: [
            "rgba(255, 99, 132, 0.2)",
            "rgba(54, 162, 235, 0.2)",
            "rgba(137, 137, 137, 0.2)",
            "rgba(188, 188, 188, 0.2)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 0.2)",
            "rgba(255, 206, 86, 0.2)"
          ],
          borderColor: [
            "rgba(255, 99, 132, 1)",
            "rgba(54, 162, 235, 1)",
            "rgba(137, 137, 137, 1)",
            "rgba(188, 188, 188, 1)",
            "rgba(75, 192, 192, 0.2)",
            "rgba(255, 159, 64, 1)",
            "rgba(255, 206, 86, 1)"
          ],
          borderWidth: 1
        }
      ]
    },
    options: {
      scales: {
        yAxes: [
          {
            ticks: {
              beginAtZero: true
            }
          }
        ]
      }
    }
  });
};
