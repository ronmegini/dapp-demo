import * as React from 'react';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';
import Typography from '../components/global/Typography';

import vote from '../../assets/vote.png';
import auto from '../../assets/auto.png';
import dividends from '../../assets/dividends.png';
import market from '../../assets/market.png';

const item = {
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  px: 5,
};

function ProductValues() {
  return (
    <Box
      component="section"
      sx={{ display: 'flex', overflow: 'hidden', bgcolor: 'secondary.light' }}
    >
      <Container sx={{ mt: 15, mb: 30, display: 'flex', position: 'relative' }}>
        <Box
          component="img"
          src="/static/themes/onepirate/productCurvyLines.png"
          alt="curvy lines"
          sx={{ pointerEvents: 'none', position: 'absolute', top: -180 }}
        />
        <Grid container spacing={1}>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={market}
                alt="market"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                New Market
              </Typography>
              <Typography variant="h5">
                {
                  'Take part in a 50B$ a day market volume'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={auto}
                alt="auto"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Automatic
              </Typography>
              <Typography variant="h5">
                {
                  '24/7 fully automatic trading and management without broker’s fees'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={dividends}
                alt="dividends"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Dividend splitting
              </Typography>
              <Typography variant="h5">
                {
                  'Split dividends automatically to the holders’ account over the blockchain'
                }
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} md={3}>
            <Box sx={item}>
              <Box
                component="img"
                src={vote}
                alt="clock"
                sx={{ height: 55 }}
              />
              <Typography variant="h6" sx={{ my: 5 }}>
                Public Queries
              </Typography>
              <Typography variant="h5">
                {'Get smarter, democracy decisions with over the blockchain voting by the holders’ account'}
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ProductValues;
