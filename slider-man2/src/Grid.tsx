import React from 'react';
import { createStyles, Theme, makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';


const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            width: '100%',
            maxWidth: '36ch',
            backgroundColor: theme.palette.background.paper,
        },
        inline: {
            display: 'inline',
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

export default function AlignItemsList() {

    return (
        <Container maxWidth="md" component="main">
            <Grid container spacing={5} alignItems="flex-end">
                <Draw />
            </Grid>
        </Container>
    );
}


function Draw() {
    const classes = useStyles();
    return (

        <Card className={classes.root} >
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
    );
}