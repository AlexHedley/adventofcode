// https://codepen.io/jeroenheijmans/pen/GPomRd
// Copy-paste this from:
// - https://adventofcode.com/2018/leaderboard/self
// - https://adventofcode.com/2017/leaderboard/self
// - etc.
// Prefix with each year
const data = `
2024
Day       Time   Rank  Score       Time   Rank  Score
  7   17:09:49  46447      0          -      -      -
  3   03:45:10  35470      0   04:11:01  29630      0
  2   04:03:42  34878      0   05:50:22  30718      0
  1   04:54:21  27125      0   05:05:41  25719      0

2023
Day       Time   Rank  Score       Time   Rank  Score
 15   06:42:22  20695      0          -      -      -
  9   11:38:01  37608      0   11:50:04  36808      0
  8   06:28:20  32828      0          -      -      -
  6   04:28:52  29444      0   16:43:36  58806      0
  4   03:11:34  27589      0   13:54:01  57815      0
  3   12:00:41  52758      0   13:01:00  45637      0
  2   04:52:36  31625      0   09:02:57  50507      0
  1   03:20:42  28832      0   14:44:53  75212      0

2022
Day       Time    Rank  Score       Time    Rank  Score
 11       >24h   69699      0          -       -      -
 10   06:47:15   28950      0          -       -      -
  8   05:21:47   30878      0   12:22:51   43545      0
  6   06:20:07   53737      0   06:38:10   53559      0
  5   09:17:42   51283      0   10:08:05   52137      0
  4   10:42:19   69870      0   11:02:16   68662      0
  3   05:21:29   40036      0   10:30:12   60180      0
  2   18:10:58  112679      0   19:10:41  108373      0
  1   05:44:27   44780      0   05:59:38   43219      0

2021
Day       Time    Rank  Score       Time    Rank  Score
 25   02:46:50    3856      0          -       -      -
 22   11:16:06   12255      0          -       -      -
 21   08:40:36   13627      0          -       -      -
  9       >24h   68364      0          -       -      -
  8       >24h   74082      0          -       -      -
  7   10:36:35   44325      0   10:50:18   42232      0
  6       >24h   60407      0          -       -      -
  4       >24h   99236      0       >24h   93933      0
  3       >24h  108607      0          -       -      -
  2       >24h  129483      0       >24h  125148      0
  1       >24h  140178      0       >24h  143030      0

2020
Day       Time  Rank  Score       Time  Rank  Score

2019
Day       Time  Rank  Score       Time  Rank  Score

2018
Day       Time  Rank  Score       Time  Rank  Score

2017
Day       Time  Rank  Score       Time  Rank  Score

2016
Day       Time  Rank  Score       Time  Rank  Score

2015
Day       Time  Rank  Score       Time  Rank  Score
Day       Time   Rank  Score       Time   Rank  Score
  6       >24h  25466      0       >24h  24320      0
  5       >24h  31962      0          -      -      -
  4       >24h  32781      0          -      -      -
  3       >24h  39200      0       >24h  35913      0
  2       >24h  48016      0       >24h  43084      0
  1       >24h  75511      0       >24h  61052      0
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