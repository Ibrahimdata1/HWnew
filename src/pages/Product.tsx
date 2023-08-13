
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import PricingCards from '../components/PricingCard';
import { Link } from 'react-router-dom';


const Product = () => {
  return (
    <div  className='cardProduct'>
        <div>
            <Card variant="outlined" sx={{ width: 600, height:450 }}>
            <div>
              <Typography level="title-lg" fontSize={30}>Super Tech Car High Gen</Typography>
              <IconButton
                aria-label="bookmark Bahamas Islands"
                variant="plain"
                color="neutral"
                size="sm"
                sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
              >
              </IconButton>
            </div>
            <AspectRatio minHeight="300px" maxHeight="400px">
              <img
                src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
                srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
                loading="lazy"
                alt=""
              />
            </AspectRatio>
            <CardContent orientation="horizontal">
              <div>
                <Typography>Total price:</Typography>
                <Typography fontSize="lg" fontWeight="bold">
                  $12,500
                </Typography>
              </div>
              <Button
                variant="solid"
                size="md"
                color="primary"
                aria-label="Explore Bahamas Islands"
                sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
              >
               <Link to='/checkout'>Buy Now</Link>
              </Button>
            </CardContent>
            </Card>
        </div>
        <PricingCards/>
    </div>
  )
}

export default Product
