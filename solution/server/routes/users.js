import Boom from 'boom';
import Joi from 'joi';
import { UserModel } from '../models/user';

function listUsersCreatedById(id, reply) {
  UserModel.find(
    {createdBy: id},
    (err, contacts) => {
      if (!err) {
        reply(contacts).state('employerId', id, { encoding: 'none' });
      } else {
        reply(Boom.badImplementation(err));
      }
    }
  );
}

function signIn(server) {
  const handler = (request, reply) => {
    UserModel.find(
      {
        userName: request.payload.userName,
        password: request.payload.password
      },
      (err, foundUsers) => {
        if (foundUsers.length > 0) {
          listUsersCreatedById(
            foundUsers[0].id,
            reply
          );
        } else if (err) {
          reply(Boom.forbidden(err));
        } else {
          const signInMsg = 'Could not sign in with that username and password.';
          reply(Boom.forbidden(signInMsg));
        }
      }
    );
  };

  server.route({
    method: 'POST',
    path: '/signIn',
    handler
  });
}

function creator(server) {
  let user;
  const handler = (request, reply) => {
    UserModel.find(
      { userName: request.payload.userName },
      (err, foundUsers) => {
        if (foundUsers.length <= 0) {
          user = new UserModel(request.payload);
          user.save((saveErr) => {
            if (!saveErr) {
              if (user.userType === 'Employer') {
                reply(user)
                  .created('/users/' + user.id)
                  .state('employerId', user.id, { encoding: 'none' });
              } else {
                reply(user)
                  .created('/users/' + user.id);
              }
            } else {
              reply(Boom.forbidden(saveErr));
            }
          });
        } else if (err) {
          reply(Boom.forbidden(err));
        } else {
          const existsMsg = 'User already exists with that username.';
          reply(Boom.forbidden(existsMsg));
        }
      }
    );
  };

  server.route({
    method: 'POST',
    path: '/users',
    handler
  });
}

function reader(server) {
  const handler = (request, reply) => {
    listUsersCreatedById(
      request.params.employerId,
      reply
    );
  };

  server.route({
    method: 'GET',
    path: '/users/{employerId}',
    config: {
      validate: {
        params: {
          employerId: Joi.string().alphanum().required()
        }
      }
    },
    handler
  });
}

function updater(server) {
  const handler = (request, reply) => {
    UserModel.update(
      { id: request.params.userId },
      request.payload,
      { multi: true },
      (err, numAffected) => {
        if (!numAffected.n) {
          const updateMsg = 'Did not update any user.';
          reply(Boom.forbidden(updateMsg));
        } else if (err) {
          reply(Boom.forbidden(err));
        } else {
          reply('Updated ' + numAffected.nModified + ' users.');
        }
      }
    );
  };

  server.route({
    method: 'PUT',
    path: '/users/{userId}',
    config: {
      validate: {
        params: {
          userId: Joi.string().alphanum().required()
        }
      }
    },
    handler
  });
}

function deleter(server) {
  const handler = (request, reply) => {
    UserModel.findOneAndRemove(
      { id: request.params.userId},
      (err, user) => {
        if (!err && user) {
          user.remove();
          reply({
            message: 'User deleted successfully'
          });
        } else if (!err) {
          reply(Boom.notFound());
        } else {
          reply(Boom.badRequest('Could not delete user'));
        }
      }
    );
  };

  server.route({
    method: 'DELETE',
    path: '/users/{userId}',
    config: {
      validate: {
        params: {
          userId: Joi.string().alphanum().required()
        }
      }
    },
    handler
  });
}

const usersRoute = (server) => {
  signIn(server);
  creator(server);
  reader(server);
  updater(server);
  deleter(server);
};

export default usersRoute;
