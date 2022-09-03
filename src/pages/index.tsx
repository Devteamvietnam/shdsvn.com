import React, { Component } from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Container from '@mui/material/Container';
import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

import { AppContext } from '../api';

import { UIHeader } from '../components/header/UIHeader';
import { Slider } from '../components/slider/UISlider';
import { UIFeaturedPost } from '../components/posts/UIFeaturedPost';
import { UISideBar } from '../components/sidebar/UISidebar';
import { UIMainPost } from '../components/posts/UIMainPost';
import { UIFooter } from '../components/footer/UIFooter';

export class UIPages extends Component {
  appContext: AppContext;

  constructor(props: any) {
    super(props);
    this.appContext = new AppContext(this);
  }

  render() {
    const theme = createTheme();

    const sections = [
      { title: 'Home', url: '#', description: '' },
      { title: 'Blog', url: '#', description: '' },
      { title: 'Project', url: '#', description: '' },
      { title: 'About', url: '#', description: '' }
    ];

    const SliderProps = {
      title: 'Title of a longer featured blog post',
      description:
        'Multiple lines of text that form the vn, informing new readers quickly and efficiently about whats most interesting in this posts contents.',
      image: 'https://source.unsplash.com/random',
      imageText: 'main image description',
      linkText: 'Continue reading…'
    };
    const featuredPosts = [
      {
        title: 'Featured post',
        date: 'Nov 12',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text'
      },
      {
        title: 'Post title',
        date: 'Nov 11',
        description:
          'This is a wider card with supporting text below as a natural lead-in to additional content.',
        image: 'https://source.unsplash.com/random',
        imageLabel: 'Image Text'
      }
    ];
    const sidebar = {
      title: 'About',
      description: 'Design blog with React Typescript',
      archives: [
        { title: 'March 2022', url: '#' },
        { title: 'February 2022', url: '#' },
        { title: 'January 2022', url: '#' },
        { title: 'November 2021', url: '#' },
        { title: 'October 2021', url: '#' },
        { title: 'September 2021', url: '#' },
        { title: 'August 2021', url: '#' },
        { title: 'July 2021', url: '#' },
        { title: 'June 2021', url: '#' },
        { title: 'May 2021', url: '#' },
        { title: 'April 2021', url: '#' }
      ],
      social: [
        { name: 'GitHub', icon: GitHubIcon },
        { name: 'Twitter', icon: TwitterIcon },
        { name: 'Facebook', icon: FacebookIcon }
      ]
    };
    const posts = [];
    return (
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Container maxWidth="xl">
          <UIHeader sections={sections} title={'SHDSVN'} />
          <main>
            <Slider post={SliderProps} />
            <Grid
              container
              spacing={4}
              rowSpacing={1}
              columnSpacing={{ xs: 1, sm: 2, md: 3 }}
            >
              {featuredPosts.map(post => (
                <UIFeaturedPost key={post.title} post={post} />
              ))}
            </Grid>
            <Grid container spacing={5} sx={{ mt: 3 }}>
              <UIMainPost title="From with luv" posts={posts} />
              <UISideBar
                title={sidebar.title}
                description={sidebar.description}
                archives={sidebar.archives}
                social={sidebar.social}
              />
            </Grid>
          </main>
        </Container>
        <UIFooter
          title="SHDSVN"
          description="Design by ddthien.dev@gmail.com!"
        />
      </ThemeProvider>
    );
  }
}
