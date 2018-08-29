import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import elon from './pictures/elon.jpg';
import pek from './pictures/pek.jpg';
import indiana from './pictures/indiana.jpg';
import yoshi from './pictures/yoshi.jpg';
import satan from './pictures/satan.jpg';
import jesus from './pictures/jesus.jpg';

export default [

{
  avatar: indiana ,
  name: 'Indian jones' ,
  message: 'have the crystal skull!!!',
  time: '2:40 AM',
  active: '1 hour ago'

},

{
  avatar: pek,
  name: 'Pek Pongpaet' ,
  message: 'Never buy lemon bubly again',
  time: '12:19 PM',
  active: '4 hour ago'

},

{
  avatar: elon,
  name:'Elon Musk' ,
  message: 'THE ROBOTS ARE COMING!!',
  time: '6:30 PM',
  active: '2 hour ago'

},

{
  avatar: jesus,
  name: 'Jesus Christ' ,
  message: 'Wana come over to my place for supper?',
  time: '11:11 AM',
  active: '2 centuries ago'

},



];
