export default (req, res) => {
  // Set headers to allow SSE
  res.setHeader('Content-Type', 'text/event-stream')
  res.setHeader('Cache-Control', 'no-cache')
  res.setHeader('Connection', 'keep-alive')
  res.setHeader("Content-Encoding", "none");

  // Send an initial "ping" message
  res.write('data: ping\n\n')

  // Set up an interval to send messages every 5 seconds
  const intervalId = setInterval(() => {
    res.write('data: message\n\n')
  }, 5000)

  // Set up a listener for when the client closes the connection
  res.on('close', () => {
    clearInterval(intervalId)
    res.end()
  })
}