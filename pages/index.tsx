import Image from "next/image";
import background from "../public/login-bg.jpg";
import soldier1 from "../public/solider-1v6.png";
import soldier2 from "../public/solider-2.webp";
import discordLogo from "../public/discord.png";
import c2 from "../public/c2.jpg";
import c1 from "../public/c1.jpg";
import c10 from "../public/c10.jpg";
import c9 from "../public/c9.jpg";
import c11 from "../public/c11.jpg";
import c12 from "../public/c12.jpg";

import gcBanner from "../public/banner.png";
import DecorativeCard from "../components/decorative_card/decorative_card";
import useMatchMedia from "../lib/matchmedia";
import { useWindowSize } from "../lib/windowsize";
import Link from "next/link";
import { weavy } from "../lib/inlinesvgs";
import Head from "next/head";

function Home() {
	const isDesktopResolution = useMatchMedia("(min-width:1280px)", true);
	const size = useWindowSize();
	function getVideoTopMargin() {
		//size.width > 910 ? 230 : size.width > 883 ? 250 : 100,
		if (size.width > 910) {
			return 250;
		}
		if (size.width > 810) {
			return 247;
		}
		if (size.width > 768) {
			return 200;
		}

		return 0;
	}
	function getMottoSizeMargin() {
		if (size.width > 928) {
			return "text-6xl mt-16 mr-28";
		}
		if (size.width > 698) {
			return "text-5xl mt-20 mr-28";
		}
		if (size.width > 650) {
			return "text-5xl mt-24 mr-28";
		}
		if (size.width > 520) {
			return "text-5xl mt-28 mr-28";
		}
		if (size.width > 364) {
			return "text-4xl mt-48 mr-0 text-center";
		}
		return "text-2xl mt-52 mr-0 text-center";
	}
	return <>
        <Head>
            <title>Global Conflicts</title>
        </Head>

        <div className="relative overflow-x-hidden ">
            <div
                className="absolute z-10 justify-end hidden w-full max-w-screen-lg 555:flex"
                style={{ right: -175, left: 0, margin: "auto", marginTop: 154 }}
            >
                <div className="max-w-sm md:max-w-md">
                    <div>
                        <Image
                            className="relative"
                            alt="Solider image"
                            width={1142}
                            quality={100}
                            height={1392}
                            src={soldier1}
                        />
                    </div>
                </div>
            </div>
            <div className="w-full mx-auto">
                <div className="absolute w-full home-bg-1">
                    <Image
                        src={background}
                        alt="Header Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="relative flex flex-row max-w-screen-lg mx-auto xl:max-w-screen-xl">
                    <div className="z-10 m-5 mt-10">
                        <Image
                            alt="Global Conflicts Logo"
                            width={833}
                            height={275}
                            quality={100}
                            src={gcBanner}
                        />
                    </div>
                </div>

                <div
                    className="flex home-bg2"
                    style={{
                        backgroundImage: `url("${weavy}")`,
                        backgroundColor: "transparent",
                    }}
                >
                    <div className="z-10 w-full max-w-screen-lg mx-auto mt-24 xl:max-w-screen-xl">
                        <h1
                            className={`max-h-full mb-8 ${getMottoSizeMargin()} font-bold leading-none tracking-tight text-transparent whitespace-pre-wrap header-gradient h-fill-avaliable bg-clip-text bg-gradient-to-br from-gray-800 to-gray-900 font-heading sm:mb-10 dark:text-white`}
                        >
                            {`Tactical Arma gameplay\nwith no strings attached.`}
                        </h1>
                    </div>
                </div>
                <div className="mx-2">
                    <div className="flex flex-row max-w-screen-lg mx-auto xl:max-w-screen-xl">
                        <div style={{ marginTop: -60 }} className="hidden md:block">
                            <DecorativeCard width={300} height={450} image={c2}></DecorativeCard>
                        </div>
                        <div className="p-5 prose prose-xl md:prose-lg lg:prose-xl max-w-none md:max-w-3xl prose-colors">
                            <h1>Who we are</h1>
                            <p>
                                Global Conflicts is an Arma community formed by people from different
                                countries with more than 15 years of experience throughout the arma
                                series. Teamwork, tactical play, and good fun are our core values. We
                                achieve this by encouraging a culture of mutual improvement and
                                enthusiasm for authentic scenarios in our missions. While our missions
                                have a defined chain-of-command, such is not the same for our
                                community. There are no ranks and e-salutes here — everyone is welcomed
                                to take critical roles and leadership in-game.
                            </p>
                        </div>
                    </div>
                </div>

                <div className="h-10"></div>
                <div className="mx-2 ">
                    <div className="flex flex-col max-w-screen-lg mx-auto xl:max-w-screen-xl">
                        {WideCard(c9, -0)}
                        <div className="flex flex-row items-center mt-10">
                            <div className="p-5 prose prose-xl md:prose-lg lg:prose-xl max-w-none md:max-w-3xl">
                                <h1>Gameplay</h1>
                                <p>
                                    During each gaming session we play a number of missions, or as other
                                    communities like to say, “operations”. These missions are all made by
                                    members of our community.
                                </p>
                                <p>
                                    Each mission is a handcrafted experience.
                                    With a unique blend of any faction, any era, and any scenario, with
                                    defined objectives, varying in lengths from 25 minutes to an hour+.
                                    When a mission is selected, we ask for volunteers to lead the mission
                                    — anyone can step up.
                                </p>
                                <p>
                                    In-game we try to do things using realistic procedures while 
                                    balancing gameplay without sacrificing our sanity and fun. 
                                </p>
                            </div>
                            <div>
                                <div className="hidden md:block">
                                    <DecorativeCard width={390} height={585} image={c1}></DecorativeCard>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div
                    style={{
                        height: size.width > 867 ? 700 : size.width > 767 ? 600 : 0,
                    }}
                    className="absolute w-full home-bg-3"
                >
                    <Image
                        src={background}
                        alt="Header Background"
                        layout="fill"
                        objectFit="cover"
                    />
                </div>

                <div className="mr-0 md:mr-2">
                    <div
                        className="relative flex flex-row max-w-screen-lg mx-auto xl:max-w-screen-xl"
                        style={{
                            height: size.width > 867 ? 700 : size.width > 767 ? 600 : "auto",
                        }}
                    >
                        <div
                            className="absolute flex-1 hidden pointer-events-none select-none md:block"
                            style={{ marginTop: -33 }}
                        >
                            <div
                                className="top-0 relative right-0 z-20 max-w-md mt-20 select-none image-on-top"
                                style={{
                                    maxWidth: "50%",
                                    pointerEvents: "none",
                                    zIndex: 22,
                                }}
                            >
                                <Image
                                    alt="Solider image"
                                    quality={100}
                                    width={1142}
                                    height={1392}
                                    src={soldier2}
                                />
                            </div>
                        </div>

                        <div className="w-full">
                            <div className="absolute block md:hidden home-bg-3-mobile">
                                <Image
                                    src={background}
                                    alt="Header Background"
                                    layout="fill"
                                    objectFit="cover"
                                />
                            </div>
                            <div
                                style={{
                                    marginLeft: size.width > 767 ? "auto" : "25px",
                                    marginRight: size.width > 767 ? "inherit" : "25px",
                                    marginTop: size.width > 767 ? "inherit" : "25px",
                                    marginBottom: size.width > 767 ? "inherit" : "25px",
                                    maxWidth: size.width > 767 ? "calc(61% + 64px)" : "100%",
                                }}
                            >
                                <div
                                    className="video-container rounded-xl shadow-strong"
                                    style={{
                                        marginTop: getVideoTopMargin(),
                                    }}
                                >
                                    <iframe
                                        src="https://www.youtube.com/embed/_SW1tEkcfRU"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                    ></iframe>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="mx-2">
                        <div className="flex flex-row flex-wrap max-w-screen-lg mx-auto mb-5 space-y-5 mt-14 xl:max-w-screen-xl ">
                            <div className="flex-1 pr-5 prose prose-xl md:prose-lg lg:prose-xl min-w-300 ">
                                <h2>Requirements </h2>
                                <p>
                                    We don't have any pre-requisites besides a working microphone and
                                    a mature attitude. All we ask is that you follow our SOPs and make
                                    friends, not enemies!
                                </p>
                                <p>No attendence requirements or mandatory training.</p>
                            </div>
                            <div className="flex-1 pr-5 prose prose-xl md:prose-lg lg:prose-xl min-w-300">
                                <h2>Session times</h2>
                                <div>Saturday and Sunday</div>
                                <div>20:00 UTC</div>
                                <div className="italic font-bold">In your timezone:</div>
                                <small>{new Date("6/29/2011 8:00:00 PM UTC").toTimeString()}</small>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="mx-2">
                    <div className="flex flex-col max-w-screen-lg mx-auto xl:max-w-screen-xl">
                        {WideCard(c10, 0)}
                        <div className="flex flex-row items-center">
                            <div className="hidden mr-2 md:block">
                                <DecorativeCard width={390} height={585} image={c11}></DecorativeCard>
                            </div>
                            <div className="p-5 prose lg:prose-xl">

                                <Link
                                    href="https://github.com/Global-Conflicts-ArmA/Olsen-Framework-Arma-3"
                                    passHref={true}
                                    className="no-underline-important underline-important-hover"
                                    legacyBehavior>

                                    <h3 className="hover:cursor-pointer">Mission Framework</h3>

                                </Link>
                                <p>
                                    We have a robust in-house made framework for making
                                    missions. With it, you can quickly produce high quality scenarios
                                    without re-inventing common scripts (e.g. gear or a capture zone).
                                </p>
                                <Link
                                    href="https://aar.globalconflicts.net/"
                                    passHref={true}
                                    className="no-underline-important underline-important-hover"
                                    legacyBehavior>

                                    <h3 className="hover:cursor-pointer">After Action Reports</h3>

                                </Link>
                                <p>
                                    After each session, an After Action Report thread is created on Discord where players are 
                                    encouraged to give feedback to eachother and discuss the session. 
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mx-2 mb-20">
                    <div className="flex flex-col max-w-screen-lg mx-auto mt-10 xl:max-w-screen-xl">
                        {WideCard(c12, -0)}

                        <div className="flex flex-row items-center mt-10">
                            <div className="flex-1">
                                <div className="p-5 prose lg:prose-xl">
                                    <h1>Interested?</h1>
                                    <p>
                                        Search Global Conflicts in your server browser, and click join.
                                        <br />
                                        That's all you need to play with us.
                                        <br />
                                        We encourage you to join our Discord to stay up to date on any news!
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1">
                                <Link href="http://discord.globalconflicts.net/" passHref={true} legacyBehavior>

                                    <Image
                                        src={discordLogo}
                                        width={558}
                                        height={187}
                                        alt="Discord link"
                                    ></Image>

                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>;
}

export default Home;
function WideCard(image, marginTop) {
	return (
		<div
			style={{
				marginTop: marginTop,
				width: "100%",
				height: "285px",
				position: "relative",
			}}
			className="flex justify-self-center card shadow-strong dark:shadow-lg"
		>
			<Image
				alt="Decorative image"
				src={image}
				layout="fill"
				objectFit="cover"
				quality={100}
                className="rounded-xl"
                
			/>
		</div>
	);
}
