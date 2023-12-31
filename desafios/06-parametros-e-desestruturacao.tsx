function updateUserRoute({ body, params }) {
  updateUserController({ body, params });
}

function updateUserController({ body, params }) {
  userRepository.update({ body, params });
}

const userRepository = {
  update: ({ body, params }) => {},
};
