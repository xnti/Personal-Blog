import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Header from '../components/Header'

import { Box } from '@mui/material'
import PageLayout from '../components/PageLayout'
import PostList from '../components/PostList'
import { posts } from '../blogposts'
import { ThemeProvider, createTheme, } from '@mui/system';
import { connect } from 'react-redux';
import { DarkTheme, LightTheme } from '../functions/themeHandler'


export default function Home(props) {
  return (
    <PageLayout PageTitle={"h0m3p4g3"} children={<PostList PostList={props.posts} />} />
  )
}


export async function getStaticProps() {
  const postsData = posts();
  return {
    props: {
      posts: postsData,
    },
  };
}


