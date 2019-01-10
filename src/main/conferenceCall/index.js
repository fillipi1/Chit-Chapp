import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import Panels from './panels';
import BackButton from '@material-ui/icons/arrowback';
import Conference from '@material-ui/icons/group';

class dashBoard extends Component {

    render() {

        return (
        <div style={{height: '100vh', width: '100vw', backgroundColor: 'white'}}>
            <div style={{backgroundColor: '#2e3d61', width: '100%', height: '9%', display: 'flex', boxShadow: `1px 3px 3px #d2cccc`}} >
                <div style={{alignItems: 'center', display: 'flex'}}>
                    <IconButton  onClick={this.closeScreen} aria-label="Close">
                        <Link to='/'>
                            <BackButton style={{color: 'white'}}/>
                        </Link>
                    </IconButton>
                </div>
                <div style={{alignItems: 'center', justifyContent: 'center', display: 'flex', width: '100%'}}>
                <Conference  style={{width: 90, color: 'white', height: 50}}/>
                    <Typography style={{color: 'white', fontSize: 30, fontWeight: 10}}>
                       Conference Call
                    </Typography>
                </div>
            </div>
            <div >
                <Panels />
            </div>
        </div>
        
        )
    }
};


export default dashBoard;