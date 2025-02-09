import ReactGA from 'react-ga4';

export const initGA = (measurementId) => {
  ReactGA.initialize(measurementId);
};

export const logPageView = () => {
  ReactGA.send({ hitType: "pageview", page: window.location.pathname });
};

export const logEvent = (category, action) => {
  ReactGA.event({
    category: category,
    action: action,
  });
};