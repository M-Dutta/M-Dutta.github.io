import React from 'react';
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'
import { Container } from '@mui/material';


interface Props {
    photoFile: string;
    contentFile: string;
}

const styles = makeStyles({
    content: {
        textAlign: 'start'
    },
    img: {
        maxHeight: '220px',
        borderRadius: '25%',
        position: 'relative',
        maxWidth: '100%',
        height: '100%',
        objectFit: 'cover',
    }
})

const Me: React.FC<Props> = ({ photoFile, contentFile }) => {
    const style = styles()

    return (
        <Grid container>
            <Grid item>
                <Container maxWidth='sm' style={{ justifyContent: 'center', alignItems: 'center', display: 'flex' }}>
                    <img src={photoFile}
                        className={style.img} />
                </Container>
            </Grid>
            <Grid item maxWidth='sm'>
                <Grid item>
                    <MarkdownRenderer markdownFile={contentFile} backgroundColor='rgb(155 194 211 / 55%)'>
                    </MarkdownRenderer>
                </Grid>

            </Grid>
        </Grid >

    );
}

export default Me;
