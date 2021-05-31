import React from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import SigninPopover from '../../../modules/SigninPopover/SigninPopover';

import { MANAGE_URL } from '../../../../statics/data/config';

const RootGrid = styled(Grid)`
  height: 100vh;
`;

const ImageGrid = styled(Grid)`
  background-image: url(https://source.unsplash.com/featured/?cat);
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
`;

const LoginWrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const AvatarStyled = styled(Avatar)`
  margin: 10px;
  background-color: #f50057;
`;

const SigninPage = ({ history }) => {
  const goHome = () => {
    history.push(`${MANAGE_URL}/account`);
  };

  return (
    <RootGrid container component="main">
      <ImageGrid item xs={false} sm={4} md={7} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <LoginWrapper>
          <AvatarStyled>
            <LockOutlinedIcon />
          </AvatarStyled>
          <Typography component="h1" variant="h5">
            SE 게시판 관리자 사이트
          </Typography>
          <SigninPopover handleClose={goHome} type="page" />
        </LoginWrapper>
      </Grid>
    </RootGrid>
  );
};

SigninPage.propTypes = {};

SigninPage.defaultProps = {};

export default withRouter(SigninPage);
