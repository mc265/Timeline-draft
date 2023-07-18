Highcharts.chart('container', {
    chart: {
        type: 'timeline',
        inverted: true
    },
    colors: [
    '#4185F3',
    '#427CDD',
    '#406AB2',
    '#3E5A8E',
    '#3B4A68',
    '#363C46'
  ],
    title: {
        text: 'Timeline of FAO Forest Products Statistics'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.fao.org/forestry/statistics/80577/en/">forest product statistics</a>'
    },
    
    tooltip: {
		useHTML: true
	},
    xAxis: {
        visible: true
    },
    scrollbar: {
            enabled: true
        },
    yAxis: {
        visible: false
    },
    series: [{
        data: [ {
            name: 'Yearbook publication',
            label: '1948:<a href="https://www.fao.org/forestry/statistics/80570/en/">Yearbook of forest product statistics first published</a>',
            description: '<img src="https://www.fao.org/3/AM447B/am447b00.jpg" alt="test"/>'
        }, {
            name: 'European timber statistics:1913_1950',
            label: '1953:<a href="https://unece.org/DAM/timber/docs/etts/53.II.E.5_ENG_1953_European_Timber_Statistics_1913-1950.pdf">UNECE & FAO joint publication</a>',
            description: '<img src="https://unece.org/sites/default/files/styles/max_2600x2600/public/datastore/migrated_files/publications/DAM/timber/docs/etts/European_Timber_Statistics_1913-1950-cover.JPG?itok=T-KaXAWp" alt="test"/>'},
            {
            name: 'Pulp and paper publication',
            label: '1968:<a href="https://www.fao.org/forestry/statistics/80571/en/">first publication</a>',
            description: '<img src="https://m.media-amazon.com/images/I/41W5AMZjQjL._SX350_BO1,204,203,200_.jpg" alt="test"/>'
        }, 
                {
            name: 'Classification of forest products',
            label: '1982:<a href="https://data.apps.fao.org/catalog/dataset/classification-of-forest-products">First forest product classification published</a>',
            description: '<img src="https://m.media-amazon.com/images/I/41k2jtHb06L._SX350_BO1,204,203,200_.jpg" alt="test"/>'},
                {
            name: 'Capacity building on data collection ',
            label: '1984:wider reach of data',
            description: '<img src="https://www.fao.org/uploads/pics/Data_collection.jpg" alt="test"/>'},
 
            {
            name: 'Intersecretariat Working Group(IWG) on forest products formed',
            label: '1994: <a href="https://www.fao.org/forestry/statistics/iwg/en/">Coordination in data collection</a>',
            description: '<img src="https://www.fao.org/forestry/36245-093a2c444d82f187de60e357bf2827928.jpg" alt="test"/>'
           
},   
                 {
            name: 'Cross-laminated timber introduced',
            label: 'Early 1990s:new forest product',
                    description: '<img src="https://cascadebusnews.com/wp-content/uploads/2022/07/Morrison-Maierle.jpg" alt="test"/>'
                 },
                         {
            name: 'Forest product statistics available through FAOSTAT',
            label: '1995:data available on-line',
                    description: ''
                 },
          
                {    name: 'Launch of JFSQ',
            label: '1997: <a href="https://unece.org/forests/jfsq">Coordination in data collection</a>',
            description: ''},
                      {    name: 'Forest Product Statistics  website in 6 languages',
            label: '2012: <a href="https://www.fao.org/forestry/statistics/en/">Information available on-line</a>',
            description: ''   },
              {    name: 'Facts and figures published ',
            label: '2014: <a href="https://www.fao.org/forestry/statistics/en/">Publication of data trends</a>',
            description: '' },
               {    name: '53 meter building of engineered wood built',
            label: '2017: <a href="https://www.dezeen.com/2023/03/29/worlds-tallest-buildings-mass-timber-revolution/ ">The building</a>',
            description: '<img src="https://static.dezeen.com/uploads/2022/08/ascent-tower-by-korb-associates-architects-milwaukee_dezeen_2364_col_hero-1.jpg"alt="test"/>',
            useHTML: true,
      url: 'https://www.google.com/'},
               {    name: 'non-wood forest products in international statistical systems ',
            label: '2017: <a href="https://www.fao.org/3/i6731e/i6731e.pdf">publication to improve non-forest product data</a>',
            description: '' },
               {    name: 'Move to cloud-based data storage system ',
            label: '2020: <a href="https://www.fao.org/faostat/en/#data/FO">Innovation in data management</a>',
            description: '' },   {    name: 'FAO started collection of global data on CLT  ',
            label: '2023: <a href="https://www.dezeen.com/2023/03/29/worlds-tallest-buildings-mass-timber-revolution/">FAO CLT as a forest product</a>',
            description: ''
        }]
  
    }]

