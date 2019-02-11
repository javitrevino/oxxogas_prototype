import React, { Component } from 'react';
import moment from 'moment';
import 'moment/locale/es';

import PropTypes from 'prop-types';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import WorkIcon from '@material-ui/icons/Work';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import LocationOnIcon from '@material-ui/icons/LocationOn';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Avatar from '@material-ui/core/Avatar/Avatar';

import styles from './today-tab.style';
import scss from './today-tab.module.scss';


class TodayTab extends Component {
  state = {
    timeNow: new Date(),
    weatherForecasts: []
  }

  async componentDidMount() {
    const query = 'select location,item.condition from weather.forecast where woeid in ' +
      '(select woeid from geo.places(1) where text="London" OR text="New York" OR text="Sydney")';
    const url = `https://query.yahooapis.com/v1/public/yql?q=${
      encodeURIComponent(query)
      }&format=json&env=store%3A%2F%2Fdatatables.org%2Falltableswithkeys`;
    const res = await fetch(url);
    const data = await res.json();
    if (data.query.count > 0) {
      const weatherForecasts = data.query.results.channel.map(place => ({
        city: place.location.city,
        text: place.item.condition.text,
        temp: place.item.condition.temp,
        code: place.item.condition.code
      }));
      this.setState({ weatherForecasts });
    }
  }

  render() {
    const {
      classes
    } = this.props;

    return (
      <div className={scss['portal-today-wrapper']}>
        <Typography
          variant="headline"
          className={scss['portal-today-date']}
        >


          {

            moment(this.state.timeNow).format('dddd, MMMM Do, YYYY')
          }



        </Typography>


        <Card className={scss['portal-today-card']}>
          <CardHeader
            title="Agenda"
            classes={{
              root: classes.cardHeader,
              title: classes.cardTitle
            }}
          />
          <List>
            <ListItem>
              <ListItemIcon>
                <LocationOnIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Ir a junta"
                secondary="9:45 - Corporativo"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <WorkIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Generar PDF"
                secondary="10:00 - Oficina"
              />
            </ListItem>
            <ListItem>
              <ListItemIcon>
                <FlightTakeoffIcon color="primary" />
              </ListItemIcon>
              <ListItemText
                primary="Borrados de planos"
                secondary="11:30 - Sesion de ideas"
              />
            </ListItem>
          </List>
        </Card>
      </div>
    );
  }
}

TodayTab.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(styles, { withTheme: true })(TodayTab);
