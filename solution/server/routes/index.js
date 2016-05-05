import users from './users';

export function init(server) {
  console.log('Loading routes...');
  users(server);
}
