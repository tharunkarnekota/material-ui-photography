import React from 'react'
import { Typography,AppBar,Toolbar} from '@mui/material'
import { Container } from '@mui/material'

const App = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
        <Typography variant="h5">Photography</Typography>
        </Toolbar>
      </AppBar>
      <Container style={{"marginTop":"70px","textAlign":"center"}}>
        <Typography variant="h2">Our Latest Version of Photography</Typography>
        <Typography paragraph>We are always here for you,please fill the form below for invite request</Typography>
      </Container>
    </div>
  )
}

export default App
