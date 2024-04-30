import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles'
import Grid from '@mui/material/Grid'
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'


interface Props {
    photoFile: string;
    contentFile: string;
}

const styles = makeStyles({
    rootStyle: {
    },
    portrait: {
        borderRadius: '25%',
        height: '189px',
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
                <Container><img src={photoFile} className={style.portrait}></img></Container>
            </Grid>
            <Grid item maxWidth='sm'>
                <Grid item>
                    <MarkdownRenderer header="Hi, I'm Mishuk!"
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