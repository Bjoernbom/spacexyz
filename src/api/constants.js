// can be found at https://docs.spacexdata.com/?version=latest#intro
export const ENDPOINTS = {
  url: {
    url: 'https://api.spacexdata.com/v3/',
    launches: {
      all: 'launches',
      upcoming: 'upcoming',
      next: 'launches/next',
      past: 'launches/past',
      one: 'launches/{{flight_number}}',
    },
    rockets: {
      all: 'rockets',
      one: 'rockets/{{rocket_id}}',
    },
    ships: {
      all: 'ships',
      one: 'ships/{{ship_id}}',
    },
    capsules: {
      all: 'capsules',
      one: 'capsules/{{capsule_serial}}',
      upcoming: 'capsules/upcoming',
      past: 'capsules/past',
    },
    dragons: {
      all: 'dragons',
      one: 'dragons/{{id}}',
    },
  },
};
