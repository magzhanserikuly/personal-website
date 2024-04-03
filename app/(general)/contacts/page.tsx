import React from 'react';
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import Button from '../../../components/Button';

const buttonObject = [
  {
    icon: TelegramIcon,
    text: 'Telegram',
    value: 'https://t.me/ibrvimv',
  },
  {
    icon: InstagramIcon,
    text: '@ivluence',
    value: 'https://www.instagram.com/ivluence',
  },
  {
    icon: EmailIcon,
    text: 'ivluence@gmail.com',
    value: 'mailto:ivluence@gmail.com',
  },
  {
    icon: LinkedInIcon,
    text: 'LinkedIn',
    value: 'https://www.linkedin.com/in/ibrvimv/',
  },
  {
    icon: GitHubIcon,
    text: 'GitHub',
    value: 'https://github.com/ibrvimv',
  },
];

export default async function Contacts() {
  return (
    <div className='px-3 flex flex-col gap-4'>
      <video
        className='absolute -z-10 inset-0 object-cover opacity-30 w-full h-full'
        autoPlay
        muted
        loop
      >
        <source src='steam.mov' type='video/mp4' />
      </video>
      <div>
        <h1 className='text-5xl font-bold mb-2 pb-3'>CONTACTS</h1>
      </div>
      {buttonObject.map((item, key) => {
        return (
          <Button
            key={key}
            icon={item.icon}
            text={item.text}
            value={item.value}
          />
        );
      })}
    </div>
  );
}
