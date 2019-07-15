module.exports = {
  name: 'markletr',
  preset: '../../jest.config.js',
  coverageDirectory: '../../coverage/apps/markletr',
  snapshotSerializers: [
    'jest-preset-angular/AngularSnapshotSerializer.js',
    'jest-preset-angular/HTMLCommentSerializer.js'
  ]
};
