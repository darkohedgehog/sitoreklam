import React from 'react';
import { SectionWrapper } from '../hoc';
import { MdOutlinePhonelinkRing,
         MdOutlineEmail,
         MdOutlineLocationOn } from 'react-icons/md'; 
import Logo from '../assets/logo.png'; 
import { term } from "../constants";
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const Footer = () => {
  const [active, setActive] = useState("");
 
  
  return (
    
        <footer className="bg-black-200 p-10 rounded-3xl px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="grid gap-10 row-gap-6 mb-8 sm:grid-cols-2 lg:grid-cols-4">
        <div className="sm:col-span-2">
          <Link to="/" className="inline-flex items-center"
           onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}            
          >
              <img src={Logo} alt="Footer" 
              className="w-8 text-deep-purple-accent-400"
              viewBox="0 0 24 24"
              strokeLinejoin="round"
              strokeWidth="2"
              strokeLinecap="round"
              strokeMiterlimit="10"
              stroke="currentColor"
              fill="none"           
           />
          
          <span className="ml-2 text-xl font-bold text-white tracking-wider uppercase">
            Sitoreklam
          </span>
        </Link>
        <div className="mt-6 lg:max-w-sm">
          <p className="text-sm text-white">
          Hvala vam što ste posjetili Sitoreklam online svijet. Uvijek smo tu da vaše ideje pretočimo u vizualne čarolije.
          </p>
          <p className="mt-4 text-sm text-white">
          Vaša povratna informacija je dragocjena. Javite nam svoje misli i ideje kako bismo zajedno nastavili graditi inspirativni put.
          </p>
        </div>
      </div>
      <div className="space-y-2 text-sm">
        <p className="text-base font-bold text-white tracking-wider">
          Kontakt
        </p>
        <div className="flex items-center p-1 pb-1">
          <p className="mr-1 text-white tracking-wider"><MdOutlinePhonelinkRing className='mr-2 text-[18px]'/></p>
          <a
            href="tel:+385 99 4281 700"
            aria-label="Naš telefon"
            title="Naš telefon"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            +385 99 4281 700
          </a>
        </div>
        <div className="flex items-center p-1">
          <p className="mr-1 text-white tracking-wider"><MdOutlineEmail className='mr-2 text-[18px]'/></p>
          <a
            href="mailto:sitoreklam@hotmail.com"
            aria-label="Naš email"
            title="Naš email"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            sitoreklam@hotmail.com
          </a>
        </div>
        <div className="flex items-center p-1">
          <p className="mr-1 text-white tracking-wider"><MdOutlineLocationOn className='mr-2 text-[22px]'/></p>
          <a
            href="https://www.google.com/maps/place/Ul.+Augusta+Cesarca+17,+32000,+Vukovar/@45.3393592,19.003855,17z/data=!4m15!1m8!3m7!1s0x475c8f9e7ea97c53:0xa47c9ba52100dfd4!2sUl.+Augusta+Cesarca+19,+32000,+Vukovar!3b1!8m2!3d45.3393555!4d19.0064299!16s%2Fg%2F11c5qkb0tv!3m5!1s0x475c8f9e7db43395:0x3b53ae10ab071534!8m2!3d45.3394332!4d19.0063956!16s%2Fg%2F11sqjd5nsz?entry=ttu"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Naša adresa"
            title="Naša adresa"
            className="transition-colors duration-300 text-deep-purple-accent-400 hover:text-deep-purple-800"
          >
            Augusta Cesarca 19, Vukovar, Hrvatska
          </a>
        </div>
      </div>
      <div>
        <span className="text-base font-bold text-white tracking-wider">
          Pratite nas
        </span>
        <div className="flex items-center mt-1 space-x-3">
         
          <a
            href="https://www.instagram.com/" target='_blank'
            className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 30 30" fill="currentColor" className="h-6">
              <circle cx="15" cy="15" r="4" />
              <path d="M19.999,3h-10C6.14,3,3,6.141,3,10.001v10C3,23.86,6.141,27,10.001,27h10C23.86,27,27,23.859,27,19.999v-10   C27,6.14,23.859,3,19.999,3z M15,21c-3.309,0-6-2.691-6-6s2.691-6,6-6s6,2.691,6,6S18.309,21,15,21z M22,9c-0.552,0-1-0.448-1-1   c0-0.552,0.448-1,1-1s1,0.448,1,1C23,8.552,22.552,9,22,9z" />
            </svg>
          </a>
          <a
            href="https://hr-hr.facebook.com/" target='_blank'
            className="text-gray-400 transition-colors duration-300 hover:text-deep-purple-accent-400"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="h-5">
              <path d="M22,0H2C0.895,0,0,0.895,0,2v20c0,1.105,0.895,2,2,2h11v-9h-3v-4h3V8.413c0-3.1,1.893-4.788,4.659-4.788 c1.325,0,2.463,0.099,2.795,0.143v3.24l-1.918,0.001c-1.504,0-1.795,0.715-1.795,1.763V11h4.44l-1,4h-3.44v9H22c1.105,0,2-0.895,2-2 V2C24,0.895,23.105,0,22,0z" />
            </svg>
          </a>
        </div>
        <p className="mt-4 text-sm text-gray-500">
        Povežimo se! Pratite nas na društvenim mrežama i budite u toku s najnovijim kreacijama i trendovima.
        </p>
      </div>
    </div>
    <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
        <p className="text-sm text-gray-400">
          © Sva prava zadržana 2023 SITOREKLAM
        </p>
        <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
        <li>
 
<div>
  <ul>
    {term.map((term) => (
      <li
        key={term.id}
        className={`${
          active === term.title ? "text-white" : "text-secondary"
        } hover:text-white text-[18px] font-medium cursor-pointer`}
        onClick={() => setActive(term.title)}
      >
        <NavLink to={`/terms?active=${term.title}`}>
          {term.title}
        </NavLink>
      </li>
    ))}
  </ul>
</div>
</li>
</ul>
</div>
</footer>
      );
    };


export default SectionWrapper(Footer, '');
