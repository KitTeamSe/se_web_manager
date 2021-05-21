import React, { useEffect } from 'react';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import RoundButton from '../../atoms/Button/RoundButton';

const Wrapper = styled.div`
  width: 100%;
  height: 450px;
  padding: 1rem 2rem;
`;

const CardStyled = styled(Card)`
  width: 60%;
  display: flex;
  align-content: center;
  margin: 1rem;
  padding: 1rem;
  flex-wrap: wrap;
  align-content: center;
  justify-content: center;
`;

const InfoWrapper = styled.div`
  display: flex;
  align-items: baseline;
  padding-bottom: 1.2rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
  width: 60%;
  justify-content: space-evenly;
`;

const Item = styled.div`
  &: nth-child(1) {
    flex-shirnk: 0;
    min-width: 15%;
  }
  &: nth-child(2) {
    flex-grow: 1;
  }
`;

const KeyText = styled(Typography)`
  font-weight: 600;
  text-align: left;
  column-width: 200px;
`;

const DataText = styled(Typography)`
  text-align: center;
  white-space: normal;
  word-break: break-all;
`;

const ManageInfoCard = ({
  history,
  data,
  error,
  loading,
  head,
  setDeleteOpen,
  setUpdateOpen,
  disabledDelete,
  disabledUpdate
}) => {
  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    console.log(history);
  }, [history]);

  return (
    <CardStyled>
      <Wrapper>
        {error ? (
          <div>loading</div>
        ) : (
          !loading &&
          data &&
          Object.keys(head).map(e => (
            <InfoWrapper>
              <Item>
                <KeyText>{head[e]}</KeyText>
              </Item>
              <Item>
                <DataText>{data.data[e]}</DataText>
              </Item>
            </InfoWrapper>
          ))
        )}
      </Wrapper>
      <ButtonWrapper>
        <RoundButton onClick={goBack}>취 소</RoundButton>
        {disabledUpdate || (
          <RoundButton color="secondary" onClick={setUpdateOpen}>
            수 정
          </RoundButton>
        )}
        {disabledDelete || (
          <RoundButton color="secondary" onClick={setDeleteOpen}>
            삭 제
          </RoundButton>
        )}
      </ButtonWrapper>
    </CardStyled>
  );
};

ManageInfoCard.propTypes = {};

ManageInfoCard.defaultProps = {};

export default withRouter(ManageInfoCard);