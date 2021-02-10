import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Box } from '@material-ui/core';
import CheckboxList from './CheckboxList'
import ProductCard from './ProductCard'
import { products } from '../json/products.json'
import { filters } from '../json/filter.json'


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1
    },
    filterBox: {
        backgroundColor: '#ccc',
        padding: '20px',
        marginBottom: '10px'
    },
    filterTitle: {
        padding: '5px',
        fontSize: '14px',
        margin: '0',
        padding: '0'
    },
    productListContainer: {
        backgroundColor: '#545454',
        minHeight: '150px'
    }
}));

export default function List(props) {
    
    const classes = useStyles();
    const { sizes, colors, prices } = props;

    const [min = 0, max =0 ] = prices.reduce((prev, cur) => {
        const prevValues = prev.split('-').map(val => +val);
        const curValues = cur.split('-').map(val => +val);
        const min = prevValues[0] < curValues[0] ? prevValues[0] : curValues[0];
        const max = prevValues[1] > curValues[1] ? prevValues[1] : curValues[1]
        return `${min}-${max}`
    },'0-0').split('-').map(result=> +result);

    return (
        <Container maxWidth="lg">
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} md={3}>
                    {
                        filters.map((filter, index) =>
                            <Box key={`filter-${index}`} className={classes.filterBox}>
                                <h1 className={classes.filterTitle}>{filter.title}</h1>
                                <hr />
                                <CheckboxList options={filter.options} filterName={filter.name} addFilter={props.addFilter} removeFilter={props.removeFilter} />
                            </Box>
                        )
                    }
                </Grid>
                <Grid item xs={12} sm={6} md={9}>
                    <Grid container spacing={3}>
                        {
                            products.filter(product => ((sizes && sizes.length === 0) || sizes.includes(product.size)))
                                .filter(product => ((colors && colors.length === 0) || colors.includes(product.color)))
                                .filter(product => min <= product.price && (max === 0 || max >= product.price))
                                .map((product, index) =>
                                    <Grid key={index} item xs={12} sm={12} md={4}>
                                        <ProductCard product={product}></ProductCard>
                                    </Grid>
                                )
                        }
                    </Grid>
                </Grid>
            </Grid>
        </Container>
    );
}