//#region Responsive Pie Chart
anychart.onDocumentReady(function() {

    let racialdata = [
        {x: "White", value: 201810},
        {x: "Two or More Races", value: 7749},
        {x: "Asian", value: 6440},
        {x: "Black or African American", value: 4266},
        {x: "American Indian and Alaska Native", value: 1178},
        {x: "Native Hawaiian and Other Pacific Islander", value: 342},
        {x: "Some Other Race", value: 4330}
    ];
  
    let piechart = anychart.pie();
    piechart.title("Racial Composition of Boise Population");
    piechart.data(racialdata);
    piechart.container('piechart-race-container');
    piechart.sort("desc");
    piechart.draw();


    let housedata = [
        ["Households", 82424],
        ["Families", 104391],
        ["Married Families", 119028],
        ["Non-Families", 50898]
    ];
  
    let housechart = anychart.column();
    housechart.title("Average Boise Household Income by Type");
    housechart.column(housedata);
    housechart.container('chart-house-container');
    housechart.labels(true);
    housechart.labels().fontColor("#00000");
    housechart.labels().format("${%value}");
    housechart.tooltip().format("Income: ${%value}");
    housechart.yAxis(0).title("Income ($)");
    housechart.draw();
  });

  let educationdata = [
    {x: "Less Than 9th Grade", value: 2154},
    {x: "9th to 12th Grade", value: 5314},
    {x: "High School Graduate", value: 32864},
    {x: "Some College", value: 35338},
    {x: "Associates Degree", value: 13882},
    {x: "Bachelors Degree", value: 41145},
    {x: "Graduate Degree", value: 22582}
];

let educationchart = anychart.pie();
educationchart.title("Education Attained (25+ years-old)");
educationchart.data(educationdata);
educationchart.container('piechart-education-container');
educationchart.sort("desc");
educationchart.draw();
//#endregion