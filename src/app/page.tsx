import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight'
import {
  faYoutube,
  faXTwitter,
  faInstagram,
  faThreads,
} from '@fortawesome/free-brands-svg-icons'
import Link from 'next/link'
import Image from 'next/image'

const LANGUAGES = [
  {
    name: 'Python',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
    url: 'https://www.python.org/',
    description: 'Python（パイソン）は高水準で汎用的なプログラミング言語です。その設計哲学は、意味のあるインデントの使用によるコードの可読性を強調しています。',
  },
  {
    name: 'TypeScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
    url: 'https://www.typescriptlang.org/',
    description: 'TypeScript（タイプスクリプト）は、JavaScriptを基盤とし、強力な型システムを備えたプログラミング言語であり、任意のスケールで優れたツーリングを提供します。',
  },
  {
    name: 'JavaScript',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
    url: 'https://www.javascript.com/',
    description: 'JavaScript（ジャバスクリプト）は高水準で動的かつ型がない、解釈型のプログラミング言語です。',
  },
  {
    name: 'Go',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original.svg',
    url: 'https://go.dev/',
    description: 'Go（ゴー）は、GoogleのRobert Griesemer、Rob Pike、Ken Thompsonによって設計された静的型付けのコンパイル言語です。',
  },
  {
    name: 'PHP',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg',
    url: 'https://www.php.net/',
    description: 'PHPは一般的な用途に適した人気のあるスクリプト言語であり、特にウェブ開発に適しています。',
  }
];

const FRAMEWORKS = [
  {
    name: 'FastAPI',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
    url: 'https://fastapi.tiangolo.com/',
    description: 'FastAPIはPythonのAPIエンドポイントのプロジェクトでは、応答がシンプルなプロジェクトです。',
  },
  {
    name: 'Next.js',
    icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg',
    url: 'https://nextjs.org/',
    description: 'Next.jsは、Reactを使ってサイトを開発するためのフレームワークです。',
  }
]

