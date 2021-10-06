import React from 'react'
import { Typography,AppBar,Toolbar,ImageListItem , ImageList,Container} from '@mui/material'
import ImagesData from './ImagesData.json'

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

      
    </div>
  )
}

export default App
