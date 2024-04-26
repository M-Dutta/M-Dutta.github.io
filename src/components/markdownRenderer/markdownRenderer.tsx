import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import { Container, makeStyles } from '@material-ui/core';

interface Props {
    markdownFile: string;
    header?: string;
}

const styles = makeStyles({
    header: {
        textAlign: 'start',
        fontFamily: 'monospace !important',
    },
    markdown: {
        textAlign: 'start',
        fontFamily: 'monospace',
        backgroundColor: 'whitesmoke',
        padding: '10px 25px 10px 25px',
        borderRadius: '25px'
    }
})

const MarkdownRenderer: React.FC<Props> = ({ markdownFile, header }) => {
    const style = styles()
    const [mdContent, setMarkdownContent] = useState('');
    useEffect(() => {
        fetch(markdownFile).then(response => { return response.text() }).then(text => setMarkdownContent(text))
    })


    return (
        <React.Fragment>
            
            <Container style={{ textAlign: 'start' }}>
                <h2 className={style.header}>{header}</h2>
            </Container>
            <Container>
                <Markdown children={mdContent} className={style.markdown} />
            </Container>
        </React.Fragment>
    );
}

export default MarkdownRenderer;