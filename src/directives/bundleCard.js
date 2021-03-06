function bundleCard() {
  return {
    restrict: 'EA',
    replace: true,
    templateUrl: './views/directives/bundleCard.html',
    scope: {
      event: '=',
      restaurant: '=?',
      bar: '=?',
      date: '='
    }
  };
}

export default bundleCard;
