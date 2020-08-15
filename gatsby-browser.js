exports.onRouteUpdate = ({ location, prevLocation }) => {
  if (location && location.state)
    // eslint-disable-next-line no-param-reassign
    location.state.referrer = prevLocation ? prevLocation.pathname : null;
};
