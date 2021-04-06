import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import PageNumberButton from '../../atoms/PageNumberButton/PageNumberButton';

/*
  가능하다면 nowPage일때 더 어두운색이나 테두리등으로 강조해서 식별가능하면 좋을듯.
*/
const ButtonGroupStyled = styled.div`
  display: flex;
`;

const PageNumberButtonGroup = ({
  nowPage,
  maxPage,
  halfRange,
  buttonProps
}) => {
  const [pageButtons, setPageButtons] = useState();

  // props 값을 사용해 페이지 번호를 생성. 계산 편의를 위해 halfRange로 사용.
  const setPageNums = () => {
    const range = halfRange * 2 + 1;
    const pageNums = [];
    const startNum = nowPage > halfRange ? nowPage - halfRange : 1;
    for (let index = 0; index < range; index += 1) {
      pageNums.push(startNum + index);
    }
    return pageNums;
  };

  const renderPageNumberButton = () => {
    const buttons = [];
    const buttonNums = setPageNums();
    for (let index = 0; index < buttonNums.length; index += 1) {
      // maxPage보다 버튼의 숫자가 크다면 disable
      const isDisabled = !(maxPage >= buttonNums[index]);
      buttons.push(
        <PageNumberButton
          key={buttonNums[index]}
          child={buttonNums[index]}
          variant={buttonProps.variant}
          color={buttonProps.color}
          backgroundColor={buttonProps.backgroundColor}
          disabled={isDisabled}
          href={buttonProps.href}
          onClick={buttonProps.onClick}
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
    backgroundColor: 'white',
    disabled: false,
    href: '',
    onClick: () => {
      console.log(1);
    }
  }
};
PageNumberButtonGroup.propTypes = {
  nowPage: PropTypes.number.isRequired,
  maxPage: PropTypes.number.isRequired,
  halfRange: PropTypes.number.isRequired,
  buttonProps: PropTypes.objectOf({
    child: PropTypes.number.isRequired,
    variant: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    disabled: PropTypes.bool,
    href: PropTypes.string,
    onClick: PropTypes.func
  })
};

export default PageNumberButtonGroup;
