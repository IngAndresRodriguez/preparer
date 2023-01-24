import { Grid, Box, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { DataPattern, SynopsisPattern } from '../../interfaces';
import { PatternListItem } from './PatternListItem';

const dataPatterns: DataPattern[] = [
  {
    "_id": "62d0824280ef5c3edaeadd06",
    "displayName": "1.1_UAS_UAM",
    "modules": [
      13,
      1,
      2,
      3,
      4,
      5,
      7,
      8,
      9,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 1,
    "name": "caesium-1-1",
    "isActive": true
  },
  {
    "_id": "62d082a980ef5c3edaeadd09",
    "displayName": "1.2_UAM_Tripulado",
    "modules": [
      13,
      1,
      3,
      5,
      6,
      7,
      8,
      9,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 2,
    "name": "caesium-1-2",
    "isActive": true
  },
  {
    "_id": "62d082c680ef5c3edaeadd0a",
    "displayName": "1.3_UAS_MultiUSS",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11,
      12
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 3,
    "name": "caesium-1-3",
    "isActive": true
  },
  {
    "_id": "62d1c0a280ef5c3edaeadd25",
    "displayName": "1.4_Detect&Avoid",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11,
      14
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 4,
    "name": "caesium-1-4",
    "isActive": true
  },
  {
    "_id": "62d1c0a680ef5c3edaeadd26",
    "displayName": "2.1_GCS_MultiUAV",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 5,
    "name": "caesium-2-1",
    "isActive": true
  },
  {
    "_id": "62d1c0cf80ef5c3edaeadd27",
    "displayName": "2.2_GCS_MonoUAV",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 6,
    "name": "caesium-2-2",
    "isActive": true
  },
  {
    "_id": "62d1c0e980ef5c3edaeadd29",
    "displayName": "2.3_UASReal",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 7,
    "name": "caesium-2-3",
    "isActive": true
  },
  {
    "_id": "62f53303fddaba478a28b8ca",
    "displayName": "2.4_CounterUAS",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11,
      12
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 8,
    "name": "caesium-2-4",
    "isActive": true
  },
  {
    "_id": "631926dd81d5fd79b183aa97",
    "displayName": "3.1_USSExt",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 10,
    "name": "caesium-3-1",
    "isActive": true
  },
  {
    "_id": "631926e981d5fd79b183aa98",
    "displayName": "3.2_CMPD",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 11,
    "name": "caesium-3-2",
    "isActive": true
  },
  {
    "_id": "631926ef81d5fd79b183aa99",
    "displayName": "3.3_Skyway",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 12,
    "name": "caesium-3-3",
    "isActive": false
  },
  {
    "_id": "631926ff81d5fd79b183aa9a",
    "displayName": "4.1_UAS_ATM",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 13,
    "name": "caesium-4-1",
    "isActive": true
  },
  {
    "_id": "6319270781d5fd79b183aa9b",
    "displayName": "4.2_UAM_ATM",
    "modules": [
      13,
      1,
      3,
      5,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 14,
    "name": "caesium-4-2",
    "isActive": true
  },
  {
    "_id": "632a10aaa532af7aef85042b",
    "displayName": "0.0_TEST",
    "modules": [
      13,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      10,
      11,
      12,
      14
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 15,
    "name": "test-0-0",
    "isActive": false
  },
  {
    "_id": "63a307d937226e0269a8a09a",
    "displayName": "2.5_UASReal+GCSReal",
    "modules": [
      13,
      1,
      2,
      4,
      7,
      8,
      10,
      11
    ],
    "url": "",
    "synopsisPattern": SynopsisPattern.DescripciónGenericaDelPatrón,
    "id": 9,
    "name": "caesium-2-5",
    "isActive": true
  }
];

export const PatternList = () => {

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignContent: 'space-between',
        justifyContent: 'center'
      }}>

      <Grid
        container
        spacing={1}
        sx={{
          padding: '2rem'
        }}
      >
        {
          dataPatterns.map(pattern => pattern.isActive && (
            <PatternListItem key={pattern._id} pattern={pattern} />
          ))
        }
      </Grid>
      <Grid
        container
        spacing={1}
        sx={{
          padding: '2rem',
          justifyContent: 'center'
        }}
      >
        <Link to="/">
          <Button variant="contained" color='danger' sx={{ display: 'inline-block' }}>CANCELAR</Button>
        </Link>
      </Grid>
    </Box>
  )
}