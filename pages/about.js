import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'
import { ThemeProvider, createTheme, } from '@mui/system';
import { Box } from '@mui/material'
import { useRouter } from 'next/router';
import Blog from '../components/PostList';
import PageLayout from '../components/PageLayout';


const AboutPage = () => {
    const { asPath, pathname } = useRouter();
    return (
        <PageLayout PageTitle={"4b0ut"}>
            <Box>
                <h1>About</h1>
                <p>Hello, I'm a blogger and I blog about interesting things.</p>
            </Box>
        </PageLayout>
    );
}

export default AboutPage;