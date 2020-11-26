mergeInto(LibraryManager.library, {​​

  activeEnigma : function (enigmaName) {
    showEnigma(getEnigma(Pointer_stringify(enigmaName)));
  },

  getEnigma : function (enigmaName) {
    return enigmaName.split('-')[1];
  }
}​​);