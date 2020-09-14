let munsters = {
  herman: { age: 32, gender: 'male' },
  lily: { age: 30, gender: 'female' },
  grandpa: { age: 402, gender: 'male' },
  eddie: { age: 10, gender: 'male' },
  marilyn: { age: 23, gender: 'female'}
};

Object.keys(munsters).forEach(person => {
  console.log(`${person} is a ${munsters[person].age}` +
  `-year-old ${munsters[person].gender}`);
});