import { Box, Button, Typography } from '@mui/material';

export const NoMatch = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 22.5px)',
        backgroundColor: 'primary.main',
        borderRadius: '10px'
      }}
    >
      <Typography variant="h1" style={{ color: 'white' }}>
        404
      </Typography>
      <Typography variant="h6" style={{ color: 'white', paddingBottom: '10px' }}>
        The page you’re looking for doesn’t exist.
      </Typography>
      <Button href='/' variant="contained" color='default'>Back Home</Button>
    </Box>
  )
}
