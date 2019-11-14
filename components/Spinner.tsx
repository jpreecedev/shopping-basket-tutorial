import React from "react"
import { Grid, CircularProgress } from "@material-ui/core"
import { Theme, makeStyles } from "@material-ui/core/styles"

const useStyles = makeStyles((theme: Theme) => ({
  progress: {
    margin: theme.spacing(2)
  }
}))

const Spinner = () => {
  const classes = useStyles({})
  return (
    <Grid container justify="center" alignItems="center">
      <Grid item>
        <CircularProgress className={classes.progress} />
      </Grid>
    </Grid>
  )
}

export { Spinner }
