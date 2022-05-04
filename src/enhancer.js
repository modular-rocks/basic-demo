export default (files, env, nextScope) => {
  if (files.length > 10) {
    return 'A lot of files'
  }

  return 'some files'
}
