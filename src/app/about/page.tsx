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
          <h1 className="text-5xl italic tracking-wide">
            <Link href="about/signature">Xeramiya</Link>
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
                <TwitterIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/xeramiya"
                className="string bg-Instagramm"
                target="_blank"
                rel="noopener noreferrer"
              >
                <InstagramIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://steamcommunity.com/id/xeramiya"
                className="string bg-Steam"
                target="_blank"
                rel="noopener noreferrer"
              ><SteamIcon /></Link>
            </li>
            <li>
              <Link
                href="https://www.youtube.com/channel/UCKpHbYt5VuQZ6ePTgjVvhfQ"
                className="string bg-YouTube"
                target="_blank"
                rel="noopener noreferrer"
              >
                <YouTubeIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://soundcloud.com/xeramiya"
                className="string bg-SoundCloud"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SoundCloudIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://open.spotify.com/user/fhc8jd5iv2ibh1mt1pncyn2vd"
                className="string bg-Spotify"
                target="_blank"
                rel="noopener noreferrer"
              >
                <SpotifyIcon />
              </Link>
            </li>
            <li>
              <Link
                href="https://github.com/xeramiya"
                className="string bg-GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GitHubIcon />
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </div>
  );
}
