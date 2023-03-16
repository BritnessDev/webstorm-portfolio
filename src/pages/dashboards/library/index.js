import React from 'react'
import Grid from '@mui/material/Grid'

import CardInfluencer from 'src/views/library/cardInfulencer'

const Library = props => {
  return (
    <Grid container spacing={6}>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
        <CardInfluencer />
      </Grid>
    </Grid>
  )
}

export default Library
