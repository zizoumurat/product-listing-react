import React from 'react';
import { connect } from 'react-redux'
import { addToCart } from '../actions'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    maxWidth: '100%',
  },
  media: {
    height: 300,
  },
});

class ProductCard extends React.Component {
  render() {
    const { classes } = this.props;
    const { product } = this.props;

    const tikla = () => {
      this.props.addToCart(product);
    }

    return (
      <Card className={classes.root}>
        <CardMedia
          className={classes.media}
          image={product.image}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {product.name}
          </Typography>
          <Typography gutterBottom variant="h5" component="h2">
            {product.price} &#8378;
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {product.size} - {product.color}
          </Typography>
        </CardContent>
        <CardActions>
          <Button onClick={tikla} variant="outlined" color="secondary" fullWidth>
            Sepete Ekle
        </Button>
        </CardActions>
      </Card>
    );
  }
}

const mapStateToProps = state => {
  return {
    basket: state.basket
  }
}

const mapActionsToProps = () => ({ addToCart })


export default withStyles(styles)(
  connect(
    mapStateToProps,
    {addToCart}
  )(ProductCard)
);

