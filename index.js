var recipes = {};
<<<<<<< HEAD
var safeObj = {};

function updateObjectWithKeyAndValue(object, key, value){
  return Object.assign({},object,{[key]:value});
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value){
  object[key] = value;
  return object;
}

function deleteFromObjectByKey(object, key){
  delete safeObj[key];
  return safeObj;
}

function destructivelyDeleteFromObjectByKey(object, key){
  delete object[key];
  return object;
}
=======

>>>>>>> 4c78e8ebacc9cc42d88dcd25961434121d7e415e
