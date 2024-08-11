import React from "react";
import { Card, CardContent, Typography, Grid } from "@mui/material";
import { dummyUsers, dummyPosts } from "../dummyData";

const Home = () => {
  const totalUsers = dummyUsers.length;
  const totalPosts = dummyPosts.length;
  const activeUsers = 5; // Dummy value for active users
  const recentPosts = 2; // Dummy value for posts in last 24 hours

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Users</Typography>
            <Typography variant="h4">{totalUsers}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Total Posts</Typography>
            <Typography variant="h4">{totalPosts}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">Users Active in Last 24 Hours</Typography>
            <Typography variant="h4">{activeUsers}</Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12} md={6} lg={3}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Posts Published in Last 24 Hours
            </Typography>
            <Typography variant="h4">{recentPosts}</Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
