var world = "deaths_obesity.vg.json";
vegaEmbed('#obesity', world).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var line = "male_female_obesity.vg.json";
vegaEmbed('#prevalence', line).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var barbell = "physical_inactivity.vg.json";
vegaEmbed('#physical', barbell).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var stack = "area.vg.json";
vegaEmbed('#area', stack).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var pie = "pie.vg.json";
vegaEmbed('#simpie', pie).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);