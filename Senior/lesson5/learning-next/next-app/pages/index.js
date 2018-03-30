import Link from 'next/link'

export default () =>
    <div>
        Click{' '}
        <Link href="/about" replace>
            <a>here</a>
        </Link>{' '}
        to read more
    </div>