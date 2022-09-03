import * as React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Markdown from '../markdown/UIMarkdown';

interface MainProps {
  posts: Array<string>;
  title: string;
}

export class UIMainPost extends React.Component<MainProps> {
  render(): React.ReactNode {
    const { posts, title } = this.props;
    return (
      <Grid
        item
        xs={12}
        md={8}
        sx={{
          '& .markdown': {
            py: 3
          }
        }}
      >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Divider />
        {posts.map(post => (
          <Markdown className="markdown" key={post.substring(0, 40)}>
            {post}
          </Markdown>
        ))}
      </Grid>
    );
  }
}
