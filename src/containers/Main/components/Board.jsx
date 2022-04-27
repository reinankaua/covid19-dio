import React, { memo } from "react";
import PropTypes from "prop-types";
import { Grid, Skeleton } from '../../../components'
import Card from './Card'

function Board({ data }) {
    const { cases, todayDeaths, recovered, deaths, todayCases } = data;
    const getValue = (value) => value ? value : <Skeleton variant="text" width={182} height={60} />


    return (
        <Grid container spacing={4}>

            <Grid item xs={12} sm={3}>
                <Card value={getValue(cases)} displayValue="Total de casos" color="#5d78ff" />
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card value={getValue(todayDeaths)} displayValue="Óbitos hoje" color="#f7b829" />
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card value={getValue(todayCases)} displayValue="Casos hoje" color="#000" />
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card value={getValue(deaths)} displayValue="Total de mortes" color="#e95078" />
            </Grid>

            <Grid item xs={12} sm={3}>
                <Card value={getValue(recovered)} displayValue="Total de recuperados" color="#67c887" />
            </Grid>

        </Grid>
    )
}

export default memo(Board);