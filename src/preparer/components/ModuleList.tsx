import { Grid } from "@mui/material";
import { DataModule } from "../../interfaces";
import { ModuleListItem } from "./ModuleListItem";

const dataModules: DataModule[] = [
  {
    "tabs": {
      "displayName": "SIM-CIS",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0205c",
          "component": "RegistersCIS",
          "displayName": "Registro",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb0205d",
          "component": "Users",
          "displayName": "Usuarios",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb0205e",
          "component": "AirMonitoringCIS",
          "displayName": "Parámetros de monitorización",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb0205f",
          "component": "FlightPlanAssessmentCIS",
          "displayName": "Parámetros de evaluación de plan de vuelo",
          "isFormSchema": true,
          "required": true
        }
      ]
    },
    "_id": "62d1943180ef5c3edaeadd16",
    "moduleId": 1,
    "displayName": "SIMULADOR CIS",
    "check": false,
    "order": 2,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02060",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": []
  },
  {
    "tabs": {
      "displayName": "SIM-USS-A1",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02061",
          "component": "RegistersUSSA_1",
          "displayName": "Registro",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb02062",
          "component": "AirMonitoringUSSA_1",
          "displayName": "Parámetros de monitorización",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02063",
          "component": "StrategicDeconflictionUSSA_1",
          "displayName": "Parámetros de resolución de conflictos estratégicos",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02064",
          "component": "FlightPlanAssessmentUSSA_1",
          "displayName": "Parámetros de evaluación de plan de vuelo",
          "isFormSchema": true,
          "required": true
        }
      ]
    },
    "_id": "62d1943e80ef5c3edaeadd17",
    "moduleId": 2,
    "displayName": "SIMULADOR USS-A1",
    "check": false,
    "order": 3,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02065",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": [
      8
    ]
  },
  {
    "tabs": {
      "displayName": "SIM-USS-B",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02066",
          "component": "RegistersUSSB",
          "displayName": "Registro",
          "isFormSchema": false,
          "required": false
        }
      ]
    },
    "_id": "62d1945980ef5c3edaeadd18",
    "moduleId": 3,
    "displayName": "SIMULADOR USS-B",
    "check": false,
    "order": 5,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02067",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": []
  },
  {
    "tabs": {
      "displayName": "SIM-UAS",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02068",
          "component": "TrafficGenerator",
          "displayName": "Generador de tráfico UAS",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb02069",
          "component": "FlightPlansGenerator",
          "displayName": "Generador de planes de vuelo",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb0206a",
          "component": "ListFlightPlanningUAS",
          "displayName": "Listado de planes de vuelo",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb0206b",
          "component": "GeneralsParameterUAS",
          "displayName": "Generar escenario",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "62d1946680ef5c3edaeadd19",
    "moduleId": 4,
    "displayName": "SIMULADOR UAS",
    "check": false,
    "order": 8,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0206c",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": [
      11,
      14
    ]
  },
  {
    "tabs": {
      "displayName": "SIM-UAM",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0206d",
          "component": "GenUAM",
          "displayName": "Generador UAM",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "62d1946e80ef5c3edaeadd1a",
    "moduleId": 5,
    "displayName": "SIMULADOR UAM",
    "check": false,
    "order": 9,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0206e",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": [
      11
    ]
  },
  {
    "tabs": {
      "displayName": "SIM-TRIP",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0206f",
          "component": "Aircrafts",
          "displayName": "Aeronaves",
          "isFormSchema": false,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02070",
          "component": "FlightPlansTRIPGenerator",
          "displayName": "Generador de planes de vuelo",
          "isFormSchema": false,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02071",
          "component": "ListFlightPlanningTRIP",
          "displayName": "Listado de planes de vuelo",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb02072",
          "component": "GeneralsParametersTRIP",
          "displayName": "Generar escenario",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "62d1947780ef5c3edaeadd1b",
    "moduleId": 6,
    "displayName": "SIMULADOR TRIP",
    "check": false,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02073",
        "module_id": 13,
        "order": 1
      }
    ],
    "order": 10,
    "enableModules": [
      11
    ]
  },
  {
    "tabs": {
      "displayName": "TERRENO/SUPERFICIE",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02074",
          "component": "TerrainGenerator",
          "displayName": "Generador de terreno",
          "isFormSchema": false,
          "required": false
        }
      ]
    },
    "_id": "62d1947e80ef5c3edaeadd1c",
    "moduleId": 7,
    "displayName": "TERRENO/SUPERFICIE",
    "check": false,
    "order": 6,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02075",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": []
  },
  {
    "tabs": {
      "displayName": "METEOROLOGÍA",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02076",
          "component": "WeatherGenerator",
          "displayName": "Generador de meteorología",
          "isFormSchema": true,
          "required": true
        }
      ]
    },
    "_id": "62d1948880ef5c3edaeadd1d",
    "moduleId": 8,
    "displayName": "METEOROLOGÍA",
    "check": false,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02077",
        "module_id": 7,
        "order": 1
      }
    ],
    "order": 7,
    "enableModules": [
      4,
      5,
      6
    ]
  },
  {
    "tabs": {
      "displayName": "COMUNICACIONES",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02078",
          "component": "GeneralsParameterCOM",
          "displayName": "Parámetros generales",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "62d1949180ef5c3edaeadd1e",
    "moduleId": 9,
    "displayName": "COMUNICACIONES",
    "check": false,
    "order": 13,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02079",
        "module_id": 11,
        "order": 1
      }
    ],
    "enableModules": []
  },
  {
    "tabs": {
      "displayName": "NAVEGACIÓN",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0207a",
          "component": "GeneralsParameterNAV",
          "displayName": "Parámetros generales",
          "isFormSchema": true,
          "required": true
        }
      ]
    },
    "_id": "62d1949980ef5c3edaeadd1f",
    "moduleId": 10,
    "displayName": "NAVEGACIÓN",
    "check": false,
    "order": 11,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0207b",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": []
  },
  {
    "tabs": {
      "displayName": "VIGILANCIA",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0207c",
          "component": "Sensors",
          "displayName": "Sensores",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "62d194a180ef5c3edaeadd20",
    "moduleId": 11,
    "displayName": "VIGILANCIA",
    "check": false,
    "order": 12,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0207d",
        "module_id": 4,
        "order": 1
      },
      {
        "_id": "63cb1099df39ac15bdb0207e",
        "module_id": 5,
        "order": 2
      },
      {
        "_id": "63cb1099df39ac15bdb0207f",
        "module_id": 6,
        "order": 3
      }
    ],
    "enableModules": [
      9
    ]
  },
  {
    "tabs": {
      "displayName": "DATOS_GENERALES",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02080",
          "component": "GeneralData",
          "displayName": "Información general",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02081",
          "component": "Operators",
          "displayName": "Operadores",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02082",
          "component": "Aircrafts",
          "displayName": "Aeronaves",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02083",
          "component": "Pilots",
          "displayName": "Pilotos",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02084",
          "component": "UASZones",
          "displayName": "Zonas UAS",
          "isFormSchema": false,
          "required": false
        }
      ]
    },
    "_id": "630f6a8ffddaba478a28b9ca",
    "moduleId": 13,
    "displayName": "DATOS GENERALES",
    "check": false,
    "order": 1,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb02085",
        "module_id": 0,
        "order": 1
      }
    ],
    "enableModules": [
      1,
      2,
      3,
      12
    ]
  },
  {
    "tabs": {
      "displayName": "SIM-USS-A2",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb02086",
          "component": "RegistersUSSA_2",
          "displayName": "Registro",
          "isFormSchema": false,
          "required": false
        },
        {
          "_id": "63cb1099df39ac15bdb02087",
          "component": "AirMonitoringUSSA_2",
          "displayName": "Parámetros de monitorización",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02088",
          "component": "StrategicDeconflictionUSSA_2",
          "displayName": "Parámetros de resolución de conflictos estratégicos",
          "isFormSchema": true,
          "required": true
        },
        {
          "_id": "63cb1099df39ac15bdb02089",
          "component": "FlightPlanAssessmentUSSA_2",
          "displayName": "Parámetros de evaluación de plan de vuelo",
          "isFormSchema": true,
          "required": true
        }
      ]
    },
    "_id": "6358249c05d31d47e5b35f0d",
    "moduleId": 12,
    "displayName": "SIMULADOR USS-A2",
    "check": false,
    "order": 4,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0208a",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": [
      8
    ]
  },
  {
    "tabs": {
      "displayName": "SFA",
      "tabsPatterns": [
        {
          "_id": "63cb1099df39ac15bdb0208b",
          "component": "GeneralsParametersSFA",
          "displayName": "Parámetros generales",
          "isFormSchema": false,
          "required": true
        }
      ]
    },
    "_id": "635825ac05d31d47e5b35f0e",
    "moduleId": 14,
    "displayName": "Simulador de Funcionalidades Autónoma",
    "check": false,
    "order": 14,
    "dependencies": [
      {
        "_id": "63cb1099df39ac15bdb0208c",
        "module_id": 13,
        "order": 1
      }
    ],
    "enableModules": []
  }
]

export const ModuleList = () => {

  return (
    <Grid
      container
      spacing={1}
      sx={{
        padding: '2rem'
      }}
    >
      {
        dataModules.map(module => (
          <ModuleListItem key={module._id} module={module} />
        ))
      }
    </Grid>
  )
}