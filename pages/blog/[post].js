import { Box, Typography } from "@mui/material";
import ReactMarkdown from "react-markdown";
import PageLayout from "../../components/PageLayout";

import { postForSlug, postSlugs } from "../../blogposts";
import { useEffect } from "react";
import hljs from "highlight.js";
import readTime from "../../functions/readTime";

const Post = ({ frontmatter, body, time }) => {
    useEffect(() => {
        hljs.highlightAll()
    })
    return (
        <PageLayout PageTitle={frontmatter.title}>
            <Box>
                <Typography component="h1" sx={{ fontSize: '2.25rem', fontWeight: 800 }}>
                    {frontmatter.title}
                </Typography>
                <Box sx={{ display: 'flex', flexDirection: 'row', fontStyle:'italic', mt:1, mb:4}}>
                    <Typography sx={{ color: '#4a5568', flexGrow: 1 }}>
                        {frontmatter.date}
                    </Typography>

                    <Typography sx={{ color: '#4a5568' }}>
                        {time} {time > 1 ? <> minutes </> : <> minute </>} to read.
                    </Typography>
                </Box>

                <ReactMarkdown children={body} />
            </Box>
        </PageLayout>
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


export default Post;
