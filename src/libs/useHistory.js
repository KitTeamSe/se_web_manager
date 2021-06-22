import React, { useEffect } from 'react';

const useHistory = ({ type, history }) => {
  const goBack = () => {
    history.goBack();
  };

  const goHome = () => {
    history.push('/');
  };

  useEffect(() => {
    console.log(history);
    const unblock = history.block('정말 떠나실건가요?');
    return () => {
      unblock();
    };
  }, [history]);

  if (type === 'back') return <button onClick={goBack}>뒤로가기</button>;
  if (type === 'home') return <button onClick={goHome}>홈</button>;
};

export default useHistory;
