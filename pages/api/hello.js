export default (req, res) => {
  console.log('hello')
  res.status(200).json({text: 'Hello'})
}
