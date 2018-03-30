import Link from 'next/link'
import Unexpected_A from 'third-library'

export default ({ href, name }) =>
    <Link href={href} passHref>
        <Unexpected_A>
            {name}
        </Unexpected_A>
    </Link>