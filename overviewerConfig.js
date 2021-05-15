var overviewerConfig = {
    "CONST": {
        "tileSize": 384,
        "image": {
            "defaultMarker": "signpost.png",
            "signMarker": "signpost_icon.png",
            "bedMarker": "bed.png",
            "spawnMarker": "markers/marker_home.png",
            "spawnMarker2x": "markers/marker_home_2x.png",
            "queryMarker": "markers/marker_location.png",
            "queryMarker2x": "markers/marker_location_2x.png",
            "compass": {
                "0": "compass_upper-left.png",
                "1": "compass_upper-right.png",
                "3": "compass_lower-left.png",
                "2": "compass_lower-right.png"
            }
        },
        "mapDivId": "mcmap",
        "UPPERLEFT": 0,
        "UPPERRIGHT": 1,
        "LOWERLEFT": 3,
        "LOWERRIGHT": 2
    },
    "worlds": [
        "CCCcraft - overworld",
        "CCCcraft - nether",
        "CCCcraft - end"
    ],
    "map": {
        "debug": false,
        "cacheTag": "1621047476",
        "north_direction": "lower-left",
        "controls": {
            "pan": true,
            "zoom": true,
            "spawn": true,
            "compass": true,
            "mapType": true,
            "overlays": true,
            "coordsBox": true
        }
    },
    "tilesets": [
        {
            "name": "CCCcraft Daytime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "survivalday",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "CCCcraft - overworld",
            "last_rendertime": 1621038653,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                8
            ],
            "minZoom": 0,
            "spawn": [
                0,
                80,
                8
            ],
            "north_direction": 1
        },
        {
            "name": "CCCcraft Nighttime",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "survivalnight",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "CCCcraft - overworld",
            "last_rendertime": 1621038653,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                8
            ],
            "minZoom": 0,
            "spawn": [
                0,
                80,
                8
            ],
            "north_direction": 1
        },
        {
            "name": "CCCcraft Nether",
            "zoomLevels": 10,
            "defaultZoom": 1,
            "maxZoom": 10,
            "path": "survivalnether",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "CCCcraft - nether",
            "last_rendertime": 1621038831,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                8
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 1
        },
        {
            "name": "CCCcraft The End",
            "zoomLevels": 9,
            "defaultZoom": 1,
            "maxZoom": 9,
            "path": "survivaltheend",
            "base": "",
            "bgcolor": "#1a1a1a",
            "world": "CCCcraft - end",
            "last_rendertime": 1621037054,
            "imgextension": "png",
            "isOverlay": false,
            "poititle": "Markers",
            "showlocationmarker": true,
            "center": [
                0,
                80,
                8
            ],
            "minZoom": 0,
            "spawn": false,
            "north_direction": 1
        }
    ]
};
