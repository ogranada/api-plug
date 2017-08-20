
function ObjectId(id){
    return id;
}

let data = [
  {
    "_id": ObjectId("58fb65f004c44919eda99faf"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "position": 0,
    "schema": "com.hydra.homepage",
    "type": "page",
    "root": "true",
    "data": {
      "title": "Home Page"
    }
  },
  {
    "_id": ObjectId("595d89e3d855b1863d9de44d"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "position": 0,
    "schema": "com.hydra.banner",
    "type": "component",
    "root": "false",
    "data": {
      "elements": [
        {
          "title": "Hello World",
          "description": "this is a simple texto to show information about something...",
          "image": "http://lorempixel.com/1280/500/sports/1/"
        },
        {
          "title": "Bye World",
          "description": "this is other simple texto to show information about something...",
          "image": "http://lorempixel.com/1280/500/sports/2/"
        }
      ]
    },
    "parent": ObjectId("58fb65f004c44919eda99faf"),
    "place": "w",
    "placeSchema": "com.hydra.banner"
  },
  {
    "_id": ObjectId("595d89e3d855b1863d9de44e"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "position": 0,
    "schema": "com.hydra.richtext",
    "type": "component",
    "root": "false",
    "data": {
      "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href=\"http://loripsum.net/\" target=\"_blank\">Tum mihi Piso: Quid ergo?</a> Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. <a href=\"http://loripsum.net/\" target=\"_blank\">Deinde dolorem quem maximum?</a> Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. <mark>Honesta oratio, Socratica, Platonis etiam.</mark> Duo Reges: constructio interrete."
    },
    "parent": ObjectId("58fb65f004c44919eda99faf"),
    "place": "x",
    "placeSchema": "com.hydra.richtext"
  },
  {
    "_id": ObjectId("59710fee00b7746b117811e7"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "schema": "com.hydra.richtext",
    "place": "cnt",
    "placeSchema": "com.hydra.container",
    "position": 0,
    "type": "component",
    "root": "false",
    "data": {
      "text": "I'm 1 Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href=\"http://loripsum.net/\" target=\"_blank\">Tum mihi Piso: Quid ergo?</a> Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. <a href=\"http://loripsum.net/\" target=\"_blank\">Deinde dolorem quem maximum?</a> Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. <mark>Honesta oratio, Socratica, Platonis etiam.</mark> Duo Reges: constructio interrete."
    },
    "parent": ObjectId("58fb65f004c44919eda99faf")
  },
  {
    "_id": ObjectId("597172dc00b7746b117811e8"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "schema": "com.hydra.subtitle",
    "place": "cnt",
    "placeSchema": "com.hydra.container",
    "position": 1,
    "type": "component",
    "root": "false",
    "data": {
      "text": "Sample Item"
    },
    "parent": ObjectId("58fb65f004c44919eda99faf")
  },
  {
    "_id": ObjectId("597188ff00b7746b117811e9"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "schema": "com.hydra.richtext",
    "place": "cnt",
    "placeSchema": "com.hydra.container",
    "position": 2,
    "type": "component",
    "root": "false",
    "data": {
      "text": "I'm2 Lorem ipsum dolor sit amet, consectetur adipiscing elit. <a href=\"http://loripsum.net/\" target=\"_blank\">Tum mihi Piso: Quid ergo?</a> Id quaeris, inquam, in quo, utrum respondero, verses te huc atque illuc necesse est. <a href=\"http://loripsum.net/\" target=\"_blank\">Deinde dolorem quem maximum?</a> Hoc loco discipulos quaerere videtur, ut, qui asoti esse velint, philosophi ante fiant. <mark>Honesta oratio, Socratica, Platonis etiam.</mark> Duo Reges: constructio interrete."
    },
    "parent": ObjectId("58fb65f004c44919eda99faf")
  },
  {
    "_id": ObjectId("5972c7f600b7746b117811ea"),
    "url": "/index",
    "contextProcessors": [
      
    ],
    "schema": "com.hydra.richtext",
    "place": "different",
    "placeSchema": "com.hydra.container",
    "position": 2,
    "type": "component",
    "root": "false",
    "data": {
      "text": "<h3>Quod vestri non item.</h3> <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ergo, si semel tristior effectus est, hilara vita amissa est? <a href=\"http://loripsum.net/\" target=\"_blank\">Primum quid tu dicis breve?</a> Eadem nunc mea adversum te oratio est. Cur tantas regiones barbarorum pedibus obiit, tot maria transmisit? Duo Reges: constructio interrete. At, illa, ut vobis placet, partem quandam tuetur, reliquam deserit. <a href=\"http://loripsum.net/\" target=\"_blank\">Ratio quidem vestra sic cogit.</a>        Illa videamus, quae a te de amicitia dicta sunt. </p>"
    },
    "parent": ObjectId("58fb65f004c44919eda99faf")
  }
];

all = Object.keys(data.reduce(function(acc, elm){
    Object.assign(acc, elm)
    return acc;
}, {}));

console.log('all ->', all);
