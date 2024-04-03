import config from '../../lib/config';
import Link from 'next/link';

/**
 * The shared header component.
 */
export default function Header() {
  return (
    <header className='text-center sm:text-left pt-5 pb-16'>
      <nav className='flex flex-row md:gap-4'>
        {config.nav.map((item, index) => (
          <Link
            className='text-base px-3 py-2'
            key={index}
            href={{ pathname: item.path }}
            prefetch={false}
          >
            {item.name}
          </Link>
        ))}
      </nav>
    </header>
  );
}
