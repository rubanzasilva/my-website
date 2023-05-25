import React from 'react';
// import { Card } from 'antd';
import {GridItem, GridWrapper} from './projectElements'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

export default function Projects() {
  return (
    <div>
      <p>My Projects Of Interest</p>
      <GridWrapper>
      <GridItem>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Antelope Classifier
        </Typography>
        <Typography variant="body2" color="text.secondary">
        After training a machine learning model you need to deploy it to show potential stakeholders
what the results would look like With a decent UI, not jupyter notebook sto achieve any sort of
buyback from the people/business that potentially want and can pay for this type of service.

        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Read More</Button>
      </CardActions>
    </Card>
      </GridItem>

      <GridItem>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </GridItem>

      <GridItem>
      <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="140"
        image="/static/images/cards/contemplative-reptile.jpg"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Lizard
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Share</Button>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
      </GridItem>
    </GridWrapper>
    
    </div>
  );
}


// const { Meta } = Card;

// const Projects: React.FC = () => (
//   <GridWrapper>

//     <GridItem>
//     <Card
//     hoverable
//     style={{ width: 400, padding :0, margin:0 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="ZICOFE is a member of International Women in Coffee Alliance. (IWCA Uganda Chapter), an orgarnization with the sole purpose of advocating for gender equality and women’s rights." />
//     <p>date</p>
//   </Card>
//     </GridItem>

//     <GridItem>
//     <Card
//     hoverable
//     style={{ width: 240, padding :0 }}
//     cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
//   >
//     <Meta title="Europe Street beat" description="Ugandan Coffee is a unique African coffee in the fact that it has a low acidity. This coffee is mild and smooth, with pleasant chocolate/tobacco/cedar notes, low to medium body. Exhibits flavor nuances of brown sugar and dried fruit, with a cocoa aroma." />
//   </Card>
//     </GridItem>
    
//   </GridWrapper>
// );

// export default Projects;