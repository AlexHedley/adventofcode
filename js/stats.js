// https://codepen.io/jeroenheijmans/pen/GPomRd
// Copy-paste this from:
// - https://adventofcode.com/2018/leaderboard/self
// - https://adventofcode.com/2017/leaderboard/self
// - etc.
// Prefix with each year
const data = `
2022
Day       Time  Rank  Score       Time  Rank  Score
  1   00:54:22   418      0   02:45:59  1072      0

2021
Day       Time  Rank  Score       Time  Rank  Score
  1   01:58:59  1883      0   03:07:04  1668      0

2020
Day       Time  Rank  Score       Time  Rank  Score
  1   00:35:28  1490      0   01:34:41  1638      0

2019
Day       Time  Rank  Score       Time  Rank  Score
  1   00:59:00  1129      0   01:06:23  1228      0

2018
Day       Time  Rank  Score       Time  Rank  Score
  1   00:58:46  1105      0   01:27:19   775      0

2017
Day       Time  Rank  Score       Time  Rank  Score
  1   00:25:34   794      0   00:30:36   584      0

2016
Day       Time  Rank  Score       Time  Rank  Score
  1   00:20:10   468      0   01:51:39  1254      0

2015
Day       Time  Rank  Score       Time  Rank  Score
  1   02:10:54  2207      0   02:39:06  2188      0
`;

const lines = data
  .split(/\r?\n/)
  .filter(l => !!l.trim());

const datasets = [];
const colors1 = ["#3dd", "#33d", "#d33", "#3d3", "#3dd", "#ddd"];
const colors2 = ["rgba(30, 220, 220, 0.15)", "rgba(30, 30, 220, 0.15)", "rgba(220, 30, 30, 0.15)", "rgba(30, 220, 30, 0.15)", "rgba(30, 220, 220, 0.15)", "rgba(220, 220, 220, 0.15)"];

for (var i = 0; i < lines.length; i++) {

  if (lines[i].length === 4) {
    datasets.push({ 
      label: lines[i] + ' rank for star 2',
      borderColor: colors1[Number(lines[i]) - 2015],
      pointBackgroundColor: colors1[Number(lines[i]) - 2015],
      borderWidth: 2,
      backgroundColor: colors2[Number(lines[i]) - 2015],
      showLine: true,
      lineTension: 0,
      data: [],
    });
  } else if (lines[i].match(/\d+/)) {
    const cols = lines[i].match(/\S+/g);
    datasets[datasets.length-1].data.push({ x: Number(cols[0]), y: Number(cols[5]) });
  }
}

const canvas = document.getElementById('stats-container').appendChild(document.createElement("canvas"));
const chart = new Chart(canvas.getContext("2d"), {
  type: 'scatter',
  data: {
    datasets: datasets
  },
  options: {
    responsive: true,
    scales: { yAxes: [{ type: 'logarithmic' }] }
  }
});

console.log('Done!');