export default function Home() {
  return (
    <>
      <div id="home" className="relative overflow-hidden">
        <div className="relative bg-[#2c3e50] h-32" />
        <div className="absolute bg-[#2c3e50] h-64 w-full skew-y-6 -translate-y-32" />
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white p-6 rounded-lg shadow-lg -translate-y-16">
            <div className="text-center">
              <Avatar className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mx-auto">
                <AvatarImage alt="Avatar image" src="./avatar.webp" />
                <AvatarFallback>Lami</AvatarFallback>
              </Avatar>
              <h1 className="text-2xl font-semibold mt-4">Lami</h1>
              <p className="text-gray-600">Python & TypeScript Developer</p>
              <p className="text-gray-600">Specializing in FastAPI & Next.js</p>
            </div>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              <Link className="flex items-center justify-between bg-blue-500 text-white p-4 rounded-lg shadow transition hover:bg-blue-600" href="https://x.com/intent/user?screen_name=L2">
                <FontAwesomeIcon icon={faXTwitter} className="text-white w-6 h-6" />
                <span>X (Twitter)</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-red-500 text-white p-4 rounded-lg shadow transition hover:bg-red-600" href="https://www.youtube.com/@kohnoselami">
                <FontAwesomeIcon icon={faYoutube} className="text-white w-6 h-6" />
                <span>YouTube</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-pink-500 text-white p-4 rounded-lg shadow transition hover:bg-pink-600" href="https://www.instagram.com/kohnoselami">
                <FontAwesomeIcon icon={faInstagram} className="text-white w-6 h-6" />
                <span>Instagram</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
              <Link className="flex items-center justify-between bg-gray-900 text-white p-4 rounded-lg shadow transition hover:bg-gray-700" href="https://www.threads.net/@kohnoselami">
                <FontAwesomeIcon icon={faThreads} className="text-white w-6 h-6" />
                <span>Threads</span>
                <FontAwesomeIcon icon={faArrowRight} className="text-white w-6 h-6" />
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 mx-auto sm:grid-cols-2 gap-10 px-4 sm:px-6 lg:px-8 mb-8">
        <div id="about" className="max-w-4xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h1 className="text-2xl font-semibold mb-4">About Me</h1>
            <div className="flex flex-col md:flex-row gap-4">
              {/* @ts-ignore */}
              <p className="w-full md:w-1/2 text-gray-600" style={{ wordBreak: "auto-phrase" }}>
                こんにちは！私はプログラマーで、主にPythonとTypeScriptが得意で、JavaScript、Go、PHPも使用可能です。<br />
                ウェブ開発においては、<Link className="text-blue-500" href="https://fastapi.tiangolo.com/ja/">FastAPI</Link>や<Link className="text-blue-500" href="https://nextjs.org/">Next.js</Link>などのフレームワークを活用し、バックエンド開発においては柔軟かつ効率的なソリューションの提供に注力しています。<br />
                データベースの世界ではMySQLやPostgreSQLに加えてMongoDBやCockroachDBなども取り扱い、<Link className="text-blue-500" href="https://www.prisma.io/">Prisma</Link>(<Link className="text-blue-500" href="https://www.prisma.io/">TypeScript</Link>, <Link className="text-blue-500" href="https://prisma-client-py.readthedocs.io/en/stable/">Python</Link>)というORMを駆使してデータベース構造から設計、スキーマ構造、インフラ整備にも従事しています。<br /><br />
                新しい技術やツールに対する好奇心旺盛で、コードを書くことが好きです。ユーザーエクスペリエンス向上やプロジェクトの効率化に貢献できることを常に考え、学び続けています。<br />
                仕事においては、お客様やチームメンバーと協力し、課題に対して前向きに取り組みます。新しいプロジェクトに挑戦し、技術的な課題に立ち向かうことが得意です。<br />
                お互いに成長し合える環境で、チームとともに新たな可能性を追求することが私のモチベーションです。<br /><br />
                趣味、そして好きなことはK-POPアイドルの<Link className="text-blue-500" href="https://ive-official.jp/mob/index.php">IVE</Link>を推すことです。IVE以外にも<Link className="text-blue-500" href="https://www.le-sserafim.jp/">LE SSERAFIM</Link>や<Link className="text-blue-500" href="https://www.newjeans.jp/">NewJeans</Link>なども好きで、よくライブに足を運んでいます。音楽は私にとって特別な時間を提供してくれます。<br />
                ライブ(<Link className="text-blue-500" href="https://ive-official.jp/mob/pageShw.php?site=DIVE&ima=1046&cd=show_what_i_have">IVE THE 1ST WORLD TOUR "SHOW WHAT i HAVE" IN JAPAN</Link>)の雰囲気やIVEの魅力を伝えたいと思い、その時の様子を写真に収めました。右側にはライブ会場(<Link className="text-blue-500" href="https://k-arena.com/">Kアリーナ横浜</Link>)の外で撮影した、記念撮影スポットでの写真があります。<br />
                ライブ会場内での撮影は禁止されていてできませんでしたが、会場外での素敵な思い出を残すことができました。
              </p>
              <div className="w-full md:w-1/2">
                <Image alt="IVE album covers" src="./IMG_1131.jpg" width={550} height={911} className="w-full h-auto rounded-lg shadow" />
              </div>
            </div>
          </div>
        </div>
        <div id="skills" className="max-w-4xl w-full">
          <div className="bg-white p-6 rounded-lg shadow-lg h-full">
            <h1 className="text-2xl font-semibold mb-4">Skills</h1>
            <h2 className="text-lg font-semibold mb-2">Languages</h2>
            <div className="grid grid-col lg:grid-cols-2 gap-4 mb-4">
              {LANGUAGES.map((language) => (
                <div key={language.name} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                  <div className="flex mb-2">
                    <Image alt={language.name} src={language.icon} width={32} height={32} className="w-8 h-8 mr-2" />
                    <h3 className="text-lg font-semibold mb-2">{language.name}</h3>
                  </div>
                  {/* @ts-ignore */}
                  <p className="text-sm" style={{ wordBreak: "auto-phrase" }}>{language.description}</p>
                </div>
              ))}
            </div>
            <h2 className="text-lg font-semibold mb-2">Web Frameworks</h2>
            <div className="grid grid-col lg:grid-cols-2 gap-4">
              {FRAMEWORKS.map((framework) => (
                <div key={framework.name} className="bg-gray-100 p-4 rounded-lg shadow-lg">
                  <div className="flex mb-2">
                    <Image alt={framework.name} src={framework.icon} width={32} height={32} className="w-8 h-8 mr-2" />
                    <h3 className="text-lg font-semibold mb-2">{framework.name}</h3>
                  </div>
                  {/* @ts-ignore */}
                  <p className="text-sm" style={{ wordBreak: "auto-phrase" }}>{framework.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
