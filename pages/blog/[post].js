import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import PageLayout from "../../components/PageLayout";

import { postForSlug, postSlugs } from "../../blogposts";
import { useEffect } from "react";
import hljs from "highlight.js";
import readTime from "../../functions/readTime";
import { connect } from 'react-redux';
import { DarkTheme, LightTheme } from '../../functions/themeHandler'
import { ThemeProvider } from '@mui/system';

const Post = (props) => {
    const { frontmatter, body, time } = props;
    useEffect(() => {
        hljs.highlightAll()
    })
    return (
        <ThemeProvider theme={props.LightTheme ? LightTheme : DarkTheme}>
            <PageLayout PageTitle={frontmatter.title}>
                <Box>
                    <Typography color={'primary.main'} component="h1" sx={{ fontSize: '2.25rem', fontWeight: 800 }}>
                        {frontmatter.title}
                    </Typography>
                    <Box sx={{ display: 'flex', flexDirection: 'row', fontStyle: 'italic', mt: 1, mb: 4 }}>
                        <Typography color={'primary.dark'} sx={{ /*color: '#4a5568',*/ flexGrow: 1 }}>
                            {frontmatter.date}
                        </Typography>

                        <Typography color={'primary.dark'} /*sx={{ color: '#4a5568' }}*/>
                            {time} {time > 1 ? <> minutes </> : <> minute </>} to read.
                        </Typography>
                    </Box>
                    <Box color={'primary.dark'}>
                        <ReactMarkdown children={body} />
                    </Box>
                </Box>
            </PageLayout>
        </ThemeProvider>
    );
}

export async function getStaticProps({ params }) {
    const { frontmatter, body } = await postForSlug(params.post);
    const time = readTime(body)
    return {
        props: {
            frontmatter,
            body,
            time
        },
    };
}

export async function getStaticPaths() {
    const paths = postSlugs().map((slug) => `/blog/${slug}`);

    return {
        paths,
        fallback: false,
    };
}


const mapStateToProps = (state) => {
    return {
        LightTheme: state.LightTheme,
    }
}

export default connect(mapStateToProps, {})(Post);
