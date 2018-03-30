import Router from 'next/router'

const handler = () =>
    Router.push({
        pathname: '/about',
        query: { name: 'Zeit' }
    })
Router.onRouteChangeStart = url => {
    console.log('App is changing to: ', url)
}
export default () =>
    <div>
        Click <span onClick={handler}>here</span> to read more
    </div>