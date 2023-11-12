import * as React from 'react';
import Button from '../components/global/Button';
import Typography from '../components/global/Typography';
import ProductHeroLayout from './ProductHeroLayout';

import background from '../../assets/background.jpeg'

export default function ProductHero() {
  return (
    <ProductHeroLayout
      sxBackground={{
        backgroundImage: `url(${background})`,
        backgroundColor: '#7fc7d9', // Average color of the background image.
        backgroundPosition: 'center',
      }}
    >
      {/* Increase the network loading priority of the background image. */}
      <img
        style={{ display: 'none' }}
        src={background}
        alt="increase priority"
      />
      <Typography color="inherit" align="center" variant="h2" marked="center">
        Expanding with Blockchain
      </Typography>
      <Typography
        color="inherit"
        align="center"
        variant="h5"
        sx={{ mb: 4, mt: { xs: 4, sm: 10 } }}
      >
        Unlock the Future of Investing with BlockchainStocks - Your Gateway to the Future Market
      </Typography>
      <Button
        color="secondary"
        variant="contained"
        size="large"
        component="a"
        href="/company-registration/"
        sx={{ width: 300 }}
      >
        Issue your company
      </Button>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        OR
      </Typography>
      <Typography variant="body2" color="inherit" sx={{ mt: 2 }}>
        Get access to blockchain investing
      </Typography>
      <Button
        color="primary"
        variant="contained"
        size="large"
        component="a"
        href="/investor-registration/"
        sx={{ width: 300 }}
      >
        Register as Investor
      </Button>
    </ProductHeroLayout>
  );
}
