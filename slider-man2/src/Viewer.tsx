import React from 'react';
// import { makeStyles ,theme } from '@material-ui/core/styles';
import { CssBaseline} from "@material-ui/core";
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            minWidth: 275,
            marginTop: theme.spacing(3),
            marginLeft: theme.spacing(1),
            marginRight: theme.spacing(1),
            background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
            border: 0,
            borderRadius: 3,
            boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
            color: 'white',
            height: 48,
            padding: '0 30px',
        },
        bullet: {
            // display: 'inline-block',
            margin: '0 2px',
            transform: 'scale(0.8)',
        },
        title: {
            fontSize: 14,
        },
        pos: {
            marginBottom: 12,
        },
        cardPricing: {
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'baseline',
            marginBottom: theme.spacing(2),
        },
    }),
);

export default function Viewer() {

    return (
        <Container maxWidth="md" component="main" color="red">
            <Grid container spacing={5} alignItems="flex-end" color="grey">
                <Draw />
                <Draw />
                <Draw />
                <Draw />

            </Grid >
        </Container >
    );
}



function Draw() {
    const classes = useStyles();
    return (
        <div className="View">

        


        <CssBaseline />
        <Card className={classes.root} color="blue">
            <div className={classes.cardPricing}>


                <CardContent>
                    <Typography className={classes.title} color="textSecondary" gutterBottom>
                        ＜タイトルはここ＞
        </Typography>
                    <Typography variant="body2" component="p">
                        ＜本文２＞
        </Typography>
                    <Typography className={classes.pos} color="textSecondary">
                        ＜タグ＞
        </Typography>
                </CardContent>
                <CardActions>
                    <Button size="small">詳しく見る</Button>
                </CardActions>
            </div>
        </Card >
        </div>
    );
}