function fetchData(stockSymbol) {
    $.ajax({
        url: `/api/stock/${stockSymbol}`,
        method: 'GET',
        success: function (data) {
            let trace = {
                x: data.dates,
                y: data.prices,
                type: 'scatter'
            };
            Plotly.newPlot('chart', [trace], { title: `${stockSymbol} Stock Performance` });
        }
    });
}

// Fetch data when a stock is selected or marker is clicked
marker.on('click', () => fetchData(location.stockSymbol));