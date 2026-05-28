// Chart 1: Area Burnt - area chart with average line
vegaEmbed("#area_burnt_chart", "js/area_burnt.vg.json").catch(console.error);

// Chart 2: Number of Fires - annotated bar
vegaEmbed("#num_fires_chart", "js/num_fires.vg.json").catch(console.error);

// Chart 3: Choropleth Map - area burnt by state 2019
vegaEmbed("#choropleth_map", "js/choropleth_map.vg.json").catch(console.error);

// Chart 4: Symbol Map - fire intensity by state 2019
vegaEmbed("#symbol_map", "js/symbol_map.vg.json").catch(console.error);

// Chart 5: Temperature Anomaly - diverging bar
vegaEmbed("#temp_anomaly_chart", "js/temp_anomaly.vg.json").catch(console.error);

// Chart 6: Temp vs Fires Scatter - combines BOM + num_fires
vegaEmbed("#temp_vs_fire_scatter", "js/temp_firescatter.vg.json").catch(console.error);

// Chart 7: CO2 Emissions Lollipop
vegaEmbed("#co2_chart", "js/co2_emissions.vg.json").catch(console.error);

// Chart 8: Worst Fire Seasons - horizontal bar
vegaEmbed("#worst_seasons_chart", "js/worst_seasons.vg.json").catch(console.error);

// Chart 9: State Comparison - grouped bar 2019 vs 2020
vegaEmbed("#state_comparison", "js/state_comparision.vg.json").catch(console.error);

// Chart 10: CO2 per Hectare Lollipop - combines co2 + area data
vegaEmbed("#emissions_lollipop", "js/emissions_hectare.vg.json").catch(console.error);