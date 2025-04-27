function skillsMember() {
  return {
    name: 'skills',
    type: 'member',
    description: 'Skills of the member',
    example: 'JavaScript, Python, React',
    required: false,
    defaultValue: '',
    validate: function (value) {
      if (typeof value !== 'string') {
        return 'Skills must be a string';
      }
      return true;
    },
  };
}