import React from 'react';
import { getCV } from '@/sanity/sanity-utils';
import { PortableText } from '@portabletext/react';

export default async function CV() {
  const data = await getCV();

  if (!data) return <div>{`Sorry CV is not avaiable now:(`}</div>;

  return (
    <div className='px-3 overflow-y-auto'>
      {data.map((item, key) => {
        return (
          <div key={key}>
            <div className='border-b'>
              <h3 className='text-lg mb-2 text-secondary'>{item.name}</h3>
            </div>
            <div>
              <br />
              <PortableText value={item.description} />
              <br />
            </div>
          </div>
        );
      })}
    </div>
  );
}
