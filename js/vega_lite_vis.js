// Chart 1: Area Burnt by Wildfires - area chart with average line
vegaEmbed("#area_burnt_chart", "js/area_burnt.vg.json").catch(console.error);

// Chart 2: Number of Fires - annotated bar with Black Summer highlight
vegaEmbed("#num_fires_chart", "js/num_fires.vg.json").catch(console.error);

// Chart 3: Choropleth Map - Area Burnt by State 2019-20
vegaEmbed("#choropleth_map", "js/choropleth_map.vg.json").catch(console.error);

// Chart 4: Symbol Map - placeholder until data ready
// vegaEmbed("#symbol_map", "js/symbol_map.vg.json").catch(console.error);

// Chart 5: Temperature Anomaly Over Time - diverging bar
vegaEmbed("#temp_anomaly_chart", "js/temp_anomaly.vg.json").catch(console.error);

// Chart 6: Temperature vs Number of Fires - scatter combining BOM + num_fires
vegaEmbed("#temp_vs_fire_scatter", "js/temp_firescatter.vg.json").catch(console.error);

// Chart 7: CO2 Emissions from Wildfires - lollipop
vegaEmbed("#co2_chart", "js/co2_emissions.vg.json").catch(console.error);

// Chart 8: Worst Fire Seasons - horizontal bar ranked
vegaEmbed("#worst_seasons_chart", "js/worst_seasons.vg.json").catch(console.error);

// Chart 9: CO2 per Hectare - lollipop combining co2 + area data
vegaEmbed("#emissions_lollipop", "js/emissions_hectare.vg.json").catch(console.error);

// Chart 10: Rainfall Anomaly - placeholder until data ready
// vegaEmbed("#rainfall_chart", "js/rainfall_anomaly.vg.json").catch(console.error);