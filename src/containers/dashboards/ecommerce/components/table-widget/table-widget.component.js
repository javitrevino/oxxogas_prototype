import React from 'react';
import PropTypes from 'prop-types';

import Avatar from '@material-ui/core/Avatar';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import IconButton from '@material-ui/core/IconButton';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';

import salesData from '../../../../../assets/data/dashboards/sales-data.json';

import themeStyles from './table-widget.theme.style';


class TableWidget extends React.Component {
  state = {
    data: salesData,
    anchorEl: null
  };

  onItemClick = () => {
    this.setState({ data: this.state.data.reverse(), anchorEl: null });
  };

  handleClick = (event) => {
    this.setState({ anchorEl: event.currentTarget });
  };

  handleClose = () => {
    this.setState({ anchorEl: null });
  };

  render() {
    const { data, anchorEl } = this.state;
    const { classes } = this.props;

    return (
      <Card className={classes['portal-sales-widget']}>
        <CardHeader
          action={
            <IconButton
              aria-owns={anchorEl ? 'store-menu' : null}
              aria-haspopup="true"
              onClick={this.handleClick}
            >
              <MoreVertIcon />
            </IconButton>
          }
          title="Ventas por producto"
          subheader="4 productos más vendidos"
        />
        <CardContent className={classes['portal-sales-widget__table']}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell className={classes['table-cell']} />
                <TableCell className={classes['table-cell']}>Producto</TableCell>
                <TableCell className={classes['table-cell']} numeric>Incremento en ventas</TableCell>
                <TableCell className={classes['table-cell']} numeric>Volumen</TableCell>
                <TableCell className={classes['table-cell']} numeric>Descuento</TableCell>
                <TableCell className={classes['table-cell']} numeric>Promedio por hora</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {data.map(item => (
                <TableRow key={item.product}>
                  <TableCell className={classes['table-cell']}>
                    {<Avatar alt={item.product} src={`${process.env.PUBLIC_URL}/${item.photo}`} />}
                  </TableCell>
                  <TableCell className={classes['table-cell']}>{item.product}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.salesIncrease}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.sales}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.discount}</TableCell>
                  <TableCell className={classes['table-cell']} numeric>{item.stock}</TableCell>
                </TableRow>))
              }
            </TableBody>
          </Table>
        </CardContent>
        <Menu
          id="store-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={this.handleClose}
        >
          <MenuItem key={1} onClick={this.onItemClick}>OXXO Gas</MenuItem>
          <MenuItem key={2} onClick={this.onItemClick}>Anteriormente Pemex</MenuItem>
        </Menu>
      </Card>
    );
  }
}

TableWidget.propTypes = {
  classes: PropTypes.shape({}).isRequired
};

export default withStyles(themeStyles, { withTheme: true })(TableWidget);
