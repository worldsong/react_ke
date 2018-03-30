import Router from 'next/router'

export default () =>
    <div>
        Click <span onClick={() => Router.push('/about')}>here</span> to read more
    </div>