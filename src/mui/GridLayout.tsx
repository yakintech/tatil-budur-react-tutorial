import { Grid } from '@mui/material'
import React from 'react'

function GridLayout() {
    return (<>
        <Grid container spacing={2}>

            <Grid item xs={12} md={6} lg={4}>
                <div style={{backgroundColor:'aquamarine'}}>BOX - 1</div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <div style={{backgroundColor:'yellow'}}>BOX - 2</div>
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
                <div style={{backgroundColor:'black'}}>BOX - 3</div>
            </Grid>

        </Grid>

    </>
    )
}

export default GridLayout