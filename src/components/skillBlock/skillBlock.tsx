import React from 'react';
import { Container } from '@mui/material';
import { makeStyles } from '@mui/styles'
import MarkdownRenderer from '../markdownRenderer/markdownRenderer'

interface Props {
    type: string;
    contentFile: string;
}

const styles = makeStyles({
    header: {
        textAlign: 'start',
        fontFamily: 'monospace'
    },
    rootStyle: {
        textAlign: 'start',
        borderRadius: '10px'
    }
})

const SkillBlock: React.FC<Props> = ({ contentFile }) => {
    const style = styles()
    return (
        <React.Fragment>
            <Container className={style.header}>
                <h1>Tech I have worked with</h1>
            </Container>
            <MarkdownRenderer markdownFile={contentFile} backgroundColor='rgb(123 133 134 / 32%)'></MarkdownRenderer>
        </React.Fragment>
    );
}

export default SkillBlock;