'use strict';

exports.f1 = f1;

function f1(user)
{
  this.user = user;
  
  return { 
    name: 'f1x',
    user: user
  };
}

//var f1New = new f1('user service'); // Angular Service
//console.log(f1New);

// This fails with user undefined (or possibly this?)
//var f1Factory = f1('user factory'); // Angular factory
//console.log(f1Factory);
// f1('xxx');