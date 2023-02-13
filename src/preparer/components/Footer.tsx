import { Grid } from '@mui/material'
import { Item } from '../layout/PreparerLayout';

import footerIndra from '../../assets/footer-indra.png';

export const Footer = () => {
  return (
    <Grid item xs={12}>
      <Item sx={{ height: '30px' }}>
        <Grid
          container
          spacing={0}
          direction="row"
          alignItems="center"
          justifyContent="end"
        >
          <img src={footerIndra} alt="indra" height={20} />
        </Grid>
      </Item>
    </Grid>
  )
}