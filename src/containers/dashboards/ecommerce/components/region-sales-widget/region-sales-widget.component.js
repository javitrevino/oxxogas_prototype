import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import Map from './google-map/google-map.component';

import themeStyles from './region-sales-widget.theme.style';

const markers = [{
  lat: 25.480910,
  lng: -99.814170,
  sales: 13265,
  label: 'Nuevo León'
}, {
  lat: 25.421391,
  lng: -101.000237,
  sales: 32456,
  label: 'Coahuila'
}, {
  lat: 21.885256,
  lng: -102.291565,
  sales: 678654,
  label: 'Aguascalientes'
}, {
  lat: 22.151609,
  lng: -100.974609,
  sales: 34645,
  label: 'San Luis Potosí'
}, {
  lat: 19.292120,
  lng: -99.655777,
  sales: 27456,
  label: 'Estado de México'
}];

class RegionSalesWidget extends React.Component {
  state = {
    activeMarker: null,
    anchorEl: null
  };

  onPersonClick = marker => () => {
    this.setState({ activeMarker: marker, anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { classes } = this.props;
    const { anchorEl } = this.state;

    return (
      <Card className={classes['portal-sales-widget']}>
        <CardHeader
          action={
            <IconButton
              aria-owns={anchorEl ? 'location-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Ventas por región"
          subheader="Distrubución de ingresos"
        />
        <CardContent className={classes['portal-sales-widget__map']}>
          <Map markers={markers} activeMarker={this.state.activeMarker} onMarkerClick={this.onPersonClick} />
        </CardContent>
        <Menu
          id="location-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          {markers.map(marker => (
            <MenuItem key={marker.label} onClick={this.onPersonClick(marker)}>{marker.label}</MenuItem>
          ))}
        </Menu>
      </Card>
    );
  }
}

RegionSalesWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(RegionSalesWidget);
