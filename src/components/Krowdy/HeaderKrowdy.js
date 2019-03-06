import React from 'react';

const HeaderKrowdy = () => {
  return(
    <div className = "krowdy__header">
      <img className = "krowdy__header__logo" src = "/krowdy.png" alt=""/>
      <div className = "krowdy__header__user">
        <div className = "krowdy__header__user__name">Luis Sullca</div>
        <img className = "krowdy__header__user__photo" src = "/luisfoto.png"  alt = ""/>
        <i className = "material-icons more">arrow_drop_down</i>
      </div>
    </div>
  );
}

export default HeaderKrowdy;