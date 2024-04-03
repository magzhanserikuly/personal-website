import React from 'react';
import Image from 'next/image';
export default async function CV() {
  return (
    <div className='px-3 overflow-y-auto'>
      <div>
        <div className='border-b '>
          <h3 className='text-lg mb-2 text-secondary'>EDUCATION</h3>
        </div>
        <div>
          <br />
          <h4 className='border-l-4 border-secondary px-2 font-bold'>
            UNIVERSITY OF MILAN
          </h4>
          <p>Master in MANAGEMENT OF HUMAN RESOURCES</p>
          <p>MILAN, ITALY 🇮🇹</p>
          <p>2021-2023</p>
          <br />
          <h4 className='border-l-4 border-secondary px-2 font-bold'>
            INTERNATIONAL INFORMATION TECHNOLOGY UNIVERSITY
          </h4>
          <p>Bachelor in COMPUTER SCIENCE AND OPERATION SYSTEMS</p>
          <p>ALMATY, KAZAKHSTAN 🇰🇿</p>
          <p>2016-2020</p>
          <br />
          <h4 className='border-l-4 border-secondary px-2 font-bold'>
            NATIONAL SCHOOL OF PHYSICS AND MATH
          </h4>
          <p>HIGH SCHOOL</p>
          <p>ALMATY, KAZAKHSTAN 🇰🇿</p>
          <p>2013-2016</p>
          <br />
        </div>
      </div>
      <div>
        <div className='border-b '>
          <h3 className='text-lg mb-2 text-secondary'>LANGUAGES</h3>
        </div>
        <br />
        <div className='flex'>
          <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
            ENGLISH
          </h4>
          <p>Upper Intermediate</p>
        </div>
        <br />
        <div className='flex '>
          <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
            KAZAKH
          </h4>
          <p>NATIVE</p>
        </div>
        <br />
        <div className='flex '>
          <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
            RUSSIAN
          </h4>
          <p>NATIVE</p>
        </div>
        <br />
        <div className='flex '>
          <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
            ITALIAN
          </h4>
          <p>Pre Intermediate</p>
        </div>
        <br />
        <div></div>
      </div>
      <div>
        <div className='border-b '>
          <h3 className='text-lg mb-2 text-secondary'>EXPERIENCE</h3>
        </div>
        <br />
        <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
          Front End Developer - LA COLONIA
        </h4>
        <p>MILAN, ITALY 🇰🇿</p>
        <p>Jan 2021 - Aug 2021</p>
        <br />
        <p>
          {`Expert in digital solutions for retail and cultural domains. Skilled
          in visual identities, commercial campaigns, and dynamic website
          development using React, NextJS, Typescript, Sanity, and Shopify's
          Liquid. Managed Google Analytics and championed accessibility
          initiatives. Collaborated with industry giants like Off-White, Prada,
          Karla Otto, Jlal, Leslie-David, MODES, Athens Kallithea FC,
          Prestatech, and etc.`}
        </p>
        <br />
        <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
          React Native Dev - AQ-NIET GROUP
        </h4>
        <p>ALMATY, KAZAKHSTAN 🇰🇿</p>
        <p>Sep 2022 - Jan 2024</p>
        <br />
        <p>
          {`Created and deployed a Pizza Delivery app for a prominent Shymkent( city in Kazakhstan) restaurant, leveraging React Native and Redux for cross-platform functionality. The project seamlessly integrated technologies like Redux, Expo, MaterialUI, Google Cloud Platform, WebView, and Axios. Additionally, played a key role in developing "Europharma," the main e-commerce app for AQ-Niet Group.`}
        </p>
        <br />
        <h4 className='border-l-4 border-secondary px-2 font-bold min-w-40'>
          Intern Front End Dev - Viled KZ
        </h4>
        <p>ALMATY, KAZAKHSTAN 🇰🇿</p>
        <p>Sep 2020 - Jan 2021</p>
        <br />
        <p>
          {`Participated as an intern in the dynamic development of the ambitious "VLife" super-app. Gained hands-on experience with React Functional components, MaterialUI, and Redux, acquiring valuable skills for creating sophisticated UI elements. Delved into REST APIs using tools like Postman, while honing my understanding of SOLID principles and innovative UI concepts.`}
        </p>
        <br />
      </div>
    </div>
  );
}
