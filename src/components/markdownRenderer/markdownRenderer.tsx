import React, { useState, useEffect } from 'react';
import Markdown from 'react-markdown'
import { Container, makeStyles } from '@material-ui/core';

interface Props {
    markdownFile: string;
    header: string;
}

const styles = makeStyles({
    markdown: {
        textAlign: 'start',
        fontFamily: 'monospace',
        backgroundColor: 'whitesmoke',
        paddingTop: '10px',
        paddingBottom: '10px',
        paddingRight: '25px',
        borderRadius: '10px'
    }
})

const MarkdownRenderer: React.FC<Props> = ({ markdownFile, header }) => {
    const style = styles()
    const [mdContent, setMarkdownContent] = useState('');
    useEffect(() => {
        ;
        fetch(markdownFile).then(response => { return response.text() }).then(text => setMarkdownContent(text))
    })


    return (
        <Container >
            <Container style={{ textAlign: 'start' }} ><h2>{header}</h2></Container>
            <Container>
                <Markdown children={mdContent} className={style.markdown} />
            </Container>
        </Container>
    );
}

export default MarkdownRenderer;