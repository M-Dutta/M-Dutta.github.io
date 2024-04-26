import React from 'react';
import { Container, makeStyles } from '@material-ui/core';
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
                <h1>Tech I've worked with</h1>
            </Container>
            <MarkdownRenderer header='' markdownFile={contentFile}></MarkdownRenderer>
        </React.Fragment>
    );
}

export default SkillBlock;