import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Script from "next/script";
import { useState, useEffect } from "react";

export const metadata: Metadata = {
  title: "おまえは誰だ",
  description: "Xeramiyaという",
};

export default function about() {
  return (
    <div>
      <article className="mx-1 pt-2 pb-16">
        <section>
          <h1 className="text-5xl italic tracking-wide">
            <Link href="./signature">Xeramiya</Link>
          </h1>
          <p className="note text-lg">I&apos;m STill here!!</p>
        </section>
        <section className="pt-2">
          <ul id="string" className="flex flex-row flex-wrap">
            <li>
              <Link
                href="https://twitter.com/xeramiya"
                className="string bg-Twitter"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M8.2177 20.2976C15.798 20.2976 19.9327 14.0329 19.9327 8.58261V8.05011C20.7362 7.46091 21.435 6.74089 22 5.92012C21.2567 6.26235 20.4637 6.48437 19.6507 6.57791C20.5139 6.06164 21.1597 5.24885 21.4675 4.2913C20.6598 4.76183 19.7822 5.10021 18.8677 5.29365C17.3053 3.64491 14.7069 3.56109 13.0415 5.10571C11.9701 6.10222 11.5157 7.59694 11.8512 9.02114C8.54594 8.85772 5.46574 7.29769 3.37823 4.72983C2.28095 6.60789 2.84519 9.01622 4.66249 10.2114C4.00661 10.1858 3.36464 10.0146 2.78309 9.71026V9.7729C2.78257 11.7293 4.15628 13.417 6.07204 13.8136C5.46884 13.9751 4.83671 13.9965 4.22396 13.8763C4.76475 15.5538 6.31437 16.7003 8.07674 16.7267C6.62377 17.8749 4.82287 18.4936 2.97103 18.4808C2.65779 18.4808 2.31323 18.4495 2 18.4182C3.84433 19.6513 6.0148 20.3057 8.23336 20.2976"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/xeramiya"
                className="string bg-Instagramm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M11.9969 2.00632C9.28187 2.00632 8.94143 2.01783 7.87516 2.06648C6.81111 2.11501 6.0844 2.28402 5.44853 2.53116C4.79115 2.78659 4.23365 3.12842 3.67786 3.68417C3.1221 4.23997 2.78028 4.79747 2.52484 5.45485C2.2777 6.09072 2.10869 6.81743 2.06016 7.88148C2.01151 8.94775 2 9.28818 2 12.0032C2 14.7181 2.01151 15.0586 2.06016 16.1249C2.10869 17.1889 2.2777 17.9156 2.52484 18.5515C2.78028 19.2089 3.1221 19.7664 3.67786 20.3222C4.23365 20.8779 4.79115 21.2197 5.44853 21.4752C6.0844 21.7223 6.81111 21.8913 7.87516 21.9398C8.94143 21.9885 9.28187 22 11.9969 22C14.7118 22 15.0523 21.9885 16.1185 21.9398C17.1826 21.8913 17.9093 21.7223 18.5452 21.4752C19.2025 21.2197 19.76 20.8779 20.3158 20.3222C20.8716 19.7664 21.2134 19.2089 21.4689 18.5515C21.716 17.9156 21.885 17.1889 21.9335 16.1249C21.9822 15.0586 21.9937 14.7181 21.9937 12.0032C21.9937 9.28818 21.9822 8.94775 21.9335 7.88148C21.885 6.81743 21.716 6.09072 21.4689 5.45485C21.2134 4.79747 20.8716 4.23997 20.3158 3.68417C19.76 3.12842 19.2025 2.78659 18.5452 2.53116C17.9093 2.28402 17.1826 2.11501 16.1185 2.06648C15.0523 2.01783 14.7118 2.00632 11.9969 2.00632ZM11.9969 3.80755C14.6661 3.80755 14.9823 3.81775 16.0364 3.86584C17.0111 3.91029 17.5404 4.07314 17.8927 4.21005C18.3593 4.3914 18.6923 4.60802 19.0421 4.95786C19.392 5.30767 19.6086 5.64068 19.79 6.10731C19.9269 6.45957 20.0897 6.9889 20.1342 7.96358C20.1823 9.01771 20.1925 9.3339 20.1925 12.0032C20.1925 14.6724 20.1823 14.9886 20.1342 16.0427C20.0897 17.0174 19.9269 17.5468 19.79 17.899C19.6086 18.3656 19.392 18.6987 19.0421 19.0485C18.6923 19.3983 18.3593 19.6149 17.8927 19.7963C17.5404 19.9332 17.0111 20.096 16.0364 20.1405C14.9825 20.1886 14.6663 20.1988 11.9969 20.1988C9.32738 20.1988 9.01127 20.1886 7.95726 20.1405C6.98258 20.096 6.45325 19.9332 6.10099 19.7963C5.63437 19.6149 5.30135 19.3983 4.95155 19.0485C4.60175 18.6987 4.38508 18.3656 4.20373 17.899C4.06683 17.5468 3.90397 17.0174 3.85952 16.0427C3.81143 14.9886 3.80123 14.6724 3.80123 12.0032C3.80123 9.3339 3.81143 9.01771 3.85952 7.96358C3.90397 6.9889 4.06683 6.45957 4.20373 6.10731C4.38508 5.64068 4.60171 5.30767 4.95155 4.95786C5.30135 4.60802 5.63437 4.3914 6.10099 4.21005C6.45325 4.07314 6.98258 3.91029 7.95726 3.86584C9.01139 3.81775 9.32758 3.80755 11.9969 3.80755Z"
                  />
                  <path
                    className="fill-white"
                    d="M11.9968 15.3355C10.1564 15.3355 8.66451 13.8435 8.66451 12.0032C8.66451 10.1628 10.1564 8.67089 11.9968 8.67089C13.8372 8.67089 15.3291 10.1628 15.3291 12.0032C15.3291 13.8435 13.8372 15.3355 11.9968 15.3355ZM11.9968 6.86966C9.16161 6.86966 6.86328 9.16799 6.86328 12.0032C6.86328 14.8384 9.16161 17.1367 11.9968 17.1367C14.832 17.1367 17.1303 14.8384 17.1303 12.0032C17.1303 9.16799 14.832 6.86966 11.9968 6.86966Z"
                  />
                  <path
                    className="fill-white"
                    d="M18.5328 6.66684C18.5328 7.32938 17.9957 7.86644 17.3331 7.86644C16.6706 7.86644 16.1335 7.32938 16.1335 6.66684C16.1335 6.0043 16.6706 5.46719 17.3331 5.46719C17.9957 5.46719 18.5328 6.0043 18.5328 6.66684Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://steamcommunity.com/id/xeramiya"
                className="string bg-Steam"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M12.0041 2.00001C17.1763 2.00895 21.4906 5.95038 21.9587 11.0944C22.4268 16.2383 18.8947 20.8919 13.8088 21.8317C8.72289 22.7716 3.75714 19.6885 2.35093 14.7179L6.20594 16.3116C6.5198 17.7178 7.8363 18.6682 9.27188 18.5248C10.7075 18.3815 11.8094 17.1896 11.8382 15.7491V15.6241L15.2552 13.1868H15.3491C16.8821 13.1944 18.2684 12.278 18.8604 10.8657C19.4523 9.45349 19.133 7.82415 18.0517 6.7389C16.9704 5.65365 15.3404 5.32671 13.9233 5.91082C12.5062 6.49494 11.5817 7.8748 11.5817 9.40577V9.46827L9.1848 12.9368H9.02522C8.45433 12.9348 7.89684 13.1095 7.4294 13.4368L2.03802 11.2182C2.43122 6.01377 6.77779 1.9934 12.0041 2.00001ZM8.30554 17.1865L7.0852 16.6865C7.29931 17.1614 7.69311 17.5322 8.18037 17.7177C9.26649 18.1594 10.5059 17.643 10.9559 16.5616C11.1781 16.0427 11.1781 15.4555 10.9559 14.9367C10.5134 13.8748 9.31078 13.3508 8.23044 13.7492L9.51648 14.2804C9.90142 14.434 10.2081 14.7361 10.3671 15.1184C10.5261 15.5007 10.524 15.9308 10.3613 16.3116C10.0152 17.1067 9.10576 17.4914 8.29302 17.1865H8.30554ZM13.4591 9.40577C13.459 9.90903 13.6615 10.3912 14.0211 10.7438C14.3807 11.0964 14.8671 11.2899 15.371 11.2806C16.4135 11.2808 17.264 10.4468 17.2828 9.40577C17.2828 8.35132 16.4268 7.49652 15.371 7.49652C14.3151 7.49652 13.4591 8.35132 13.4591 9.40577ZM17.8398 9.43702C17.855 10.4668 17.2454 11.4037 16.2969 11.8081C15.3484 12.2125 14.2492 12.0042 13.515 11.2809C12.7807 10.5576 12.5572 9.46286 12.9491 8.51021C13.3411 7.55756 14.2708 6.93603 15.3021 6.93718C15.9737 6.92193 16.6228 7.17927 17.1011 7.6504C17.5794 8.12153 17.8459 8.76617 17.8398 9.43702Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ"
                className="string bg-YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M21.582 7.20034C21.352 6.3342 20.6744 5.65216 19.8139 5.42068C18.2542 5 12 5 12 5C12 5 5.7458 5 4.18614 5.42068C3.32568 5.65216 2.64795 6.3342 2.41795 7.20034C2 8.77011 2 12.0455 2 12.0455C2 12.0455 2 15.3207 2.41795 16.8907C2.64795 17.7567 3.32568 18.4387 4.18614 18.6703C5.7458 19.0909 12 19.0909 12 19.0909C12 19.0909 18.2542 19.0909 19.8139 18.6703C20.6744 18.4387 21.352 17.7567 21.582 16.8907C22 15.3207 22 12.0455 22 12.0455C22 12.0455 22 8.77011 21.582 7.20034Z"
                  />
                  <path className="fill-YouTube" d="M9.95447 15.0192L15.1817 12.0455L9.95447 9.07169V15.0192Z" />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://soundcloud.com/xeramiya"
                className="string bg-SoundCloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M2.15,12.949l-0.15,1.1l0.15,1.1c-0,0.1 0.15,0.1 0.15,-0l0.15,-1.1l-0.15,-1.1c-0,-0.15 -0.15,-0.15 -0.15,-0Zm0.9,-0.7c-0,-0.15 -0.15,-0.15 -0.15,-0l-0.25,1.8l0.2,1.75c-0,0.15 0.2,0.15 0.2,-0l0.2,-1.75l-0.2,-1.8Zm2.95,-1.5l-0.15,3.3l0.1,2c-0,0.4 0.35,0.4 0.35,-0l0.2,-2l-0.2,-3.3c-0,-0.25 -0.3,-0.25 -0.3,-0Zm-1.55,1.1l-0.2,2.2l0.15,2c-0,0.3 0.25,0.3 0.25,-0l0.2,-2l-0.2,-2.2c-0,-0.15 -0.2,-0.15 -0.2,-0Zm3.5,4.2l0.15,-2l-0.15,-4.4c-0,-0.3 -0.35,-0.3 -0.35,-0l-0.15,4.4l0.1,2c-0,0.4 0.4,0.4 0.4,-0Zm3.4,-0l0.1,-2l-0.1,-5.1c0,-0.35 -0.5,-0.35 -0.5,-0l-0.1,5.1l0.1,2c-0,0.4 0.5,0.4 0.5,-0Zm-1.7,-0l0.15,-2l-0.15,-4.45c-0,-0.3 -0.45,-0.3 -0.45,-0l-0.1,4.45l0.1,2c-0,0.4 0.45,0.4 0.45,-0Zm-4.15,-0l0.15,-2l-0.15,-2.05c-0,-0.15 -0.3,-0.15 -0.3,-0l-0.15,2.05l0.15,2c-0,0.35 0.3,0.35 0.3,-0Zm-1.65,-0l0.2,-2l-0.2,-2.15c-0,-0.15 -0.2,-0.15 -0.2,-0l-0.2,2.15l0.2,2c-0,0.2 0.2,0.2 0.2,-0Zm6.2,-6.25l-0.1,4.25l0.05,2c-0,0.4 0.5,0.4 0.5,-0l0.1,-2l-0.1,-4.25c-0,-0.35 -0.45,-0.35 -0.45,-0Zm-2.9,6.25l0.15,-2l-0.15,-4.05c-0,-0.3 -0.35,-0.3 -0.35,-0l-0.15,4.05l0.1,2c-0,0.4 0.4,0.4 0.4,-0Zm1.65,-0l0.15,-2l-0.15,-4.55c-0,-0.3 -0.4,-0.3 -0.4,-0l-0.15,4.55l0.15,2c-0,0.4 0.4,0.4 0.4,-0Zm9.8,-4.45c-0.25,-2.85 -3.2,-4.7 -5.9,-3.65c-0.2,0.1 -0.25,0.15 -0.25,0.3l0,7.8c0,0.15 0.1,0.3 0.25,0.3l6.85,-0c1.35,-0 2.45,-1.1 2.45,-2.45c0,-1.85 -1.75,-2.85 -3.4,-2.3Zm-6.9,-3.1l-0.15,5.55l0.15,2c-0,0.4 0.5,0.4 0.5,-0l0.15,-2l-0.15,-5.55c0,-0.35 -0.5,-0.35 -0.5,-0Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/user/fhc8jd5iv2ibh1mt1pncyn2vd"
                className="string bg-Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 9.34784 20.9464 6.8043 19.0711 4.92893C17.1957 3.05357 14.6522 2 12 2ZM16.5625 16.4375C16.3791 16.7161 16.0145 16.8107 15.7188 16.6562C13.375 15.2188 10.4062 14.9062 6.9375 15.6875C6.71979 15.7377 6.49182 15.668 6.33945 15.5046C6.18709 15.3412 6.13348 15.1089 6.19883 14.8952C6.26417 14.6816 6.43854 14.519 6.65625 14.4688C10.4688 13.5938 13.7188 13.9688 16.375 15.5938C16.5149 15.6781 16.6141 15.816 16.6495 15.9755C16.685 16.1349 16.6535 16.3019 16.5625 16.4375ZM17.8125 13.6875C17.7053 13.8622 17.5328 13.9869 17.3333 14.0338C17.1338 14.0807 16.9238 14.0461 16.75 13.9375C14.0625 12.2812 9.96875 11.8125 6.78125 12.7812C6.5133 12.8594 6.22401 12.7887 6.02236 12.5957C5.8207 12.4027 5.73731 12.1168 5.80361 11.8457C5.8699 11.5746 6.0758 11.3594 6.34375 11.2812C9.96875 10.1875 14.5 10.7188 17.5625 12.625C17.9134 12.8575 18.0229 13.3229 17.8125 13.6875ZM17.9062 10.875C14.6875 8.96875 9.375 8.78125 6.28125 9.71875C5.81691 9.79284 5.36952 9.5115 5.23513 9.0609C5.10074 8.61031 5.32093 8.12986 5.75 7.9375C9.28125 6.875 15.1562 7.0625 18.875 9.28125C19.0893 9.40709 19.2434 9.61436 19.3023 9.85577C19.3612 10.0972 19.3198 10.3521 19.1875 10.5625C18.9054 10.9822 18.3499 11.1177 17.9062 10.875Z"
                  />
                </svg>
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/xeramiya"
                className="string bg-GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <svg
                  className="h-9 w-9 active:opacity-70"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    className="fill-white"
                    d="M12.0001 2.00001C9.62368 1.99759 7.32411 2.84152 5.51345 4.38057C3.70279 5.91961 2.49939 8.05316 2.1189 10.3989C1.73842 12.7446 2.20572 15.1491 3.43706 17.1816C4.66841 19.2141 6.58331 20.7416 8.8386 21.4905C9.34198 21.5826 9.52 21.2695 9.52 21.0055V19.3051C6.72688 19.9128 6.13756 17.9607 6.13756 17.9607C5.95226 17.3557 5.5586 16.8359 5.02645 16.4936C4.12406 15.8797 5.10012 15.8797 5.10012 15.8797C5.41644 15.9244 5.71846 16.0404 5.98328 16.2191C6.24811 16.3978 6.46881 16.6344 6.62866 16.911C6.76449 17.1573 6.94761 17.3743 7.16752 17.5497C7.38743 17.725 7.6398 17.8552 7.91015 17.9328C8.18049 18.0103 8.4635 18.0337 8.74292 18.0017C9.02234 17.9696 9.29268 17.8827 9.53842 17.7459C9.57695 17.2409 9.79466 16.7662 10.1523 16.4076C7.93007 16.1559 5.59735 15.2965 5.59735 11.4966C5.58209 10.504 5.94915 9.54349 6.62252 8.814C6.32262 7.95091 6.35767 7.00668 6.72074 6.16821C6.72074 6.16821 7.56175 5.8981 9.47089 7.19338C11.1103 6.74326 12.8407 6.74326 14.4801 7.19338C16.3892 5.8981 17.2241 6.16821 17.2241 6.16821C17.5922 6.99781 17.6361 7.93527 17.3469 8.79558C18.0203 9.52507 18.3873 10.4856 18.3721 11.4782C18.3721 15.3211 16.0332 16.1621 13.8048 16.3892C14.0438 16.6294 14.2283 16.9181 14.3459 17.2359C14.4634 17.5536 14.5113 17.8929 14.4862 18.2308V20.9748C14.4862 21.3002 14.6643 21.5519 15.1738 21.4537C17.4034 20.685 19.2896 19.1531 20.4992 17.1286C21.7088 15.104 22.164 12.7171 21.7842 10.3895C21.4045 8.06189 20.2143 5.94338 18.424 4.40825C16.6336 2.87311 14.3583 2.02013 12.0001 2.00001Z"
                  />
                </svg>
              </Link>
            </li>
            {/*
              <li>
                <Link href="https://discord.com/channels/@me" className="string bg-Discord" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setStringName(stringList["Discord"])} onMouseLeave={() => setStringName("")}>
                  <svg className="active:opacity-70 w-9 h-9" viewBox="0 0 24 24" fill='none' xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-white" d="M18.931,5.641c-1.297,-0.595 -2.665,-1.019 -4.071,-1.262c-0.026,-0.005 -0.053,0.007 -0.066,0.031c-0.175,0.312 -0.37,0.72 -0.506,1.041c-1.516,-0.23 -3.057,-0.23 -4.573,0c-0.152,-0.356 -0.324,-0.704 -0.514,-1.041c-0.013,-0.023 -0.04,-0.036 -0.066,-0.031c-1.406,0.242 -2.774,0.667 -4.071,1.262c-0.011,0.005 -0.02,0.013 -0.026,0.023c-2.594,3.874 -3.305,7.652 -2.955,11.383c0.001,0.019 0.011,0.036 0.025,0.048c1.51,1.118 3.199,1.972 4.995,2.525c0.025,0.007 0.053,-0.002 0.07,-0.024c0.386,-0.524 0.727,-1.08 1.021,-1.661c0.005,-0.009 0.007,-0.019 0.007,-0.029c0,-0.027 -0.016,-0.05 -0.041,-0.06c-0.539,-0.206 -1.06,-0.454 -1.56,-0.743c-0.02,-0.011 -0.032,-0.033 -0.032,-0.055c0,-0.021 0.009,-0.039 0.025,-0.052c0.106,-0.078 0.209,-0.159 0.31,-0.243c0.018,-0.015 0.043,-0.018 0.065,-0.008c3.273,1.494 6.816,1.494 10.051,-0c0.022,-0.01 0.047,-0.007 0.065,0.008c0.1,0.082 0.205,0.165 0.311,0.243c0.016,0.013 0.026,0.032 0.026,0.052c-0,0.022 -0.012,0.043 -0.031,0.054c-0.498,0.292 -1.02,0.54 -1.561,0.744c-0.024,0.009 -0.041,0.033 -0.041,0.059c0,0.011 0.002,0.021 0.007,0.03c0.3,0.581 0.643,1.135 1.021,1.661c0.016,0.021 0.044,0.031 0.07,0.023c1.799,-0.551 3.49,-1.405 5.002,-2.525c0.015,-0.011 0.024,-0.027 0.026,-0.045c0.417,-4.314 -0.698,-8.062 -2.957,-11.383c-0.005,-0.012 -0.015,-0.021 -0.026,-0.025l-0,0Zm-10.248,9.134c-0.985,-0 -1.797,-0.904 -1.797,-2.016c-0,-1.111 0.797,-2.016 1.797,-2.016c1.009,0 1.814,0.913 1.798,2.017c-0,1.111 -0.797,2.015 -1.798,2.015Zm6.646,-0c-0.986,-0 -1.797,-0.904 -1.797,-2.016c-0,-1.111 0.796,-2.016 1.797,-2.016c1.009,0 1.814,0.913 1.798,2.017c-0,1.111 -0.789,2.015 -1.798,2.015Z" />
                  </svg>
                </Link>
              </li>
              <li>
                <Link href="https://scrapbox.io/uebit/" className="string bg-ReD" target="_blank" rel="noopener noreferrer" onMouseEnter={() => setStringName(stringList["UEBIT ARCHIVEs"])} onMouseLeave={() => setStringName("")}>
                  <svg className="active:opacity-70 w-9 h-9" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fill-white" d="M16.101,8.599l-1.044,-1.754l6.943,0l-3.164,6.347l-1.066,-1.791l1.397,-2.802l-3.066,-0Z" />
                    <path className="fill-white" d="M13.683,8.599l0.879,-1.754l6.134,10.31l-9.319,-0l-1.085,-1.754l7.442,0l-4.051,-6.802Z" />
                    <path className="fill-white" d="M6.969,17.155l5.14,-10.31l1.959,0l-5.14,10.31l-1.959,-0Z" />
                    <path className="fill-white" d="M7.354,15.401l-0.874,1.754l-2.545,-0l-1.935,-3.122l3.584,-7.188l1.959,0l-3.584,7.188l0.812,1.368l2.583,0Z" />
                  </svg>
                </Link>
              </li>
              */}
          </ul>
        </section>
      </article>
    </div>
  );
}
