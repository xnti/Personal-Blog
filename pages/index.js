import PageLayout from '../components/PageLayout'
import PostList from '../components/PostList'
import { posts } from '../blogposts'



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


