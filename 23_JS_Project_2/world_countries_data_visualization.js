const countriesData = [
    { country: "India", population: 1430000000 },
    { country: "China", population: 1410000000 },
    { country: "United States", population: 334000000 },
    { country: "Indonesia", population: 273523615 },
    { country: "Pakistan", population: 216565318 },
    { country: "Brazil", population: 212559417 },
    { country: "Nigeria", population: 202915907 },
    { country: "Bangladesh", population: 166303498 },
    { country: "Russia", population: 145934027 },
    { country: "Japan", population: 127817277 }
];

const languagesData = [
    { language: "Mandarin Chinese", speakers: 1090000000 },
    { language: "Spanish", speakers: 460000000 },
    { language: "English", speakers: 379000000 },
    { language: "Hindi", speakers: 341000000 },
    { language: "Arabic", speakers: 315000000 },
    { language: "Bengali", speakers: 228000000 },
    { language: "Portuguese", speakers: 221000000 },
    { language: "Russian", speakers: 154000000 },
    { language: "Japanese", speakers: 128000000 },
    { language: "Punjabi", speakers: 102000000 }
];

function createBarGraph(data, graphId, title) {
    const graph = document.getElementById(graphId);
    const titleElement = document.getElementById('graph-title');
    graph.innerHTML = ''; 
    titleElement.textContent = title; 
    
    const maxVal = Math.max(...data.map(item => item.population || item.speakers));
    data.forEach((item) => {
        const bar = document.createElement("div");
        bar.className = "bar";
        bar.style.width = `${(item.population || item.speakers) / maxVal * 100}%`;
        bar.innerHTML = `<span>${item.country || item.language}</span>${item.population || item.speakers}`;
        graph.appendChild(bar);
    });
}

document.getElementById('population-btn').addEventListener('click', () => {
    createBarGraph(countriesData, 'graph-container', '10 Most Populated Countries in the World');
});

document.getElementById('languages-btn').addEventListener('click', () => {
    createBarGraph(languagesData, 'graph-container', '10 Most Spoken Languages in the World');
});