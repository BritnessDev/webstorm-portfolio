// ** React Imports
import { useState } from 'react'

// ** Next Import
import Link from 'next/link'

// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'
import Button from '@mui/material/Button'
import TextField from '@mui/material/TextField'
import CardHeader from '@mui/material/CardHeader'
import InputLabel from '@mui/material/InputLabel'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'

// ** Icon Imports
import Icon from 'src/@core/components/icon'

const BlogIdeasForm = () => {
  // ** States
  const [values, setValues] = useState({ password: '', showPassword: false })

  const [confirmPassValues, setConfirmPassValues] = useState({ password: '', showPassword: false })

  const handleChange = prop => event => {
    setValues({
      ...values,
      [prop]: event.target.value
    })
  }

  const handleConfirmPassChange = prop => event => {
    setConfirmPassValues({
      ...confirmPassValues,
      [prop]: event.target.value
    })
  }

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword
    })
  }

  const handleClickConfirmPassShow = () => {
    setConfirmPassValues({
      ...confirmPassValues,
      showPassword: !confirmPassValues.showPassword
    })
  }

  return (
    <Card>
      <CardHeader title='Blog ideas' />
      <CardContent>
        <form onSubmit={e => e.preventDefault()}>
          <Grid container spacing={5}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label='Product/Brand Name'
                placeholder=''
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                rows={5}
                type='email'
                label='Email'
                placeholder='carterleonard@gmail.com'
                InputLabelProps={{
                  shrink: true
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <Typography
                sx={{
                  mb: 2,
                  fontWeight: 500
                }}
              >
                Tone
              </Typography>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
                <Select
                  label='Age'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <FormControl fullWidth>
                <InputLabel id='demo-simple-select-outlined-label'>Age</InputLabel>
                <Select
                  label='Age'
                  defaultValue=''
                  id='demo-simple-select-outlined'
                  labelId='demo-simple-select-outlined-label'
                >
                  <MenuItem value=''>
                    <em>None</em>
                  </MenuItem>
                  <MenuItem value={10}>Ten</MenuItem>
                  <MenuItem value={20}>Twenty</MenuItem>
                  <MenuItem value={30}>Thirty</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12}>
              <Box
                sx={{
                  gap: 5,
                  display: 'flex',
                  flexWrap: 'wrap',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <Button type='submit' variant='contained' size='large'>
                  Get Started!
                </Button>
                <Box
                  sx={{
                    display: 'flex',
                    alignItems: 'center',
                    '& a': {
                      color: 'primary.main',
                      textDecoration: 'none'
                    }
                  }}
                >
                  <Typography
                    sx={{
                      mr: 2
                    }}
                  >
                    Already have an account?
                  </Typography>
                  <Link href='/' onClick={e => e.preventDefault()}>
                    Log in
                  </Link>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </form>
      </CardContent>
    </Card>
  )
}

export default BlogIdeasForm
