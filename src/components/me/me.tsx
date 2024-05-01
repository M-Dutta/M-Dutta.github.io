import React from 'react';
import { makeStyles } from '@mui/styles'
import { Image } from 'mui-image'
import Grid from '@mui/material/Grid'
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'
import { Container } from '@mui/material';


interface Props {
    photoFile: string;
    contentFile: string;
}

const styles = makeStyles({
    rootStyle: {
    },
    portrait: {
        borderRadius: '25%',
        maxHeight: '220px',
        justifyContent: 'center',
        alignItems: 'center'
    },

    content: {
        textAlign: 'start'
    }
})

const Me: React.FC<Props> = ({ photoFile, contentFile }) => {
    const style = styles()

    return (

        <Grid container>
            <Grid item>
                <Container maxWidth='sm'>
                    <Image src={photoFile}
                        className={style.portrait}
                        duration={300} />
                </Container>
            </Grid>
            <Grid item maxWidth='sm'>
                <Grid item>
                    <MarkdownRenderer
                        markdownFile={contentFile}
                        backgroundColor='rgb(155 194 211 / 55%)'
                    >
                    </MarkdownRenderer>
                </Grid>

            </Grid>
        </Grid >

    );
}

export default Me;