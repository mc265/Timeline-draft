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
        data: [{
            name: 'FAO founded',
            label: '1945: 16 October FAO',
            description: ' founded as the first specialized agency within the United Nations '
        }, {
            name: 'UNECE timber committee',
            label: '1946:<a href="https://www.fao.org/3/v6585e/v6585e11.htm#the">The evolution of forestry statistics</a> ',
            description: ' <a href="https://www.fao.org/3/v6585e/v6585e11.htm#the">The evolution of forestry statistics</a>'
        }, {
            name: 'Yearbook publication',
            label: '1950:<a href="https://www.fao.org/3/am444b/am444b.pdf">first ever year</a>first ever year book',
            description: 'Forest product statistics website'
        }, {
            name: 'European timber statistics:1913_1950',
            label: '1953: UNECE website <a href="https://unece.org">publication</a>',
            description: '<a href = https://unece.org">publication</a>'},
            {
            name: 'Pulp and paper publication',
            label: '1968:First publication',
            description: 'forest product statistics website'
        }, {
            name: 'Recovered paper data',
            label: '1970:included in forest products',
            description: 'The story of forest product statistics: from numbers to information'},
                {
            name: 'Classifications of forest products',
            label: '1982:first ever classified',
            description: 'forest product statistics website'},
                {
            name: 'Capacity building on data collection',
            label: '1984:the beginning of data',
            description: 'The story of forest product statistics: from numbers to information'},
 
            {
            name: 'Intersecretariat Working Group(IWG) on forest products formed',
            label: '1994: <a href="https://www.fao.org/forestry/statistics/iwg/en/">forest product statistics</a>',
            description: ''},   
                 {
            name: 'Cross-laminated timber introduced',
            label: 'Early 1990s:new forest product'},
           {
            name: 'Forestry trade flows data collection began',
            label: '1997: <a href="https://www.fao.org/faostat/en/#data/FT">forestry trade flows</a>',
            description: ''},
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
            description: '' },
               {    name: 'non-wood forest products ',
            label: '2017: <a href="https://www.fao.org/documents/card/fr/c/a20a4c35-3bf5-4bc6-8e90-567f1468cc4f/">in international statistical classification systems</a>',
            description: '' },
               {    name: 'Use of SWS cloubased database ',
            label: '2019/20: <a href="https://www.fao.org/faostat/en/#data/FO">data in FAOSTAT</a>',
            description: '' },   {    name: '73 meter CLT building in Netherlands ',
            label: '2022: <a href="https://www.dezeen.com/2023/03/29/worlds-tallest-buildings-mass-timber-revolution/">The building</a>',
            description: '' 
        }]
    }]
});
