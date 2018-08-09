import React, { Component } from 'react';
import './App.css';

import Thumbnail from './components/Thumbnail';

const heroes = [
  {
  "id": 1009742,
  "name": "Zzzax",
  "description": "A chain reaction in an atomic reactor, a result of a terrorist attack, accidentally created a force that absorbed the electrolytes of the nearby humans' brains, granting the explosion of energy a rudimentary sentience.  ",
  "modified": "2013-12-17T18:35:54-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/d0/4ced5ab9078c9",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009742",
  "comics": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009742/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37047",
        "name": "Hulk (2008) #36"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40023",
        "name": "Hulk (2008) #36 (I Am Captain America Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29541",
        "name": "Incredible Hulks (2009) #602 (SHS VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17890",
        "name": "West Coast Avengers (1985) #12"
      }
    ],
    "returned": 4
  },
  "series": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009742/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3374",
        "name": "Hulk (2008 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8842",
        "name": "Incredible Hulks (2009 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
        "name": "West Coast Avengers (1985 - 1989)"
      }
    ],
    "returned": 3
  },
  "stories": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009742/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38045",
        "name": "Cover #38045",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82130",
        "name": "Interior #82130",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90817",
        "name": "Interior #90817",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/94784",
        "name": "Incredible Hulks (2009) #602, SHS VARIANT",
        "type": "cover"
      }
    ],
    "returned": 4
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009742/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2682/zzzax?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Zzzax?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009742/zzzax?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011183,
  "name": "Zuras",
  "description": "Zuras was once the leader of the Eternals.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011183",
  "comics": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011183/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8813",
        "name": "Eternals (1976) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4322",
        "name": "Eternals by Jack Kirby (Hardcover)"
      }
    ],
    "returned": 2
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011183/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2017",
        "name": "Eternals (1976 - 1978)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1770",
        "name": "Eternals by Jack Kirby (2006)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011183/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/20525",
        "name": "[Revealed This Issue! The Power Of Olympia!]",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011183/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2681/zuras?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Zuras?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011183/zuras?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009741,
  "name": "Zombie (Simon Garth)",
  "description": "War hero Simon Garth was turned into a zombie by his secretary, Layla, who was also a voodoo priestess, after being killed by his gardener, Gyps.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4c003937c9ba4",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009741",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009741/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22118",
        "name": "Strange Tales (1998) #1"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009741/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5850",
        "name": "Strange Tales (1998)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009741/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49770",
        "name": "",
        "type": "recap"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009741/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2678/zombie?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Zombie_(Simon_Garth)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009741/zombie_simon_garth?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011127,
  "name": "Zodiak",
  "description": "Twelve demons merged with Norman Harrison, who, soon after, adopted the guise of Zodiac and used his abilities to harness powers based on the astrological Zodiac.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011127",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011127/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20360",
        "name": "Defenders (1972) #50"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011127/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
        "name": "Defenders (1972 - 1986)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011127/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43625",
        "name": "Story to Defenders #50",
        "type": "interiorStory"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011127/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2676/zodiak?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Zodiak?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011127/zodiak?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010780,
  "name": "Zemo",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010780",
  "comics": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010780/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7310",
        "name": "Avengers (1963) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7321",
        "name": "Avengers (1963) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6953",
        "name": "Avengers (1963) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7008",
        "name": "Avengers (1963) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7306",
        "name": "Avengers (1963) #56"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29225",
        "name": "Captain America (2004) #608"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29227",
        "name": "Captain America (2004) #610"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5638",
        "name": "Marvel Masterworks: The Avengers Vol. (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/87",
        "name": "Marvel Masterworks: The Avengers Vol. (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1213",
        "name": "Marvel Masterworks: The Avengers Vol. II - 2nd Edition (1st) (Trade Paperback)"
      }
    ],
    "returned": 10
  },
  "series": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010780/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
        "name": "Captain America (2004 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1708",
        "name": "Marvel Masterworks: The Avengers Vol. (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1390",
        "name": "Marvel Masterworks: The Avengers Vol. (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/270",
        "name": "Marvel Masterworks: The Avengers Vol. II - 2nd Edition (1st) (2003)"
      }
    ],
    "returned": 5
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010780/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14441",
        "name": "Avengers (1963) #10 ",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14553",
        "name": "AVENGERS (1963) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15173",
        "name": "AVENGERS (1963) #56",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15181",
        "name": "Avengers (1963) #6 ",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15203",
        "name": "AVENGERS (1963) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/63641",
        "name": "CAPTAIN AMERICA (2004) #608",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/63645",
        "name": "CAPTAIN AMERICA (2004) #610",
        "type": "cover"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010780/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2665/zemo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010780/zemo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009739,
  "name": "Zeigeist",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009739",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009739/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009739/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009739/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009739/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2664/zeigeist?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009739/zeigeist?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011163,
  "name": "Zarek",
  "description": "Zarek is a member of the Kree race with no superhuman abilities or specialized weaponry, but as a blue Kree, he has enhanced strength, stamina and durability.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/90/4c002f38d0e05",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011163",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011163/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011163/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011163/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011163/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2659/zarek?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Zarek?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011163/zarek?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010716,
  "name": "Zarda",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010716",
  "comics": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010716/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3908",
        "name": "Squadron Supreme (2006) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5425",
        "name": "Squadron Supreme Vol. 1: The Pre-War Years Premiere (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30602",
        "name": "Ultimate Comics New Ultimates (2010) #2"
      }
    ],
    "returned": 3
  },
  "series": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010716/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/944",
        "name": "Squadron Supreme (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1791",
        "name": "Squadron Supreme Vol. 1: The Pre-War Years Premiere (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9026",
        "name": "Ultimate Comics New Ultimates (2010 - 2011)"
      }
    ],
    "returned": 3
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010716/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5249",
        "name": "1 of 6 - The Pre-War Years",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/70030",
        "name": "Cover #70030",
        "type": "cover"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010716/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2658/zarda?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010716/zarda?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010841,
  "name": "Zaran",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010841",
  "comics": {
    "available": 12,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010841/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7739",
        "name": "Captain America (1968) #358"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7793",
        "name": "Captain America (1968) #412"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16064",
        "name": "Marvel Knights (2000) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16065",
        "name": "Marvel Knights (2000) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16066",
        "name": "Marvel Knights (2000) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16067",
        "name": "Marvel Knights (2000) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16057",
        "name": "Marvel Knights (2000) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16058",
        "name": "Marvel Knights (2000) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70874",
        "name": "Master of Kung Fu (1974) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70875",
        "name": "Master of Kung Fu (1974) #79"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70905",
        "name": "Master of Kung Fu (1974) #109"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17889",
        "name": "West Coast Avengers (1985) #11"
      }
    ],
    "returned": 12
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010841/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2576",
        "name": "Marvel Knights (2000 - 2001)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24265",
        "name": "Master of Kung Fu (1974 - 1979)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3630",
        "name": "West Coast Avengers (1985 - 1989)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010841/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17986",
        "name": "Captain America (1968) #358",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18144",
        "name": "Captain America (1968) #412",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18145",
        "name": "Disguise the Limit",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32756",
        "name": "Hero for Hire",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32758",
        "name": "The Long, Long Night",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32766",
        "name": "Cover #32766",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32767",
        "name": "Zaran",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32769",
        "name": "Family and Friends",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32771",
        "name": "The Reckoning",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32773",
        "name": "Strange Matters",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38043",
        "name": "Cover #38043",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/157725",
        "name": "cover from Master of Kung Fu (1974) #78",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/157727",
        "name": "cover from Master of Kung Fu (1974) #79",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/157787",
        "name": "cover from Master of Kung Fu (1974) #109",
        "type": "cover"
      }
    ],
    "returned": 14
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010841/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2656/zaran?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010841/zaran?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009738,
  "name": "Zaladane",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009738",
  "comics": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009738/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20577",
        "name": "Classic X-Men (1986) #22"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19804",
        "name": "Marvel Fanfare (1982) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19815",
        "name": "Marvel Fanfare (1982) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1587",
        "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12431",
        "name": "Uncanny X-Men (1963) #115"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12432",
        "name": "Uncanny X-Men (1963) #116"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13791",
        "name": "Uncanny X-Men (1963) #250"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13816",
        "name": "Uncanny X-Men (1963) #275"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4100",
        "name": "Uncanny X-Men Omnibus Vol. 1 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18349",
        "name": "What If? (1989) #46"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12358",
        "name": "X-Men Annual (1970) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1152",
        "name": "X-Men Legends Vol. 3: Art Adams Book I (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1185",
        "name": "X-Men Legends Vol. III: Arthur Adams Book I (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2314",
        "name": "X-Men Vignettes Vol. 2 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37491",
        "name": "X-Men: Earth's Mutant Heroes (2010) #1"
      }
    ],
    "returned": 15
  },
  "series": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009738/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3751",
        "name": "Classic X-Men (1986 - 1990)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1440",
        "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1723",
        "name": "Uncanny X-Men Omnibus Vol. 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3648",
        "name": "What If? (1989 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2100",
        "name": "X-Men Annual (1970 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/211",
        "name": "X-Men Legends Vol. 3: Art Adams Book I (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/242",
        "name": "X-Men Legends Vol. III: Arthur Adams Book I (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1460",
        "name": "X-Men Vignettes Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13492",
        "name": "X-Men: Earth's Mutant Heroes (2010 - 2011)"
      }
    ],
    "returned": 11
  },
  "stories": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009738/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15413",
        "name": "Visions of Death!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15415",
        "name": "To Save the Savage Land",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19852",
        "name": "Resurrection",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28009",
        "name": "Polaris No More!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28059",
        "name": "Cover #28059",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39086",
        "name": "What If Cable Destroyed  the X-Men",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42224",
        "name": "Into the Land of Death...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42307",
        "name": "Cover #42307",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42309",
        "name": "Lost Souls!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43995",
        "name": "Frontispiece",
        "type": "pinup"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82977",
        "name": "X-Men: Earth's Mutant Heroes #1",
        "type": "interiorStory"
      }
    ],
    "returned": 11
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009738/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
        "name": "Evolutionary War"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2654/zaladane?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009738/zaladane?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011277,
  "name": "Young X-Men",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011277",
  "comics": {
    "available": 18,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011277/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43294",
        "name": "Guardians of the Galaxy (2013) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48632",
        "name": "Guardians of the Galaxy (2013) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/51896",
        "name": "Guardians of the Galaxy (2013) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/51899",
        "name": "Guardians of the Galaxy (2013) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21041",
        "name": "Young X-Men (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21040",
        "name": "Young X-Men (2008) #1 (SILVESTRI VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21258",
        "name": "Young X-Men (2008) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21403",
        "name": "Young X-Men (2008) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21576",
        "name": "Young X-Men (2008) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21771",
        "name": "Young X-Men (2008) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22007",
        "name": "Young X-Men (2008) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22006",
        "name": "Young X-Men (2008) #6 (MONKEY VARIANT (1 FOR 10))"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22337",
        "name": "Young X-Men (2008) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22532",
        "name": "Young X-Men (2008) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22940",
        "name": "Young X-Men (2008) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23135",
        "name": "Young X-Men (2008) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23626",
        "name": "Young X-Men (2008) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23782",
        "name": "Young X-Men (2008) #12"
      }
    ],
    "returned": 18
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011277/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16410",
        "name": "Guardians of the Galaxy (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4443",
        "name": "Young X-Men (2008 - 2009)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 20,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011277/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/45875",
        "name": "1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/45877",
        "name": "1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/46950",
        "name": "2 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47259",
        "name": "3 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47559",
        "name": "4 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47853",
        "name": "5 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/48486",
        "name": "1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/48488",
        "name": "1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49178",
        "name": "2 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49945",
        "name": "3 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50930",
        "name": "4 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/51304",
        "name": "5 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52319",
        "name": "Interior #52319",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52773",
        "name": "Interior #52773",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/60095",
        "name": "Interior #60095",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/60097",
        "name": "Interior #60097",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96950",
        "name": "Cover #96950",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/109359",
        "name": "cover from Guardians of the Galaxy (2013) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115369",
        "name": "cover from Guardians of the Galaxy (2013) #24",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/115375",
        "name": "cover from Guardians of the Galaxy (2013) #25",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011277/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2645/young_x-men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Young_X-Men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011277/young_x-men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010698,
  "name": "Young Avengers",
  "description": "",
  "modified": "2013-01-22T14:13:43-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/c0/50fec602eed20",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010698",
  "comics": {
    "available": 58,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010698/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31134",
        "name": "Avengers: The Children's Crusade (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31136",
        "name": "Avengers: The Children's Crusade (2010) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31138",
        "name": "Avengers: The Children's Crusade (2010) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31140",
        "name": "Avengers: The Children's Crusade (2010) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31142",
        "name": "Avengers: The Children's Crusade (2010) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31144",
        "name": "Avengers: The Children's Crusade (2010) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31146",
        "name": "Avengers: The Children's Crusade (2010) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/34271",
        "name": "Avengers: The Children's Crusade (2010) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36583",
        "name": "Avengers: We Are the Avengers (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4313",
        "name": "Civil War (2006) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4500",
        "name": "Civil War: Young Avengers & Runaways (2006) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4821",
        "name": "Civil War: Young Avengers & Runaways (2006) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5114",
        "name": "Civil War: Young Avengers & Runaways (2006) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5267",
        "name": "Civil War: Young Avengers & Runaways (2006) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/34543",
        "name": "I Am an Avenger (2010) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23964",
        "name": "Mighty Avengers (2007) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/25972",
        "name": "Mighty Avengers (2007) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/25973",
        "name": "Mighty Avengers (2007) #29"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/25974",
        "name": "Mighty Avengers (2007) #30"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32938",
        "name": "Siege: Young Avengers (2010) #1"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010698/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9864",
        "name": "Avengers: The Children's Crusade (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/12973",
        "name": "Avengers: We Are the Avengers (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1067",
        "name": "Civil War (2006 - 2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1114",
        "name": "Civil War: Young Avengers & Runaways (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/11872",
        "name": "I Am an Avenger (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1866",
        "name": "Mighty Avengers (2007 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9765",
        "name": "Siege: Young Avengers (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3465",
        "name": "Young Avengers (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17647",
        "name": "Young Avengers (2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/756",
        "name": "Young Avengers (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22887",
        "name": "Young Avengers by Allan Heinberg & Jim Cheung: The Children's Crusade (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3424",
        "name": "Young Avengers Presents (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1661",
        "name": "Young Avengers Vol. 1: Sidekicks (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1250",
        "name": "Young Avengers Vol. 1: Sidekicks (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1955",
        "name": "Young Avengers Vol. 2: Family Matters (2007)"
      }
    ],
    "returned": 15
  },
  "stories": {
    "available": 61,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010698/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/480",
        "name": "Interior #480",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3503",
        "name": "1 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3504",
        "name": "2 of 6 - Sidekicks",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3505",
        "name": "2 of 6 - Sidekicks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3507",
        "name": "3 of 6 - Sidekicks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3508",
        "name": "4 of 6 - Sidekicks",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3509",
        "name": "4 of 6 - Sidekicks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3511",
        "name": "5 of 6 - Sidekicks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3512",
        "name": "6 of 6 - Sidekicks",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3513",
        "name": "6 of 6 - Sidekicks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3515",
        "name": "1 of 2",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3517",
        "name": "2 of 2",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3520",
        "name": "1 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3521",
        "name": "1 of 4",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3523",
        "name": "2 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3525",
        "name": "3 of 4 - Family Matters",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3526",
        "name": "4 of 4 - Family Matters",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3527",
        "name": "4 of 4 - Family Matters",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5876",
        "name": "2 of 7 - 7XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6141",
        "name": "1 of 4",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010698/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
        "name": "Siege"
      }
    ],
    "returned": 3
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1010698/young_avengers?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Young_Avengers?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010698/young_avengers?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010996,
  "name": "Yellowjacket (Rita DeMara)",
  "description": "Rita DeMara, hoping to show off her talent of engineering, stole a copy of the Yellowjacket costume from the Avengers Mansion.",
  "modified": "2014-06-11T15:06:35-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/f0/5398a8a4b8ca9",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010996",
  "comics": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010996/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7135",
        "name": "Avengers (1963) #264"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37633",
        "name": "Chaos War: Avengers (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37064",
        "name": "Chaos War: Dead Avengers (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37085",
        "name": "Chaos War: Dead Avengers (2010) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61801",
        "name": "Guardians of the Galaxy (1990) #34"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62868",
        "name": "Guardians of the Galaxy (1990) #51"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62873",
        "name": "Guardians of the Galaxy (1990) #56"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62877",
        "name": "Guardians of the Galaxy (1990) #60"
      }
    ],
    "returned": 8
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010996/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13527",
        "name": "Chaos War: Avengers (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13257",
        "name": "Chaos War: Dead Avengers (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/19019",
        "name": "Guardians of the Galaxy (1990 - 1994)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010996/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14809",
        "name": "Avengers (1963) #264",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82163",
        "name": "Cover #82163",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82164",
        "name": "Interior #82164",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82203",
        "name": "Chaos War: Dead Avengers (2010) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/136622",
        "name": "interior to Guardians of the Galaxy #34",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/140277",
        "name": "cover to Guardians of the Galaxy (1990) #51",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/140291",
        "name": "cover to Guardians of the Galaxy (1990) #56",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/140299",
        "name": "cover to Guardians of the Galaxy (1990) #60",
        "type": "cover"
      }
    ],
    "returned": 8
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010996/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
        "name": "Chaos War"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2636/yellowjacket?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Yellowjacket_%28Rita_DeMara%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010996/yellowjacket_rita_demara?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009736,
  "name": "Yellow Claw",
  "description": "The Yellow Claw is Plan Tzu, the 19th Century descendant of and rightful successor to the legendary warlord Temujin, a.k.a. Genghis Khan.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009736",
  "comics": {
    "available": 22,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009736/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7012",
        "name": "Avengers (1963) #153"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7069",
        "name": "Avengers (1963) #204"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7070",
        "name": "Avengers (1963) #205"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7546",
        "name": "Captain America (1968) #165"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9625",
        "name": "Iron Man (1968) #69"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9627",
        "name": "Iron Man (1968) #70"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19806",
        "name": "Marvel Fanfare (1982) #31"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19807",
        "name": "Marvel Fanfare (1982) #32"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2820",
        "name": "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2319",
        "name": "Marvel Masterworks: Doctor Strange Vol. (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10206",
        "name": "Marvel Premiere (1972) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27714",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27715",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23370",
        "name": "Nova (1976) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23371",
        "name": "Nova (1976) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23372",
        "name": "Nova (1976) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22120",
        "name": "Strange Tales (1994) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11085",
        "name": "Strange Tales (1951) #161"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11086",
        "name": "Strange Tales (1951) #162"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11087",
        "name": "Strange Tales (1951) #163"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009736/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
        "name": "Iron Man (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1468",
        "name": "Marvel Masterworks: Doctor Strange Vol. (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
        "name": "Marvel Premiere (1972 - 1981)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8852",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6679",
        "name": "Nova (1976 - 1979)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5851",
        "name": "Strange Tales (1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2076",
        "name": "Strange Tales (1951 - 1968)"
      }
    ],
    "returned": 10
  },
  "stories": {
    "available": 28,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009736/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10313",
        "name": "Cover #10313",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10314",
        "name": "The Second Doom",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10317",
        "name": "So Evil, the Night!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10319",
        "name": "Cover #10319",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10325",
        "name": "Cover #10325",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/10330",
        "name": "If Death Be My Destiny!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14561",
        "name": "AVENGERS (1963) #153",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14677",
        "name": "Avengers (1963) #204",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14678",
        "name": "Claws Across the Water!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14679",
        "name": "Avengers (1963) #205",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14680",
        "name": "Shadow of the Claw!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17585",
        "name": "Cover #17585",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19731",
        "name": "Confrontation!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19735",
        "name": "Who Shall Stop...Ultimo?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19913",
        "name": "[untitled]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42232",
        "name": "A Plague of Frogs",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42236",
        "name": "Cover #42236",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42238",
        "name": "Is This the Way the World Ends?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49795",
        "name": "Interior #49795",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/51813",
        "name": "Cover #51813",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009736/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2635/yellow_claw?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Yellow_Claw?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009736/yellow_claw?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009734,
  "name": "Xorn (Kuan-Yin Xorn)",
  "description": "Xorn, whose mutation manifested as a tiny, powerful star inside his head, was brainwashed into believing he was the reincarnation of Magneto.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/60/4c00394059727",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009734",
  "comics": {
    "available": 22,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009734/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/25999",
        "name": "Moon Knight Vol. 5: Down South (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26000",
        "name": "Moon Knight Vol. 5: Down South (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10329",
        "name": "New Mutants (2003) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1607",
        "name": "New Mutants Vol 1: Back to School (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1210",
        "name": "New Mutants Vol 1: Back to School (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5451",
        "name": "New X-Men (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14941",
        "name": "New X-Men (2001) #122"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14942",
        "name": "New X-Men (2001) #123"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14943",
        "name": "New X-Men (2001) #124"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14944",
        "name": "New X-Men (2001) #125"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14945",
        "name": "New X-Men (2001) #126"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14946",
        "name": "New X-Men (2001) #127"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14954",
        "name": "New X-Men (2001) #135"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14955",
        "name": "New X-Men (2001) #136"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14956",
        "name": "New X-Men (2001) #137"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14957",
        "name": "New X-Men (2001) #138"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14960",
        "name": "New X-Men (2001) #141"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14965",
        "name": "New X-Men (2001) #146"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2592",
        "name": "New X-Men Vol. 2: Imperial (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/994",
        "name": "New X-Men Vol. III: New Worlds (Trade Paperback)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009734/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8132",
        "name": "Moon Knight Vol. 5: Down South (2009 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8131",
        "name": "Moon Knight Vol. 5: Down South (2009 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/563",
        "name": "New Mutants (2003 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/267",
        "name": "New Mutants Vol 1: Back to School (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1186",
        "name": "New Mutants Vol 1: Back to School (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1807",
        "name": "New X-Men (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2281",
        "name": "New X-Men (2001 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1166",
        "name": "New X-Men Vol. 2: Imperial (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/56",
        "name": "New X-Men Vol. III: New Worlds (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23018",
        "name": "X-Men: Blue (2017 - Present)"
      }
    ],
    "returned": 11
  },
  "stories": {
    "available": 27,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009734/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26130",
        "name": "Day of the Atom Part Two: Immortals",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26132",
        "name": "Day of the Atom Part Three",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26133",
        "name": "Cover #26133",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26134",
        "name": "Day of the Atom Part Four: Forces of Nature",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26135",
        "name": "Cover #26135",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26138",
        "name": "Heroes and Villains Part Two: Treachery",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26140",
        "name": "Heroes and Villains Part Three: Foreshadowing",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26142",
        "name": "Heroes and Villains Part Four: Full Circle",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26262",
        "name": "Freaks & Geeks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28409",
        "name": "The Draco Part Two",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30425",
        "name": "The Prime of Miss Emma Frost",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30427",
        "name": "Riot at Xavier's",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30428",
        "name": "Cover #30428",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30429",
        "name": "when X is not X",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30430",
        "name": "Cover #30430",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30431",
        "name": "teaching children about fractals",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30451",
        "name": "Cover #30451",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30452",
        "name": "of living and dying",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30454",
        "name": "All Hell",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30457",
        "name": "Losers",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009734/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
        "name": "Secret Empire"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2629/xorn?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Xorn%20(Kuan-Yin%20Xorn)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009734/xorn_kuan-yin_xorn?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011094,
  "name": "Xavin",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4ce5a49743462",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011094",
  "comics": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011094/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66859",
        "name": "Runaways Vol. 10: Rock Zombies (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66321",
        "name": "Runaways Vol. 9: Dead Wrong (Trade Paperback)"
      }
    ],
    "returned": 2
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011094/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24187",
        "name": "Runaways Vol. 10: Rock Zombies (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24030",
        "name": "Runaways Vol. 9: Dead Wrong (2018)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011094/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/143785",
        "name": "cover from RUNAWAYS VOL. 9: DEAD WRONG TPB (2018) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/144873",
        "name": "cover from RUNAWAYS VOL. 10: ROCK ZOMBIES TPB (2018) #10",
        "type": "cover"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011094/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2626/xavin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Xavin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011094/xavin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009732,
  "name": "X.S.E.",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009732",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009732/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009732/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009732/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009732/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2620/xse.?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009732/xse.?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010806,
  "name": "X-Statix",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/40/4c003724ba21f",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010806",
  "comics": {
    "available": 26,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010806/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18292",
        "name": "Wolverine/Doop (2003) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13405",
        "name": "X-Statix (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13414",
        "name": "X-Statix (2002) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13415",
        "name": "X-Statix (2002) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13416",
        "name": "X-Statix (2002) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13417",
        "name": "X-Statix (2002) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13418",
        "name": "X-Statix (2002) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13419",
        "name": "X-Statix (2002) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13420",
        "name": "X-Statix (2002) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13421",
        "name": "X-Statix (2002) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/218",
        "name": "X-Statix (2002) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/272",
        "name": "X-Statix (2002) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/213",
        "name": "X-Statix (2002) #19"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/438",
        "name": "X-Statix (2002) #20"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/477",
        "name": "X-Statix (2002) #21"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/508",
        "name": "X-Statix (2002) #22"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/676",
        "name": "X-Statix (2002) #23"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/747",
        "name": "X-Statix (2002) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/578",
        "name": "X-Statix (2002) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/779",
        "name": "X-Statix (2002) #26"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010806/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3647",
        "name": "Wolverine/Doop (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/462",
        "name": "X-Statix (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1670",
        "name": "X-Statix Presents: Dead Girl (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1017",
        "name": "X-Statix Presents: Dead Girl (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/226",
        "name": "X-Statix Vol. 2: Good Guys & Bad Guys (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/321",
        "name": "X-Statix Vol. 3: Back from the Dead (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3320",
        "name": "X-Statix Vol. 4: X-Statix Vs. the Avengers (0000 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/153",
        "name": "X-Statix Vol. I (2003)"
      }
    ],
    "returned": 8
  },
  "stories": {
    "available": 26,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010806/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1017",
        "name": "Interior #1017",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1210",
        "name": "Interior #1210",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1301",
        "name": "Interior #1301",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1752",
        "name": "Interior #1752",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1754",
        "name": "Interior #1754",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1756",
        "name": "Interior #1756",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1758",
        "name": "Interior #1758",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1760",
        "name": "Interior #1760",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1762",
        "name": "Interior #1762",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1764",
        "name": "Interior #1764",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5688",
        "name": "1 of 5 - A Long Time Dead",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25958",
        "name": "Edie Sawyer Saved My Life",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25959",
        "name": "Code X",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25972",
        "name": "How the Super-Hero Business Works",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25978",
        "name": "That's Entertainment!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25982",
        "name": "Talking About Edie With Arnie",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25985",
        "name": "The Mysterious Fan Boy!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25987",
        "name": "[UNCANNY X-MEN Issue #416]",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25990",
        "name": "Good Guy, Bad Guy",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25994",
        "name": "It's Official!",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010806/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2616/x-statix?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Statix?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010806/x-statix?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010875,
  "name": "X-Ray (James Darnell)",
  "description": "James Darnell, along with his sister, was among the small group led by engineer Simon Utrecht to simulate the crash that gave the Fantastic Four their powers, and has remained with the U-Foes ever since.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/40/4c0035a250615",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010875",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010875/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010875/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010875/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010875/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2614/x-ray?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Ray_(James_Darnell)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010875/x-ray_james_darnell?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011109,
  "name": "X-Men (Ultimate)",
  "description": "",
  "modified": "2012-06-27T12:30:35-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/a0/4feb34f2017a0",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011109",
  "comics": {
    "available": 174,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011109/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3438",
        "name": "Ultimate Annuals Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26871",
        "name": "Ultimate Comics X (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31443",
        "name": "Ultimate Comics X (2010) #1 (3RD PRINTING VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31442",
        "name": "Ultimate Comics X (2010) #1 (SPECIAL VARIANT (COVER ONLY))"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/28714",
        "name": "Ultimate Comics X (2010) #1 (SPOILER LINE-UP VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/28114",
        "name": "Ultimate Comics X (2010) #1 (FOILOGRAM VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/28115",
        "name": "Ultimate Comics X (2010) #1 (VILLAIN VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30609",
        "name": "Ultimate Comics X (2010) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36043",
        "name": "Ultimate Comics X (2010) #2 (3RD PRINTING VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/34439",
        "name": "Ultimate Comics X (2010) #2 (2ND PRINTING VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30610",
        "name": "Ultimate Comics X (2010) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36834",
        "name": "Ultimate Comics X-Men (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41726",
        "name": "Ultimate Comics X-Men (2010) #1 (Bagley Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40430",
        "name": "Ultimate Comics X-Men (2010) #1 (Medina Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36831",
        "name": "Ultimate Comics X-Men (2010) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36830",
        "name": "Ultimate Comics X-Men (2010) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36833",
        "name": "Ultimate Comics X-Men (2010) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36832",
        "name": "Ultimate Comics X-Men (2010) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40482",
        "name": "Ultimate Comics X-Men (2010) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40459",
        "name": "Ultimate Comics X-Men (2010) #7"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 39,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011109/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1673",
        "name": "Ultimate Annuals Vol. 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8512",
        "name": "Ultimate Comics X (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13108",
        "name": "Ultimate Comics X-Men (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5743",
        "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1030",
        "name": "ULTIMATE FANTASTIC FOUR/X-MEN (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
        "name": "Ultimate Marvel Team-Up (2001 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/466",
        "name": "Ultimate Spider-Man (2000 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1426",
        "name": "Ultimate Spider-Man Vol. 15: Silver Sable (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1618",
        "name": "Ultimate Spider-Man Vol. 16: Deadpool (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2692",
        "name": "Ultimate Spider-Man Vol. 17: Clone Saga (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
        "name": "Ultimate X-Men (2000 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5106",
        "name": "Ultimate X-Men (Spanish Language Edition) (2000 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1055",
        "name": "Ultimate X-Men Annual (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13887",
        "name": "Ultimate X-Men MGC (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1758",
        "name": "Ultimate X-Men Ultimate Collection Book 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2719",
        "name": "Ultimate X-Men Ultimate Collection Book 2 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1223",
        "name": "Ultimate X-Men Vol. 10: Cry Wolf (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1408",
        "name": "Ultimate X-Men Vol. 11: The Most Dangerous Game (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1519",
        "name": "Ultimate X-Men Vol. 12: Hard Lessons (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1607",
        "name": "Ultimate X-Men Vol. 13: Magnetic North (2006)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 180,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011109/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/488",
        "name": "Ultimate X-Men/Fantastic Four (2005) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/489",
        "name": "Interior #489",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/531",
        "name": "Interior #531",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1374",
        "name": "ULTIMATE SPIDER-MAN (2000) #90",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1376",
        "name": "ULTIMATE SPIDER-MAN (2000) #91",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1378",
        "name": "ULTIMATE SPIDER-MAN (2000) #92",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1380",
        "name": "ULTIMATE SPIDER-MAN (2000) #93",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1382",
        "name": "ULTIMATE SPIDER-MAN (2000) #94",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1384",
        "name": "ULTIMATE SPIDER-MAN (2000) #95",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1403",
        "name": "7 of 8 - The Clone Saga",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1409",
        "name": "4 of 4 - Cry Wolf",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1421",
        "name": "Interior #1421",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1423",
        "name": "Interior #1423",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1425",
        "name": "Interior #1425",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1427",
        "name": "Interior #1427",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1429",
        "name": "Interior #1429",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1431",
        "name": "Interior #1431",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1433",
        "name": "Interior #1433",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1435",
        "name": "Interior #1435",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1437",
        "name": "BRIAN K. VAUGHAN & ANDY KUBERT – TOGETHER!  “CRY WOLF” PART 2 (OF 4)  It’s all about the Ragin’ Cajun as the mysterious Gambit g",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011109/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/71/x-men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Men_%28Ultimate%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011109/x-men_ultimate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009726,
  "name": "X-Men",
  "description": "Feared and hated by humans because they're different, the X-Men are heroic mutants, individuals born with special powers who've sworn to use their gifts to protect mutants as well as humans.",
  "modified": "2016-05-05T14:39:28-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/03/510c08f345938",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009726",
  "comics": {
    "available": 3082,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009726/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/50114",
        "name": "1602 (2003) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/377",
        "name": "1602 (2003) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/148",
        "name": "1602 (2003) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41270",
        "name": "Age of Apocalypse (2011) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17701",
        "name": "Age of Apocalypse: The Chosen (1995) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37996",
        "name": "Age of X: Alpha (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39284",
        "name": "Age of X: Alpha (2010) #1 (Conrad 2nd Printing Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38895",
        "name": "Age of X: Alpha (2010) #1 (2nd Printing Variant )"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37973",
        "name": "Age of X: Alpha (2010) #1 (Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38524",
        "name": "Age of X: Universe (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38523",
        "name": "Age of X: Universe (2011) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66661",
        "name": "Agents of Atlas: The Complete Collection Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60154",
        "name": "All-New Wolverine Vol. 3: Enemy of the State II (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43462",
        "name": "All-New X-Men (2012) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43467",
        "name": "All-New X-Men (2012) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43468",
        "name": "All-New X-Men (2012) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43469",
        "name": "All-New X-Men (2012) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43470",
        "name": "All-New X-Men (2012) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43471",
        "name": "All-New X-Men (2012) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43472",
        "name": "All-New X-Men (2012) #7"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 657,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009726/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
        "name": "1602 (2003 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
        "name": "Age of Apocalypse (2011 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3614",
        "name": "Age of Apocalypse: The Chosen (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13603",
        "name": "Age of X: Alpha (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13896",
        "name": "Age of X: Universe (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
        "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22105",
        "name": "All-New Wolverine Vol. 3: Enemy of the State II (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
        "name": "All-New X-Men (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20622",
        "name": "All-New X-Men (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22001",
        "name": "All-New X-Men Annual (2016)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22729",
        "name": "All-New X-Men: Inevitable Vol. 4 - IVX (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6666",
        "name": "Amazing Adventures (1970 - 1976)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22734",
        "name": "Amazing Spider-Man: Renew Your Vows Vol. 2 - The Venom Experiment (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3618",
        "name": "Amazing X-Men (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/18142",
        "name": "Amazing X-Men (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22997",
        "name": "America (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23262",
        "name": "Astonishing X-Men (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
        "name": "Astonishing X-Men (2004 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3619",
        "name": "Astonishing X-Men (1995)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 4645,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009726/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/472",
        "name": "Interior #472",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/478",
        "name": "Interior #478",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/492",
        "name": "Interior #492",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/495",
        "name": "Interior #495",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/501",
        "name": "Interior #501",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/503",
        "name": "Interior #503",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/515",
        "name": "Interior #515",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/594",
        "name": "X-MEN (2004) #164",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/595",
        "name": "4 of 4 - Heroes and Villains",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/603",
        "name": "Interior #603",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/609",
        "name": "Interior #609",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/611",
        "name": "Interior #611",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/613",
        "name": "Interior #613",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/614",
        "name": "X-MEN (2004) #159",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/615",
        "name": "Interior #615",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/616",
        "name": "X-MEN (2004) #157",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/617",
        "name": "Interior #617",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/618",
        "name": "X-MEN (2004) #158",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/619",
        "name": "Interior #619",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/620",
        "name": "X-MEN (2004) #160",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 40,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009726/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
        "name": "Age of Ultron"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
        "name": "Age of X"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
        "name": "Atlantis Attacks"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/320",
        "name": "Axis"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
        "name": "Chaos War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
        "name": "Days of Future Present"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
        "name": "Enemy of the State"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
        "name": "Evolutionary War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
        "name": "Fall of the Mutants"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
        "name": "Fatal Attractions"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
        "name": "House of M"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
        "name": "Inferno"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/317",
        "name": "Inhumanity"
      }
    ],
    "returned": 20
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1009726/x-men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009726/x-men?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009725,
  "name": "X-Man",
  "description": "A clone of Nathan Summers (Cable), Nate Grey was created in the \"Age of Apocalypse\" timeline by that timeline's Mr. Sinister for the sole purpose of destroying Apocalypse.",
  "modified": "2014-04-29T14:14:20-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/10/535febd73f84f",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009725",
  "comics": {
    "available": 108,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009725/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17701",
        "name": "Age of Apocalypse: The Chosen (1995) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5844",
        "name": "Avengers Assemble Vol. 4 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7403",
        "name": "Cable (1993) #29"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7405",
        "name": "Cable (1993) #30"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7406",
        "name": "Cable (1993) #31"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7457",
        "name": "Cable (1993) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67316",
        "name": "Cable (2017) #157"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66300",
        "name": "Cable & X-Force: Onslaught Rising (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65451",
        "name": "Cable: The Nemesis Contract (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40566",
        "name": "Journey Into Mystery (2011) #637"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40552",
        "name": "Journey Into Mystery (2011) #638"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10284",
        "name": "Maximum Security (2000) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40170",
        "name": "New Mutants (2009) #23 (2nd Printing Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36501",
        "name": "New Mutants (2009) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39280",
        "name": "New Mutants (2009) #25 (Adams Variant )"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40987",
        "name": "New Mutants (2009) #25 (X-Man Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36499",
        "name": "New Mutants (2009) #27"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40011",
        "name": "New Mutants (2009) #27 (I Am Captain America Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36505",
        "name": "New Mutants (2009) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36503",
        "name": "New Mutants (2009) #30"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 28,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009725/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3614",
        "name": "Age of Apocalypse: The Chosen (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
        "name": "Avengers Assemble Vol. 4 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
        "name": "Cable (1993 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22386",
        "name": "Cable (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
        "name": "Cable & X-Force: Onslaught Rising (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23809",
        "name": "Cable: The Nemesis Contract (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14764",
        "name": "Journey Into Mystery (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2049",
        "name": "Maximum Security (2000 - 2001)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7455",
        "name": "New Mutants (2009 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2057",
        "name": "Onslaught: Marvel Universe (1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
        "name": "Wolverine (1988 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
        "name": "X-Force (1991 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3643",
        "name": "X-Man (1995 - 2000)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3642",
        "name": "X-Man Annual (1996 - 1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
        "name": "X-Men (1991 - 2001)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4020",
        "name": "X-Men Vs. Apocalypse Vol. 1: The Twelve (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5761",
        "name": "X-Men Vs. Apocalypse Vol. 2: Ages of Apocalypse (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2101",
        "name": "X-Men: Omega (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2102",
        "name": "X-Men: Prime (1995)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 181,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009725/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24227",
        "name": "Next Issue: X-Man...Cable...'Nuff Said!",
        "type": "pinup"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24230",
        "name": "CABLE (1993) #30",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24233",
        "name": "CABLE (1993) #31",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24349",
        "name": "I Still Believe I Cannot Be Saved",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24493",
        "name": "Endings",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24495",
        "name": "Racing the Night",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26051",
        "name": "ONSLAUGHT: MARVEL UNIVERSE (1996) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26052",
        "name": "With Great Power ...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26235",
        "name": "Illegal Aliens",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28182",
        "name": "Dark Horizon",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28185",
        "name": "...Apocalypse Lives! (Onslaught Phase One)",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28295",
        "name": "I Am Not Now, Nor Have I Ever Been...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28300",
        "name": "The End of the World as We Know It",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28305",
        "name": "What Dreams May Come...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28671",
        "name": "Same as It Never Was",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29247",
        "name": "The Beginning of the End: Twilight of the Gods",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29342",
        "name": "The Gathering",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29345",
        "name": "The End of the World as We Know It Part 2",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29347",
        "name": "First and Last Part 2",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37495",
        "name": "X-Man",
        "type": ""
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009725/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
        "name": "X-Men: Regenesis"
      }
    ],
    "returned": 5
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2613/x-man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009725/x-man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009724,
  "name": "X-Force",
  "description": "",
  "modified": "2014-04-28T17:44:59-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/03/52603663b553d",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009724",
  "comics": {
    "available": 276,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009724/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41274",
        "name": "Age of Apocalypse (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67905",
        "name": "Cable (2017) #158"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66300",
        "name": "Cable & X-Force: Onslaught Rising (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/44761",
        "name": "Cable and X-Force (2012) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/44769",
        "name": "Cable and X-Force (2012) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45939",
        "name": "Cable and X-Force (2012) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45942",
        "name": "Cable and X-Force (2012) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45945",
        "name": "Cable and X-Force (2012) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45948",
        "name": "Cable and X-Force (2012) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45949",
        "name": "Cable and X-Force (2012) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45950",
        "name": "Cable and X-Force (2012) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45951",
        "name": "Cable and X-Force (2012) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45952",
        "name": "Cable and X-Force (2012) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45953",
        "name": "Cable and X-Force (2012) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45954",
        "name": "Cable and X-Force (2012) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45955",
        "name": "Cable and X-Force (2012) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45956",
        "name": "Cable and X-Force (2012) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45957",
        "name": "Cable and X-Force (2012) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45958",
        "name": "Cable and X-Force (2012) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48568",
        "name": "Cable and X-Force (2012) #17"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 38,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009724/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15331",
        "name": "Age of Apocalypse (2011 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22386",
        "name": "Cable (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
        "name": "Cable & X-Force: Onslaught Rising (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16907",
        "name": "Cable and X-Force (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5260",
        "name": "Counter X Vol. 1 (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5701",
        "name": "Deadpool (2008 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23832",
        "name": "Deadpool & X-Force Omnibus (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/18537",
        "name": "Deadpool Vs. X-Force (2014 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1635",
        "name": "Decimation: Generation M (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14151",
        "name": "Fear Itself: Uncanny X-Force (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2578",
        "name": "Gambit and the X-Ternals (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13508",
        "name": "Impossible Man (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13745",
        "name": "Marvel Point One (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8852",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9976",
        "name": "Uncanny X-Force (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3839",
        "name": "X-Force (2008 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/718",
        "name": "X-Force (2004 - 2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
        "name": "X-Force (1991 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1233",
        "name": "X-Force & Cable Vol. 1: The Legend Returns (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/19067",
        "name": "X-Force Annual (1992 - 1994)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 444,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009724/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2910",
        "name": "4 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2912",
        "name": "Interior #2912",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2914",
        "name": "Cable completes the assembly of his team, adding a few more familiar faces to his ranks. But when he reaches out to one former X",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2916",
        "name": "PART 3 (OF 6) Cable vs. Cannonball...and more on the mysterious Jon Spectre!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2918",
        "name": "5 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2920",
        "name": "6 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32418",
        "name": "1 of 1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32819",
        "name": "Some of Us Looking to the Stars",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32822",
        "name": "Where No External Has Gone Before",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32825",
        "name": "To the Limits of Infinity",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32828",
        "name": "The Maze",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38159",
        "name": "The Proudstar Brothers--Together Again For The First Time",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38160",
        "name": "Brothers Proudstar",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38161",
        "name": "X-Force (1991) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38162",
        "name": "A Force To Be Reckoned With",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38163",
        "name": "Cable Guide: Deadpool",
        "type": "profile"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38164",
        "name": "Cable Guide: Feral",
        "type": "profile"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38165",
        "name": "Cable Guide: Shatterstar",
        "type": "profile"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38166",
        "name": "Cable Guide: G.W. Bridge",
        "type": "profile"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38167",
        "name": "Weapon X vs. Stryfe",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009724/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
        "name": "Fatal Attractions"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/299",
        "name": "Messiah CompleX"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/298",
        "name": "Messiah War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
        "name": "X-Men: Regenesis"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/279",
        "name": "X-Men: Second Coming"
      }
    ],
    "returned": 8
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1009724/x-force?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Force?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009724/x-force?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010739,
  "name": "X-Factor Investigations",
  "description": "",
  "modified": "2013-11-20T17:26:52-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/80/528d35f020202",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010739",
  "comics": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010739/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39740",
        "name": "X-Factor (2005) #224.1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37946",
        "name": "X-Factor (2005) #227"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46760",
        "name": "X-Factor (2005) #251"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46761",
        "name": "X-Factor (2005) #252"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46762",
        "name": "X-Factor (2005) #253"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46763",
        "name": "X-Factor (2005) #254"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46764",
        "name": "X-Factor (2005) #255"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46765",
        "name": "X-Factor (2005) #256"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46766",
        "name": "X-Factor (2005) #257"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46767",
        "name": "X-Factor (2005) #258"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46768",
        "name": "X-Factor (2005) #259"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46769",
        "name": "X-Factor (2005) #260"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46770",
        "name": "X-Factor (2005) #261"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/46771",
        "name": "X-Factor (2005) #262"
      }
    ],
    "returned": 14
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010739/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1035",
        "name": "X-Factor (2005 - 2013)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 27,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010739/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90203",
        "name": "X-Factor (2005) #224.1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90274",
        "name": "Interior #90274",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90998",
        "name": "Interior #90998",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105128",
        "name": "X-Factor (2005) #251",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105129",
        "name": "story from X-Factor (2005) #251",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105130",
        "name": "X-Factor (2005) #252",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105131",
        "name": "story from X-Factor (2005) #252",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105132",
        "name": "X-Factor (2005) #253",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105133",
        "name": "story from X-Factor (2005) #253",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105134",
        "name": "X-Factor (2005) #254",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105135",
        "name": "story from X-Factor (2005) #254",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105136",
        "name": "X-Factor (2005) #255",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105137",
        "name": "story from X-Factor (2005) #255",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105138",
        "name": "X-Factor (2005) #256",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105139",
        "name": "story from X-Factor (2005) #256",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105140",
        "name": "X-Factor (2005) #257",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105141",
        "name": "story from X-Factor (2005) #257",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105142",
        "name": "X-Factor (2005) #258",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105143",
        "name": "story from X-Factor (2005) #258",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105144",
        "name": "X-Factor (2005) #259",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010739/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2610/x-factor_investigations?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Factor_Investigations?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010739/x-factor_investigations?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010738,
  "name": "X-Factor",
  "description": "",
  "modified": "2013-11-01T16:51:00-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/03/5274136b4372f",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010738",
  "comics": {
    "available": 182,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010738/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31144",
        "name": "Avengers: The Children's Crusade (2010) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33124",
        "name": "Civil War: X-Men (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39445",
        "name": "Essential X-Factor Vol. 2 (All-New Edition) (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39433",
        "name": "Essential X-Men Vol. 6 (All-New Edition) (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13060",
        "name": "Fantastic Four (1961) #249"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13062",
        "name": "Fantastic Four (1961) #250"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1290",
        "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15917",
        "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 7 TPB (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19872",
        "name": "Iron Man Annual (1970) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19827",
        "name": "Marvel Fanfare (1982) #50"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23932",
        "name": "Marvels: Eye of the Camera (2008) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30007",
        "name": "Nation X: X-Factor (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66304",
        "name": "New Mutants Epic Collection: Curse of the Valkyries (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48078",
        "name": "Power Pack (1984) #35"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3046",
        "name": "X-Factor (2005) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12174",
        "name": "X-Factor (1986) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12235",
        "name": "X-Factor (1986) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3150",
        "name": "X-Factor (2005) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3372",
        "name": "X-Factor (2005) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12246",
        "name": "X-Factor (1986) #3"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 33,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010738/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9864",
        "name": "Avengers: The Children's Crusade (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/10105",
        "name": "Civil War: X-Men (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14400",
        "name": "Essential X-Factor Vol. 2 (All-New Edition) (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14388",
        "name": "Essential X-Men Vol. 6 (All-New Edition) (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
        "name": "Fantastic Four (1961 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/341",
        "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 2 TPB (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2446",
        "name": "FANTASTIC FOUR VISIONARIES: JOHN BYRNE VOL. 7 TPB (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3723",
        "name": "Iron Man Annual (1970 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6282",
        "name": "Marvels: Eye of the Camera (2008 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9183",
        "name": "Nation X: X-Factor (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24023",
        "name": "New Mutants Epic Collection: Curse of the Valkyries (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15186",
        "name": "Power Pack (1984 - 1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1035",
        "name": "X-Factor (2005 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
        "name": "X-Factor Annual (1986 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/21360",
        "name": "X-Factor Epic Collection: Genesis & Apocalypse (2016)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9313",
        "name": "X-Factor Forever (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1581",
        "name": "X-Factor Visionaries: Peter David Vol. 1 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1915",
        "name": "X-Factor Visionaries: Peter David Vol. 2 (2007)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 236,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010738/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4905",
        "name": "X-FACTOR (2005) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4908",
        "name": "X-FACTOR (2005) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4910",
        "name": "X-FACTOR (2005) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4912",
        "name": "X-FACTOR (2005) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4914",
        "name": "X-FACTOR (2005) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5770",
        "name": "Cover #5770",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5772",
        "name": "1 of 1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5774",
        "name": "1 of 3 - Mutant Town Ghetto",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7813",
        "name": "X-FACTOR (2005) #16",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7815",
        "name": "X-FACTOR (2005) #17",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8274",
        "name": "X-FACTOR (2005) #17",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8276",
        "name": "X-FACTOR (2005) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8657",
        "name": "X-FACTOR (2005) #19",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12761",
        "name": "Fantastic Four (1961) #249",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12762",
        "name": "Man and Super-Man!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12765",
        "name": "Fantastic Four (1961) #250",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12766",
        "name": "X-Factor",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22083",
        "name": "X-FACTOR (1986) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22084",
        "name": "Third Genesis",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22094",
        "name": "Reunions Most Deadly!",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010738/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
        "name": "Atlantis Attacks"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
        "name": "Days of Future Present"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
        "name": "Evolutionary War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
        "name": "Fatal Attractions"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
        "name": "Inferno"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
        "name": "Kings of Pain"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/299",
        "name": "Messiah CompleX"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
        "name": "Mutant Massacre"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
        "name": "X-Men: Regenesis"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/279",
        "name": "X-Men: Second Coming"
      }
    ],
    "returned": 10
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1010738/x-factor?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Factor?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010738/x-factor?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009723,
  "name": "X-Cutioner",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009723",
  "comics": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009723/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23392",
        "name": "Punisher (1995) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13851",
        "name": "Uncanny X-Men (1963) #310"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47716",
        "name": "Uncanny X-Men Annual (1992) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37491",
        "name": "X-Men: Earth's Mutant Heroes (2010) #1"
      }
    ],
    "returned": 4
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009723/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6681",
        "name": "Punisher (1995 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16357",
        "name": "Uncanny X-Men Annual (1992 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13492",
        "name": "X-Men: Earth's Mutant Heroes (2010 - 2011)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009723/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28131",
        "name": "Uncanny X-Men (1963) #310",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28132",
        "name": "...Show Me The Way To Go Home...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52165",
        "name": "Total X-Tinction Part 1: Stalked by the X-Cutioner",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82977",
        "name": "X-Men: Earth's Mutant Heroes #1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/137384",
        "name": "cover to Uncanny X-Men Annual (1991) #17",
        "type": "cover"
      }
    ],
    "returned": 5
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009723/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2607/x-cutioner?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009723/x-cutioner?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011418,
  "name": "X-Babies",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/10/4c002e198a6f3",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011418",
  "comics": {
    "available": 12,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011418/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60722",
        "name": "Moon Girl and Devil Dinosaur (2015) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55287",
        "name": "Pint-Sized X-Babies: Murderama (1998) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27974",
        "name": "X-Babies (2009) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/28644",
        "name": "X-Babies (2009) #1 (ZOMBIE VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29843",
        "name": "X-Babies (2009) #1 (STAR COMIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27975",
        "name": "X-Babies (2009) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29844",
        "name": "X-Babies (2009) #2 (STAR COMIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27976",
        "name": "X-Babies (2009) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29845",
        "name": "X-Babies (2009) #3 (STAR COMIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27977",
        "name": "X-Babies (2009) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29846",
        "name": "X-Babies (2009) #4 (STAR COMIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55286",
        "name": "X-Babies Reborn (2000) #1"
      }
    ],
    "returned": 12
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011418/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20839",
        "name": "Moon Girl and Devil Dinosaur (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20427",
        "name": "Pint-Sized X-Babies: Murderama (1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8952",
        "name": "X-Babies (2009 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20428",
        "name": "X-Babies Reborn (2000)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 12,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011418/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/61193",
        "name": "Interior #61193",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/61195",
        "name": "Interior #61195",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/61197",
        "name": "Interior #61197",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/61199",
        "name": "Interior #61199",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/62484",
        "name": "Interior #62484",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64829",
        "name": "Interior #64829",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64831",
        "name": "Interior #64831",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64833",
        "name": "Interior #64833",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64835",
        "name": "Interior #64835",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/131913",
        "name": "cover from Moon Girl and Devil Dinosaur (2015) #24",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/135961",
        "name": "Cover to Pint-Sized X-Babies: Murderama (1998) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/139014",
        "name": "cover to X-babies: reborn",
        "type": "cover"
      }
    ],
    "returned": 12
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011418/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2603/x-babies?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-Babies?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011418/x-babies?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010804,
  "name": "X-51",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/f/d0/4c003727804b4",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010804",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010804/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010804/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010804/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010804/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2602/x-51?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Machine_Man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010804/x-51?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009722,
  "name": "X-23",
  "description": "A clone of the mutant Wolverine, X-23 was trained as a living weapon by a secretive government agency.  Now residing with the X-Men, she strives to recover her stolen youth and become a fully realized person.",
  "modified": "2016-02-11T11:38:11-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/a0/50fec5ed6f3de",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009722",
  "comics": {
    "available": 182,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009722/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56424",
        "name": "All-New Wolverine (2015) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56430",
        "name": "All-New Wolverine (2015) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56432",
        "name": "All-New Wolverine (2015) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56435",
        "name": "All-New Wolverine (2015) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56436",
        "name": "All-New Wolverine (2015) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56437",
        "name": "All-New Wolverine (2015) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56438",
        "name": "All-New Wolverine (2015) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56440",
        "name": "All-New Wolverine (2015) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56442",
        "name": "All-New Wolverine (2015) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56443",
        "name": "All-New Wolverine (2015) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56444",
        "name": "All-New Wolverine (2015) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56445",
        "name": "All-New Wolverine (2015) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56446",
        "name": "All-New Wolverine (2015) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56447",
        "name": "All-New Wolverine (2015) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60507",
        "name": "All-New Wolverine (2015) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60508",
        "name": "All-New Wolverine (2015) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60509",
        "name": "All-New Wolverine (2015) #19"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60510",
        "name": "All-New Wolverine (2015) #20"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60511",
        "name": "All-New Wolverine (2015) #21"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60512",
        "name": "All-New Wolverine (2015) #22"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 49,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009722/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
        "name": "All-New Wolverine (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/21853",
        "name": "All-New Wolverine Annual (2016 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22105",
        "name": "All-New Wolverine Vol. 3: Enemy of the State II (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22727",
        "name": "All-New Wolverine Vol. 4: Immune (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22728",
        "name": "All-New Wolverine Vol. 5: Orphans of X (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24394",
        "name": "All-New Wolverine Vol. 6: Old Woman Laura (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20622",
        "name": "All-New X-Men (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
        "name": "Avengers Academy (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16875",
        "name": "Avengers Arena (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4002",
        "name": "Cable (2008 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22386",
        "name": "Cable (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22480",
        "name": "Cable Vol. 2: The Newer Mutants (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/10110",
        "name": "Daken/X-23 Collision Premiere HC (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9368",
        "name": "Daken: Dark Wolverine (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23688",
        "name": "Edge of Venomverse (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23125",
        "name": "Edge of Venomverse (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13881",
        "name": "Fear Itself: The Home Front (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23684",
        "name": "Generations (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23279",
        "name": "Generations: Wolverine & All-New Wolverine (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20866",
        "name": "Ghost Rider (2016 - Present)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 196,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009722/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/737",
        "name": "2 of 5 - Savage Land",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/738",
        "name": "Uncanny X-Men (1963) #457",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/739",
        "name": "3 of 5 - Savage Land",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/740",
        "name": "Uncanny X-Men (1963) #458",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/741",
        "name": "4 of 5 - World's End",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/742",
        "name": "Uncanny X-Men (1963) #459",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/743",
        "name": "5 of 5 - World's End",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/744",
        "name": "Uncanny X-Men (1963) #460",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/745",
        "name": "1 of 2 - Mojo Rising",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3233",
        "name": "X-MEN: THE END - MEN AND X-MEN (2006) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3395",
        "name": "1 of 6 - Genesis (post HoM \"Lockdown\")",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3405",
        "name": "2 of 4 - Crusade",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3411",
        "name": "1 of 4 - Nimrod",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3421",
        "name": "1 of 4 - Factory X",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3423",
        "name": "2 of 4 - Factory X",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3595",
        "name": "1 of 6 - Innocence Lost",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3596",
        "name": "2 of 6 - Innocence Lost",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3597",
        "name": "2 of 6 - Innocence Lost",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3599",
        "name": "3 of 6 - Innocence Lost",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3600",
        "name": "4 of 6 - Innocence Lost",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009722/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/299",
        "name": "Messiah CompleX"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/298",
        "name": "Messiah War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/316",
        "name": "X-Men: Battle of the Atom"
      }
    ],
    "returned": 5
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1009722/x-23?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/X-23?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009722/x-23?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010883,
  "name": "Wrecking Crew",
  "description": "",
  "modified": "2013-11-20T17:26:57-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/60/528d35dc8db1d",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010883",
  "comics": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010883/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/374",
        "name": "Avengers (1998) #77"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/292",
        "name": "Avengers (1998) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/360",
        "name": "Avengers (1998) #79"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/429",
        "name": "Avengers (1998) #80"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62632",
        "name": "Code of Honor (1997) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/42738",
        "name": "Damage Control (1989) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20323",
        "name": "Defenders (1972) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20324",
        "name": "Defenders (1972) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31234",
        "name": "Hulk: Let the Battle Begin (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26035",
        "name": "New Avengers (2004) #56"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21733",
        "name": "Punisher War Journal (2006) #22"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21966",
        "name": "Punisher War Journal (2006) #23"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35053",
        "name": "Sentry: Fallen Sun (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18651",
        "name": "Thor (1998) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63997",
        "name": "Thor Epic Collection: In Mortal Flesh (Trade Paperback)"
      }
    ],
    "returned": 15
  },
  "series": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010883/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22990",
        "name": "Code of Honor (1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16297",
        "name": "Damage Control (1989 - 1990)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
        "name": "Defenders (1972 - 1986)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9316",
        "name": "Hulk: Let the Battle Begin (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
        "name": "New Avengers (2004 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1112",
        "name": "Punisher War Journal (2006 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/12348",
        "name": "Sentry: Fallen Sun (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/581",
        "name": "Thor (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23289",
        "name": "Thor Epic Collection: In Mortal Flesh (2017)"
      }
    ],
    "returned": 10
  },
  "stories": {
    "available": 16,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010883/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
        "name": "Avengers (1998) #80",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1649",
        "name": "Avengers (1998) #77",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
        "name": "Avengers (1998) #78",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
        "name": "Avengers (1998) #79",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43547",
        "name": "Power Play!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43548",
        "name": "Cover #43548",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47776",
        "name": "Punisher War Journal (2006) #22",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/48327",
        "name": "Punisher War Journal (2006) #23",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57357",
        "name": "New Avengers (2004) #56",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/71179",
        "name": "Hulk: Let The Battle Begin (2010) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/94919",
        "name": "Thor (1998) #28",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96679",
        "name": "Damage Control #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/106533",
        "name": "Sentry: Fallen Sun (2010) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/135859",
        "name": "interior to Sentry: Fallen Sun",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/136310",
        "name": "interior to Code of Honor (1997) #1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/138959",
        "name": "cover from THOR EPIC COLLECTION: IN MORTAL FLESH TPB (2017) #1",
        "type": "cover"
      }
    ],
    "returned": 16
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010883/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
        "name": "Siege"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2598/wrecking_crew?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wrecking_Crew?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010883/wrecking_crew?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010884,
  "name": "Wrecker",
  "description": "Dirk Garthwaite, the son of a construction worker and abusive father and husband, grew up filled with resentment and anger toward his father, who abandoned the family, and quickly turned to crime, in which he used a crowbar as a reminder of his father, destroying each place he robbed.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010884",
  "comics": {
    "available": 12,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010884/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17496",
        "name": "Avengers (1998) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17497",
        "name": "Avengers (1998) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17498",
        "name": "Avengers (1998) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17499",
        "name": "Avengers (1998) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1795",
        "name": "Avengers Assemble Vol. 2 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12970",
        "name": "Fantastic Four (1961) #168"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/25357",
        "name": "House of M: Masters of Evil (2009) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9496",
        "name": "Iron Man (1968) #251"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65941",
        "name": "Iron Man Epic Collection: Doom (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38182",
        "name": "Marvel Point One (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11759",
        "name": "Thor (1966) #431"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60486",
        "name": "THOR EPIC COLLECTION: THE WRATH OF ODIN TPB (Trade Paperback)"
      }
    ],
    "returned": 12
  },
  "series": {
    "available": 9,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010884/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
        "name": "Avengers Assemble Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2121",
        "name": "Fantastic Four (1961 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7859",
        "name": "House of M: Masters of Evil (2009 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
        "name": "Iron Man (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23915",
        "name": "Iron Man Epic Collection: Doom (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13745",
        "name": "Marvel Point One (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
        "name": "Thor (1966 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22361",
        "name": "THOR EPIC COLLECTION: THE WRATH OF ODIN TPB (2017)"
      }
    ],
    "returned": 9
  },
  "stories": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010884/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12558",
        "name": "Fantastic Four (1961) #168",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12559",
        "name": "Where Have All the Powers Gone?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17191",
        "name": "Requiem for the Wrecker",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37350",
        "name": "The Three-Fold Path",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37352",
        "name": "Mistaken Identity",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37354",
        "name": "Cage of Freedom",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37355",
        "name": "Avengers (1998) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37356",
        "name": "The Battle for Imperion City!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/55952",
        "name": "HOUSE OF M: MASTERS OF EVIL (2009) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66592",
        "name": "Iron Man 251 cover",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67067",
        "name": "Thor (1966) #431",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/85265",
        "name": "Interior From Marvel Point One Postcard",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/131441",
        "name": "cover from Thor Epic Collection: The Wrath of Odin (2017)",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/143002",
        "name": "cover from IRON MAN EPIC COLLECTION: DOOM TPB (2018) #15",
        "type": "cover"
      }
    ],
    "returned": 14
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010884/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2597/wrecker?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wrecker_%28Dirk_Garthwaite%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010884/wrecker?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010737,
  "name": "Wraith",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010737",
  "comics": {
    "available": 12,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010737/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35501",
        "name": "Amazing Spider-Man (1999) #663"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35515",
        "name": "Amazing Spider-Man (1999) #664"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17271",
        "name": "Annihilation: Conquest (2007) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17405",
        "name": "Annihilation: Conquest (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17645",
        "name": "Annihilation: Conquest (2007) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16000",
        "name": "Annihilation: Conquest - Wraith (2007) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16184",
        "name": "Annihilation: Conquest - Wraith (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16586",
        "name": "Annihilation: Conquest - Wraith (2007) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7113",
        "name": "Avengers (1963) #244"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16027",
        "name": "Marvel Masterworks: The Mighty Thor Vol. 6 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/63102",
        "name": "Spider-Man/Doctor Strange: The Way to Dusty Death (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11475",
        "name": "Thor (1966) #147"
      }
    ],
    "returned": 12
  },
  "series": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010737/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3061",
        "name": "Annihilation: Conquest (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2532",
        "name": "Annihilation: Conquest - Wraith (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2561",
        "name": "Marvel Masterworks: The Mighty Thor Vol. 6 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23105",
        "name": "Spider-Man/Doctor Strange: The Way to Dusty Death (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
        "name": "Thor (1966 - 1996)"
      }
    ],
    "returned": 7
  },
  "stories": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010737/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14765",
        "name": "Avengers (1963) #244",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/16562",
        "name": "THOR (1966) #147",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32673",
        "name": "Annihilation Conquest: Wraith (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33058",
        "name": " Annihilation Conquest: Wraith (2007) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33452",
        "name": "Annihilation Conquest: Wraith (2007) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36193",
        "name": "Annihilation: Conquest (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36194",
        "name": "Annihilation: Conquest (2007) #1 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36494",
        "name": "Annihilation: Conquest (2007) #2 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36934",
        "name": "Annihilation: Conquest (2007) #3 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/78509",
        "name": "Amazing Spider-Man (1999) #663",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/78510",
        "name": "Amazing Spider-Man (1999) #663 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/78535",
        "name": "Amazing Spider-Man (1999) #664",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/78536",
        "name": "Amazing Spider-Man (1999) #664 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/137108",
        "name": "cover from SPIDER-MAN/DOCTOR STRANGE: THE WAY TO DUSTY DEATH TPB (2017) #1",
        "type": "cover"
      }
    ],
    "returned": 14
  },
  "events": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010737/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/293",
        "name": "Annihilation: Conquest"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
        "name": "Spider-Island"
      }
    ],
    "returned": 2
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2596/wraith?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010737/wraith?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1015005,
  "name": "Wong (Ultimate)",
  "description": "",
  "modified": "2012-07-11T11:23:58-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1015005",
  "comics": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1015005/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15771",
        "name": "Ultimate Marvel Team-Up (2001) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15772",
        "name": "Ultimate Marvel Team-Up (2001) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5132",
        "name": "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)"
      }
    ],
    "returned": 3
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1015005/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
        "name": "Ultimate Marvel Team-Up (2001 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1823",
        "name": "Ultimate Marvel Team-Up Ultimate Collection (2006)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1015005/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32107",
        "name": "[untitled]",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32118",
        "name": "[untitled]",
        "type": "interiorStory"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1015005/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2595/wong?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1015005/wong_ultimate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009720,
  "name": "Wong",
  "description": "When Wong reached adulthood, the Ancient One sent him to the United States to his disciple, Doctor Stephen Strange, where has served Strange loyally and well for many years.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/30/4ce5a21096f17",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009720",
  "comics": {
    "available": 83,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009720/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37174",
        "name": "Avengers Annual (2012) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15653",
        "name": "Daredevil (1998) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/953",
        "name": "Daredevil Visionaries: Kevin Smith (Daredevil Vol. I: Guardian Devil) (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20266",
        "name": "Defenders (1972) #102"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60970",
        "name": "Doctor Strange (2015) #20"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65905",
        "name": "Doctor Strange (2015) #384"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60630",
        "name": "Doctor Strange Vol. 1 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60167",
        "name": "Doctor Strange Vol. 3: Blood in the Aether (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20168",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20179",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20190",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20212",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20223",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20234",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20256",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20169",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20170",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20171",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20172",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20174",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #15"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 25,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009720/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
        "name": "Avengers Annual (2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/449",
        "name": "Daredevil (1998 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/18",
        "name": "Daredevil Visionaries: Kevin Smith (Daredevil Vol. I: Guardian Devil) (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3743",
        "name": "Defenders (1972 - 1986)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3740",
        "name": "Doctor Strange (1974 - 1988)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20457",
        "name": "Doctor Strange (2015 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22408",
        "name": "Doctor Strange Vol. 1 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22116",
        "name": "Doctor Strange Vol. 3: Blood in the Aether (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1780",
        "name": "Doctor Strange Vs. Dracula: The Montesi Formula (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
        "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24016",
        "name": "Doctor Strange: Damnation (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
        "name": "Earth X (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
        "name": "Earth X (New (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3731",
        "name": "Giant-Size Defenders (1974)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5861",
        "name": "Longshot (1985 - 1986)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23051",
        "name": "Marvel Masterworks: Doctor Strange Vol. 8 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1712",
        "name": "Marvel Visionaries: Roy Thomas (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16451",
        "name": "New Avengers (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23622",
        "name": "Spider-Man/Doctor Strange: The Way to Dusty Death (1992)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 86,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009720/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17223",
        "name": "The Mephisto Waltz",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24923",
        "name": "Earth X Chapter Four",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24926",
        "name": "Earth X Chapter Five",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28710",
        "name": "The Hunted Part 4",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32029",
        "name": "Guardian Devil Part 5: Devil's Despair",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42411",
        "name": "To Steal the Sorcerer's Soul!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42507",
        "name": "The Light That Never Was",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42879",
        "name": "The Way They Were!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43042",
        "name": "Doctor Strange (1974) #14",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43043",
        "name": "The Tomb of Dr. Strange!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43044",
        "name": "Doctor Strange (1974) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43045",
        "name": "Where There's Smoke...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43046",
        "name": "Doctor Strange (1974) #16",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43047",
        "name": "Beelzebub on Parade!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43048",
        "name": "Dr. Strange (1974) #17",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43049",
        "name": "Utopia Rising!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43141",
        "name": "Gather My Disciples Before Me",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43199",
        "name": "Love is the Spell.  The Spell is Death!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43201",
        "name": "The Vampire Strikes Back",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43204",
        "name": "The Hobgoblin of Little Minds",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009720/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
        "name": "Infinity Gauntlet"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/219",
        "name": "Siege of Darkness"
      }
    ],
    "returned": 4
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2595/wong?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wong?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009720/wong?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009719,
  "name": "Wonder Man",
  "description": "Simon Williams agreed to undergo an experiment to give him superhuman powers, and Baron Zemo gave him the costumed guise of Wonder Man, warning Simon that he would die without further treatments from Zemo in order to ensure his loyalty, but Simon betrayed Zemo to the Avengers and ultimately joined their ranks.",
  "modified": "2011-08-09T14:58:20-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/40/4ce5a205a2322",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009719",
  "comics": {
    "available": 232,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009719/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
        "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
        "name": "Adam: Legend of the Blue Marvel (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
        "name": "Alpha Flight (1983) #127"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29195",
        "name": "Avengers (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33483",
        "name": "Avengers (2010) #1 (DJURDJEVIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33562",
        "name": "Avengers (2010) #1 (ROMITA SR. VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33572",
        "name": "Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33335",
        "name": "Avengers (2010) #1 (HEROIC AGE VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33336",
        "name": "Avengers (2010) #1 (ROMITA JR. VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
        "name": "Avengers (1998) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29205",
        "name": "Avengers (2010) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
        "name": "Avengers (1998) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
        "name": "Avengers (1998) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17534",
        "name": "Avengers (1998) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17545",
        "name": "Avengers (1998) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17556",
        "name": "Avengers (1998) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29210",
        "name": "Avengers (2010) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17761",
        "name": "Avengers (1996) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17567",
        "name": "Avengers (1998) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17762",
        "name": "Avengers (1996) #8"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 91,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009719/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
        "name": "Adam: Legend of the Blue Marvel (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
        "name": "Adam: Legend of the Blue Marvel (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
        "name": "Alpha Flight (1983 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
        "name": "Avengers (2016 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
        "name": "Avengers (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
        "name": "Avengers (1996 - 1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13320",
        "name": "Avengers Annual (2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
        "name": "Avengers Annual (1967 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
        "name": "Avengers Assemble (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
        "name": "Avengers Assemble (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
        "name": "Avengers Assemble Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
        "name": "Avengers Assemble Vol. 3 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
        "name": "Avengers Assemble Vol. 4 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2929",
        "name": "Avengers Assemble Vol. 5 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23504",
        "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 1 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2111",
        "name": "Avengers Forever (1998 - 2001)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/157",
        "name": "Avengers Legends Vol. 2: The Korvac Saga (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/93",
        "name": "Avengers Legends Vol. I: Avengers Forever (2002)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 279,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009719/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4185",
        "name": "2 of 4 - 4XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5555",
        "name": "1 of 5 xLS - My Fair Superhero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5557",
        "name": "2 of 5 xLS - My Fair Superhero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7778",
        "name": "3 of 5 xLS - My Fair Superhero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7780",
        "name": "4 of 5 xLS - My Fair Super Hero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7882",
        "name": "Mighty Avengers (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8237",
        "name": "Irredeemable Ant-Man (2006) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8248",
        "name": "4 of 5 xLS - My Fair Super Hero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8250",
        "name": "5 of 5 xLS - My Fair Super Hero",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8337",
        "name": "1 of 6 - Ultron",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8340",
        "name": "2 of 6 - Ultron",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8381",
        "name": "AVENGERS: THE INITIATIVE (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8383",
        "name": "1 of 6 - 6XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8682",
        "name": "3 of 6 - Ultron; THE INITIATIVE BANNER",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12863",
        "name": "Central City Does Not Answer!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14557",
        "name": "AVENGERS (1963) #151",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14559",
        "name": "AVENGERS (1963) #152",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14563",
        "name": "AVENGERS (1963) #154",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14565",
        "name": "AVENGERS (1963) #155",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14568",
        "name": "The Private War of Doctor Doom!",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009719/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/231",
        "name": "Armor Wars"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
        "name": "Evolutionary War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
        "name": "Infinity"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
        "name": "Initiative"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
        "name": "Secret Invasion"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
        "name": "Secret Wars II"
      }
    ],
    "returned": 8
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2594/wonder_man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wonder_Man_(Simon_Williams)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009719/wonder_man?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1017479,
  "name": "Wolverine (X-Men: Battle of the Atom)",
  "description": "",
  "modified": "2014-01-15T19:44:36-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/90/52d72b4c8376c",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017479",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017479/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017479/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017479/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017479/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1017479/wolverine_x-men_battle_of_the_atom?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011006,
  "name": "Wolverine (Ultimate)",
  "description": "Decades after participating in military airdrops with Captain America during WWII, James Howlett was abducted and experimented upon by a covert government unit, who bonded unbreakable adamantium to his skeleton, implanted three claws in each arm, dubbed him Weapon X and supposedly programmed him to kill any human he came into contact with.",
  "modified": "2014-03-05T13:58:52-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/03/531773b76840c",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011006",
  "comics": {
    "available": 51,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011006/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47131",
        "name": "Ultimate Comics Wolverine (2013) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47133",
        "name": "Ultimate Comics Wolverine (2013) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47134",
        "name": "Ultimate Comics Wolverine (2013) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/47135",
        "name": "Ultimate Comics Wolverine (2013) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36834",
        "name": "Ultimate Comics X-Men (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3458",
        "name": "Ultimate Extinction (2006) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4133",
        "name": "Ultimate Extinction (2006) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22043",
        "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3444",
        "name": "ULTIMATE FANTASTIC FOUR/X-MEN (2006) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13510",
        "name": "Ultimate Galactus Trilogy (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15785",
        "name": "Ultimate Marvel Team-Up (2001) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5132",
        "name": "Ultimate Marvel Team-Up Ultimate Collection (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5714",
        "name": "Ultimate Power (2006) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6128",
        "name": "Ultimate Power (2006) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16517",
        "name": "Ultimate Power (2006) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/876",
        "name": "Ultimate Spider-Man (2000) #66"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/899",
        "name": "Ultimate Spider-Man (2000) #67"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1754",
        "name": "Ultimate Spider-Man Vol. 12: Superstars (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3227",
        "name": "Ultimate Wolverine Vs. Hulk (2005) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3562",
        "name": "Ultimate Wolverine Vs. Hulk (2005) #2"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 27,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011006/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17739",
        "name": "Ultimate Comics Wolverine (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13108",
        "name": "Ultimate Comics X-Men (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/759",
        "name": "Ultimate Extinction (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5743",
        "name": "Ultimate Fantastic Four/Ultimate X-Men Annual (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1030",
        "name": "ULTIMATE FANTASTIC FOUR/X-MEN (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2223",
        "name": "Ultimate Galactus Trilogy (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2311",
        "name": "Ultimate Marvel Team-Up (2001 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1823",
        "name": "Ultimate Marvel Team-Up Ultimate Collection (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1124",
        "name": "Ultimate Power (2006 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/466",
        "name": "Ultimate Spider-Man (2000 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1383",
        "name": "Ultimate Spider-Man Vol. 12: Superstars (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1022",
        "name": "Ultimate Wolverine Vs. Hulk (2005 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/474",
        "name": "Ultimate X-Men (2000 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13887",
        "name": "Ultimate X-Men MGC (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1758",
        "name": "Ultimate X-Men Ultimate Collection Book 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2719",
        "name": "Ultimate X-Men Ultimate Collection Book 2 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1519",
        "name": "Ultimate X-Men Vol. 12: Hard Lessons (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2242",
        "name": "Ultimate X-Men Vol. 16: Cable (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1168",
        "name": "Ultimate X-Men Vol. 3: World Tour (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3296",
        "name": "Ultimate X-Men Vol. 4: Hellfire & Brimstone (2003 - Present)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 58,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011006/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/488",
        "name": "Ultimate X-Men/Fantastic Four (2005) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/489",
        "name": "Interior #489",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1330",
        "name": "Ultimate Spider-Man (2000) #66",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1331",
        "name": "\"SWITCHEROO\" PART 1 (OF 2) A bizarre occurrence brings Spider-Man and Wolverine together for the weirdest team-up in super-hero ",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1332",
        "name": "Ultimate Spider-Man (2000) #67",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1333",
        "name": "\"SWITCHEROO\" PART 2 (OF 2) A bizarre occurrence brings Spider-Man and Wolverine together for the weirdest team-up in super-hero ",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1452",
        "name": "2 of 2 - Wolverine & Storm",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3548",
        "name": "Ultimate Extinction (2006) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3549",
        "name": "2 of 5 - 5XLS",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3554",
        "name": "Ultimate Extinction (2006) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3555",
        "name": "5 of 5 - 5XLS",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5706",
        "name": "ULTIMATE WOLVERINE VS. HULK (2005) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5708",
        "name": "ULTIMATE WOLVERINE VS. HULK (2005) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5710",
        "name": "ULTIMATE WOLVERINE VS. HULK (2005) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5748",
        "name": "Ultimate Fantastic Four/X-Men (2006) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5749",
        "name": "Interior #5749",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6188",
        "name": "ULTIMATE POWER (2006) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7635",
        "name": "2 of 2 - Aftermath",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7880",
        "name": "ULTIMATE POWER (2006) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8103",
        "name": "2 of 2 - Aftermath",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011006/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolverine_%28Ultimate%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011006/wolverine_ultimate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1017325,
  "name": "Wolverine (Marvel War of Heroes)",
  "description": "",
  "modified": "2013-09-18T10:58:44-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/1/60/5239bf9387906",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017325",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017325/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017325/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017325/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017325/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1017325/wolverine_marvel_war_of_heroes?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1017297,
  "name": "Wolverine (LEGO Marvel Super Heroes)",
  "description": "",
  "modified": "2013-09-18T11:16:20-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/00/5239c3b29cb40",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017297",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017297/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017297/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017297/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017297/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/66/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1017297/wolverine_lego_marvel_super_heroes?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009718,
  "name": "Wolverine",
  "description": "Born with super-human senses and the power to heal from almost any wound, Wolverine was captured by a secret Canadian organization and given an unbreakable skeleton and claws. Treated like an animal, it took years for him to control himself. Now, he's a premiere member of both the X-Men and the Avengers.",
  "modified": "2016-05-02T12:21:44-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/60/537bcaef0f6cf",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009718",
  "comics": {
    "available": 2218,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009718/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41112",
        "name": "5 Ronin (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41113",
        "name": "5 Ronin (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38756",
        "name": "5 Ronin (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36162",
        "name": "5 Ronin (2010) #1 (AJA Cover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43488",
        "name": "A+X (2012) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43501",
        "name": "A+X (2012) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43505",
        "name": "A+X (2012) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43508",
        "name": "A+X (2012) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29317",
        "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29318",
        "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37996",
        "name": "Age of X: Alpha (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37973",
        "name": "Age of X: Alpha (2010) #1 (Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24017",
        "name": "Agents of Atlas (2009) #3 (Wolverine Art Appreciation Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24221",
        "name": "Agents of Atlas (2009) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24222",
        "name": "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66661",
        "name": "Agents of Atlas: The Complete Collection Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62094",
        "name": "All-New Wolverine Vol. 5: Orphans of X (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/43467",
        "name": "All-New X-Men (2012) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12690",
        "name": "Alpha Flight (1983) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38564",
        "name": "Alpha Flight (2011) #7"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 574,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009718/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15276",
        "name": "5 Ronin (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/12429",
        "name": "5 Ronin (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16450",
        "name": "A+X (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9994",
        "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9995",
        "name": "ACTS OF VENGEANCE CROSSOVERS OMNIBUS (DM Only) (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13603",
        "name": "Age of X: Alpha (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6807",
        "name": "Agents of Atlas (2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24134",
        "name": "Agents of Atlas: The Complete Collection Vol. 1 (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22728",
        "name": "All-New Wolverine Vol. 5: Orphans of X (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16449",
        "name": "All-New X-Men (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
        "name": "Alpha Flight (1983 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13907",
        "name": "Alpha Flight (2011 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
        "name": "Alpha Flight Classic Vol. 1 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2984",
        "name": "Amazing Spider-Man Annual (1964 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1489",
        "name": "AMAZING SPIDER-MAN VOL. 10: NEW AVENGERS TPB (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/18142",
        "name": "Amazing X-Men (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14818",
        "name": "Annihilators: Earthfall (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/11110",
        "name": "Astonishing Spider-Man/Wolverine (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9792",
        "name": "Astonishing Spider-Man/Wolverine (2010 - 2011)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 3111,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009718/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/477",
        "name": "Cover #477",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/594",
        "name": "X-MEN (2004) #164",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/608",
        "name": "Cover #608",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/614",
        "name": "X-MEN (2004) #159",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/616",
        "name": "X-MEN (2004) #157",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/618",
        "name": "X-MEN (2004) #158",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/620",
        "name": "X-MEN (2004) #160",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/622",
        "name": "X-MEN (2004) #161",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/624",
        "name": "X-MEN (2004) #162",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/626",
        "name": "X-MEN (2004) #163",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/628",
        "name": "X-MEN (2004) #165",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/630",
        "name": "X-MEN (2004) #166",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/632",
        "name": "X-MEN (2004) #167",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/636",
        "name": "X-MEN (2004) #169",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/638",
        "name": "X-MEN (2004) #170",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/652",
        "name": "2 of 3 - House of Broken Dreams",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/670",
        "name": "X-MEN (2004) #186",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/678",
        "name": "X-MEN (2004) #190",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/736",
        "name": "Uncanny X-Men (1963) #456",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/737",
        "name": "2 of 5 - Savage Land",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 42,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009718/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
        "name": "Age of Ultron"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/303",
        "name": "Age of X"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
        "name": "Atlantis Attacks"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
        "name": "Chaos War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/240",
        "name": "Days of Future Present"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/245",
        "name": "Enemy of the State"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/246",
        "name": "Evolutionary War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
        "name": "Fall of the Mutants"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
        "name": "Fatal Attractions"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/251",
        "name": "House of M"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
        "name": "Inferno"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
        "name": "Infinity"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
        "name": "Infinity Gauntlet"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      }
    ],
    "returned": 20
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1009718/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolverine_(James_Howlett)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009718/wolverine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010729,
  "name": "Wolver-dok",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010729",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010729/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2593/wolver-dok?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010729/wolver-dok?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010995,
  "name": "Wolfsbane (Age of Apocalypse)",
  "description": "An only child, Rahne Sinclair's mutant powers emerged during the culling of Scotland by the Apocalypse's Horseman Mikhail when her parents attempted to hide her, but failed, and Rahne was discovered by Mikhail's hounds and brought before him alongside her parents whom Mikhail made Rahne beg for their lives, making her pledge allegiance to Apocalypse.",
  "modified": "2013-11-20T17:27:01-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/20/528d3602d37e0",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010995",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010995/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18180",
        "name": "X-Man (1995) #12"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010995/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3643",
        "name": "X-Man (1995 - 2000)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010995/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67762",
        "name": "X-Man (1995) #12",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010995/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1010995/wolfsbane_age_of_apocalypse?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolfsbane_%28Age_of_Apocalypse%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010995/wolfsbane_age_of_apocalypse?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009717,
  "name": "Wolfsbane",
  "description": "Rahne Sinclair was an orphan in Scotland, raised by Reverend Craig, who, when her powers manifested, attempted to perform an exorcism to cast out what he perceived was the devil, after which Rahne was rescued by Doctor Moira MacTaggert who legally adopted her, and was introduced to Charles Xavier and enrolled as part of his New Mutants training team.",
  "modified": "2014-01-23T12:40:48-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/70/4c003a687658c",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009717",
  "comics": {
    "available": 120,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009717/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22323",
        "name": "Cable (2008) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8556",
        "name": "Earth X (1999) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4241",
        "name": "Earth X (New (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8663",
        "name": "Excalibur (1988) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8677",
        "name": "Excalibur (1988) #90"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8679",
        "name": "Excalibur (1988) #92"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8680",
        "name": "Excalibur (1988) #93"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8681",
        "name": "Excalibur (1988) #94"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8684",
        "name": "Excalibur (1988) #97"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8685",
        "name": "Excalibur (1988) #98"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8686",
        "name": "Excalibur (1988) #99"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8564",
        "name": "Excalibur (1988) #100"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8565",
        "name": "Excalibur (1988) #101"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8566",
        "name": "Excalibur (1988) #102"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8568",
        "name": "Excalibur (1988) #104"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8569",
        "name": "Excalibur (1988) #105"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8570",
        "name": "Excalibur (1988) #106"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8571",
        "name": "Excalibur (1988) #107"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8573",
        "name": "Excalibur (1988) #109"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8575",
        "name": "Excalibur (1988) #110"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 29,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009717/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4002",
        "name": "Cable (2008 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
        "name": "Earth X (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
        "name": "Earth X (New (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
        "name": "Excalibur (1988 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/563",
        "name": "New Mutants (2003 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
        "name": "New Mutants (1983 - 1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1764",
        "name": "New Mutants Classic Vol. 2 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4603",
        "name": "New Mutants Classic Vol. 3 (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13519",
        "name": "New Mutants Classic Vol. 6 (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1186",
        "name": "New Mutants Vol 1: Back to School (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/267",
        "name": "New Mutants Vol 1: Back to School (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24090",
        "name": "New Mutants: Dead Souls (2018 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3694",
        "name": "Secret Wars II (1985)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17554",
        "name": "Superior Spider-Man (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23662",
        "name": "Wolverine: Rahne of Terra (1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1035",
        "name": "X-Factor (2005 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6689",
        "name": "X-Factor Annual (1986 - 1994)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 144,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009717/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1596",
        "name": "New Mutants (2003) #10",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1597",
        "name": "Interior #1597",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1888",
        "name": "New Mutants (2003) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1889",
        "name": "Interior #1889",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1901",
        "name": "New Mutants (2003) #12",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1902",
        "name": "Interior #1902",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1903",
        "name": "New Mutants (2003) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1904",
        "name": "Interior #1904",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2155",
        "name": "New Mutants (2003) #11",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2156",
        "name": "Interior #2156",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2533",
        "name": "New Mutants (2003) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2534",
        "name": "Interior #2534",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4908",
        "name": "X-FACTOR (2005) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4910",
        "name": "X-FACTOR (2005) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4914",
        "name": "X-FACTOR (2005) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5770",
        "name": "Cover #5770",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5772",
        "name": "1 of 1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8657",
        "name": "X-FACTOR (2005) #19",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21411",
        "name": "Wolfsbane",
        "type": "pin-up"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21465",
        "name": "NEW MUTANTS (1983) #44",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009717/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/233",
        "name": "Atlantis Attacks"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/299",
        "name": "Messiah CompleX"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
        "name": "Secret Wars II"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
        "name": "X-Men: Regenesis"
      }
    ],
    "returned": 5
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2592/wolfsbane?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolfsbane?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009717/wolfsbane?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011281,
  "name": "Wolfpack",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011281",
  "comics": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011281/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10101",
        "name": "Marvel Comics Presents (1988) #23"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70116",
        "name": "Wolfpack: The Complete Collection (Trade Paperback)"
      }
    ],
    "returned": 2
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011281/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
        "name": "Marvel Comics Presents (1988 - 1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/25581",
        "name": "Wolfpack: The Complete Collection (2018)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011281/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23213",
        "name": "Lady Jane",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/155446",
        "name": "cover from WOLFPACK: THE COMPLETE COLLECTION TPB (2018) #1",
        "type": "cover"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011281/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2591/wolfpack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolfpack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011281/wolfpack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011290,
  "name": "Wolf Cub",
  "description": "Nicholas Gleason enrolled at the Xavier Institute after being saved from a pair of mutant-haters by X-Men members Cyclops and Chamber.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011290",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011290/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011290/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011290/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011290/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2590/wolf_cub?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wolf%20Cub?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011290/wolf_cub?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011043,
  "name": "Wither",
  "description": "When his genetic mutation manifested, Kevin Ford accidentally killed his father with his lethal and uncontrollable touch, after which he was recruited as a student at the Xavier Institute.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/b0/4c003235e6f1d",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011043",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011043/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2440",
        "name": "New X-Men: Hellions (2005)"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011043/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/868",
        "name": "New X-Men: Hellions (2005)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011043/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4594",
        "name": "1 of 4 - Fortune & Glory (4XLS)",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011043/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2586/wither?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wither?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011043/wither?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010740,
  "name": "Winter Soldier",
  "description": "",
  "modified": "2013-10-21T11:31:10-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/03/5265478293c1e",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010740",
  "comics": {
    "available": 183,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010740/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
        "name": "A Year of Marvels (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24015",
        "name": "Agents of Atlas (2009) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24219",
        "name": "Agents of Atlas (2009) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24222",
        "name": "Agents of Atlas (2009) #5 (MCGUINNESS VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12555",
        "name": "All-Winners Comics (1941) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12566",
        "name": "All-Winners Comics (1941) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12564",
        "name": "All-Winners Comics (1941) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29736",
        "name": "All-Winners Squad: Band of Heroes (2011) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4065",
        "name": "Amazing Spider-Man (1999) #531"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4431",
        "name": "Amazing Spider-Man (1999) #534"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5245",
        "name": "Amazing Spider-Man (1999) #537"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35528",
        "name": "Amazing Spider-Man (1999) #667"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36652",
        "name": "Avengers Vs. Pet Avengers (2010) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36653",
        "name": "Avengers Vs. Pet Avengers (2010) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21247",
        "name": "Avengers/Invaders (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21394",
        "name": "Avengers/Invaders (2008) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21393",
        "name": "Avengers/Invaders (2008) #2 (PERKINS VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21565",
        "name": "Avengers/Invaders (2008) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64791",
        "name": "Avengers: Standoff (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36945",
        "name": "Batroc (2010) #1"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 88,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010740/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
        "name": "A Year of Marvels (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6807",
        "name": "Agents of Atlas (2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2114",
        "name": "All-Winners Comics (1941 - 1947)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9865",
        "name": "All-Winners Squad: Band of Heroes (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13032",
        "name": "Avengers Vs. Pet Avengers (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4864",
        "name": "Avengers/Invaders (2008 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23601",
        "name": "Avengers: Standoff (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13194",
        "name": "Batroc (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20448",
        "name": "Black Widow (2016 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9706",
        "name": "Black Widow (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2722",
        "name": "Cap Transport (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/832",
        "name": "Captain America (2004 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16325",
        "name": "Captain America and... (2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1459",
        "name": "Captain America by Jack Kirby: Bicentennial Battles (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1998",
        "name": "Captain America Comics (1941 - 1954)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7222",
        "name": "Captain America Comics 70th Anniversary Special (2009 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13199",
        "name": "Captain America Corps (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3752",
        "name": "Captain America's Bicentennial Battles (1976)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 193,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010740/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1187",
        "name": "Amazing Spider-Man (1999) #531",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1193",
        "name": "Amazing Spider-Man (1999) #534",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1199",
        "name": "Amazing Spider-Man (1999) #537",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4230",
        "name": "2 of 8 - Out of Time",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4234",
        "name": "4 of 8 - Out of Time",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4236",
        "name": "5 of 8 - Out of Time",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4240",
        "name": "1 of 1 - Nomad",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4242",
        "name": "1 of 6 - Winter Soldier",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4247",
        "name": "3 of 6 - Winter Soldier",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4248",
        "name": "3 of 6 - Winter Soldier",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4250",
        "name": "4 of 6 - Winter Soldier",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4254",
        "name": "5 of 6 - Winter Soldier",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4255",
        "name": "6 of 6 - Winter Soldier",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4256",
        "name": "6 of 6 - Winter Soldier",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4260",
        "name": "1 of 2 - Crossbones & Sin",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4267",
        "name": "3 of ? - Twenty-first Century Blitz",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4268",
        "name": "3 of ? - Twenty-first Century Blitz",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4269",
        "name": "4 of ? - Twenty-first Century Blitz",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4270",
        "name": "4 of ? - Twenty-first Century Blitz",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7702",
        "name": "2 of 6 - Death of the Dream",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010740/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
        "name": "Chaos War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
        "name": "Initiative"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
        "name": "Secret Empire"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
        "name": "Shattered Heroes"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
        "name": "Siege"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/305",
        "name": "Spider-Island"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/60",
        "name": "World War Hulks"
      }
    ],
    "returned": 10
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1010740/winter_soldier?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Captain_America_(James_Barnes)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010740/winter_soldier?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011009,
  "name": "Wind Dancer",
  "description": "Given the codename Wind Dancer, Sofia Mantega stepped up to lead the New Mutants.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/20/4c0032802a24d",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011009",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011009/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16175",
        "name": "New Warriors (2007) #3"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011009/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2409",
        "name": "New Warriors (2007 - 2009)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011009/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33041",
        "name": "3 of 5; THE INITIATIVE BANNER",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011009/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
        "name": "Initiative"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2577/wind_dancer?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wind_Dancer?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011009/wind_dancer?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010680,
  "name": "Wilson Fisk",
  "description": "",
  "modified": "2004-04-14T00:00:00-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010680",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010680/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010680/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010680/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010680/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2769/wilson_fisk?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010680/wilson_fisk?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009633,
  "name": "William Stryker",
  "description": "William Stryker became convinced that Satan had a plot to corrupt humankind by taking over their souls while still in the womb, resulting in their mutations.",
  "modified": "2011-10-19T11:42:18-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/90/4c003abcc72e7",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009633",
  "comics": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009633/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32682",
        "name": "Avengers Origins: Luke Cage (2013) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41163",
        "name": "Point One (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/42117",
        "name": "Point One (2011) #1 (Bradshaw Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/42118",
        "name": "Point One (2011) #1 (Bradshaw Inked Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20704",
        "name": "X-Force (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20895",
        "name": "X-Force (2008) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21561",
        "name": "X-Force (2008) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21757",
        "name": "X-Force (2008) #6"
      }
    ],
    "returned": 8
  },
  "series": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009633/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9861",
        "name": "Avengers Origins: Luke Cage (2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15297",
        "name": "Point One (2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3839",
        "name": "X-Force (2008 - 2010)"
      }
    ],
    "returned": 3
  },
  "stories": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009633/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44404",
        "name": "Angels and Demons 1 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44745",
        "name": "Angels and Demons 2 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47529",
        "name": "Angels and Demons 5 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47825",
        "name": "Angels and Demons 6 of 6",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/73710",
        "name": "Avengers Origins: Luke Cage (2013) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/73711",
        "name": "Interior #73711",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/93181",
        "name": "Point One (2011) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/93182",
        "name": "Point One (2011) #1 - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/95138",
        "name": "Point One (2011) #1, Bradshaw Variant - Int",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/95140",
        "name": "Point One (2011) #1, Bradshaw Inked Variant - Int",
        "type": "interiorStory"
      }
    ],
    "returned": 10
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009633/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/3421/william_stryker?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Stryker%2C_William?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009633/william_stryker?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009716,
  "name": "Wildside",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009716",
  "comics": {
    "available": 19,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009716/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8568",
        "name": "Excalibur (1988) #104"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8569",
        "name": "Excalibur (1988) #105"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18094",
        "name": "Weapon X (2002) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18097",
        "name": "Weapon X (2002) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18098",
        "name": "Weapon X (2002) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12298",
        "name": "X-Factor (1986) #77"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12299",
        "name": "X-Factor (1986) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12307",
        "name": "X-Factor (1986) #85"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6023",
        "name": "X-Factor Visionaries: Peter David Vol. 2 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21430",
        "name": "X-Factor Visionaries: Peter David Vol. 4 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17942",
        "name": "X-Force (1991) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18038",
        "name": "X-Force (1991) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18060",
        "name": "X-Force (1991) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17943",
        "name": "X-Force (1991) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17990",
        "name": "X-Force (1991) #26"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17991",
        "name": "X-Force (1991) #27"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17992",
        "name": "X-Force (1991) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18009",
        "name": "X-Force (1991) #43"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18036",
        "name": "X-Force (1991) #68"
      }
    ],
    "returned": 19
  },
  "series": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009716/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2011",
        "name": "Excalibur (1988 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/543",
        "name": "Weapon X (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1915",
        "name": "X-Factor Visionaries: Peter David Vol. 2 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5068",
        "name": "X-Factor Visionaries: Peter David Vol. 4 (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
        "name": "X-Force (1991 - 2004)"
      }
    ],
    "returned": 6
  },
  "stories": {
    "available": 19,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009716/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22345",
        "name": "X-Factor (1986) #77",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22346",
        "name": "Great X-pectations",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22348",
        "name": "Playing With Fire",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22364",
        "name": "Snikts and Bones",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22415",
        "name": "Buried Secret",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22417",
        "name": "Hard Truths",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38161",
        "name": "X-Force (1991) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38162",
        "name": "A Force To Be Reckoned With",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38168",
        "name": "Answers (and Questions)",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38259",
        "name": "Shadows on the Rock",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38261",
        "name": "Liberation Through Subjugation",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38263",
        "name": "The Axe Falls",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38298",
        "name": "Teapot in a Tempest",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38357",
        "name": "Girl Talk",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38362",
        "name": "X-Tenuating Circumstances",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38411",
        "name": "X-Tenuating Circumstances [Part 2]",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50743",
        "name": "Interior #50743",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50749",
        "name": "Interior #50749",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50751",
        "name": "Interior #50751",
        "type": "interiorStory"
      }
    ],
    "returned": 19
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009716/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2574/wildside?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009716/wildside?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011067,
  "name": "Wild Pack",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/6/50/4c0030ee76e95",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011067",
  "comics": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011067/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6730",
        "name": "The Amazing Spider-Man (1963) #322"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6731",
        "name": "The Amazing Spider-Man (1963) #323"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6788",
        "name": "The Amazing Spider-Man (1963) #375"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6824",
        "name": "The Amazing Spider-Man (1963) #407"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55126",
        "name": "Heroes for Hire (1997) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55125",
        "name": "Heroes for Hire (1997) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66690",
        "name": "Marvel Legacy Companion (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1228",
        "name": "Spider-Man Legends Vol. III: Todd Mcfarlane Book III (Trade Paperback)"
      }
    ],
    "returned": 8
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011067/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20084",
        "name": "Heroes for Hire (1997 - 1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24138",
        "name": "Marvel Legacy Companion (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/285",
        "name": "Spider-Man Legends Vol. III: Todd Mcfarlane Book III (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
        "name": "The Amazing Spider-Man (1963 - 1998)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011067/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14048",
        "name": "Amazing Spider-Man (1963) #322",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14050",
        "name": "Amazing Spider-Man (1963) #323",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14176",
        "name": "Amazing Spider-Man (1963) #375",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66270",
        "name": "Amazing Spider-Man (1963) #407",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/134408",
        "name": "interior to Heroes for Hire (1997) #10",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/134410",
        "name": "interior to Heroes for Hire (1997) #11",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/144534",
        "name": "cover from MARVEL LEGACY COMPANION TPB (2018) #1",
        "type": "cover"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011067/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2568/wild_pack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wild_Pack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011067/wild_pack?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010994,
  "name": "Wild Child (Age of Apocalypse)",
  "description": "Kyle Gibney was one of the original volunteers for Beta Flight, Canada's attempt at building a super soldier program to secure their borders against the onslaught of Apocalypse and his Infinite soldiers.",
  "modified": "2013-11-20T17:27:05-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/c0/528d36110a1b9",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010994",
  "comics": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010994/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17735",
        "name": "Astonishing X-Men (1995) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17736",
        "name": "Astonishing X-Men (1995) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17737",
        "name": "Astonishing X-Men (1995) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17738",
        "name": "Astonishing X-Men (1995) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32578",
        "name": "Uncanny X-Force (2010) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40018",
        "name": "Uncanny X-Force (2010) #12 (I Am Captain America Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40102",
        "name": "Uncanny X-Force (2010) #12 (Kubert Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4090",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 3 (Trade Paperback)"
      }
    ],
    "returned": 8
  },
  "series": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010994/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3619",
        "name": "Astonishing X-Men (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9976",
        "name": "Uncanny X-Force (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1684",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 3 (2006)"
      }
    ],
    "returned": 3
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010994/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37637",
        "name": "Once More With Feeling",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37640",
        "name": "Sacrificial Lambs",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37643",
        "name": "In Excess",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67709",
        "name": "Astonishing X-Men (1995) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/73562",
        "name": "Interior #73562",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90807",
        "name": "Interior #90807",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90993",
        "name": "Interior #90993",
        "type": "interiorStory"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010994/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2567/wild_child?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wild_Child_%28Age_of_Apocalypse%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010994/wild_child_age_of_apocalypse?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009715,
  "name": "Wild Child",
  "description": "Kyle Gibney's mutant powers emerged at an early age and left him with a freakish appearance, horrifying his parents, who kicked him out of the house, where he was eventually found and experimented upon by the Secret Empire and, later, Department H, who dubbed Gibney Wild Child and placed him with Gamma Flight, the entry-level team whose recruits can eventually graduate to Alpha Flight.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/00/4c003a6b5d11a",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009715",
  "comics": {
    "available": 29,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009715/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12671",
        "name": "Alpha Flight (1983) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12715",
        "name": "Alpha Flight (1983) #52"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12751",
        "name": "Alpha Flight (1983) #85"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12752",
        "name": "Alpha Flight (1983) #86"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18071",
        "name": "Weapon X (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18082",
        "name": "Weapon X (2002) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18092",
        "name": "Weapon X (2002) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18093",
        "name": "Weapon X (2002) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18096",
        "name": "Weapon X (2002) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18098",
        "name": "Weapon X (2002) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18074",
        "name": "Weapon X (2002) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/246",
        "name": "Weapon X (2002) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/241",
        "name": "Weapon X (2002) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1103",
        "name": "Weapon X Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1078",
        "name": "Weapon X Vol. I (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18411",
        "name": "Weapon X: The Draft - Sauron (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18412",
        "name": "Weapon X: The Draft - Wild Child (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18408",
        "name": "Weapon X: The Draft - Zero (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15849",
        "name": "Wolverine Origins (2006) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27196",
        "name": "Wolverine Origins (2006) #38"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009715/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
        "name": "Alpha Flight (1983 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/543",
        "name": "Weapon X (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/163",
        "name": "Weapon X Vol. 1 (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/138",
        "name": "Weapon X Vol. I (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3652",
        "name": "Weapon X: The Draft - Sauron (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3653",
        "name": "Weapon X: The Draft - Wild Child (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3649",
        "name": "Weapon X: The Draft - Zero (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2375",
        "name": "Wolverine Origins (2006 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3640",
        "name": "X-Men Chronicles (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2104",
        "name": "X-Men: Alpha (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2101",
        "name": "X-Men: Omega (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1452",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 1 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1685",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 4 (2006)"
      }
    ],
    "returned": 15
  },
  "stories": {
    "available": 26,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009715/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1131",
        "name": "WEAPON X (2002) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1302",
        "name": "WEAPON X (2002) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21172",
        "name": "Nightmare",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21266",
        "name": "Specters",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21344",
        "name": "Marching To Doom",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21346",
        "name": "The End of All Things",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22116",
        "name": "Unnecessary Evils (Wrecking Havok Part One)",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22123",
        "name": "Reaching out to Yesterday",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24492",
        "name": "Interior #24492",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26280",
        "name": "X-Men: Alpha (1994) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26281",
        "name": "A Beginning",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32365",
        "name": "Wolverine Origins (2006) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38629",
        "name": "X-Men",
        "type": "pinup"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39217",
        "name": "Initiation",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39226",
        "name": "Falling to Pieces",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39227",
        "name": "Cover #39227",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50735",
        "name": "Interior #50735",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50737",
        "name": "Interior #50737",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50739",
        "name": "Interior #50739",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50740",
        "name": "Weapon X (2002) #4",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009715/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2567/wild_child?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wild_Child?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009715/wild_child?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009714,
  "name": "Wiccan",
  "description": "Believing himself to be one of the Scarlet Witch's twin boys, Billy Kaplan also has reality-altering powers and is a member of the Young Avengers.",
  "modified": "2011-03-10T14:58:12-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/50/4c003a6e38300",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009714",
  "comics": {
    "available": 43,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009714/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31140",
        "name": "Avengers: The Children's Crusade (2010) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37421",
        "name": "Avengers: The Children's Crusade - Young Avengers (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6232",
        "name": "Avengers: The Initiative (2007) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4313",
        "name": "Civil War (2006) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61473",
        "name": "Doctor Strange And The Sorcerers Supreme (2016) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61474",
        "name": "Doctor Strange And The Sorcerers Supreme (2016) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61475",
        "name": "Doctor Strange And The Sorcerers Supreme (2016) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62140",
        "name": "Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62141",
        "name": "Doctor Strange and the Sorcerers Supreme Vol. 2: Time after Time (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61469",
        "name": "Doctor Strange And The Sorcerers Supreme (2016) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23964",
        "name": "Mighty Avengers (2007) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60137",
        "name": "New Avengers (2015) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61035",
        "name": "New Avengers (2015) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61036",
        "name": "New Avengers (2015) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23747",
        "name": "New Avengers (2004) #51"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23938",
        "name": "New Avengers (2004) #52"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32938",
        "name": "Siege: Young Avengers (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48095",
        "name": "Uncanny X-Men (2013) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1629",
        "name": "Young Avengers (2005) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1932",
        "name": "Young Avengers (2005) #1 (Director's Cut)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 19,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009714/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9864",
        "name": "Avengers: The Children's Crusade (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13447",
        "name": "Avengers: The Children's Crusade - Young Avengers (2010 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1945",
        "name": "Avengers: The Initiative (2007 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1067",
        "name": "Civil War (2006 - 2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22560",
        "name": "Doctor Strange And The Sorcerers Supreme (2016 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22767",
        "name": "Doctor Strange and the Sorcerers Supreme Vol. 1: Out of Time (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22768",
        "name": "Doctor Strange and the Sorcerers Supreme Vol. 2: Time after Time (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1866",
        "name": "Mighty Avengers (2007 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
        "name": "New Avengers (2004 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20841",
        "name": "New Avengers (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9765",
        "name": "Siege: Young Avengers (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17602",
        "name": "Uncanny X-Men (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/756",
        "name": "Young Avengers (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17647",
        "name": "Young Avengers (2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22887",
        "name": "Young Avengers by Allan Heinberg & Jim Cheung: The Children's Crusade (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3424",
        "name": "Young Avengers Presents (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1661",
        "name": "Young Avengers Vol. 1: Sidekicks (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1250",
        "name": "Young Avengers Vol. 1: Sidekicks (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1955",
        "name": "Young Avengers Vol. 2: Family Matters (2007)"
      }
    ],
    "returned": 19
  },
  "stories": {
    "available": 41,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009714/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/479",
        "name": "Cover #479",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3502",
        "name": "1 of 6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3504",
        "name": "2 of 6 - Sidekicks",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3512",
        "name": "6 of 6 - Sidekicks",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3520",
        "name": "1 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3526",
        "name": "4 of 4 - Family Matters",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5876",
        "name": "2 of 7 - 7XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8381",
        "name": "AVENGERS: THE INITIATIVE (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8383",
        "name": "1 of 6 - 6XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36972",
        "name": "YOUNG AVENGERS PRESENTS (2008) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44415",
        "name": "YOUNG AVENGERS PRESENTS (2008) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44760",
        "name": "YOUNG AVENGERS PRESENTS (2008) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/46945",
        "name": "YOUNG AVENGERS PRESENTS (2008) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52694",
        "name": "New Avengers (2004) #51",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/53093",
        "name": "New Avengers (2004) #52",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/53148",
        "name": "1 of 1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/71023",
        "name": "Cover #71023 ",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/74200",
        "name": "Cover #74200",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/82841",
        "name": "Avengers: The Children's Crusade - Iron Lad (2010) #1 ",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/105286",
        "name": "YOUNG AVENGERS (2013) #3",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009714/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
        "name": "Siege"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/316",
        "name": "X-Men: Battle of the Atom"
      }
    ],
    "returned": 4
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2563/wiccan?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wiccan?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009714/wiccan?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011425,
  "name": "Whizzer (Stanley Stewart)",
  "description": "Stanley Stewart is a native of the alternate Earth (Earth-S) on which the organization of the superhuman champions known as the Squadron Supreme arose.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011425",
  "comics": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011425/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7338",
        "name": "Avengers (1963) #85"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7339",
        "name": "Avengers (1963) #86"
      }
    ],
    "returned": 2
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011425/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011425/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15239",
        "name": "The World is Not for Burning",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15241",
        "name": "Brain-Child to the Dark Tower Came",
        "type": "interiorStory"
      }
    ],
    "returned": 2
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011425/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2561/whizzer?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Whizzer_(Earth-712)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011425/whizzer_stanley_stewart?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1016838,
  "name": "White Tiger (USM)",
  "description": "White Tiger takes everything very seriously. A constant overachiever, she wants to be better and wants the group to be better. With less flashy powers, she feels like she has to work the hardest. \r\n \r\nA skilled acrobatic fighter with feline senses and claws. Ava wears a small Tiger amulet on her belt that gives her supernatural powers.\r\n\r\nIn the field, sheâ€™s constantly frustrated with Spider-Man and his irreverent attitude. But the longer the two fight side by side, the more they will understand one another.",
  "modified": "2013-09-18T15:44:30-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/d/c0/52321764379a9",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1016838",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016838/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016838/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016838/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1016838/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2559/white_tiger?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1016838/white_tiger_usm?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010853,
  "name": "White Tiger (Angela Del Toro)",
  "description": "Federal agent Angela Del Toro is the heir to a heroic legacy that began with the Jade Tiger, a long-lost enchanted statue from the fabled kingdom of K'un-Lun, and had been last held by her uncle, Hector Ayala, who fought alongside such heroes as Daredevil and Spider-Man.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010853",
  "comics": {
    "available": 34,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010853/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36485",
        "name": "Avengers Academy (2010) #22"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36486",
        "name": "Avengers Academy (2010) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40255",
        "name": "Avengers Academy (2010) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40249",
        "name": "Avengers Academy (2010) #26"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40248",
        "name": "Avengers Academy (2010) #27"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40254",
        "name": "Avengers Academy (2010) #32"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40264",
        "name": "Avengers Academy (2010) #33"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40258",
        "name": "Avengers Academy (2010) #34"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40257",
        "name": "Avengers Academy (2010) #35"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40262",
        "name": "Avengers Academy (2010) #36"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40261",
        "name": "Avengers Academy (2010) #37"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40263",
        "name": "Avengers Academy (2010) #38"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20496",
        "name": "Crew (2003) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20497",
        "name": "Crew (2003) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22860",
        "name": "Daredevil (1998) #114"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23075",
        "name": "Daredevil (1998) #115"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24756",
        "name": "Daredevil (1998) #119"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24757",
        "name": "Daredevil (1998) #500"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32538",
        "name": "Daredevil (1998) #506"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30366",
        "name": "Daredevil (1998) #507"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 10,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010853/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
        "name": "Avengers Academy (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/553",
        "name": "Crew (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/449",
        "name": "Daredevil (1998 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23968",
        "name": "Daredevil: Shadowland Omnibus (John Cassaday Cover) (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20841",
        "name": "New Avengers (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
        "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9934",
        "name": "Shadowland (2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1979",
        "name": "Spider-Man Visionaries: Roger Stern Vol. 1 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1099",
        "name": "White Tiger (2006 - 2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2697",
        "name": "White Tiger: A Hero's Compulsion (2007)"
      }
    ],
    "returned": 10
  },
  "stories": {
    "available": 36,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010853/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7839",
        "name": "4 of 6 - A Hero's Compulsion - 6XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30072",
        "name": "--The White Tiger",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30079",
        "name": "A Killer Elite!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30082",
        "name": "The Menace of Gideon Mace!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/30083",
        "name": "Cover #30083",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43906",
        "name": "Cover #43906",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43909",
        "name": "Big Trouble in Little Mogadishu Chapter Three: Danny",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/50768",
        "name": "Lady Bullseye 4 of 5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/51179",
        "name": "Lady Bullseye 5 of 5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54741",
        "name": "Cover #54741",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/54743",
        "name": "Cover #54743",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64550",
        "name": "Shadowland (2010) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64551",
        "name": "Interior #64551",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64552",
        "name": "Shadowland (2010) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64553",
        "name": "Interior #64553",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64554",
        "name": "Shadowland (2010) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64555",
        "name": "Interior #64555",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/69558",
        "name": "Cover #69558",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/69560",
        "name": "Cover #69560",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/73489",
        "name": "Cover #73489",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010853/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/59",
        "name": "Shadowland"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/309",
        "name": "Shattered Heroes"
      }
    ],
    "returned": 3
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2559/white_tiger?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/White%20Tiger%20(Angela%20Del%20Toro)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010853/white_tiger_angela_del_toro?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009712,
  "name": "White Queen (Adrienne Frost)",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009712",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009712/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009712/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009712/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009712/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2556/white_queen?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/White%20Queen%20(Adrienne%20Frost)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009712/white_queen_adrienne_frost?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010342,
  "name": "Whistler",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010342",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010342/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010342/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010342/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010342/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2551/whistler?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010342/whistler?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010348,
  "name": "Whirlwind",
  "description": "David Cannon was always a bully, so his mutant abilities naturally led him to a life of crime and petty thievery, until his constant defeat at the hands of the Hank Pym and the Wasp led him to create the Whirlwind identity.",
  "modified": "2012-03-20T16:54:18-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4c7c643e59215",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010348",
  "comics": {
    "available": 28,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010348/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
        "name": "Avengers (1998) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17762",
        "name": "Avengers (1996) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17763",
        "name": "Avengers (1996) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17528",
        "name": "Avengers (1998) #44"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7304",
        "name": "Avengers (1963) #54"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7305",
        "name": "Avengers (1963) #55"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4648",
        "name": "Avengers (1998) #71"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7336",
        "name": "Avengers (1963) #83"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6996",
        "name": "Avengers (1963) #139"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7024",
        "name": "Avengers (1963) #164"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6942",
        "name": "Avengers Annual (1967) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1311",
        "name": "Avengers Assemble (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1034",
        "name": "Avengers Legends Vol. II: George Perez Book I (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1038",
        "name": "Avengers: The Kang Dynasty (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39772",
        "name": "Avengers: X-Sanction (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7511",
        "name": "Captain America (1968) #130"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5705",
        "name": "Heroes Reborn: Avengers (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5589",
        "name": "Heroes Reborn: Iron Man (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40215",
        "name": "Invincible Iron Man (2008) #525"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/42493",
        "name": "Invincible Iron Man (2008) #526"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 18,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010348/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
        "name": "Avengers (1996 - 1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
        "name": "Avengers Annual (1967 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
        "name": "Avengers Assemble (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/94",
        "name": "Avengers Legends Vol. II: George Perez Book I (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/98",
        "name": "Avengers: The Kang Dynasty (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14703",
        "name": "Avengers: X-Sanction (2011 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1813",
        "name": "Heroes Reborn: Avengers (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1814",
        "name": "Heroes Reborn: Iron Man (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4889",
        "name": "Invincible Iron Man (2008 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13577",
        "name": "Iron Man (1996 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1708",
        "name": "Marvel Masterworks: The Avengers Vol. (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2071",
        "name": "Spider-Man's Tangled Web (2001 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/69",
        "name": "Spider-Man's Tangled Web Vol. III (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2715",
        "name": "Women of Marvel Vol. 2 (2007)"
      }
    ],
    "returned": 18
  },
  "stories": {
    "available": 24,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010348/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14529",
        "name": "AVENGERS (1963) #139",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14586",
        "name": "AVENGERS (1963) #164",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15168",
        "name": "AVENGERS (1963) #54",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15169",
        "name": "...And Deliver Us from - - the Masters of Evil!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15171",
        "name": "AVENGERS (1963) #55",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15235",
        "name": "Come On In, The Revolution's Fine",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17447",
        "name": "Night Vision!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17514",
        "name": "CAPTAIN AMERICA (1968) #130",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25413",
        "name": "[untitled]",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25414",
        "name": "Double Shots",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28284",
        "name": "History Repeats",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34092",
        "name": "Misperceptions",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34094",
        "name": "Bring Me the Head of the Hulk!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34095",
        "name": "Cover #34095",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34096",
        "name": "Inherit the Whirlwind",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37409",
        "name": "Too Many Avengers!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37420",
        "name": "Down Among the Dead Men!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37702",
        "name": "Shadowplay",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37704",
        "name": "Shadowbox",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37780",
        "name": "Night Vision!",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010348/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2550/whirlwind?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Whirlwind_%28David_Cannon%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010348/whirlwind?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009711,
  "name": "Whiplash (Mark Scarlotti)",
  "description": "Filled with dreams of grandeur, Mark Scarlotti was a brilliant young man with a bright future who graduated with top honors from college and immediately had a promising job at Stark International, but it all went south, however, when he became friends with the wrong people who wanted him to develop weapons, which Scarlotti used to become the first Whiplash.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009711",
  "comics": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009711/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6753",
        "name": "The Amazing Spider-Man (1963) #343"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8496",
        "name": "Deadpool (1997) #40"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19898",
        "name": "Iron Man (1998) #26"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19900",
        "name": "Iron Man (1998) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19911",
        "name": "Iron Man (1998) #38"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19930",
        "name": "Iron Man (1998) #55"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9618",
        "name": "Iron Man (1968) #62"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9533",
        "name": "Iron Man (1968) #285"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2001",
        "name": "Marvel Masterworks: The Invincible Iron Man Vol. (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11344",
        "name": "Tales of Suspense (1959) #97"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11345",
        "name": "Tales of Suspense (1959) #98"
      }
    ],
    "returned": 11
  },
  "series": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009711/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
        "name": "Deadpool (1997 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2029",
        "name": "Iron Man (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2572",
        "name": "Iron Man (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1494",
        "name": "Marvel Masterworks: The Invincible Iron Man Vol. (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2079",
        "name": "Tales of Suspense (1959 - 1968)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
        "name": "The Amazing Spider-Man (1963 - 1998)"
      }
    ],
    "returned": 6
  },
  "stories": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009711/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/11988",
        "name": "Cover #11988",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/11993",
        "name": "The Warrior and the Whip!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14094",
        "name": "Amazing Spider-Man (1963) #343",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19544",
        "name": "IRON MAN (1968) #285",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19545",
        "name": "Ashes to Ashes",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19717",
        "name": "Whiplash Returns!",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34493",
        "name": "Cover #34493",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/34498",
        "name": "The Warrior and the Whip!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42657",
        "name": "The Mask in the Iron Man",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42661",
        "name": "The Mask in the Iron Man Part Three: His Own Worst Enemy",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42685",
        "name": "Remote Control [Part 2]",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42730",
        "name": "Iron Man Gallery",
        "type": "pinup"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66406",
        "name": "Deadpool (1997) #40",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96646",
        "name": "Iron Man (1968) #62",
        "type": "cover"
      }
    ],
    "returned": 14
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009711/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2549/whiplash?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Whiplash_%28Mark_Scarlotti%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009711/whiplash_mark_scarlotti?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010765,
  "name": "Werewolf By Night",
  "description": "Jack Russell inherited the curse of lycanthropy from his father, Gregor.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/a0/4c00375df1879",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010765",
  "comics": {
    "available": 79,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010765/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64520",
        "name": "BLOODSTONE & THE LEGION OF MONSTERS TPB (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20186",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #26"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20187",
        "name": "Doctor Strange, Sorcerer Supreme (1988) #27"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8764",
        "name": "Ghost Rider (1973) #55"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20025",
        "name": "Giant-Size Creatures (1974) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2006",
        "name": "Giant-Size Marvel (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/57648",
        "name": "Giant-Size Werewolf by Night (1974) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70410",
        "name": "Giant-Size Werewolf by Night (1974) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31252",
        "name": "Legion of Monsters (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31254",
        "name": "Legion of Monsters (2011) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31256",
        "name": "Legion of Monsters (2011) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31258",
        "name": "Legion of Monsters (2011) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10135",
        "name": "Marvel Comics Presents (1988) #54"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10136",
        "name": "Marvel Comics Presents (1988) #55"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10137",
        "name": "Marvel Comics Presents (1988) #56"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10138",
        "name": "Marvel Comics Presents (1988) #57"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10139",
        "name": "Marvel Comics Presents (1988) #58"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10140",
        "name": "Marvel Comics Presents (1988) #59"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10183",
        "name": "Marvel Comics Presents (1988) #98"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4296",
        "name": "Marvel Comics Presents: Wolverine Vol. 3 (Trade Paperback)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 21,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010765/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23505",
        "name": "BLOODSTONE & THE LEGION OF MONSTERS TPB (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3741",
        "name": "Doctor Strange, Sorcerer Supreme (1988 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2013",
        "name": "Ghost Rider (1973 - 1983)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3730",
        "name": "Giant-Size Creatures (1974)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1505",
        "name": "Giant-Size Marvel (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20999",
        "name": "Giant-Size Werewolf by Night (1974)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9914",
        "name": "Legion of Monsters (2011 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2039",
        "name": "Marvel Comics Presents (1988 - 1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1696",
        "name": "Marvel Comics Presents: Wolverine Vol. 3 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
        "name": "Marvel Premiere (1972 - 1981)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3717",
        "name": "Marvel Spotlight (1971 - 1977)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3716",
        "name": "Marvel Team-Up (1972 - 1985)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/19099",
        "name": "Moon Knight (1980 - 1984)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20488",
        "name": "Moon Knight (2016 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2073",
        "name": "Spider-Woman (1978 - 1983)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5850",
        "name": "Strange Tales (1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6687",
        "name": "Werewolf By Night (1972 - 1977)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23593",
        "name": "Werewolf by Night: The Complete Collection Vol. 1 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23921",
        "name": "Werewolf by Night: The Complete Collection Vol. 2 (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24838",
        "name": "Werewolf by Night: The Complete Collection Vol. 3 (2018)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 92,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010765/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/20008",
        "name": "Full Moon On the Highway!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/20305",
        "name": "Cover #20305",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/20921",
        "name": "The Beast Within",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/20951",
        "name": "The Fangs of Werewolf By Night",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23413",
        "name": "The Moon Is A Harsh Mistress",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23419",
        "name": "The Gathering Storm [Children of the Beast]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23425",
        "name": "Trail of Blood [Children of the Beast]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23431",
        "name": "Leader of the Pack [Children of the Beast]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23437",
        "name": "Communion [Children of the Beast]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23443",
        "name": "[Children of the Beast]",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23696",
        "name": "Wild at Heart",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41560",
        "name": "Cover #41560",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41841",
        "name": "Cover #41841",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41842",
        "name": "[Night of Full Moon--Night of Fear!]",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41864",
        "name": "Cover #41864",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41865",
        "name": "The Thing In the Cellar",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41874",
        "name": "Cover #41874",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/41875",
        "name": "Island of the Damned",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42875",
        "name": "Waiter, There's a Werewolf in my Soup!",
        "type": "text article"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/43245",
        "name": "Enter: Werewolf by Night!",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010765/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2547/werewolf_by_night?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Werewolf_By_Night?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010765/werewolf_by_night?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009710,
  "name": "Wendigo",
  "description": "",
  "modified": "2011-05-24T16:45:41-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/70/4ce5a1fa7a013",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009710",
  "comics": {
    "available": 17,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009710/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1343",
        "name": "Best of Wolverine Vol. 1 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8991",
        "name": "Incredible Hulk (1962) #180"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10844",
        "name": "Spider-Man (1990) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10855",
        "name": "Spider-Man (1990) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10768",
        "name": "Spider-Man (1990) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10769",
        "name": "Spider-Man (1990) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10770",
        "name": "Spider-Man (1990) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12459",
        "name": "Uncanny X-Men (1963) #140"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66872",
        "name": "Weapon H (2018) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14069",
        "name": "Wolverine (1988) #129"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14071",
        "name": "Wolverine (1988) #130"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14086",
        "name": "Wolverine (1988) #144"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14116",
        "name": "Wolverine (1988) #171"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14117",
        "name": "Wolverine (1988) #172"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14121",
        "name": "Wolverine (1988) #176"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21962",
        "name": "Wolverine Origins (2006) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67584",
        "name": "Wolverine: The Amazing Immortal Man and Other Bloody Tales (Trade Paperback)"
      }
    ],
    "returned": 17
  },
  "series": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009710/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1207",
        "name": "Best of Wolverine Vol. 1 (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2021",
        "name": "Incredible Hulk (1962 - 1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2069",
        "name": "Spider-Man (1990 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24097",
        "name": "Weapon H (2018 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
        "name": "Wolverine (1988 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2375",
        "name": "Wolverine Origins (2006 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24370",
        "name": "Wolverine: The Amazing Immortal Man and Other Bloody Tales (2018)"
      }
    ],
    "returned": 8
  },
  "stories": {
    "available": 20,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009710/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15469",
        "name": "Fist to Fist With the Savage Fury of Wen-Di-Go!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18507",
        "name": "And the Wind Howls Wendigo",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18509",
        "name": "And Now, The Wolverine",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23746",
        "name": "interior to Spider-Man (1990) #10",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23747",
        "name": "interior to Spider-Man (1990) #11",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23748",
        "name": "interior to Spider-Man (1990) #12",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/23917",
        "name": "interior to Spider-Man (1990) #9",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28627",
        "name": "Fury of the Wendigo",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28631",
        "name": "The Price of Survival",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28663",
        "name": "First Cut!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28723",
        "name": "'Nuff Said",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28724",
        "name": "Stay Alive Part 2",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28727",
        "name": "Stay Alive! Conclusion",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28738",
        "name": "The Logan Files Epilogue",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/48313",
        "name": "Wolverine Origins (2006) #28",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67033",
        "name": "Spider-Man 8 cover",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/79773",
        "name": "Cover #79773",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/79777",
        "name": "Incredible Hulks (2009) #631",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/144899",
        "name": "cover from Weapon H (2018) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/146354",
        "name": "cover from WOLVERINE: THE AMAZING IMMORTAL MAN AND OTHER BLOODY TALES TPB (2018) #1",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009710/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2545/wendigo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wendigo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009710/wendigo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010742,
  "name": "Wendell Vaughn",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/4c003744919ef",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010742",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010742/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010742/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010742/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010742/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2815/wendell_vaughn?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Quasar_%28Wendell_Vaughn%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010742/wendell_vaughn?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011402,
  "name": "Wendell Rand",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011402",
  "comics": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011402/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15973",
        "name": "Immortal Iron Fist (2006) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16158",
        "name": "Immortal Iron Fist (2006) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16534",
        "name": "Immortal Iron Fist (2006) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17258",
        "name": "Immortal Iron Fist (2006) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17393",
        "name": "Immortal Iron Fist (2006) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17635",
        "name": "Immortal Iron Fist (2006) #13"
      }
    ],
    "returned": 6
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011402/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1140",
        "name": "Immortal Iron Fist (2006 - 2009)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011402/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/32621",
        "name": "TBD 1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33007",
        "name": "TBD 2 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33346",
        "name": "TBD 3 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36169",
        "name": "TBD 4 of 7",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36462",
        "name": "TBD 5 of 7",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36902",
        "name": "TBD 6 of 7",
        "type": "interiorStory"
      }
    ],
    "returned": 6
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011402/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2930/wendell_rand?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011402/wendell_rand?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009709,
  "name": "Weapon X",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009709",
  "comics": {
    "available": 39,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009709/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62094",
        "name": "All-New Wolverine Vol. 5: Orphans of X (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66489",
        "name": "Deadpool by Posehn & Duggan: The Complete Collection Vol. 2 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60850",
        "name": "The Totally Awesome Hulk (2015) #20"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62237",
        "name": "The Totally Awesome Hulk Vol. 4: My Best Friends Are Monsters (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62710",
        "name": "Weapon X (2017) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18099",
        "name": "Weapon X (1995) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18100",
        "name": "Weapon X (1995) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18101",
        "name": "Weapon X (1995) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18102",
        "name": "Weapon X (1995) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18073",
        "name": "Weapon X (2002) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18074",
        "name": "Weapon X (2002) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/246",
        "name": "Weapon X (2002) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/245",
        "name": "Weapon X (2002) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/244",
        "name": "Weapon X (2002) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/230",
        "name": "Weapon X (2002) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/243",
        "name": "Weapon X (2002) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/241",
        "name": "Weapon X (2002) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/212",
        "name": "Weapon X (2002) #19"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/239",
        "name": "Weapon X (2002) #20"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70092",
        "name": "Weapon X (2017) #21"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 18,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009709/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22728",
        "name": "All-New Wolverine Vol. 5: Orphans of X (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24086",
        "name": "Deadpool by Posehn & Duggan: The Complete Collection Vol. 2 (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20614",
        "name": "The Totally Awesome Hulk (2015 - 2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22860",
        "name": "The Totally Awesome Hulk Vol. 4: My Best Friends Are Monsters (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/543",
        "name": "Weapon X (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3635",
        "name": "Weapon X (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23012",
        "name": "Weapon X (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23421",
        "name": "Weapon X Vol. 1: Weapons of Mutant Destruction Prelude (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24026",
        "name": "Weapon X Vol. 2: The Hunt For Weapon H (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23031",
        "name": "Weapons of Mutant Destruction (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7202",
        "name": "Wolverine Weapon X (2009 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
        "name": "X-Force (1991 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/798",
        "name": "X-Men: Age of Apocalypse (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23702",
        "name": "X-Men: Age of Apocalypse - Termination (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1583",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1684",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 3 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1685",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 4 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1345",
        "name": "X-Men: The New Age of Apocalypse (2005)"
      }
    ],
    "returned": 18
  },
  "stories": {
    "available": 39,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009709/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/600",
        "name": "WEAPON X (2002) #20",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/868",
        "name": "WEAPON X (2002) #19",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1131",
        "name": "WEAPON X (2002) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1302",
        "name": "WEAPON X (2002) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1606",
        "name": "WEAPON X (2002) #14",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1774",
        "name": "WEAPON X (2002) #16",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1784",
        "name": "WEAPON X (2002) #21",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1786",
        "name": "WEAPON X (2002) #22",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1790",
        "name": "WEAPON X (2002) #26",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1792",
        "name": "WEAPON X (2002) #23",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1794",
        "name": "WEAPON X (2002) #24",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1796",
        "name": "WEAPON X (2002) #25",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1798",
        "name": "WEAPON X (2002) #28",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1974",
        "name": "WEAPON X (2002) #17",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2160",
        "name": "WEAPON X (2002) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4030",
        "name": "X-MEN: AGE OF APOCALYPSE (2005) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38244",
        "name": "X-Force (1991) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38448",
        "name": "X-Facts",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38451",
        "name": "X-Facts: Reality Checked",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38454",
        "name": "X-Facts: Where Have All The Heroes Gone?",
        "type": ""
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009709/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2541/weapon_x?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009709/weapon_x?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011133,
  "name": "Weapon Omega",
  "description": "",
  "modified": "2010-11-18T15:57:10-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce5a526259fd",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011133",
  "comics": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011133/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17384",
        "name": "Marvel Comics Presents (2007) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/27735",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989) #32"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26966",
        "name": "Uncanny X-Men (1963) #513"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26967",
        "name": "Uncanny X-Men (1963) #514"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22434",
        "name": "Weapon Omega (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40849",
        "name": "X-Men Legacy (2008) #264"
      }
    ],
    "returned": 6
  },
  "series": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011133/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2815",
        "name": "Marvel Comics Presents (2007 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8852",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6057",
        "name": "Weapon Omega (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3754",
        "name": "X-Men Legacy (2008 - 2012)"
      }
    ],
    "returned": 5
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011133/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36443",
        "name": "Vanguard 4 of 12; Weapon Omega 4 of 12",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/49387",
        "name": "Marvel Comics Presents 1-12 (Weapon Omega story); Omega Flight prequel from Civil War: The Initiative",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/59244",
        "name": "Uncanny X-Men (1963) #513",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/59245",
        "name": "Interior #59245",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/59247",
        "name": "Interior #59247",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/68696",
        "name": "Nick Fury, Agent of SHIELD 32 cover",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92522",
        "name": "X-Men Legacy (2008) #264",
        "type": "cover"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011133/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2539/weapon_omega?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wild_Child?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011133/weapon_omega?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010992,
  "name": "Wasp (Ultimate)",
  "description": "Janet Van Dyne has the ability to shrink down to the size of an insect and has the insect-like properties of her namesake, the wasp.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/70/4c00329438aa0",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010992",
  "comics": {
    "available": 23,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010992/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18481",
        "name": "Ultimate Adventures (2002) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18482",
        "name": "Ultimate Adventures (2002) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1934",
        "name": "Ultimate Adventures Vol. 1: One Tin Soldier (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1204",
        "name": "Ultimate Adventures Vol. I (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20836",
        "name": "Ultimate Fantastic Four (2003) #52"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5597",
        "name": "Ultimate Power (2006) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13476",
        "name": "Ultimate Power (2006) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16518",
        "name": "Ultimate Power (2006) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18474",
        "name": "Ultimate War (2003) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18475",
        "name": "Ultimate War (2003) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18476",
        "name": "Ultimate War (2003) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18477",
        "name": "Ultimate War (2003) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1158",
        "name": "Ultimate X-Men Vol. 5: Ultimate War (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5715",
        "name": "Ultimates 2 (2004) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15893",
        "name": "Ultimates 2 Vol. 2: Grand Theft America (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17378",
        "name": "Ultimates 3 (2007) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17377",
        "name": "Ultimates 3 (2007) #1 (Villains Gatefold)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17617",
        "name": "Ultimates 3 (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17618",
        "name": "Ultimates 3 (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20663",
        "name": "Ultimates 3 (2007) #3"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 11,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010992/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/469",
        "name": "Ultimate Adventures (2002 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1173",
        "name": "Ultimate Adventures Vol. 1: One Tin Soldier (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/261",
        "name": "Ultimate Adventures Vol. I (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/702",
        "name": "Ultimate Fantastic Four (2003 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1124",
        "name": "Ultimate Power (2006 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3659",
        "name": "Ultimate War (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/216",
        "name": "Ultimate X-Men Vol. 5: Ultimate War (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/709",
        "name": "Ultimates 2 (2004 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2422",
        "name": "Ultimates 2 Vol. 2: Grand Theft America (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3188",
        "name": "Ultimates 3 (2007 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7515",
        "name": "Ultimates 3: Who Killed the Scarlet Witch? (2009 - Present)"
      }
    ],
    "returned": 11
  },
  "stories": {
    "available": 29,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010992/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2749",
        "name": "6 of 6 - Grand Theft America",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6186",
        "name": "ULTIMATE POWER (2006) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8131",
        "name": "6 of 6 - Grand Theft America",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8679",
        "name": "ULTIMATE POWER (2006) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33307",
        "name": "ULTIMATE POWER (2006) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36428",
        "name": "Sex, Lies, and DVDs 1 of 5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36430",
        "name": "Ultimates 3 (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36431",
        "name": "Sex, Lies, and DVDs 1 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36864",
        "name": "Ultimates 3 (2007) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36865",
        "name": "Sex, Lies, and DVDs 2 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36866",
        "name": "Ultimates 3 (2007) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36867",
        "name": "Sex, Lies, and DVDs 2 of 5",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39348",
        "name": "Interior #39348",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39351",
        "name": "Interior #39351",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39354",
        "name": "Interior #39354",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39356",
        "name": "The Ultimates vs. Ultimate X-Men",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39357",
        "name": "Interior #39357",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39361",
        "name": "Ultimate Adventures (2002) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39362",
        "name": "Orangutans are skeptical of changes in their cages...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/39363",
        "name": "Interior",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010992/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2535/wasp?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wasp_%28Ultimate%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010992/wasp_ultimate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009707,
  "name": "Wasp",
  "description": "When Janet Van Dyne's father died, she convinced her father's associate Hank Pym to give her a supply of \"Pym particles\"; Pym also subjected her to a procedure which granted her the ability to, upon shrinking, grow wings and fire blasts of energy, which she called her \"wasp's stings.\"",
  "modified": "2014-06-05T17:24:02-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/c0/5390dfd5ef165",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009707",
  "comics": {
    "available": 377,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24348",
        "name": "Adam: Legend of the Blue Marvel (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22461",
        "name": "Adam: Legend of the Blue Marvel (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/56436",
        "name": "All-New Wolverine (2015) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55367",
        "name": "All-New, All-Different Avengers (2015) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67706",
        "name": "Ant-Man & the Wasp: Living Legends (2018) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37655",
        "name": "Ant-Man & Wasp: Small World (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67309",
        "name": "Ant-Man and the Wasp Adventures (Digest)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41530",
        "name": "Ant-Man: Astonishing Origins (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17490",
        "name": "Avengers (1998) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
        "name": "Avengers (1998) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
        "name": "Avengers (1998) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17757",
        "name": "Avengers (1996) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17523",
        "name": "Avengers (1998) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17758",
        "name": "Avengers (1996) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7299",
        "name": "Avengers (1963) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7332",
        "name": "Avengers (1963) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17763",
        "name": "Avengers (1996) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17752",
        "name": "Avengers (1996) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17491",
        "name": "Avengers (1998) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6953",
        "name": "Avengers (1963) #10"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 151,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7524",
        "name": "Adam: Legend of the Blue Marvel (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6079",
        "name": "Adam: Legend of the Blue Marvel (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20682",
        "name": "All-New Wolverine (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
        "name": "All-New, All-Different Avengers (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24415",
        "name": "Ant-Man & the Wasp: Living Legends (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13540",
        "name": "Ant-Man & Wasp: Small World (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24323",
        "name": "Ant-Man and the Wasp Adventures (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24418",
        "name": "Ant-Man: Astonishing Origins (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
        "name": "Avengers (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
        "name": "Avengers (1996 - 1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
        "name": "Avengers Academy (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
        "name": "Avengers Annual (1967 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23945",
        "name": "Avengers Annual (2001)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
        "name": "Avengers Assemble (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
        "name": "Avengers Assemble (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
        "name": "Avengers Assemble Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
        "name": "Avengers Assemble Vol. 3 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
        "name": "Avengers Assemble Vol. 4 (2007)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 403,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1024",
        "name": "Avengers (1998) #80",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1026",
        "name": "Avengers (1998) #81",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1040",
        "name": "Avengers (1998) #502",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1649",
        "name": "Avengers (1998) #77",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1947",
        "name": "Avengers (1998) #78",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1949",
        "name": "Avengers (1998) #79",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2299",
        "name": "ULTIMATES (2002) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2359",
        "name": "1 of",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2723",
        "name": "ULTIMATES 2 (2004) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4185",
        "name": "2 of 4 - 4XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5621",
        "name": "1 of 6 - 6XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5884",
        "name": "4 of 7 - 7XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5886",
        "name": "Cover #5886",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8237",
        "name": "Irredeemable Ant-Man (2006) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8340",
        "name": "2 of 6 - Ultron",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8682",
        "name": "3 of 6 - Ultron; THE INITIATIVE BANNER",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12199",
        "name": "Cover #12199",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12215",
        "name": "The Human Top",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12241",
        "name": "Cover #12241",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12260",
        "name": "Cover #12260",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 14,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009707/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/234",
        "name": "Avengers Disassembled"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/239",
        "name": "Crossing"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/315",
        "name": "Infinity"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/255",
        "name": "Initiative"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
        "name": "Secret Empire"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/269",
        "name": "Secret Invasion"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
        "name": "Secret Wars"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
        "name": "Secret Wars II"
      }
    ],
    "returned": 14
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2535/wasp?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wasp?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009707/wasp?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009706,
  "name": "Warstar",
  "description": "Warstar, a former member of the Imperial Guard, was one of eight Imperial Guardsmen chosen to battle the team of superhuman Earthling mutants known as the X-Men over the fate of Phoenix, a primal force of the cosmos that had assumed the form of the X-Man Jean Grey.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/e0/4c003a73b6673",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009706",
  "comics": {
    "available": 9,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009706/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15916",
        "name": "Fantastic Four/Inhumans (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/9325",
        "name": "Inhumans (2000) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1587",
        "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12455",
        "name": "Uncanny X-Men (1963) #137"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13698",
        "name": "Uncanny X-Men (1963) #157"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13816",
        "name": "Uncanny X-Men (1963) #275"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13928",
        "name": "Uncanny X-Men (1963) #387"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1079",
        "name": "X-Men Visionaries: Jim Lee (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4115",
        "name": "X-Men: The Dark Phoenix Saga (New Printing) (Trade Paperback)"
      }
    ],
    "returned": 9
  },
  "series": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009706/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2445",
        "name": "Fantastic Four/Inhumans (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2027",
        "name": "Inhumans (2000)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1440",
        "name": "Marvel Masterworks: The Uncanny X-Men Vol. 5 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/139",
        "name": "X-Men Visionaries: Jim Lee (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1775",
        "name": "X-Men: The Dark Phoenix Saga (New Printing) (2006)"
      }
    ],
    "returned": 6
  },
  "stories": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009706/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15462",
        "name": "The Fate of the Phoenix!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25378",
        "name": "The Darkest Hour",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27821",
        "name": "Hide-'N'-Seek!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28060",
        "name": "The Path Not Taken",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28321",
        "name": "Cry Justice, Cry Vengeance",
        "type": "interiorStory"
      }
    ],
    "returned": 5
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009706/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2531/warstar?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warstar?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009706/warstar?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010668,
  "name": "Warren Worthington III",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010668",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010668/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12251",
        "name": "X-Factor (1986) #34"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010668/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010668/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22244",
        "name": "X-FACTOR (1986) #34",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010668/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2802/warren_worthington_iii?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010668/warren_worthington_iii?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009705,
  "name": "Warpath",
  "description": "James Proudstar was once a member of Professor X's New Mutants and is currently a member of the X-Men black ops team, X-Force.",
  "modified": "2013-10-17T15:13:23-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/e0/526035de08b23",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009705",
  "comics": {
    "available": 207,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009705/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67717",
        "name": "Astonishing X-Men (2017) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22323",
        "name": "Cable (2008) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22324",
        "name": "Cable (2008) #7 (Zombie Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/22930",
        "name": "Cable (2008) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23126",
        "name": "Cable (2008) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23971",
        "name": "Cable (2008) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23972",
        "name": "Cable (2008) #13 (MW, 50/50 Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24171",
        "name": "Cable (2008) #14"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24172",
        "name": "Cable (2008) #14 (MW, 50/50 Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24631",
        "name": "Cable (2008) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24632",
        "name": "Cable (2008) #15 (MW, 50/50 Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7395",
        "name": "Cable (1993) #21"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7452",
        "name": "Cable (1993) #73"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7454",
        "name": "Cable (1993) #75"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7456",
        "name": "Cable (1993) #77"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7457",
        "name": "Cable (1993) #78"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67905",
        "name": "Cable (2017) #158"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66300",
        "name": "Cable & X-Force: Onslaught Rising (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21636",
        "name": "Counter X Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/8465",
        "name": "Deadpool (1997) #12"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 42,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009705/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23262",
        "name": "Astonishing X-Men (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22386",
        "name": "Cable (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1995",
        "name": "Cable (1993 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4002",
        "name": "Cable (2008 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24019",
        "name": "Cable & X-Force: Onslaught Rising (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5260",
        "name": "Counter X Vol. 1 (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2005",
        "name": "Deadpool (1997 - 2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1430",
        "name": "Marvel Weddings (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2053",
        "name": "New Mutants Annual (1984 - 1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1807",
        "name": "New X-Men (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2281",
        "name": "New X-Men (2001 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/56",
        "name": "New X-Men Vol. III: New Worlds (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20614",
        "name": "The Totally Awesome Hulk (2015 - 2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22860",
        "name": "The Totally Awesome Hulk Vol. 4: My Best Friends Are Monsters (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3254",
        "name": "Uncanny X-Men: Extremists (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23012",
        "name": "Weapon X (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23421",
        "name": "Weapon X Vol. 1: Weapons of Mutant Destruction Prelude (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24026",
        "name": "Weapon X Vol. 2: The Hunt For Weapon H (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24368",
        "name": "Weapon X Vol. 3: Modern Warfare (2018)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 247,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009705/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19865",
        "name": "Kings of Pain Part 3: Queens of Sacrifice",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21637",
        "name": "Cover #21637",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22101",
        "name": "Phalanx Covenant: Life Signs Part 1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24210",
        "name": "\"...Our Regularly Scheduled Program...\"",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24331",
        "name": "CABLE (1993) #73",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24332",
        "name": "Pestilence!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24337",
        "name": "Who is Worthy to Break the Seals...?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24346",
        "name": "False Hoods",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24349",
        "name": "I Still Believe I Cannot Be Saved",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24495",
        "name": "Racing the Night",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24531",
        "name": "Deadpool (1997) #12",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28098",
        "name": "Overture",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28100",
        "name": "Familiar Refrain",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28102",
        "name": "Crescendo",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28118",
        "name": "Uncanny X-Men (1963) #304",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28176",
        "name": "The Splinter Of Our Discontent",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28300",
        "name": "The End of the World as We Know It",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28305",
        "name": "What Dreams May Come...",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28323",
        "name": "Dream's End Part I: The Past is but Prologue",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29153",
        "name": "Fingers on the Trigger",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009705/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/249",
        "name": "Fatal Attractions"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/32",
        "name": "Kings of Pain"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/298",
        "name": "Messiah War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      }
    ],
    "returned": 5
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2527/warpath?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warpath?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009705/warpath?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011287,
  "name": "Warlock (Technarchy)",
  "description": "The New Mutants' Warlock is an alien being from an unidentified world where the a sentient life forms are \"techno-organic\" life that resembles circuitry and machinery in various ways.",
  "modified": "2011-07-14T14:28:15-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/e0/4da612d77cbd0",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011287",
  "comics": {
    "available": 22,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011287/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64874",
        "name": "Fallen Angels (1987) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40566",
        "name": "Journey Into Mystery (2011) #637"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40552",
        "name": "Journey Into Mystery (2011) #638"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60137",
        "name": "New Avengers (2015) #16"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26054",
        "name": "New Mutants (2009) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26055",
        "name": "New Mutants (2009) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26056",
        "name": "New Mutants (2009) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26057",
        "name": "New Mutants (2009) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26058",
        "name": "New Mutants (2009) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/26048",
        "name": "New Mutants (2009) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40170",
        "name": "New Mutants (2009) #23 (2nd Printing Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36501",
        "name": "New Mutants (2009) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39280",
        "name": "New Mutants (2009) #25 (Adams Variant )"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40987",
        "name": "New Mutants (2009) #25 (X-Man Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36504",
        "name": "New Mutants (2009) #29"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/36503",
        "name": "New Mutants (2009) #30"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38080",
        "name": "New Mutants (2009) #33"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/41448",
        "name": "New Mutants (2009) #33 (Keown Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10426",
        "name": "New Mutants (1983) #84"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37592",
        "name": "New Mutants Classic Vol. 6 (Trade Paperback)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011287/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23621",
        "name": "Fallen Angels (1987)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/14764",
        "name": "Journey Into Mystery (2011 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20841",
        "name": "New Avengers (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
        "name": "New Mutants (1983 - 1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7455",
        "name": "New Mutants (2009 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13519",
        "name": "New Mutants Classic Vol. 6 (2010 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2504",
        "name": "Nova (2007 - 2010)"
      }
    ],
    "returned": 7
  },
  "stories": {
    "available": 30,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011287/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21553",
        "name": "Cover #21553",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44694",
        "name": "Technarchy 1 of 2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/45595",
        "name": "Technarchy 2 of 2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57384",
        "name": "New Mutants (2009) #10",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57385",
        "name": "Interior #57385",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57396",
        "name": "New Mutants (2009) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57397",
        "name": "Interior #57397",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57398",
        "name": "New Mutants (2009) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57399",
        "name": "Interior #57399",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57400",
        "name": "New Mutants (2009) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57401",
        "name": "Interior #57401",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57402",
        "name": "New Mutants (2009) #8",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57403",
        "name": "Interior #57403",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57404",
        "name": "New Mutants (2009) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/57405",
        "name": "Interior #57405",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/81031",
        "name": "Cover #81031",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/81035",
        "name": "NEW MUTANTS (2009) #30",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/81037",
        "name": "Cover #81037NEW MUTANTS (2009) #29",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/81038",
        "name": "Interior #81038",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/83111",
        "name": "Interior #83111",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011287/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/308",
        "name": "X-Men: Regenesis"
      }
    ],
    "returned": 3
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2526/warlock?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warlock_(Technarchy)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011287/warlock_technarchy?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009704,
  "name": "Warlock (Janie Chin)",
  "description": "College design student Janie Chin was transformed by Adam Warlock into a female version of him, who then tried to cure the planet.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009704",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009704/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009704/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009704/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009704/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2526/warlock?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warlock_(Janie_Chin)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009704/warlock_janie_chin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010372,
  "name": "Warhawk (Mitchell Tanner)",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010372",
  "comics": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010372/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70734",
        "name": "Black Goliath (1976) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/10210",
        "name": "Marvel Premiere (1972) #23"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62336",
        "name": "Power Man and Iron Fist (1978) #83"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12426",
        "name": "Uncanny X-Men (1963) #110"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4100",
        "name": "Uncanny X-Men Omnibus Vol. 1 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14282",
        "name": "X-Men (1991) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14293",
        "name": "X-Men (1991) #11"
      }
    ],
    "returned": 7
  },
  "series": {
    "available": 6,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010372/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23765",
        "name": "Black Goliath (1976)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2045",
        "name": "Marvel Premiere (1972 - 1981)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20674",
        "name": "Power Man and Iron Fist (1978 - 1986)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1723",
        "name": "Uncanny X-Men Omnibus Vol. 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2265",
        "name": "X-Men (1991 - 2001)"
      }
    ],
    "returned": 6
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010372/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15401",
        "name": "Uncanny X-Men (1963) #110",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/19921",
        "name": "The Name Is...Warhawk",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29125",
        "name": "Last Stand",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29139",
        "name": "Over...Again",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/134990",
        "name": "story to Marvel Premiere #23",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/135065",
        "name": "story to Power Man and Iron Fist #83",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/157445",
        "name": "cover from Black Goliath (1976) #2",
        "type": "cover"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010372/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2525/warhawk?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warhawk_(Mitchell_Tanner)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010372/warhawk_mitchell_tanner?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011121,
  "name": "Warbound",
  "description": "",
  "modified": "2014-05-01T14:11:10-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/2/f0/53628de09a012",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011121",
  "comics": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011121/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/64909",
        "name": "Incredible Hulk (2017) #709"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17361",
        "name": "World War Hulk: Warbound (2007) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23232",
        "name": "World War Hulk: Warbound (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23233",
        "name": "World War Hulk: Warbound (2007) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23235",
        "name": "World War Hulk: Warbound (2007) #5"
      }
    ],
    "returned": 5
  },
  "series": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011121/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23635",
        "name": "Incredible Hulk (2017 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3171",
        "name": "World War Hulk: Warbound (2007)"
      }
    ],
    "returned": 2
  },
  "stories": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011121/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36394",
        "name": "WORLD WAR HULK: WARBOUND (2007) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52652",
        "name": "WORLD WAR HULK: WARBOUND (2007) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52654",
        "name": "WORLD WAR HULK: WARBOUND (2007) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52658",
        "name": "WORLD WAR HULK: WARBOUND (2007) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/140867",
        "name": "cover from Incredible Hulk (2017) #709",
        "type": "cover"
      }
    ],
    "returned": 5
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011121/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1011121/warbound?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Warbound?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011121/warbound?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009703,
  "name": "Warbird",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009703",
  "comics": {
    "available": 30,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009703/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40808",
        "name": "Astonishing X-Men (2004) #56"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40807",
        "name": "Astonishing X-Men (2004) #57"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45819",
        "name": "Astonishing X-Men (2004) #58"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45823",
        "name": "Astonishing X-Men (2004) #62"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45824",
        "name": "Astonishing X-Men (2004) #63"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45825",
        "name": "Astonishing X-Men (2004) #64"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45826",
        "name": "Astonishing X-Men (2004) #65"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45827",
        "name": "Astonishing X-Men (2004) #66"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45828",
        "name": "Astonishing X-Men (2004) #67"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/45829",
        "name": "Astonishing X-Men (2004) #68"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17531",
        "name": "Avengers (1998) #47"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1038",
        "name": "Avengers: The Kang Dynasty (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5688",
        "name": "Ms. Marvel (2006) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16624",
        "name": "Ms. Marvel Vol. 2: Civil War (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/53686",
        "name": "Quicksilver (1997) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14074",
        "name": "Wolverine (1988) #133"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38579",
        "name": "Wolverine & the X-Men (2011) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38581",
        "name": "Wolverine & the X-Men (2011) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38577",
        "name": "Wolverine & the X-Men (2011) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38585",
        "name": "Wolverine & the X-Men (2011) #9"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009703/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/744",
        "name": "Astonishing X-Men (2004 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/98",
        "name": "Avengers: The Kang Dynasty (2002)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/987",
        "name": "Ms. Marvel (2006 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2927",
        "name": "Ms. Marvel Vol. 2: Civil War (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20086",
        "name": "Quicksilver (1997 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
        "name": "Wolverine (1988 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13910",
        "name": "Wolverine & the X-Men (2011 - 2014)"
      }
    ],
    "returned": 8
  },
  "stories": {
    "available": 32,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009703/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5576",
        "name": "2 of 2 - Rogue",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28637",
        "name": "The Great Escape Part 1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/37425",
        "name": "Avengers (1998) #47",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/84703",
        "name": "WOLVERINE & THE X-MEN (2011) #11",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90956",
        "name": "WOLVERINE & THE X-MEN (2011) #16",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90958",
        "name": "WOLVERINE & THE X-MEN (2011) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90960",
        "name": "WOLVERINE & THE X-MEN (2011) #17",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90962",
        "name": "WOLVERINE & THE X-MEN (2011) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90964",
        "name": "WOLVERINE & THE X-MEN (2011) #13",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92438",
        "name": "Astonishing X-Men (2004) #57",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92439",
        "name": "Interior #92439",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/92441",
        "name": "Interior #92441",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/95554",
        "name": "WOLVERINE & THE X-MEN (2011) #6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/95787",
        "name": "WOLVERINE & THE X-MEN (2011) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96185",
        "name": "WOLVERINE & THE X-MEN (2011) #8",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96188",
        "name": "WOLVERINE & THE X-MEN (2011) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96330",
        "name": "WOLVERINE & THE X-MEN (2011) #10",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96674",
        "name": "WOLVERINE & THE X-MEN (2011) #12",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96943",
        "name": "WOLVERINE & THE X-MEN (2011) #20",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/96945",
        "name": "WOLVERINE & THE X-MEN (2011) #19",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009703/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      }
    ],
    "returned": 2
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2523/warbird?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009703/warbird?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011226,
  "name": "War Machine (Ultimate)",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/a0/4ce5a5647d38b",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011226",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011226/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30589",
        "name": "Ultimate Comics Avengers 2 (2010) #2"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011226/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8499",
        "name": "Ultimate Comics Avengers 2 (2010)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011226/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/70004",
        "name": "ULTIMATE COMICS AVENGERS 2 (2010) #2",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011226/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2520/war_machine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/War%20Machine%20(Ultimate)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011226/war_machine_ultimate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010991,
  "name": "War Machine (Parnell Jacobs)",
  "description": "Parnell Jacobs was a member of the U.S. Army who fought in Sin-Congese civil war in Asia alongside Jim Rhodes and who later encountered the discarded armor of Rhodes' superhero alter-ego, War Machine, which Jacobs studied used for the basis of many arms designs.",
  "modified": "2014-04-29T14:14:41-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/f0/535febf826de5",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010991",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010991/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20862",
        "name": "Punisher War Journal (2006) #17"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010991/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1112",
        "name": "Punisher War Journal (2006 - 2009)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010991/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44672",
        "name": "Punisher War Journal (2006) #17",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010991/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2520/war_machine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/War_Machine_(Parnell_Jacobs)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010991/war_machine_parnell_jacobs?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1017304,
  "name": "War Machine (Marvel: Avengers Alliance)",
  "description": "",
  "modified": "2013-09-18T10:15:32-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/c/03/5239b57a59812",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017304",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017304/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017304/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017304/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017304/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2520/war_machine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1017304/war_machine_marvel_avengers_alliance?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1017322,
  "name": "War Machine (Iron Man 3 - The Official Game)",
  "description": "",
  "modified": "2013-09-18T11:06:14-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/5239c15d562d6",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1017322",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017322/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017322/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017322/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1017322/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2520/war_machine?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1017322/war_machine_iron_man_3_-_the_official_game?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009701,
  "name": "War (Abraham Kieros)",
  "description": "A young veteran wounded during the Vietnam War, Abraham Kieros was selected by Apocalypse to become the Horseman War.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009701",
  "comics": {
    "available": 13,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009701/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13835",
        "name": "Uncanny X-Men (1963) #294"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13836",
        "name": "Uncanny X-Men (1963) #295"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12230",
        "name": "X-Factor (1986) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12232",
        "name": "X-Factor (1986) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12240",
        "name": "X-Factor (1986) #24"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12241",
        "name": "X-Factor (1986) #25"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12242",
        "name": "X-Factor (1986) #26"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12243",
        "name": "X-Factor (1986) #27"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12265",
        "name": "X-Factor (1986) #47"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12306",
        "name": "X-Factor (1986) #84"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21430",
        "name": "X-Factor Visionaries: Peter David Vol. 4 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/18172",
        "name": "X-Men Chronicles (1995) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1780",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 1 (Trade Paperback)"
      }
    ],
    "returned": 13
  },
  "series": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009701/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5068",
        "name": "X-Factor Visionaries: Peter David Vol. 4 (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3640",
        "name": "X-Men Chronicles (1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1452",
        "name": "X-Men: The Complete Age of Apocalypse Epic Book 1 (2005)"
      }
    ],
    "returned": 5
  },
  "stories": {
    "available": 13,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009701/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22203",
        "name": "Whose Death Is It, Anyway?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22207",
        "name": "Die, Mutants, Die!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22223",
        "name": "Masks",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22224",
        "name": "Fall of the Mutants",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22225",
        "name": "Judgement Day!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22227",
        "name": "Casualties",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22229",
        "name": "Gifts!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22273",
        "name": "Guardian",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22362",
        "name": "Tough Love",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28098",
        "name": "Overture",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28100",
        "name": "Familiar Refrain",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38623",
        "name": "X-MEN CHRONICLES (1995) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38624",
        "name": "Origins",
        "type": "interiorStory"
      }
    ],
    "returned": 13
  },
  "events": {
    "available": 2,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009701/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/227",
        "name": "Age of Apocalypse"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/248",
        "name": "Fall of the Mutants"
      }
    ],
    "returned": 2
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2519/war?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/War_(Abraham_Kieros)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009701/war_abraham_kieros?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009700,
  "name": "Wallow",
  "description": "Max Pressman murdered his wife and attempted to murder his two children Michael and Melinda, but after police officer shot him before he could so, Pressman returned as a ghost-like entity, with only the face of Melinda's doll as his own.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009700",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009700/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009700/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009700/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009700/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2515/wallow?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wallow?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009700/wallow?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011267,
  "name": "Wallop",
  "description": "Walter was born, presumably in the decade of 1910s, into the ClanDestine-- his father, the immortal Adam Destine and his mother a magical genie.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/8/c0/4c002ef63d1e4",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011267",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011267/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011267/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011267/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011267/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2514/wallop?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wallop?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011267/wallop?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010849,
  "name": "Wallflower",
  "description": "Laurie Collins began to involuntarily manipulate anyone around her once her genetic mutation manifested, unable to control its effects.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010849",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010849/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010849/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010849/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010849/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2513/wallflower?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Wallflower?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010849/wallflower?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010990,
  "name": "Vulture (Blackie Drago)",
  "description": "Adrian Toomes, the Vulture, told his cellmate, Blackie Drago, the location of his Vulture costume.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/5/50/4c00329c0dc23",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010990",
  "comics": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010990/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62857",
        "name": "Spider-Man Vs. The Vulture (Trade Paperback)"
      }
    ],
    "returned": 1
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010990/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23055",
        "name": "Spider-Man Vs. The Vulture (2017)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010990/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/139361",
        "name": "Spider-Man Vs. The Vulture (2017)",
        "type": "cover"
      }
    ],
    "returned": 1
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010990/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2510/vulture?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vulture_%28Blackie_Drago%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010990/vulture_blackie_drago?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009699,
  "name": "Vulture (Adrian Toomes)",
  "description": "Adrian Toomes is a former electronics engineer who employs a special harness of his own design that allows him to fly and endows him with enhanced strength.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/50/4c003a7929d28",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009699",
  "comics": {
    "available": 87,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009699/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60151",
        "name": "A Year of Marvels (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6593",
        "name": "The Amazing Spider-Man (1963) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6866",
        "name": "The Amazing Spider-Man (1963) #48"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6867",
        "name": "The Amazing Spider-Man (1963) #49"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6883",
        "name": "The Amazing Spider-Man (1963) #63"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6884",
        "name": "The Amazing Spider-Man (1963) #64"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6484",
        "name": "The Amazing Spider-Man (1963) #100"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6539",
        "name": "The Amazing Spider-Man (1963) #150"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6621",
        "name": "The Amazing Spider-Man (1963) #224"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6639",
        "name": "The Amazing Spider-Man (1963) #240"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6640",
        "name": "The Amazing Spider-Man (1963) #241"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6811",
        "name": "The Amazing Spider-Man (1963) #396"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23927",
        "name": "Amazing Spider-Man (1999) #592"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24133",
        "name": "Amazing Spider-Man (1999) #593"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30298",
        "name": "Amazing Spider-Man (1999) #623"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31466",
        "name": "Amazing Spider-Man (1999) #623 (JUSKO VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/31465",
        "name": "Amazing Spider-Man (1999) #623 (VILLAIN VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30299",
        "name": "Amazing Spider-Man (1999) #624"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33540",
        "name": "Amazing Spider-Man (1999) #624 (YOU'RE FIRED VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/32537",
        "name": "Amazing Spider-Man (1999) #634 (50/50 VARIANT)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 44,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009699/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22102",
        "name": "A Year of Marvels (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2002",
        "name": "Daredevil (1964 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/449",
        "name": "Daredevil (1998 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/18",
        "name": "Daredevil Visionaries: Kevin Smith (Daredevil Vol. I: Guardian Devil) (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24",
        "name": "Daredevil: Love Labors Lost (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/378",
        "name": "Earth X (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1806",
        "name": "Earth X (New (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1427",
        "name": "Essential Peter Parker, the Spectacular Spider-Man Vol. (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/877",
        "name": "Friendly Neighborhood Spider-Man (2005 - 2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1895",
        "name": "Friendly Neighborhood Spider-Man Vol. 2: Mystery Date (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24197",
        "name": "Lethal Foes of Spider-Man (1993)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1102",
        "name": "Marvel 1602: Fantastick Four (2006 - 2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1389",
        "name": "Marvel Masterworks: The Amazing Spider-Man Vol. 7 - (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/292",
        "name": "Marvel Masterworks: The Amazing Spider-Man Vol. V - 2nd Edition (1st) (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22334",
        "name": "Marvel Masterworks: The Spectacular Spider-Man Vol. 1 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2301",
        "name": "Marvel Super Heroes (1990 - 1993)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/21849",
        "name": "Marvel Universe Ultimate Spider-Man Vs. The Sinister Six Vol. 2 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2055",
        "name": "New Mutants (1983 - 1991)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
        "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 89,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009699/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4682",
        "name": "2 of 3 - Vulture/Deb Whit",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6053",
        "name": "Marvel 1602: Fantastick Four (2006) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13538",
        "name": "The Spider Or The Man?",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13600",
        "name": "Cover #13600",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13602",
        "name": "Cover #13602",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13603",
        "name": "The Vulture Hangs High!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13653",
        "name": "Cover #13653",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13824",
        "name": "Cover #13824",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13862",
        "name": "Wings of Vengeance",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13864",
        "name": "In the Beginning",
        "type": ""
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14316",
        "name": "Cover #14316",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14350",
        "name": "Wings in the Night!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/16001",
        "name": "Cover #16001",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/16002",
        "name": "And Then You Die",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21552",
        "name": "The Quick and the Dead",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21554",
        "name": "The Sword's Edge",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21556",
        "name": "The Killing Stroke",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24914",
        "name": "Earth X Chapter Twelve",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24935",
        "name": "Earth X Chapter Eight",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/24938",
        "name": "Earth X Chapter Nine",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009699/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2510/vulture?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vulture_%28Adrian_Toomes%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009699/vulture_adrian_toomes?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011011,
  "name": "Vulcan (Gabriel Summers)",
  "description": "Vulcan is the third Summers brother and an Omega-level mutant who was thought long-dead by Professor X.",
  "modified": "2013-11-20T17:27:10-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/80/528d3629c2a91",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011011",
  "comics": {
    "available": 19,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011011/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/70735",
        "name": "Black Goliath (1976) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4434",
        "name": "Uncanny X-Men (1963) #475"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5498",
        "name": "Uncanny X-Men (1963) #480"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5631",
        "name": "Uncanny X-Men (1963) #481"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5942",
        "name": "Uncanny X-Men (1963) #483"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6077",
        "name": "Uncanny X-Men (1963) #484"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6223",
        "name": "Uncanny X-Men (1963) #485"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13423",
        "name": "Uncanny X-Men (1963) #486"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16023",
        "name": "Uncanny X-Men: Rise & Fall of the Shi'ar Empire (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60887",
        "name": "War of Kings Prelude: Road to War of Kings Omnibus (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5618",
        "name": "X-Men: Deadly Genesis (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3593",
        "name": "X-Men: Deadly Genesis (2005) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21057",
        "name": "X-Men: Emperor Vulcan (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16541",
        "name": "X-Men: Emperor Vulcan (2007) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17637",
        "name": "X-Men: Emperor Vulcan (2007) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23007",
        "name": "X-Men: Kingbreaker (2008) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23181",
        "name": "X-Men: Kingbreaker (2008) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23663",
        "name": "X-Men: Kingbreaker (2008) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23835",
        "name": "X-Men: Kingbreaker (2008) #4"
      }
    ],
    "returned": 19
  },
  "series": {
    "available": 9,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011011/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23765",
        "name": "Black Goliath (1976)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2555",
        "name": "Uncanny X-Men: Rise & Fall of the Shi'ar Empire (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22462",
        "name": "War of Kings Prelude: Road to War of Kings Omnibus (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1545",
        "name": "X-Men: Deadly Genesis (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/345",
        "name": "X-Men: Deadly Genesis (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/4513",
        "name": "X-Men: Emperor Vulcan (2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2837",
        "name": "X-Men: Emperor Vulcan (2007 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6418",
        "name": "X-Men: Kingbreaker (2008 - 2009)"
      }
    ],
    "returned": 9
  },
  "stories": {
    "available": 16,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011011/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/471",
        "name": "Cover #471",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/776",
        "name": "UNCANNY X-MEN (1963) #475",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/785",
        "name": "UNCANNY X-MEN (1963) #480",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/787",
        "name": "UNCANNY X-MEN (1963) #481",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/7611",
        "name": "UNCANNY X-MEN (1963) #484",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8077",
        "name": "UNCANNY X-MEN (1963) #485",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/8570",
        "name": "UNCANNY X-MEN (1963) #486",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/33359",
        "name": "X-MEN: EMPEROR VULCAN (2007) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/36905",
        "name": "X-MEN: EMPEROR VULCAN (2007) #5",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/51056",
        "name": "4XLS 1 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/51402",
        "name": "4XLS 2 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52400",
        "name": "4XLS 3 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/52882",
        "name": "4XLS 4 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66089",
        "name": "UNCANNY X-MEN (1963) #483",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/132244",
        "name": "story from War of Kings Prelude: Road to War of Kings (2017)",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/157447",
        "name": "cover from Black Goliath (1976) #3",
        "type": "cover"
      }
    ],
    "returned": 16
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011011/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/276",
        "name": "War of Kings"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2509/vulcan?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vulcan_%28Gabriel_Summers%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011011/vulcan_gabriel_summers?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009698,
  "name": "Vivisector",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009698",
  "comics": {
    "available": 19,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009698/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17962",
        "name": "X-Force (1991) #117"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17963",
        "name": "X-Force (1991) #118"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17964",
        "name": "X-Force (1991) #119"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17966",
        "name": "X-Force (1991) #120"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17967",
        "name": "X-Force (1991) #121"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17968",
        "name": "X-Force (1991) #122"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17969",
        "name": "X-Force (1991) #123"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17970",
        "name": "X-Force (1991) #124"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17971",
        "name": "X-Force (1991) #125"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17972",
        "name": "X-Force (1991) #126"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17973",
        "name": "X-Force (1991) #127"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17974",
        "name": "X-Force (1991) #128"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17975",
        "name": "X-Force (1991) #129"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1028",
        "name": "X-Force: Famous, Mutant & Mortal (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13405",
        "name": "X-Statix (2002) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13417",
        "name": "X-Statix (2002) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13418",
        "name": "X-Statix (2002) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13419",
        "name": "X-Statix (2002) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1093",
        "name": "X-Statix Vol. I (Trade Paperback)"
      }
    ],
    "returned": 19
  },
  "series": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009698/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3633",
        "name": "X-Force (1991 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/88",
        "name": "X-Force: Famous, Mutant & Mortal (2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/462",
        "name": "X-Statix (2002 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/153",
        "name": "X-Statix Vol. I (2003)"
      }
    ],
    "returned": 4
  },
  "stories": {
    "available": 20,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009698/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25957",
        "name": "[untitled]",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25984",
        "name": "[untitled]",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25989",
        "name": "[untitled]",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25993",
        "name": "[untitled]",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38201",
        "name": "Mister Sensitive",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38203",
        "name": "And Then There Were Six",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38204",
        "name": "Cover #38204",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38205",
        "name": "What's One Life?",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38209",
        "name": "Snikt!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38211",
        "name": "Lacuna: Part One: Captain Coconut",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38212",
        "name": "Cover #38212",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38213",
        "name": "Lacuna: Part Two: Larry King Has the Flu",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38214",
        "name": "Cover #38214",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38215",
        "name": "Tick Tock",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38218",
        "name": "Edie and Guy Finally Do It",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38220",
        "name": "One of Us",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38222",
        "name": "As I Die Lying",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38224",
        "name": "Because Louise",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38226",
        "name": "Someone Dies",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38229",
        "name": "X Storm!",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009698/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2498/vivisector?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009698/vivisector?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009697,
  "name": "Vision",
  "description": "The metal monstrosity called Ultron created the synthetic humanoid known as the Vision from the remains of the original android Human Torch of the 1940s to serve as a vehicle of vengeance against the Avengers.",
  "modified": "2016-05-02T15:51:46-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/9/d0/5111527040594",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009697",
  "comics": {
    "available": 500,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009697/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37406",
        "name": "Age of Ultron (2013) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55363",
        "name": "All-New, All-Different Avengers (2015) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55364",
        "name": "All-New, All-Different Avengers (2015) #11"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55365",
        "name": "All-New, All-Different Avengers (2015) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/55366",
        "name": "All-New, All-Different Avengers (2015) #13"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/60532",
        "name": "All-New, All-Different Avengers (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12668",
        "name": "Alpha Flight (1983) #127"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29195",
        "name": "Avengers (2010) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17490",
        "name": "Avengers (1998) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61373",
        "name": "Avengers (2016) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17751",
        "name": "Avengers (1996) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33335",
        "name": "Avengers (2010) #1 (HEROIC AGE VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33336",
        "name": "Avengers (2010) #1 (ROMITA JR. VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33483",
        "name": "Avengers (2010) #1 (DJURDJEVIC VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33562",
        "name": "Avengers (2010) #1 (ROMITA SR. VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/33572",
        "name": "Avengers (2010) #1 (I AM AN AVENGER BLANK COVER VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17756",
        "name": "Avengers (1996) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17501",
        "name": "Avengers (1998) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17512",
        "name": "Avengers (1998) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/17757",
        "name": "Avengers (1996) #3"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 144,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009697/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17318",
        "name": "Age of Ultron (2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22374",
        "name": "All-New, All-Different Avengers (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/20443",
        "name": "All-New, All-Different Avengers (2015 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
        "name": "Alpha Flight (1983 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/354",
        "name": "Avengers (1998 - 2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1991",
        "name": "Avengers (1963 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3621",
        "name": "Avengers (1996 - 1997)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
        "name": "Avengers (2016 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9085",
        "name": "Avengers (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1988",
        "name": "Avengers Annual (1967 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/15373",
        "name": "Avengers Assemble (2012 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1340",
        "name": "Avengers Assemble (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17305",
        "name": "Avengers Assemble Annual (2013 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1496",
        "name": "Avengers Assemble Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1737",
        "name": "Avengers Assemble Vol. 3 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1816",
        "name": "Avengers Assemble Vol. 4 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2929",
        "name": "Avengers Assemble Vol. 5 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23804",
        "name": "Avengers by Brian Michael Bendis: The Complete Collection Vol. 3 (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2384",
        "name": "Avengers Classic (2007 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24152",
        "name": "Avengers Epic Collection: The Avengers/Defenders War (2018)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 551,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009697/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3484",
        "name": "New Avengers (2004) #18",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3520",
        "name": "1 of 4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3526",
        "name": "4 of 4 - Family Matters",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5415",
        "name": "FANTASTIC FOUR: THE END (2006) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5894",
        "name": "6 of 7 - 7XLS",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5896",
        "name": "Cover #5896",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6135",
        "name": "Punisher War Journal (2006) #2",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/6139",
        "name": "Punisher War Journal (2006) #3",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/9020",
        "name": "Marvel's Pinwheel of Stars!",
        "type": "promo"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12717",
        "name": "FANTASTIC FOUR (1961) #230",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12778",
        "name": "Fantastic Four (1961) #256",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12779",
        "name": "The Annihilation Gambit",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12780",
        "name": "Fantastic Four (1961) #257",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12781",
        "name": "Fragments",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12791",
        "name": "The Search for Reed Richards",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12795",
        "name": "R and R",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/12801",
        "name": "Home Are The Heroes",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13170",
        "name": "Chaos in the Courtroom",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/13334",
        "name": "In Memoriam!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14445",
        "name": "AVENGERS (1963) #100",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 16,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009697/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/116",
        "name": "Acts of Vengeance!"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/314",
        "name": "Age of Ultron"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/310",
        "name": "Avengers VS X-Men"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/296",
        "name": "Chaos War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/238",
        "name": "Civil War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/253",
        "name": "Infinity Gauntlet"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/29",
        "name": "Infinity War"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/37",
        "name": "Maximum Security"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/336",
        "name": "Secret Empire"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/270",
        "name": "Secret Wars"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/271",
        "name": "Secret Wars II"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/273",
        "name": "Siege"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/294",
        "name": "The Thanos Imperative"
      }
    ],
    "returned": 16
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/comics/characters/1009697/vision?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vision_(Victor_Shade)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009697/vision?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010697,
  "name": "Virginia Dare",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010697",
  "comics": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010697/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/20630",
        "name": "1602 (2003) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/50114",
        "name": "1602 (2003) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/377",
        "name": "1602 (2003) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/148",
        "name": "1602 (2003) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/147",
        "name": "1602 (2003) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/145",
        "name": "1602 (2003) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/440",
        "name": "1602 (2003) #8"
      }
    ],
    "returned": 7
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010697/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/489",
        "name": "1602 (2003 - 2004)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010697/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1600",
        "name": "Cover #1600",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1616",
        "name": "Cover #1616",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/1723",
        "name": "Cover #1723",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2264",
        "name": "Cover #2264",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/2629",
        "name": "1602 #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/44869",
        "name": "Cover #44869",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/113142",
        "name": "Cover from 1602 #2",
        "type": "cover"
      }
    ],
    "returned": 7
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010697/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2808/virginia_dare?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Dare,_Virginia_(Earth-311)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010697/virginia_dare?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009696,
  "name": "Viper",
  "description": "After the apparent death of Baron von Strucker, Viper took the name Madame Hydra and took control of the New York-based faction of Hydra.",
  "modified": "2010-12-17T13:24:45-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009696",
  "comics": {
    "available": 51,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009696/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/23996",
        "name": "Astonishing Tales (2009) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7538",
        "name": "Captain America (1968) #157"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7561",
        "name": "Captain America (1968) #180"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7664",
        "name": "Captain America (1968) #283"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7775",
        "name": "Captain America (1968) #394"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7777",
        "name": "Captain America (1968) #396"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7800",
        "name": "Captain America (1968) #419"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5660",
        "name": "Captain America and the Falcon: Nomad (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65046",
        "name": "Daredevil Annual (1967) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1836",
        "name": "Excalibur (2004) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5589",
        "name": "Heroes Reborn: Iron Man (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/67343",
        "name": "Hunt for Wolverine: Mystery in Madripoor (2018) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/68599",
        "name": "Hunt for Wolverine: Mystery in Madripoor (2018) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16328",
        "name": "Iron Man (1996) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16334",
        "name": "Iron Man (1996) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16336",
        "name": "Iron Man (1996) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16338",
        "name": "Iron Man (1996) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16340",
        "name": "Iron Man (1996) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16329",
        "name": "Iron Man (1996) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2417",
        "name": "New Avengers (2004) #11"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 25,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009696/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6792",
        "name": "Astonishing Tales (2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1766",
        "name": "Captain America and the Falcon: Nomad (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/7665",
        "name": "Daredevil Annual (1967 - 1990)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/740",
        "name": "Excalibur (2004 - 2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1814",
        "name": "Heroes Reborn: Iron Man (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24317",
        "name": "Hunt for Wolverine: Mystery in Madripoor (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13577",
        "name": "Iron Man (1996 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9922",
        "name": "New Avengers (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
        "name": "New Avengers (2004 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1446",
        "name": "New Avengers Vol. 3: Secrets & Lies (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/367",
        "name": "New Avengers Vol.2: Sentry (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22342",
        "name": "New Mutants Epic Collection: Renewal (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/8852",
        "name": "Nick Fury, Agent of S.H.I.E.L.D. (1989 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5860",
        "name": "Punisher War Journal (1988 - 1995)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23385",
        "name": "S.H.I.E.L.D.: Hydra Reborn (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/6796",
        "name": "Secret Warriors (2008 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
        "name": "Wolverine (1988 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1849",
        "name": "Wolverine by Claremont & Miller (2006)"
      }
    ],
    "returned": 20
  },
  "stories": {
    "available": 46,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009696/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3261",
        "name": "2 of 2 - Save the Life of My Child",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3465",
        "name": "1 of 3 - Ronin",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3467",
        "name": "2 of 3 - Ronin",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3475",
        "name": "3 of 3 - Ronin",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17569",
        "name": "CAPTAIN AMERICA (1968) #157",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17615",
        "name": "Captain America (1968) #180",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17616",
        "name": "The Coming of The Nomad!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17830",
        "name": "Cover #17830",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18092",
        "name": "The Crimson Crusade",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18098",
        "name": "Trick Or Treat",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18158",
        "name": "Captain America (1968) #419",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/18159",
        "name": "Television Blind",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27452",
        "name": "A Whiff of Sartre's Madeline!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27854",
        "name": "Scarlet In Glory",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27856",
        "name": "To Have and Have Not",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28619",
        "name": "Cover #28619",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28621",
        "name": "Sabretooth is Back--But What Secret Makes Him Invincible?",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28622",
        "name": "Blood Wedding",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28626",
        "name": "Green For Death",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28628",
        "name": "Survival of the Fittest Part 1: Whatever It Takes...",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009696/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/318",
        "name": "Dark Reign"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2495/viper?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Viper_(Madame_Hydra)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009696/viper?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010666,
  "name": "Violations",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010666",
  "comics": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010666/comics",
    "items": [],
    "returned": 0
  },
  "series": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010666/series",
    "items": [],
    "returned": 0
  },
  "stories": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010666/stories",
    "items": [],
    "returned": 0
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010666/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2494/violations?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010666/violations?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009695,
  "name": "Vindicator",
  "description": "Heather McNeil-Hudson married James Hudson, founder of Canadian super-team, Alpha Flight, and donned a version of his Vindicator armor after his death.",
  "modified": "2011-06-17T13:31:18-0400",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/4c003a7f39967",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009695",
  "comics": {
    "available": 27,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009695/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12637",
        "name": "Alpha Flight (1983) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38570",
        "name": "Alpha Flight (2011) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39819",
        "name": "Alpha Flight (2011) #1 (Eaglesham Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38569",
        "name": "Alpha Flight (2011) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39818",
        "name": "Alpha Flight (2011) #2 (Eaglesham Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38565",
        "name": "Alpha Flight (2011) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/39820",
        "name": "Alpha Flight (2011) #3 (Eaglesham Variant)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/38568",
        "name": "Alpha Flight (2011) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12676",
        "name": "Alpha Flight (1983) #17"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12693",
        "name": "Alpha Flight (1983) #32"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12694",
        "name": "Alpha Flight (1983) #33"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12695",
        "name": "Alpha Flight (1983) #34"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12713",
        "name": "Alpha Flight (1983) #50"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12753",
        "name": "Alpha Flight (1983) #87"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12757",
        "name": "Alpha Flight (1983) #90"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6233",
        "name": "Alpha Flight Classic Vol. 1 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12611",
        "name": "Black Panther (1998) #42"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12612",
        "name": "Black Panther (1998) #43"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12613",
        "name": "Black Panther (1998) #44"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19797",
        "name": "Marvel Fanfare (1982) #23"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 9,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009695/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2116",
        "name": "Alpha Flight (1983 - 1994)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/13907",
        "name": "Alpha Flight (2011 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1983",
        "name": "Alpha Flight Classic Vol. 1 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2115",
        "name": "Black Panther (1998 - 2003)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1723",
        "name": "Uncanny X-Men Omnibus Vol. 1 (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/17625",
        "name": "Wolverine: Savage Origins (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3637",
        "name": "X-Men Unlimited (1993 - 2003)"
      }
    ],
    "returned": 9
  },
  "stories": {
    "available": 27,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009695/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15424",
        "name": "Chaos in Canada!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/15426",
        "name": "UNCANNY X-MEN (1963) #121",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21096",
        "name": "Alpha Flight (1983) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21182",
        "name": "Cover #21182",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21183",
        "name": "Dreams Die Hard",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21220",
        "name": "Cover #21220",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21222",
        "name": "Cover #21222",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21224",
        "name": "Cover #21224",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21261",
        "name": "Cover #21261",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21347",
        "name": "Cover #21347",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/21356",
        "name": "Cover #21356",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25085",
        "name": "Alliance",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25087",
        "name": "The Kiber Chronicles",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/25089",
        "name": "60 Minutes",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28391",
        "name": "Rules of Engagement Part One",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28393",
        "name": "Rules of Engagement Part Two",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28413",
        "name": "The Draco Part Four",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/38513",
        "name": "Alpha Flight",
        "type": "promo"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42183",
        "name": "pin-up",
        "type": "pinup"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/90322",
        "name": "Interior #90322",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009695/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/302",
        "name": "Fear Itself"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2493/vindicator?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vindicator_%28Heather_Hudson%29?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009695/vindicator?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011261,
  "name": "Vin Gonzales",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011261",
  "comics": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011261/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21502",
        "name": "Amazing Spider-Man (1999) #564"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/21504",
        "name": "Amazing Spider-Man (1999) #566"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/30322",
        "name": "Amazing Spider-Man (1999) #647"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/37071",
        "name": "Amazing Spider-Man (1999) #647 (MCNIVEN VARIANT)"
      }
    ],
    "returned": 4
  },
  "series": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011261/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      }
    ],
    "returned": 1
  },
  "stories": {
    "available": 4,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011261/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47410",
        "name": "Rashomon",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/47414",
        "name": "2 of 3 KRAVEN/MISTAKEN IDENTITY",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/69470",
        "name": "Amazing Spider-Man (1999) #647",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/94768",
        "name": "Amazing Spider-Man (1999) #647, MCNIVEN VARIANT",
        "type": "cover"
      }
    ],
    "returned": 4
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011261/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2899/vin_gonzales?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Gonzales,_Vin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011261/vin_gonzales?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010324,
  "name": "Victor Von Doom",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010324",
  "comics": {
    "available": 28,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010324/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61379",
        "name": "Avengers (2016) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61380",
        "name": "Avengers (2016) #8"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/48626",
        "name": "Fantastic Four (2012) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/15551",
        "name": "Fantastic Four (1998) #31"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12855",
        "name": "Fantastic Four (1998) #501"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/12856",
        "name": "Fantastic Four (1998) #502"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/283",
        "name": "Fantastic Four (1998) #507"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/29601",
        "name": "Fantastic Four (1998) #581"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1299",
        "name": "Fantastic Four Vol. 1 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1699",
        "name": "Fantastic Four Vol. 2 (Hardcover)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61553",
        "name": "Infamous Iron Man (2016) #7"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61555",
        "name": "Infamous Iron Man (2016) #9"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/61558",
        "name": "Infamous Iron Man (2016) #12"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62163",
        "name": "Infamous Iron Man Vol. 1: Infamous (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/62164",
        "name": "Infamous Iron Man Vol. 2: The Absolution of Doom (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65080",
        "name": "Invincible Iron Man (2016) #594"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/65288",
        "name": "Invincible Iron Man (2016) #595"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66284",
        "name": "Invincible Iron Man (2016) #597"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66542",
        "name": "Invincible Iron Man (2016) #598"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66913",
        "name": "Invincible Iron Man (2016) #599"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010324/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22547",
        "name": "Avengers (2016 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/16557",
        "name": "Fantastic Four (2012 - 2014)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/421",
        "name": "Fantastic Four (1998 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1265",
        "name": "Fantastic Four Vol. 1 (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1266",
        "name": "Fantastic Four Vol. 2 (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22596",
        "name": "Infamous Iron Man (2016 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22787",
        "name": "Infamous Iron Man Vol. 1: Infamous (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22788",
        "name": "Infamous Iron Man Vol. 2: The Absolution of Doom (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22928",
        "name": "Invincible Iron Man (2016 - 2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22425",
        "name": "Invincible Iron Man by Brian Michael Bendis (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/22181",
        "name": "Invincible Iron Man Vol. 3: Civil War II (2017)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23771",
        "name": "Marvel 2-in-One (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24312",
        "name": "Marvel 2-In-One Annual (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/23101",
        "name": "Peter Parker: The Spectacular Spider-Man (2017 - Present)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1035",
        "name": "X-Factor (2005 - 2013)"
      }
    ],
    "returned": 15
  },
  "stories": {
    "available": 31,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010324/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/798",
        "name": "Fantastic Four (1998) #507",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/799",
        "name": "Interior #799",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26088",
        "name": "interior to FF #501",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26089",
        "name": "interior to FF #502",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/31722",
        "name": "Fantastic Four (1998) #31",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/31723",
        "name": "Doomsday!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/59804",
        "name": "X-FACTOR (2005) #48",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64350",
        "name": "Fantastic Four (1998) #581",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/64351",
        "name": "Interior #64351",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67196",
        "name": "Fantastic Four (1998) #501",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/67197",
        "name": "Fantastic Four (1998) #502",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/109347",
        "name": "Fantastic Four (2012) #15",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/130919",
        "name": "cover from Invincible Iron Man (2017)",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/131855",
        "name": "cover from Invincible Iron Man (2017)",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/133187",
        "name": "cover from Avengers (2016) #7",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/133189",
        "name": "cover from Avengers (2016) #8",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/133536",
        "name": "story from Infamous Iron Man (2017) #7",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/133539",
        "name": "cover from Infamous Iron Man (2017) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/133545",
        "name": "cover from Infamous Iron Man (2017) #12",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/134711",
        "name": "cover from Infamous Iron Man (2017)",
        "type": "cover"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010324/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2792/victor_von_doom?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010324/victor_von_doom?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1011066,
  "name": "Victor Mancha",
  "description": "",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/10/4c0030f13bcaf",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1011066",
  "comics": {
    "available": 9,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011066/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/40252",
        "name": "Avengers Academy (2010) #28"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/24173",
        "name": "Runaways (2008) #10"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4058",
        "name": "Runaways (2005) #15"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/4429",
        "name": "Runaways (2005) #18"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/5422",
        "name": "Runaways (2005) #22"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66858",
        "name": "Runaways by Rainbow Rowell Vol. 1: Find Your Way Home (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66859",
        "name": "Runaways Vol. 10: Rock Zombies (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6189",
        "name": "Runaways Vol. 7: Live Fast (Digest)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/66321",
        "name": "Runaways Vol. 9: Dead Wrong (Trade Paperback)"
      }
    ],
    "returned": 9
  },
  "series": {
    "available": 7,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011066/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/9086",
        "name": "Avengers Academy (2010 - 2012)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/5338",
        "name": "Runaways (2008 - 2009)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/843",
        "name": "Runaways (2005 - 2008)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/25712",
        "name": "Runaways by Rainbow Rowell Vol. 1: Find Your Way Home (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24187",
        "name": "Runaways Vol. 10: Rock Zombies (2018)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1903",
        "name": "Runaways Vol. 7: Live Fast (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/24030",
        "name": "Runaways Vol. 9: Dead Wrong (2018)"
      }
    ],
    "returned": 7
  },
  "stories": {
    "available": 8,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011066/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4377",
        "name": "2 of 4 - Return of the Pride",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4383",
        "name": "5 of 5 - Parental Guidance",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/4391",
        "name": "1 of 3 - Live Fast",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/53571",
        "name": "Interior #53571",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/91316",
        "name": "AVENGERS ACADEMY (2010) #28",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/143785",
        "name": "cover from RUNAWAYS VOL. 9: DEAD WRONG TPB (2018) #9",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/144871",
        "name": "cover from RUNAWAYS BY RAINBOW ROWELL VOL. 1: FIND YOUR WAY HOME TPB (2018) #1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/144873",
        "name": "cover from RUNAWAYS VOL. 10: ROCK ZOMBIES TPB (2018) #10",
        "type": "cover"
      }
    ],
    "returned": 8
  },
  "events": {
    "available": 0,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1011066/events",
    "items": [],
    "returned": 0
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2869/victor_mancha?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Mancha%2C_Victor?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1011066/victor_mancha?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1009694,
  "name": "Vertigo (Savage Land Mutate)",
  "description": "Vertigo was a native of the Savage Land and mutated by the mutant known as Magneto, granting her the power to alter the perceptions of others.",
  "modified": "1969-12-31T19:00:00-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1009694",
  "comics": {
    "available": 28,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009694/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19782",
        "name": "Marvel Fanfare (1982) #1"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19793",
        "name": "Marvel Fanfare (1982) #2"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19804",
        "name": "Marvel Fanfare (1982) #3"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/19815",
        "name": "Marvel Fanfare (1982) #4"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1720",
        "name": "New Avengers (2004) #5"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1829",
        "name": "New Avengers (2004) #6"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/3345",
        "name": "New Avengers Vol. 1: Breakout (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11701",
        "name": "Thor (1966) #373"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/11702",
        "name": "Thor (1966) #374"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/16223",
        "name": "Thor Visionaries: Walter Simonson Vol. 4 (Trade Paperback)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13751",
        "name": "Uncanny X-Men (1963) #210"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13752",
        "name": "Uncanny X-Men (1963) #211"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13754",
        "name": "Uncanny X-Men (1963) #213"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13762",
        "name": "Uncanny X-Men (1963) #221"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13763",
        "name": "Uncanny X-Men (1963) #222"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13781",
        "name": "Uncanny X-Men (1963) #240"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13782",
        "name": "Uncanny X-Men (1963) #241"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/13891",
        "name": "Uncanny X-Men (1963) #350"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/1863",
        "name": "Uncanny X-Men (1963) #458"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/2299",
        "name": "Uncanny X-Men - The New Age Vol. 3: On Ice (Trade Paperback)"
      }
    ],
    "returned": 20
  },
  "series": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009694/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3719",
        "name": "Marvel Fanfare (1982 - 1992)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/753",
        "name": "New Avengers (2004 - 2010)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1260",
        "name": "New Avengers Vol. 1: Breakout (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2083",
        "name": "Thor (1966 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2716",
        "name": "Thor Visionaries: Walter Simonson Vol. 4 (2007)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2258",
        "name": "Uncanny X-Men (1963 - 2011)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1399",
        "name": "Uncanny X-Men - The New Age Vol. 3: On Ice (2005)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2098",
        "name": "X-Factor (1986 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/3643",
        "name": "X-Man (1995 - 2000)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/970",
        "name": "X-Men and Power Pack (2005 - 2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1634",
        "name": "X-Men and Power Pack: The Power of X (2006)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/92",
        "name": "X-Men: Mutant Massacre (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/343",
        "name": "X-Men: Old Soldiers (2004)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/144",
        "name": "X-Treme X-Men: Savage Land (1999)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2107",
        "name": "X-Treme X-Men: The Savage Land (2001 - 2002)"
      }
    ],
    "returned": 15
  },
  "stories": {
    "available": 25,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009694/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/741",
        "name": "4 of 5 - World's End",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3445",
        "name": "5 of 6 - Breakout!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/3455",
        "name": "6 of 6 - Breakout!",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5469",
        "name": "X-Men and Power Pack (2005) #4",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/5470",
        "name": "4 of 4 - 4XLS",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17046",
        "name": "The Gift of Death",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17048",
        "name": "Fires of the Night",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/22086",
        "name": "Fallen Angel!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/26048",
        "name": "False Haven !",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27930",
        "name": "The Morning After",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27932",
        "name": "Massacre",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27936",
        "name": "Psylocke",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27952",
        "name": "Death By Drowning",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27954",
        "name": "Heartbreak",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27989",
        "name": "Uncanny X-Men (1963) #240",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27990",
        "name": "Inferno, Part the First: Strike the Match",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/27992",
        "name": "Inferno, Part the Second: Fan the Flame",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28228",
        "name": "Trial & Errors",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42094",
        "name": "Fast Descent Into Hell!",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/42158",
        "name": "\"To Sacrifice My Soul...\"",
        "type": "interiorStory"
      }
    ],
    "returned": 20
  },
  "events": {
    "available": 3,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1009694/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/252",
        "name": "Inferno"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/263",
        "name": "Mutant Massacre"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/154",
        "name": "Onslaught"
      }
    ],
    "returned": 3
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2483/vertigo?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vertigo_(Savage_Land_Mutate)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1009694/vertigo_savage_land_mutate?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
},
{
  "id": 1010353,
  "name": "Vermin (Edward Whelan)",
  "description": "Edward Whelan was found roaming the streets of New York by Baron Helmut Zemo, who subjected Whelan to Zemo's genetic experiments, which granted him superhuman strength, but, in the process of the mutation, he manifested a rat-like physical appearance, and was called Vermin.",
  "modified": "2013-11-20T17:27:14-0500",
  "thumbnail": {
    "path": "http://i.annihil.us/u/prod/marvel/i/mg/3/b0/528d3638185cb",
    "extension": "jpg"
  },
  "resourceURI": "http://gateway.marvel.com/v1/public/characters/1010353",
  "comics": {
    "available": 13,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010353/comics",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6697",
        "name": "The Amazing Spider-Man (1963) #293"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6698",
        "name": "The Amazing Spider-Man (1963) #294"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6809",
        "name": "The Amazing Spider-Man (1963) #394"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/6820",
        "name": "The Amazing Spider-Man (1963) #403"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/35880",
        "name": "Amazing Spider-Man (1999) #645 (SPIDEY VS. VARIANT)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/7653",
        "name": "Captain America (1968) #272"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14629",
        "name": "Peter Parker, the Spectacular Spider-Man (1976) #178"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14630",
        "name": "Peter Parker, the Spectacular Spider-Man (1976) #179"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14634",
        "name": "Peter Parker, the Spectacular Spider-Man (1976) #182"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14647",
        "name": "Peter Parker, the Spectacular Spider-Man (1976) #194"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14649",
        "name": "Peter Parker, the Spectacular Spider-Man (1976) #196"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14115",
        "name": "Wolverine (1988) #170"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/comics/14118",
        "name": "Wolverine (1988) #173"
      }
    ],
    "returned": 13
  },
  "series": {
    "available": 5,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010353/series",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/454",
        "name": "Amazing Spider-Man (1999 - 2013)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1996",
        "name": "Captain America (1968 - 1996)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2271",
        "name": "Peter Parker, the Spectacular Spider-Man (1976 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/1987",
        "name": "The Amazing Spider-Man (1963 - 1998)"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/series/2262",
        "name": "Wolverine (1988 - 2003)"
      }
    ],
    "returned": 5
  },
  "stories": {
    "available": 15,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010353/stories",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/14242",
        "name": "Amazing Spider-Man (1963) #394",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/17806",
        "name": "Mean Streets",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28722",
        "name": "Stay Alive Part 1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/28729",
        "name": "The Logan Files Part 1",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29703",
        "name": "Cover #29703",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29704",
        "name": "Up From the Depths",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29705",
        "name": "Cover #29705",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29706",
        "name": "Wounds",
        "type": "interiorStory"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29713",
        "name": "The Child Within, Part 5 of 6",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29751",
        "name": "The Death of Vermin, Part 1",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/29757",
        "name": "The Death of Vermin, Conclusion",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66230",
        "name": "Amazing Spider-Man (1963) #293",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66231",
        "name": "Amazing Spider-Man (1963) #294",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/66266",
        "name": "Amazing Spider-Man (1963) #403",
        "type": "cover"
      },
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/stories/94765",
        "name": "Amazing Spider-Man (1999) #645, SPIDEY VS. VARIANT",
        "type": "cover"
      }
    ],
    "returned": 15
  },
  "events": {
    "available": 1,
    "collectionURI": "http://gateway.marvel.com/v1/public/characters/1010353/events",
    "items": [
      {
        "resourceURI": "http://gateway.marvel.com/v1/public/events/258",
        "name": "Kraven's Last Hunt"
      }
    ],
    "returned": 1
  },
  "urls": [
    {
      "type": "detail",
      "url": "http://marvel.com/characters/2482/vermin?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "wiki",
      "url": "http://marvel.com/universe/Vermin_(Edward_Whelan)?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    },
    {
      "type": "comiclink",
      "url": "http://marvel.com/comics/characters/1010353/vermin_edward_whelan?utm_campaign=apiRef&utm_source=650e6de31b7661db588cb11f982fa8d3"
    }
  ]
}
];

let thumbs = [];
function heroesThumbsUrls(heroes) {
  heroes.forEach(hero => {
    if(hero.thumbnail.path !== 'http://i.annihil.us/u/prod/marvel/i/mg/b/40/image_not_available') thumbs.push(`${hero.thumbnail.path}.${hero.thumbnail.extension}`);
  });
}
heroesThumbsUrls(heroes);

class App extends Component {
  render() {
    return (
      <div className="App">
      <h1 className="title">MARVEL Caracters Library</h1>
      <div className="scrolling-line">
        {
          thumbs.map(thumb => {
            return <Thumbnail src={thumb} alt='' />
          })
        }
      </div>
      </div>
    );
  }
}

export default App;
