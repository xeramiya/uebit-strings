import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Script from 'next/script'
import Layout from '../components/layout'

export default function Home() {
  return (
    <div>
      <Head>
        <title>APP - UEBIT STRINGs</title>
        <meta name="description" content="App list" />
      </Head>

      <Layout>
        <article className="pt-2 pb-16 mx-1">
          <section className="">
            <h1 className="">
              作ったものをまとめたにょ
            </h1>
            <p className="text-gray font">
              まとめてくれてありがとう
            </p>
          </section>
          <section id="app" className="py-4">
            <ul className="pl-2">
              <li>
                <h2 className="hidden">
                  Nelax2Dream
                </h2>
                <div className="max-w-sm rounded overflow-hidden">
                  <div className="my-2 py-1">
                    <div className="inline-block font-bold text-lg">
                      Nelax2Dream
                    </div>
                    <Link href="/Nelax2Dream" className="inline-block rounded-full mx-2 px-2 text-sm font-semibold bg-nand-default text-white mr-2 mb-2 hover:bg-nand-lighter active:bg-iRed active:text-white">
                      移動
                    </Link>
                    <p className="text-gray text-sm">
                      音楽をそれはそれはループしつづけるだけ
                    </p>
                  </div>
                </div>
              </li>
              <li>
                <h2 className="hidden">
                  BUCKWHEAT
                </h2>
                <div className="max-w-sm rounded overflow-hidden">
                  <div className="my-2 py-1">
                    <div className="inline-block font-bold text-lg">
                      BUCKWHEAT
                    </div>
                    <Link href="https://buckwheat.glitch.me/" className="inline-block rounded-full mx-2 px-2 text-sm font-semibold bg-nand-default text-white mr-2 mb-2 hover:bg-nand-lighter active:bg-iRed active:text-white" target="_blank" rel="noopener noreferrer">
                      起動
                    </Link>
                    <p className="text-gray text-sm">
                      そこそこかっこいい時計<br />
                      ミリ秒まで表示してくれるオチャメなヤツ
                    </p>
                  </div>
                </div>
              </li>
            </ul>
          </section>
        </article>
      </Layout>
    </div >
  )
}
