import Link from 'next/link'

export default () =>
    <div>
        Click{' '}
        <Link href="/about">
            <a>here</a>
        </Link>{' '}
        to read more
    </div>