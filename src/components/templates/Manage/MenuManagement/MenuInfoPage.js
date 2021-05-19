import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div``;

const MenuInfoPage = ({ menu, error, loading }) => {
  return (
    <Wrapper>
      {error ? <div>loading</div> : !loading && menu && console.log(menu)}
    </Wrapper>
  );
};

MenuInfoPage.propTypes = {};

MenuInfoPage.defaultProps = {};

export default MenuInfoPage;
