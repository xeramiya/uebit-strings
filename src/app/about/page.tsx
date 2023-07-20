import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import {
  TwitterIcon,
  InstagramIcon,
  SteamIcon,
  YouTubeIcon,
  SoundCloudIcon,
  SpotifyIcon,
  GitHubIcon,
  XeramiyaXIconRainbow,
} from "components/Icon";

export const metadata: Metadata = {
  title: "私について",
  description: "Xeramiyaについて",
};

export default function About() {
  return (
    <div className="stand">
      <article className="mx-4 mt-12">
        <section>
          <div className="flex flex-row">
            <XeramiyaXIconRainbow className="h-[4.75rem]" />
            <div className="">
              <h1 className="text-5xl italic tracking-wide">
                <Link href="about/signature">Xeramiya</Link>
              </h1>
              <p className="note text-lg">I&apos;m STill here!!</p>
            </div>
          </div>
          <ul className="mt-4 flex flex-row flex-wrap justify-end py-1">
            <li>
              <Link
                href="https://twitter.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <TwitterIcon />
                Twitter
              </Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
                YouTube
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
                Instagram
              </Link>
            </li>
            <li>
              <Link
                href="https://steamcommunity.com/id/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SteamIcon />
                Steam
              </Link>
            </li>
            <li>
              <Link
                href="https://soundcloud.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SoundCloudIcon />
                SoundCloud
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/user/fhc8jd5iv2ibh1mt1pncyn2vd"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon />
                Spotify
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/xeramiya"
                className="string"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
                GitHub
              </Link>
            </li>
          </ul>
        </section>
        <hr className="border-char-note" />
        <section>
          <div className="mt-8">好きな好きは好きです。</div>
        </section>
      </article>
    </div>
  );
}
