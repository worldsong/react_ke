import cowsay from 'cowsay-browser'

export default () =>
    <pre>
    {cowsay.say({ text: 'hi there!' })}
  </pre>