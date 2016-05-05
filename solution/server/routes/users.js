import Boom from 'boom';
import Joi from 'joi';
import { UserModel } from '../models/user';

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
              reply(user).created('/users/' + user.id);
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
    UserModel.find(
      {createdBy: request.params.employerId},
      (err, contacts) => {
      if (!err) {
        reply(contacts);
      } else {
        reply(Boom.badImplementation(err));
      }
    });
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
        if (!numAffected.nModified) {
          const updateMsg = 'Could not update any user.';
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
  creator(server);
  reader(server);
  updater(server);
  deleter(server);
};

export default usersRoute;
