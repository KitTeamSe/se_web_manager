import React from 'react';
// import PropTypes from 'prop-types';
import ReactRouterPropTypes from 'react-router-prop-types';
import TextList from '../../modules/TextList/TextList';
// 메뉴 정보를 표시해줄 틀 module import
/**
 *  useSelect, useDispatch 사용
 * menuById state를 select 하고, dispatch를 통해 getMenuById액션 호출.
 * 이후 데이터를 가공하여 하위 모듈에 props로 전달.
 * presentational component에서 출력.
 *
 * props에서 react-router의 match 속성을 받아서 이중 params로 url 마지막에 /:id로 들어온 부분을
 * 받아서 action.payload에 담아서 dispatch.
 *  */

const MenuByIdView = ({ match }) => {
  return (
    <div>
      <p>MenuByIdView {match.params ? match.params.id : ''}</p>
      <TextList textData />
    </div>
  );
};
MenuByIdView.propTypes = {
  match: ReactRouterPropTypes.match.isRequired
};

export default MenuByIdView;
