/**
 * Created by cwnoumenngassamm on 02/03/2018.
 */
var cy = window.cy = cytoscape({
  container: document.getElementById('cy'),
  boxSelectionEnabled: false,
  autounselectify: true,
  style: [
    {
      selector: 'node',
      css: {
        'content': 'data(id)',
        'text-valign': 'top',
        'text-halign': 'top'
      }
    },
    {
      selector: '$node > node',
      css: {
        'padding-top': '5px',
        'padding-left': '5px',
        'padding-bottom': '5px',
        'padding-right': '5px',
        'text-valign': 'top',
        'text-halign': 'center'
      }
    },
    {
      selector: '#1',
      css: {
        'label' : 'DEI Retraite et solidarité',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222',
      }
    },
    {
      selector: '#phi',
      css: {
        'label' : 'Philippe xxxxxx',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#2',
      css: {
        'label' : 'DEI Retraite A',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'
      }
    },
    {
      selector: '#3',
      css: {
        'label' : 'DEI Retraite B',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'
      }
    },
    {
      selector: '#4',
      css: {
        'label' : 'PCI',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'
      }
    },
    {
      selector: '#5',
      css: {
        'label' : 'Paiements CRM, SRV',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'

      }
    },
    {
      selector: '#6',
      css: {
        'label' : 'Liquidation xxxxxxxx',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'

      }
    },
    {
      selector: '#7',
      css: {
        'label' : 'CDD xxxxxxx',
        'font-weight' : 'bold',
        'font-size' : '22px',
        'color' : '#B22222'

      }
    },
    {
      selector: '#fab',
      css: {
        'label' : 'Fabrice xxxxxx',
        'width' : '10px',
        'height' : '10px',
        'shape' : 'rectangle',
      }
    },
    {
      selector: '#chan',
      css: {
        'label' : 'Chantal xxxxxxxx',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#pau',
      css: {
        'label' : 'Paul sssaaa',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#pas',
      css: {
        'label' : 'Pascale zzzzzzzz',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#mat',
      css: {
        'label' : 'Mathieu zzzzzzz',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#ptk',
      css: {
        'label' : 'Patrick zzzzzzzz',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#gui',
      css: {
        'label' : 'Guillaume zzzzzzzz',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#bru',
      css: {
        'label' : 'Bruno zzzzzzzz',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#jo',
      css: {
        'label' : 'Joelle qqqqqqqqq',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#rd',
      css: {
        'label' : 'Rejane ddddddd',
      }
    },
    {
      selector: '#gl',
      css: {
        'label' : 'Gilles aaaaaaa',
      }
    },
    {
      selector: '#nad',
      css: {
        'label' : 'Nadege qqqqqqqq',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#lud',
      css: {
        'label' : 'Ludovic dddddd',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#cha',
      css: {
        'label' : 'Charles aaaaaaa',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#gue',
      css: {
        'label' : 'Guerinator sssaaaa',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#ahm',
      css: {
        'label' : 'Ahmed sssssssss',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#nat',
      css: {
        'label' : 'Nathalie aaaaaaaaaa',
        'background-image': '../img/logo.png',
        'background-fit' : 'contain'
      }
    },
    {
      selector: '#sl',
      css: {
        'label' : 'Slim eeeeeeee',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#cl',
      css: {
        'label' : 'Claire aaaaaaa',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#clm',
      css: {
        'label' : 'Clément errrrrr',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#rom',
      css: {
        'label' : 'Romain ccccccccc',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#chr',
      css: {
        'label' : 'Christine ccccccc',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#tho',
      css: {
        'label' : 'Thomas ssssssss',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#rem',
      css: {
        'label' : 'Remi dffffffff',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#max',
      css: {
        'label' : 'Maxime aaaaaaa',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: '#pat',
      css: {
        'label' : 'Patrice aaaaaaaaa',
        'width' : '10px',
        'height' : '10px'
      }
    },
    {
      selector: 'edge',
      css: {
        'target-arrow-shape': 'triangle'
      }
    },
    {
      selector: ':selected',
      css: {
        'background-color': 'black',
        'line-color': 'black',
        'target-arrow-color': 'black',
        'source-arrow-color': 'black'
      }
    }
  ],
  elements: {
    nodes: [
      { data: { id: 1, classes: 'top-right' } },
      { data: { id: 'phi', parent : 1} },
      { data: { id: 2}, renderedPosition: { x: 50, y: 85 }},
      { data: { id: 3}, renderedPosition: { x: -50, y: 585 } },
      {data : { id: 4 }},
      {data : {id: 5 }},
      {data : {id: 6 }},
      {data : {id: 7 }},

      { data: { id: 'fab', parent: 2 } },
      { data: { id: 'chan', parent: 2 } },

      { data: { id: 'pau'  } },
      { data: { id: 'tho', parent: 7 } },
      { data: { id: 'rem', parent: 7 } },
      { data: { id: 'max', parent: 7  } },
      { data: { id: 'pat', parent:7 } },

      { data: { id: 'pas' } },
      { data: { id: 'mat', parent: 6 } },
      { data: { id: 'ptk', parent: 6 } },
      { data: { id: 'gui', parent: 6 } },
      { data: { id: 'bru', parent: 6  } },


      { data: { id: 'jo', parent: 3 } },
      { data: { id: 'rd', parent: 3 } },
      { data: { id: 'gl',parent: 3 } },

      { data: { id: 'nad' } },
      { data: { id: 'cha', parent: 4 } },
      { data: { id: 'lud',parent: 4 } },
      { data: { id: 'gue',parent: 4 } },
      { data: { id: 'ahm',parent: 4 } },

      { data: { id: 'nat' } },
      { data: { id: 'sl',parent: 5 } },
      { data: { id: 'cl',parent: 5 } },
      { data: { id: 'clm',parent: 5 } },
      { data: { id: 'rom',parent: 5 } },
      { data: { id: 'chr',parent: 5 } }
    ],
    edges: [
      { data: { id: 12, source: 1, target: 2 } },
      { data: { id: 13, source: 1, target: 3 } },
      { data: { id: 'jord', source: 'rd', target: 'jo' } },
      { data: { id: 'jogl', source: 'jo', target: 'gl' } },
      { data: { id: 3+'nat', source: 3, target: 'nat' } },
      { data: { id: 3+'nad', source: 3, target: 'nad' } },
      { data: { id: 'fabchan', source: 'fab', target: 'chan' } },
      { data: { id: 2+'pas', source: 2, target: 'pas' } },
      { data: { id: 3+'pau', source: 2, target: 'pau' } },
      { data: { id: 'nad'+4, source: 'nad', target: 4} },
      { data: { id: 'nat'+5, source: 'nat', target: 5 } },
      { data: { id: 'pas'+6, source: 'pas', target: 6 } },
      { data: { id: 'pau'+7, source: 'pau', target: 7 } }
    ]
  },

  layout: {
    name: 'preset',
    padding: 9
  }
});
