Highcharts.chart('container', {
    chart: {
        type: 'timeline',
        inverted: true
    },
    title: {
        text: 'Timeline of Forest Products Statistics history'
    },
    subtitle: {
        text: 'Info source: <a href="https://www.fao.org/forestry/statistics/80577/en/">forest product statistics</a>'
    },
    
    tooltip: {
		useHTML: true
	},
    xAxis: {
        visible: false
    },
    scrollbar: {
            enabled: true
        },
    yAxis: {
        visible: false
    },
    series: [{
        data: [{
            name: 'FAO founded',
            label: '1945: <a href="https://www.fao.org/home/en">16 October FAO</a>',
            description: ' <img src="https://upload.wikimedia.org/wikipedia/commons/d/db/FAO_logo.svg" alt="test"/> '
        }, {
            name: 'UNECE timber committee',
            label: '1946:<a href="https://www.fao.org/3/v6585e/v6585e11.htm#the">The evolution of forestry statistics</a> ',
            description: ' <img src="https://www.fao.org/3/v6585e/V6585e33.jpg" alt="test"/>'
       
        }, {
            name: 'Yearbook publication',
            label: '1950:<a href="https://www.fao.org/3/am444b/am444b.pdf">first ever year</a>',
            description: '<img src="https://www.fao.org/3/AM447B/am447b00.jpg" alt="test"/>'
        }, {
            name: 'European timber statistics:1913_1950',
            label: '1953:<a href="https://unece.org/DAM/timber/docs/etts/53.II.E.5_ENG_1953_European_Timber_Statistics_1913-1950.pdf">UNECE website publication</a>',
            description: '<img src="https://unece.org/sites/default/files/styles/max_2600x2600/public/datastore/migrated_files/publications/DAM/timber/docs/etts/European_Timber_Statistics_1913-1950-cover.JPG?itok=T-KaXAWp" alt="test"/>'},
            {
            name: 'Pulp and paper publication',
            label: '1968:First publication',
            description: '<img src="https://m.media-amazon.com/images/I/41W5AMZjQjL._SX350_BO1,204,203,200_.jpg" alt="test"/>'
        }, {
            name: 'Recovered paper data',
            label: '1970:included in forest products',
            description: '<img src="https://www.recyclingtoday.com/remote/aHR0cHM6Ly9jZG4uZ2llLm5ldC9maWxldXBsb2Fkcy9pbWFnZS8yMDIyLzExLzIyL2Fkb2Jlc3RvY2sxMTk0NTYwMDcuanBn.EIslEgTh8M8.jpg?w=948&h=533&mode=pad&anchor=middlecenter&scale=both&bgcolor=F0F1F2"alt="test"/>'},
                {
            name: 'Classifications of forest products',
            label: '1982:<a href="https://data.apps.fao.org/catalog/dataset/classification-of-forest-products">first ever classified</a>',
            description: '<img src="https://m.media-amazon.com/images/I/41k2jtHb06L._SX350_BO1,204,203,200_.jpg" alt="test"/>'},
                {
            name: 'Capacity building on data collection',
            label: '1984:the beginning of data',
            description: '<img src="https://www.fao.org/uploads/pics/Data_collection.jpg" alt="test"/>'},
 
            {
            name: 'Intersecretariat Working Group(IWG) on forest products formed',
            label: '1994: <a href="https://www.fao.org/forestry/statistics/iwg/en/">forest product statistics</a>',
            description: '<img src="https://www.fao.org/forestry/36245-093a2c444d82f187de60e357bf2827928.jpg" alt="test"/>'},   
                 {
            name: 'Cross-laminated timber introduced',
            label: 'Early 1990s:new forest product',
                    description: '<img src="https://cascadebusnews.com/wp-content/uploads/2022/07/Morrison-Maierle.jpg" alt="test"/>'
                 },
           {
            name: 'Forestry trade flows data collection began',
            label: '1997: <a href="https://www.fao.org/faostat/en/#data/FT">forestry trade flows</a>',
            description: '<img src="https://www.globalwoodmarketsinfo.com/wp-content/uploads/2017/01/loading_forestry_1.jpg" alt="test"/>'},
                {    name: 'Launch of JFSQ',
            label: '1997: <a href="https://unece.org/forests/jfsq">Joint Forest Sector Questionnaire</a>',
            description: ''},
                      {    name: 'Forest Product Statistics  website in 6 languages',
            label: '2012: <a href="https://www.fao.org/forestry/statistics/en/">The FPS website</a>',
            description: ''   },
              {    name: 'Facts and figures published ',
            label: '2014: <a href="https://www.fao.org/forestry/statistics/en/">The FPS website</a>',
            description: '' },
               {    name: '53 meter building of engineered wood built',
            label: '2017: <a href="https://www.dezeen.com/2023/03/29/worlds-tallest-buildings-mass-timber-revolution/ ">The building</a>',
            description: '<img src="https://static.dezeen.com/uploads/2022/08/ascent-tower-by-korb-associates-architects-milwaukee_dezeen_2364_col_hero-1.jpg"alt="test"/>',
            useHTML: true,
      url: 'https://www.google.com/'},
               {    name: 'non-wood forest products ',
            label: '2017: <a href="https://www.fao.org/3/i6731e/i6731e.pdf">in international statistical classification systems</a>',
            description: '' },
               {    name: 'Use of SWS cloubased database ',
            label: '2019/20: <a href="https://www.fao.org/faostat/en/#data/FO">data in FAOSTAT</a>',
            description: '' },   {    name: '73 meter CLT building in Netherlands ',
            label: '2022: <a href="https://www.dezeen.com/2023/03/29/worlds-tallest-buildings-mass-timber-revolution/">The building</a>',
            description: '' 
        }]
    }]
});

