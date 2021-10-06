import React from 'react'
import { Typography,AppBar,Toolbar,ImageListItem , ImageList,Container} from '@mui/material'
import ImagesData from './ImagesData.json'
import { TextField } from '@mui/material'
import { Button } from '@mui/material'

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

      <Container>
        <ImageList rowHeight={370} cols={3}>
          {ImagesData.map(imgObj =>
              <ImageListItem key={imgObj.id}>
                <img src={imgObj.img} alt={imgObj.title} />
              </ImageListItem>
            )}
        </ImageList>
      </Container>

      <center>
        <Container>
          <Typography variant="h4">Contact Form</Typography>
          <form>
            <TextField style={{"width":"500px","margin":"5px"}} type="text"   label="name"     variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}} type="email"  label="email"    variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}} type="text"   label="proposal" variant="outlined"/><br/>
            <TextField style={{"width":"500px","margin":"5px"}} type="text"   label="address"  variant="outlined"/><br/>
            <Button variant="contained" color="primary">Submit</Button><br /><br />
          </form>
        </Container>
      </center>


    </div>
  )
}

export default App
