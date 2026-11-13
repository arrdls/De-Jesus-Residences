var APP_DATA = {
  "scenes": [
    {
      "id": "0-perspective",
      "name": "Perspective",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.05264342141956746,
        "pitch": -0.0801317782710349,
        "fov": 1.1173595944055386
      },
      "linkHotspots": [
        {
          "yaw": -0.3940262925940221,
          "pitch": 0.16158816330441184,
          "rotation": 0,
          "target": "1-driveway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "1-driveway",
      "name": "Driveway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "yaw": 0.24274862601143354,
        "pitch": -0.15317426799934708,
        "fov": 1.3963348891382483
      },
      "linkHotspots": [
        {
          "yaw": -0.11393486139034081,
          "pitch": 0.18175427051910376,
          "rotation": 0,
          "target": "2-gate"
        },
        {
          "yaw": 2.5579620084026953,
          "pitch": 0.15307990397105975,
          "rotation": 3.141592653589793,
          "target": "0-perspective"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "2-gate",
      "name": "Gate",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.5743088203277598,
          "pitch": 0.2874654700507584,
          "rotation": 1.5707963267948966,
          "target": "1-driveway"
        },
        {
          "yaw": -0.398984637300547,
          "pitch": 0.06219504854457725,
          "rotation": 0,
          "target": "3-main-door"
        },
        {
          "yaw": -1.5702043879049175,
          "pitch": 0.02810346718049317,
          "rotation": 0,
          "target": "8-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "3-main-door",
      "name": "Main Door",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.45298631935035516,
          "pitch": 0.333719170259112,
          "rotation": 1.5707963267948966,
          "target": "2-gate"
        },
        {
          "yaw": -0.7774840374281009,
          "pitch": 0.3887620318603169,
          "rotation": 4.71238898038469,
          "target": "1-driveway"
        },
        {
          "yaw": 0.2388887632175205,
          "pitch": 0.27260125911265654,
          "rotation": 0,
          "target": "4-foyer"
        },
        {
          "yaw": 2.224996441189302,
          "pitch": 0.019875856953126103,
          "rotation": 0,
          "target": "18-service-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "4-foyer",
      "name": "Foyer",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "yaw": 0,
        "pitch": 0,
        "fov": 1.3963348891382483
      },
      "linkHotspots": [
        {
          "yaw": 1.5901043549290783,
          "pitch": 0.12350514614063002,
          "rotation": 0,
          "target": "3-main-door"
        },
        {
          "yaw": 0.09256594566312515,
          "pitch": 0.10712401172375152,
          "rotation": 3.141592653589793,
          "target": "5-living"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "5-living",
      "name": "Living",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.764899056273645,
          "pitch": 0.1272753552082051,
          "rotation": 0,
          "target": "4-foyer"
        },
        {
          "yaw": -1.2456570171397772,
          "pitch": 0.13307659679538375,
          "rotation": 0,
          "target": "7-dining"
        },
        {
          "yaw": -1.9648355141000131,
          "pitch": -0.147033679208743,
          "rotation": 0,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "6-kitchen",
      "name": "Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.9246636146244613,
          "pitch": 0.12569464545564202,
          "rotation": 0,
          "target": "7-dining"
        },
        {
          "yaw": -1.68736835411611,
          "pitch": 0.0916573302506869,
          "rotation": 0,
          "target": "18-service-kitchen"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "7-dining",
      "name": "Dining",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.5805605099521776,
          "pitch": 0.09996746360268993,
          "rotation": 0,
          "target": "5-living"
        },
        {
          "yaw": 2.199768375906186,
          "pitch": -0.22814554831045442,
          "rotation": 0,
          "target": "10-2f-hallway"
        },
        {
          "yaw": -0.46439227458739296,
          "pitch": 0.04047412108927517,
          "rotation": 0,
          "target": "6-kitchen"
        },
        {
          "yaw": -1.7548526116728222,
          "pitch": 0.10450288421313658,
          "rotation": 0,
          "target": "9-guest-room"
        },
        {
          "yaw": -2.983802166631529,
          "pitch": 0.07368127590144269,
          "rotation": 0,
          "target": "8-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "8-lanai",
      "name": "Lanai",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.503836027356714,
          "pitch": 0.14514053305003394,
          "rotation": 0,
          "target": "2-gate"
        },
        {
          "yaw": 1.5338503377396586,
          "pitch": 0.06526398641902276,
          "rotation": 7.853981633974483,
          "target": "17-rear"
        },
        {
          "yaw": 3.098492258705254,
          "pitch": 0.004847426296446855,
          "rotation": 0,
          "target": "7-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "9-guest-room",
      "name": "Guest Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 2.6935237994953702,
          "pitch": 0.2658573089179157,
          "rotation": 0,
          "target": "7-dining"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "10-2f-hallway",
      "name": "2F Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.22935378901894588,
          "pitch": 0.705319109342657,
          "rotation": 3.141592653589793,
          "target": "7-dining"
        },
        {
          "yaw": -1.8922839609824358,
          "pitch": 0.602785577992389,
          "rotation": 3.141592653589793,
          "target": "5-living"
        },
        {
          "yaw": 0.7620249712834646,
          "pitch": 0.24365571444217338,
          "rotation": 0,
          "target": "11-master-bedroom"
        },
        {
          "yaw": -3.004998775489433,
          "pitch": 0.23387207385106557,
          "rotation": 0,
          "target": "13-study-area"
        },
        {
          "yaw": -1.148506595638425,
          "pitch": -0.13531744103556242,
          "rotation": 0,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "11-master-bedroom",
      "name": "Master Bedroom",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.2633629280529064,
          "pitch": 0.0696853376025075,
          "rotation": 0,
          "target": "10-2f-hallway"
        },
        {
          "yaw": -0.5812869680915274,
          "pitch": 0.08383146529499186,
          "rotation": 0,
          "target": "12-wic"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "12-wic",
      "name": "WIC",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 1.3177910138448947,
          "pitch": 0.30576442428662887,
          "rotation": 0,
          "target": "11-master-bedroom"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "13-study-area",
      "name": "Study Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.4092550871962679,
          "pitch": 0.23233201088175726,
          "rotation": 0,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "14-3rd-floor-hallway",
      "name": "3rd Floor Hallway",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": 0.08769591390267095,
          "pitch": 0.11817119704982915,
          "rotation": 0,
          "target": "15-bedroom-2"
        },
        {
          "yaw": 1.7554970449333762,
          "pitch": 0.36379731905954316,
          "rotation": 7.853981633974483,
          "target": "16-family-area"
        },
        {
          "yaw": -1.3276089377962883,
          "pitch": 0.6459767443667026,
          "rotation": 3.141592653589793,
          "target": "10-2f-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "15-bedroom-2",
      "name": "Bedroom 2",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.3783521464860193,
          "pitch": 0.3911922942035311,
          "rotation": 0,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "16-family-area",
      "name": "Family Area",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5768098910807726,
          "pitch": 0.08007547083707323,
          "rotation": 10.995574287564278,
          "target": "14-3rd-floor-hallway"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "17-rear",
      "name": "Rear",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.0429573608077618,
          "pitch": 0.07209904646493115,
          "rotation": 0,
          "target": "18-service-kitchen"
        },
        {
          "yaw": 3.100087419059175,
          "pitch": 0.20082601648424792,
          "rotation": 4.71238898038469,
          "target": "8-lanai"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "18-service-kitchen",
      "name": "Service Kitchen",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        }
      ],
      "faceSize": 1024,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -0.5290829307015983,
          "pitch": 0.06298806184505246,
          "rotation": 1.5707963267948966,
          "target": "6-kitchen"
        },
        {
          "yaw": 0.9208738873325828,
          "pitch": 0.16382845507856025,
          "rotation": 6.283185307179586,
          "target": "17-rear"
        },
        {
          "yaw": 0.5908881854200629,
          "pitch": 0.13007450594550818,
          "rotation": 4.71238898038469,
          "target": "19-maids-room"
        }
      ],
      "infoHotspots": []
    },
    {
      "id": "19-maids-room",
      "name": "Maids Room",
      "levels": [
        {
          "tileSize": 256,
          "size": 256,
          "fallbackOnly": true
        },
        {
          "tileSize": 512,
          "size": 512
        },
        {
          "tileSize": 512,
          "size": 1024
        },
        {
          "tileSize": 512,
          "size": 2048
        }
      ],
      "faceSize": 2048,
      "initialViewParameters": {
        "pitch": 0,
        "yaw": 0,
        "fov": 1.5707963267948966
      },
      "linkHotspots": [
        {
          "yaw": -1.4470621019577692,
          "pitch": 0.18714369377929074,
          "rotation": 0,
          "target": "18-service-kitchen"
        }
      ],
      "infoHotspots": []
    }
  ],
  "name": "DeJesusResidence",
  "settings": {
    "mouseViewMode": "drag",
    "autorotateEnabled": true,
    "fullscreenButton": false,
    "viewControlButtons": false
  }
};
