import { Grid } from '@mui/material';
import { PreparerExercise } from '../../interfaces';
import { ExerciseListItem } from './ExerciseListItem';

const dataExercise: PreparerExercise[] = [
  {
    "_id": "63c1de8db3266e9ea9ab52f4",
    "idScenario": "SC0001",
    "scenario": 1,
    "dataLocation": "/home/exercises/SC0001",
    "duration": 3599000,
    "status": "READY",
    "createdAt": "2023-01-13T22:43:25.523Z",
    "updatedAt": "2023-01-23T17:28:56.071Z",
    "pattern": 1,
    "displayName": "Ejercicio X1",
    "synopsis": "Descripción de prueba. ",
    "time_end": "2023-01-13T23:44:57.869Z",
    "time_start": "2023-01-13T22:44:58.869Z",
    "workspaces": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "jobArea"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -7.673128,
                  42.919435
                ],
                [
                  -7.673128,
                  43.080066
                ],
                [
                  -7.434232,
                  43.080066
                ],
                [
                  -7.434232,
                  42.919435
                ],
                [
                  -7.673128,
                  42.919435
                ]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "_id": "63c6c203bfefd248abaf69e5",
    "idScenario": "SC0002",
    "scenario": 2,
    "dataLocation": "/home/exercises/SC0002",
    "duration": 3599000,
    "status": "EDITING",
    "createdAt": "2023-01-17T15:42:59.623Z",
    "updatedAt": "2023-01-17T15:43:31.034Z",
    "pattern": 1,
    "displayName": "Ejercicio X2",
    "synopsis": "Descripción de prueba.",
    "time_end": "2023-01-17T16:43:29.353Z",
    "time_start": "2023-01-17T15:43:30.353Z",
    "workspaces": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "jobArea"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -7.70793,
                  42.899326
                ],
                [
                  -7.70793,
                  43.100115
                ],
                [
                  -7.383715,
                  43.100115
                ],
                [
                  -7.383715,
                  42.899326
                ],
                [
                  -7.70793,
                  42.899326
                ]
              ]
            ]
          }
        }
      ]
    }
  },
  {
    "_id": "63c82d94b73ff13fe2f2a29c",
    "idScenario": "SC0003",
    "scenario": 3,
    "dataLocation": "/home/exercises/SC0003",
    "duration": 3599000,
    "status": "READY",
    "createdAt": "2023-01-18T17:34:12.460Z",
    "updatedAt": "2023-01-20T17:14:41.322Z",
    "pattern": 1,
    "displayName": "Ejercicio X3",
    "synopsis": "Descripción de prueba. ",
    "time_end": "2023-01-18T18:34:52.489Z",
    "time_start": "2023-01-18T17:34:53.488Z",
    "workspaces": {
      "type": "FeatureCollection",
      "features": [
        {
          "type": "Feature",
          "properties": {
            "name": "jobArea"
          },
          "geometry": {
            "type": "Polygon",
            "coordinates": [
              [
                [
                  -7.741777,
                  42.919028
                ],
                [
                  -7.741777,
                  43.108133
                ],
                [
                  -7.363403,
                  43.108133
                ],
                [
                  -7.363403,
                  42.919028
                ],
                [
                  -7.741777,
                  42.919028
                ]
              ]
            ]
          }
        }
      ]
    }
  }
]

export const ExerciseList = () => {
  return (
    <Grid
      container
      spacing={2}
      className='scrollable'
      sx={{
        maxHeight: {
          xs: 'calc(78vh - 80px)',
          sm: 'calc(78vh - 80px)',
          md: 'calc(99vh - 80px)',
          lg: 'calc(99vh - 80px)'
        },
        marginLeft: 0        
      }}>
      {
        dataExercise.map(exercise => (
          <ExerciseListItem key={exercise._id} exercise={exercise} />
        ))
      }
    </Grid>
  )
}