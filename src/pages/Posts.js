import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Grid,
  Typography,
} from "@mui/material";

const Posts = () => {
  const dummyPosts = [
    {
      id: 1,
      caption: "Beautiful Sunset",
      mediaUrl: "https://example.com/sunset.jpg",
    },
    {
      id: 2,
      caption: "Beautiful sunset",
      mediaUrl: "https://example.com/post2.jpg",
      created_last_24_hours: false,
    },
    {
      id: 3,
      caption: "Coffee time",
      mediaUrl: "https://example.com/post3.jpg",
      created_last_24_hours: false,
    },
    {
      id: 4,
      caption: "Fun with friends",
      mediaUrl: "https://example.com/post4.jpg",
      created_last_24_hours: true,
    },
    {
      id: 5,
      caption: "Travel adventures",
      mediaUrl: "https://example.com/post5.jpg",
      created_last_24_hours: true,
    },
    {
      id: 6,
      caption: "First post",
      mediaUrl: "https://example.com/post1.jpg",
      created_last_24_hours: true,
    },
    {
      id: 7,
      caption: "Beautiful sunset",
      mediaUrl: "https://example.com/post2.jpg",
      created_last_24_hours: false,
    },
    {
      id: 8,
      caption: "Coffee time",
      mediaUrl: "https://example.com/post3.jpg",
      created_last_24_hours: false,
    },
    {
      id: 9,
      caption: "Fun with friends",
      mediaUrl: "https://example.com/post4.jpg",
      created_last_24_hours: true,
    },
    {
      id: 10,
      caption: "Travel adventures",
      mediaUrl: "https://example.com/post5.jpg",
      created_last_24_hours: true,
    },
    {
      id: 11,
      caption: "Gourmet delights",
      mediaUrl: "https://example.com/post6.jpg",
      created_last_24_hours: false,
    },
    /* {
      post_id: 7,
      user_id: 7,
      caption: "New hobby",
      media_url: "https://example.com/post7.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 8,
      user_id: 8,
      caption: "Morning vibes",
      media_url: "https://example.com/post8.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 9,
      user_id: 9,
      caption: "Fitness journey",
      media_url: "https://example.com/post9.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 10,
      user_id: 10,
      caption: "City lights",
      media_url: "https://example.com/post10.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 11,
      user_id: 11,
      caption: "Nature's beauty",
      media_url: "https://example.com/post11.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 12,
      user_id: 12,
      caption: "Family time",
      media_url: "https://example.com/post12.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 13,
      user_id: 13,
      caption: "Artistic expression",
      media_url: "https://example.com/post13.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 14,
      user_id: 14,
      caption: "Music vibes",
      media_url: "https://example.com/post14.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 15,
      user_id: 15,
      caption: "Exciting adventure",
      media_url: "https://example.com/post15.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 16,
      user_id: 16,
      caption: "Summer days",
      media_url: "https://example.com/post16.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 17,
      user_id: 17,
      caption: "Pets love",
      media_url: "https://example.com/post17.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 18,
      user_id: 18,
      caption: "Learning new things",
      media_url: "https://example.com/post18.jpg",
      created_last_24_hours: false,
    },
    {
      post_id: 19,
      user_id: 19,
      caption: "Celebration time",
      media_url: "https://example.com/post19.jpg",
      created_last_24_hours: true,
    },
    {
      post_id: 20,
      user_id: 20,
      caption: "Winter wonderland",
      media_url: "https://example.com/post20.jpg",
      created_last_24_hours: true,
    },*/
  ];

  const handleDelete = (id) => {
    console.log(`Delete post with id: ${id}`);
  };

  const handleHide = (id) => {
    console.log(`Hide post with id: ${id}`);
  };

  return (
    <div>
      <Grid container spacing={3} style={{ marginBottom: "20px" }}>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">Total Posts</Typography>
            <Typography variant="h4">5000</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Paper style={{ padding: "20px", textAlign: "center" }}>
            <Typography variant="h6">
              Posts Published in Last 24 Hours
            </Typography>
            <Typography variant="h4">300</Typography>
          </Paper>
        </Grid>
      </Grid>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Post ID</TableCell>
              <TableCell>Caption</TableCell>
              <TableCell>Media URL</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {dummyPosts.map((post) => (
              <TableRow key={post.id}>
                <TableCell>{post.id}</TableCell>
                <TableCell>{post.caption}</TableCell>
                <TableCell>
                  <a
                    href={post.mediaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    {post.mediaUrl}
                  </a>
                </TableCell>
                <TableCell>
                  <Button
                    onClick={() => handleDelete(post.id)}
                    color="secondary"
                  >
                    Delete
                  </Button>
                  <Button onClick={() => handleHide(post.id)}>Hide</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Posts;
