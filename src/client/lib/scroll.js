import wait from 'Client/lib/wait';

export const toTop = () => wait.for(1).then(() => window.scroll( {
  top: 0,
  left: 0,
  behavior: 'smooth'
} ));

export default {
  toTop
};
