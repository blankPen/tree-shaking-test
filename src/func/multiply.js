const uselessFunc = param => {
  return 'unless param:' + param
}
uselessFunc({ a: 123 })

export default (a, b) => {
  console.log('do multipy')
  return a * b
}
