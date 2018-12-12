import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import tileData from './tileData';
import table1 from './pictures/table1.jpg';
import table2 from './pictures/table2.jpg';
import table3 from './pictures/table3.jpg';
import table4 from './pictures/table4.jpg';
import table5 from './pictures/table5.png';
import nature1 from './pictures/nature1.jpg';
import nature2 from './pictures/nature2.jpg';
import table6 from './pictures/table6.jpg';
import nature3 from './pictures/nature3.png';
 
 
const pictures = [ 
     {
         img: table1,
         title: 'table1',
         cols: 1
    },
    {
        img: table2,
        title: 'table2',
        cols: 1
   },
   {
    img: table3,
    title: 'table3',
    cols: 1
},
{
    img: table4,
    title: 'table4',
    cols: 2
},
{
    img: nature3,
    title: 'nature3',
    cols: 1
},
{
    img: table5,
    title: 'table5',
    cols: 3
},
{
    img: nature1,
    title: 'nature1',
    cols: 1
},
{
    img: nature2,
    title: 'nature2',
    cols: 1
},
{
    img: table6,
    title: 'table6',
    cols: 1
},
 ]

export default pictures;