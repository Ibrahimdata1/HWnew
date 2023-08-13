import CardMedia from '@mui/material/CardMedia';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import car1 from '../images/car1.jpg'
import { Link } from 'react-router-dom';

export default function BasicCard() {
  return (
    <Card sx={{ minWidth: 275 }}>
      <CardContent>        
        <CardMedia
          component="img"
          height="194"
          image={car1}
          alt="car1"
        />
        <Typography variant="h5" component="div" style={{marginTop:'10px', fontWeight:'bold'}}>
          Product Car
        </Typography>       
        <Typography variant="body2">
        <br />  
          Super High Speed Car
                  
        </Typography>
      </CardContent>
      <CardActions className='cardAction'>
        <Link to='/product'><Button size="medium" color='success'>Buy</Button></Link>
      </CardActions>
    </Card>
  );
}