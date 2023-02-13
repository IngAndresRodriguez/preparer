import { Grid } from '@mui/material'
import { Item } from '../layout/PreparerLayout'

import feder from '../../assets/feder.png';
import cdti from '../../assets/cdti.png';

export const Header = () => {
  return (
    <Grid item xs={12}>
      <Item sx={{ height: '70px', padding: 0 }}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="left"
        >
          <img src={feder} alt="feder" height={70} />
          <img src={cdti} alt="cdti" />
        </Grid>
      </Item>
    </Grid>
  )
}