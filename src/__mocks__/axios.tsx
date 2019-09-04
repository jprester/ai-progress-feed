export default {
  get: () => {
    return Promise.resolve({
      data: [{
          id: 0,
          title: 'something',
        }, {
          id: 1,
          title: 'something1',
        },
      ],
    });
  },
};
