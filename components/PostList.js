import { Box, Typography } from "@mui/material";
import { posts } from "../blogposts";

import Link from "next/link";
import readTime from "../functions/readTime";

const Blog = (props) => {
    const {PostList} = props;
    if (!PostList || !PostList.length) return <p>No posts found</p>;

    return (
        <>
            <Typography color={'primary.dark'} sx={{ mx: 4, fontWeight: '800', fontSize: '2rem' }} component="h1">
                Blog posts
            </Typography>
            <Box sx={{ mx: 4, mt: 1 }}>
                {PostList.map((post) => {
                    const { frontmatter, slug, body } = post;
                    const { description, date, title } = frontmatter
                    const readtime = readTime(body);
                    return (
                        <Link href={`/blog/${slug}`}>
                            <a>
                                <Box className="hvr-underline-from-center w-100" sx={{ px: 4, mt: 2, pb: 2, borderBottom: 1, borderBottomColor: 'primary.main' }} key={slug}>
                                    <Box    >
                                        <Box color={'primary.dark'} sx={{ fontWeight: 600, fontSize: '1.5rem' }}>
                                            {title}
                                        </Box>
                                        <Box color={'primary.main'} sx={{ color: '#5b6972' }}>
                                            {description}
                                        </Box>
                                        <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                                            <Typography color={'primary.main'} sx={{ color: '#8e9da5', mt: 2, flexGrow: 1 }}>
                                                {date}
                                            </Typography>
                                            <Typography color={'primary.main'} sx={{ color: '#8e9da5', mt: 2 }}>
                                                {readtime} {readtime > 1 ? <> minutes </> : <> minute </>} to read.
                                            </Typography>
                                        </Box>

                                    </Box>
                                </Box>
                            </a>
                        </Link>
                    );
                })}
            </Box>
        </>
    );
}

export default Blog;
