import React from 'react'
import { AppBar, Button, Grid, Toolbar } from '@material-ui/core'
import { NavLink } from 'react-router-dom'
import { MAIN } from '../utils/consts'


const Navbar = () => {

  return (
    <AppBar position="static">
      <Toolbar variant={"dense"}>
        <Grid container justify={"flex-end"}>
            <NavLink to={MAIN}>
              <Button variant={"outlined"}>Login</Button>
            </NavLink>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar
