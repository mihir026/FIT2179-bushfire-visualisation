
// Chart 1: Area Burnt by Wildfires
vegaEmbed("#area_burnt_chart", "js/area_burnt.vg.json").catch(console.error);

// Chart 2: Number of Fires
vegaEmbed("#num_fires_chart", "js/num_fires.vg.json").catch(console.error);

// Chart 3: Choropleth Map - Area Burnt by State
vegaEmbed("#choropleth_map", "js/choropleth_map.vg.json").catch(console.error);

// Chart 4: Symbol Map - Fire Hotspots
vegaEmbed("#symbol_map", "js/symbol_map.vg.json").catch(console.error);

// Chart 5: Temperature Anomaly Over Time
vegaEmbed("#temp_anomaly_chart", "js/temp_anomaly.vg.json").catch(console.error);

// Chart 6: Temperature vs Area Burnt (Scatter)
vegaEmbed("#temp_vs_fire_scatter", "js/temp_vs_fire.vg.json").catch(console.error);

// Chart 7: CO2 Emissions from Fires
vegaEmbed("#co2_chart", "js/co2_emissions.vg.json").catch(console.error);

// Chart 8: Worst Fire Seasons
vegaEmbed("#worst_seasons_chart", "js/worst_seasons.vg.json").catch(console.error);

// Chart 9: Emissions per Hectare (Lollipop)
vegaEmbed("#emissions_lollipop", "js/emissions_lollipop.vg.json").catch(console.error);

// Chart 10: Rainfall Anomaly
vegaEmbed("#rainfall_chart", "js/rainfall_anomaly.vg.json").catch(console.error);