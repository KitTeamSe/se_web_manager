import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageNumberButton from '../../atoms/PageNumberButton/PageNumberButton';

const ButtonGroupStyled = styled.div`
  display: flex;
`;

const PageNumberButtonGroup = ({ nowPage, maxPage, range, buttonProps }) => {
  const [pageButtons, setPageButtons] = useState();
  const renderPageNumberButton = () => {
    const buttons = [];
    for (let index = 0; index < range; index += 1) {
      buttons.push(
        <PageNumberButton
          child={1}
          variant={buttonProps.variant}
          color={buttonProps.color}
          backgroundColor={buttonProps.backgroundColor}
          disabled={buttonProps.disabled}
          href={buttonProps.href}
        />
      );
    }
    // pageButton : state에 저장.
    setPageButtons(buttons);
  };
  useEffect(() => {
    renderPageNumberButton();
  }, []);
  return (
    <ButtonGroupStyled nowPage={nowPage} maxPage={maxPage}>
      {pageButtons}
    </ButtonGroupStyled>
  );
};
PageNumberButtonGroup.defaultProps = {
  buttonProps: {
    variant: 'contained',
    color: '',
    backgroundColor: '',
    disabled: false,
    href: ''
  }
};

PageNumberButtonGroup.propTypes = {
  nowPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  range: PropTypes.number.isRequired,
  buttonProps: PropTypes.objectOf({
    child: PropTypes.number.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string
  })
};

export default PageNumberButtonGroup;
