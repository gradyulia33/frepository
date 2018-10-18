'use strict'

const checkAuth =  new Promise(checkAuth){
    setTimeout(() => {
    .then( {isAuth: true} );
    }, 2000);
  };
  const getUser = new Promise(authInfo, callback) => {
    if(!authInfo.isAuth) {
      .then(null);
      return;
    }
    setTimeout(() => {
      .then( {name: 'Max'} );
    }, 2000);
  }; 
  .then(checkAuth((authInfo) => {
    getUser(authInfo, (user) => {
      console.log(user.name);
    });
  }));
  
 