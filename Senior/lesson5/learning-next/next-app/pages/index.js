import Router from 'next/router'

const handler = () =>
    Router.push({
        pathname: '/about',
        query: { name: 'Zeit' }
    })

export default () =>
    <div>
        Click <span onClick={handler}>here</span> to read more
    </div>