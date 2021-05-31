import React from 'react';
import styled from 'styled-components';
import { Link, withRouter } from 'react-router-dom';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import RoundButton from '../../atoms/Button/RoundButton';
import TypeData from '../../../statics/data/TypeData';

const Wrapper = styled.div`
  width: 100%;
  min-height: 450px;
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
  match,
  data,
  type,
  error,
  loading,
  head,
  setDeleteOpen,
  disabledDelete,
  disabledUpdate
}) => {
  const { id } = match.params;
  const goBack = () => {
    history.goBack();
  };

  const handleTypes = (row, key, myType) => {
    if (key === 'menuType') return TypeData.MenuTypes[row[key]];
    if (key === 'reportType') return TypeData.ReportTypes[row[key]];
    if (key === 'informationOpenAgree') return TypeData.InfoOpenTypes[row[key]];
    if (key === 'status' && myType === 'report')
      return TypeData.ReportStatusTypes[row[key]];
    if (key === 'type') {
      if (myType === 'account') return TypeData.AccountTypes[row[key]];
      if (myType === 'subject') return TypeData.SubjectTypes[row[key]];
      if (myType === 'teacher') return TypeData.TeacherTypes[row[key]];
    }
    return row[key];
  };

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
                <DataText>{handleTypes(data.data, e, type)}</DataText>
              </Item>
            </InfoWrapper>
          ))
        )}
      </Wrapper>
      <ButtonWrapper>
        <RoundButton onClick={goBack}>취 소</RoundButton>
        {disabledUpdate || (
          <RoundButton
            component={Link}
            to={`../update/${id}`}
            color="secondary"
          >
            수 정
          </RoundButton>
          // <RoundButton color="secondary" onClick={setUpdateOpen}>
          //   수 정
          // </RoundButton>
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
