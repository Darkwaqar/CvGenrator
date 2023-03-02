import Image from 'next/image'
import React, { Component } from 'react'
import { useState, useEffect } from "react";
// Using a functional component, you must wrap it in React.forwardRef, and then forward the ref to
// the node you want to be the root of the print (usually the outer most node in the ComponentToPrint)
// https://reactjs.org/docs/refs-and-the-dom.html#refs-and-function-components
export const Resume = React.forwardRef((props, ref) => {
    return (
        <div ref={ref} className="cv-container">
            <div className="cv-content">
                <section className="profile">
                    <article className="vcard">
                        <div className="user-photo">
                            <div className="user-thumb">
                                <div className="css-crop">
                                    <Image
                                        src="/me.png"
                                        alt="Picture of the author"
                                        width={300}
                                        height={300}
                                    />
                                </div>
                            </div>
                            <div className="gradient-overlay"></div>
                        </div>
                        <div className="user-contact-wrap">
                            <div className="user-title">
                                <h1 className="full-name">
                                    <span>Waqar Ahmed Khan</span>
                                </h1>
                                <h2 className="title">
                                    <span>
                                        Software Engineer / Web & Mobile Application Developer{' '}
                                    </span>
                                </h2>
                            </div>
                            <ul className="user-contact">
                                <li className="locality">
                                    <span>
                                        Building 15 house 28 Al-Fajar Al Swaidi Al Gharbi
                                    </span>
                                </li>
                                <li className="phone">
                                    <span>+966563750473</span>
                                </li>
                                <li className="email">
                                    <a href="mailto:urspecial1one@gmail.com">
                                        urspecial1one@gmail.com
                                    </a>
                                </li>
                            </ul>
                            <ul className="user-websites">
                                <li>
                                    <a
                                        href="https://darkwaqar.github.io/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        darkwaqar.github.io/
                                    </a>
                                </li>
                                <li>
                                    <a
                                        href="https://www.linkedin.com/in/darkwaqar/"
                                        rel="noreferrer"
                                        target="_blank"
                                    >
                                        linkedin.com/in/darkwaqar/
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </article>
                </section>
                <section id="summary">
                    <header>
                        <h3 className="header-text">
                            <span>Summary</span>
                        </h3>
                    </header>
                    <article>
                        <div>
                            <div>
                                <p>
                                    <span>
                                        As a Mobile Application Lead/Developer with over Seven
                                        years of experience in the Marketing domain, I have a
                                        proven track record of developing high-quality mobile
                                        apps, including Mobile Web and native apps on Windows
                                        Mobile and Android devices. I have worked with a range of
                                        domains including eCommerce, Energy & Utilities, and
                                        eLearning, With the ability to work effectively in Agile
                                        and distributed environments, I possess comprehensive
                                        knowledge of the complete software development lifecycle
                                        (SDLC).
                                    </span>
                                </p>
                            </div>
                        </div>
                    </article>
                </section>
                <section>
                    <header>
                        <h3 className="header-text">
                            <span>CORE COMPETENCIES</span>
                        </h3>
                    </header>
                    <article>
                        <div className="mce-content-body mce-content-readonly">
                            <div>
                                <table
                                    style={{ width: '100%' }}
                                    data-mce-style="border-collapse: collapse; width: 100%;"
                                    className="mce-item-table"
                                >
                                    <tbody>
                                        <tr>
                                            <td
                                                style={{ width: '33.2826%' }}
                                                data-mce-style="width: 33.2826%;"
                                            >
                                                <ul>
                                                    <li data-offset-key="bseee-0-0">
                                                        React Native (6 years)
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="bseee-0-0"
                                                    >
                                                        java (6 years)
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="mhu-0-0"
                                                    >
                                                        <div data-offset-key="mhu-0-0">
                                                            Node.js (5 years)
                                                        </div>
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="dd9p-0-0"
                                                    >
                                                        <div data-offset-key="dd9p-0-0">
                                                            Web Design (4 year)
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td
                                                style={{ width: '33.2826%' }}
                                                data-mce-style="width: 33.2826%;"
                                            >
                                                <ul>
                                                    <li data-offset-key="erhbf-0-0">
                                                        Android (3 years)
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="ftcjq-0-0"
                                                    >
                                                        <div data-offset-key="ftcjq-0-0">
                                                            Swift (6 years)
                                                        </div>
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="ahchs-0-0"
                                                    >
                                                        <div data-offset-key="ahchs-0-0">
                                                            MySQL (3 years)
                                                        </div>
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="948su-0-0"
                                                    >
                                                        <div data-offset-key="948su-0-0">
                                                            Jquery (4 years)
                                                        </div>
                                                    </li>
                                                </ul>
                                            </td>
                                            <td
                                                style={{ width: '33.2826%' }}
                                                data-mce-style="width: 33.2826%;"
                                            >
                                                <ul>
                                                    <li data-offset-key="f5ojb-0-0">
                                                        MongoDB (4 years)
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="2hh4g-0-0"
                                                    >
                                                        <div data-offset-key="2hh4g-0-0">
                                                            Javascript (6 years)
                                                        </div>
                                                    </li>
                                                    <li
                                                        data-block="true"
                                                        data-editor="r3c4"
                                                        data-offset-key="2n183-0-0"
                                                    >
                                                        <div data-offset-key="2n183-0-0">
                                                            Redux (3 years)
                                                        </div>
                                                    </li>
                                                    <li>Git (5 years)</li>
                                                </ul>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </article>
                </section>
                <section id="postitions" className="dated_story">
                    <header>
                        <h3 className="header-text">
                            <span>Work experience</span>
                        </h3>
                    </header>
                    <article>
                        <div className="article-headings">
                            <h4 data-bind="title">
                                <span>React Native Developer</span>
                            </h4>
                            <h5 data-bind="organization">
                                <span>
                                    <span>Buisness Solution Services</span>
                                </span>
                            </h5>
                            <h6 className="date-range">
                                <span data-bind="start_date">
                                    <span>Nov 2021</span>
                                </span>
                                <span data-bind="end_date">
                                    <span>Nov 2022</span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div>
                                <div className="mce-content-body mce-content-readonly">
                                    <ul>
                                        <li>
                                            <span>
                                                Deployed internal React Native mobile application -
                                                name kept confidential - for client Abbott This app
                                                contains sensitive, information pertaining to doctor/
                                                Abbott&nbsp; Android and iOS app
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed internal on Abbott Android app on Abbott
                                                Android store.&nbsp;
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed internal Abbott Ios App in Abbott store.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Produced over 30 app UI translations make a dynamic
                                                app translation using the salesforce translation
                                                Workbench . Because app's primary target area is USA
                                                and India it is available in different Indian
                                                languages, as well as Arabic&nbsp; and English
                                            </span>
                                        </li>
                                        <li>
                                            <span>Completely prototyped app</span>
                                        </li>
                                        <li>
                                            <span>
                                                Architected full-stack using different technologies.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed to Google Play and Apple App Stores.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Performed beta testing with TestFlight and Android
                                                Beta Channel Releases
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Set up and maintained different databases: Salesforce,
                                                SQLite and SQLCipher for security.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Utilized React Redux for transient app state
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Implemented offline first approach with
                                                react-native-offline module and Salesforce Smart Store
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated multiple React Native modules such as
                                                react-navigation, react-native-firebase
                                            </span>
                                        </li>
                                        <li>
                                            <span>Carried Test-Driven Development with Jest</span>
                                        </li>
                                        <li>
                                            <span>
                                                Created and tested Salesforce backend code which was
                                                written on Apex Salesforce
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Insured code robustness by using Typescript on React
                                                Native mobile Frontend.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Due to some limitations in React Native, developed
                                                native modules from scratch Native iOS (Objective-C
                                                and Swift) + Native Android (Java). Those modules
                                                communicate back and forth with JS engine (Salesforce
                                                download content) and upload static content from
                                                offline application when it get online.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Created nice animations on: react-native-reanimated
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Used Salesforce notification service to update
                                                notifications to enable real time messaging with push
                                                notifications
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Revamped abbott name kept confidential mobile app This
                                                app is for attendance and management of Abbott
                                                conference's&nbsp;
                                            </span>
                                        </li>
                                        <li>
                                            <span>Transformed native iOS to React Native</span>
                                        </li>
                                        <li>
                                            <span>Developed Android version that was missing</span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        Mobile Application Team Lead
                                    </span>
                                </span>
                            </h4>
                            <div data-bind="organization_url">
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            Benchmark Pakistan
                                        </span>
                                    </span>
                                </h5>
                            </div>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">Sept 2018</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">Nov 2021</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_5818413051676848844195"
                                    className="mce-content-body mce-content-readonly"
                                >
                                    <ul>
                                        <li>
                                            <span>Deployed mobishop Android and iOS app</span>
                                        </li>
                                        <li>
                                            Published Mobishop to App Store{' '}
                                            <a
                                                href="https://apps.apple.com/ae/app/mobishop-all-in-one-shopping/id1441632028"
                                                target="_blank"
                                                rel="n noreferrer"
                                                data-mce-href="https://apps.apple.com/ae/app/mobishop-all-in-one-shopping/id1441632028"
                                            >
                                                https://apps.apple.com/ae/app/mobishop-all-in-one-shopping/id1441632028
                                            </a>
                                        </li>
                                        <li>
                                            Published Mobishop to&nbsp;
                                            <span>
                                                to Google Play Store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.growonline.gomobishop"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.growonline.gomobishop"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.growonline.gomobishop
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Publish Website on{' '}
                                                <a
                                                    href="https://info.gomobishop.com/"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://info.gomobishop.com/"
                                                >
                                                    https://info.gomobishop.com/
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Publish Dynamic App builder (App configure&nbsp;create
                                                app in second and deploy it on app store and play
                                                store)
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed Mobishop's backend with Amazon RDS
                                                ,mongodb&nbsp;and Firebase databases&nbsp;
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated Local Notifications to notify users when
                                                makeup product goes out of life
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated Faceboook Places API to find places around
                                                and persist data to device's disk&nbsp;
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Keeps local data up-to-date by making use of Core
                                                Data's NSFetchedResultsController className keeps
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated Facebook Audience Network SDK to display
                                                native advertising
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated Google Analytics to view the demography of
                                                the user.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Integrated&nbsp; Tracking Packages Service DHL to
                                                calculate the delevery rate from store of vender to
                                                customer
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                MongoDB powers geolocation search, allowing people to
                                                explore their surroundings and find brand around them.
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Performed test-driven development. Nimble's unit
                                                testing environments helps in testing for fatal error
                                            </span>
                                            <span></span>
                                        </li>
                                        <li>
                                            <span>Processed purchases via Stripe payment API</span>
                                            <span></span>
                                        </li>
                                        <li>
                                            <span>
                                                Built admin section to update news and events
                                                information that are are displayed mobile app
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        Full Stack Developer
                                    </span>
                                </span>
                            </h4>
                            <a
                                data-bind="organization_url"
                                target="_blank"
                                rel="noopener nofollow noreferrer"
                                href="http://www.benchmark.pk/"
                                className=""
                            >
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            GROW ONLINE PVT LTD{' '}
                                        </span>
                                    </span>
                                </h5>
                            </a>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">6 Jan 2017</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">Aug 2018</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_46068296961676848844196"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <ul>
                                        <li>
                                            <span>Deployed Footprint Android and iOS app</span>
                                        </li>
                                        <li>
                                            Published Footprint to&nbsp;
                                            <span>
                                                to Google Play Store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.growonline.footprint"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.growonline.footprint"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.growonline.footprint
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            Publish Website on{' '}
                                            <a
                                                href="https://footprint.pk/"
                                                target="_blank"
                                                rel="n noreferrer"
                                                data-mce-href="https://footprint.pk/"
                                            >
                                                https://footprint.pk/
                                            </a>
                                            &nbsp;
                                        </li>
                                        <li>
                                            <span>Deployed Asim Jofa Android and iOS app</span>
                                        </li>
                                        <li>
                                            Published Asim Jofa to app
                                            <span>
                                                &nbsp;Store
                                                <a
                                                    href="https://apps.apple.com/sa/app/asim-jofa/id1500245305"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://apps.apple.com/sa/app/asim-jofa/id1500245305"
                                                >
                                                    https://apps.apple.com/sa/app/asim-jofa/id1500245305
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Publish Asim Jofa to google Play store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.asimjofa"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.asimjofa"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.asimjofa
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            Publish Website on{' '}
                                            <a
                                                href="https://footprint.pk/"
                                                target="_blank"
                                                rel="n noreferrer"
                                                data-mce-href="https://footprint.pk/"
                                            >
                                                https://asimjofa.com/
                                            </a>
                                            &nbsp;
                                        </li>
                                        <li>
                                            <span>
                                                Deployed Asim Jofa backend with NopCommerce and
                                                Firebase databases&nbsp;
                                            </span>
                                        </li>
                                        <li>
                                            <span>Used</span>
                                            WebOptimizer{' '}
                                            <span>
                                                automated build process which handled repetitive
                                                common tasks such as compiling SCSS, minifying JS
                                                files
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Implemented basic website security with Google
                                                reCaptcha and iThemes Security
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Used different javascript libraries: Vue.js, axios,
                                                jQuery, ScrollMagic
                                            </span>
                                        </li>
                                        <li>
                                            Deployed Sadaf Amir Android to Google Play Store{' '}
                                            <a
                                                href="https://play.google.com/store/apps/details?id=com.growonline.sadaf&amp;hl=en&amp;gl=US"
                                                target="_blank"
                                                rel="n noreferrer"
                                                data-mce-href="https://play.google.com/store/apps/details?id=com.growonline.sadaf&amp;hl=en&amp;gl=US"
                                            >
                                                https://play.google.com/store/apps/details?id=com.growonline.sadaf&amp;hl=en&amp;gl=US
                                            </a>
                                        </li>
                                        <li>
                                            Deployed "
                                            <span>Insider - Business News &amp; More</span>" to
                                            Android and Ios&nbsp;
                                        </li>
                                        <li>
                                            Published{' '}
                                            <span>"Insider - Business News &amp; More" </span>
                                            to app
                                            <span>
                                                &nbsp;Store{' '}
                                                <a
                                                    href="https://apps.apple.com/sa/app/asim-jofa/id1500245305"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://apps.apple.com/sa/app/asim-jofa/id1500245305"
                                                >
                                                    https://apps.apple.com/sa/app/asim-jofa/id1500245305
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Publish "Insider - Business News &amp; More" &nbsp;to
                                                google Play store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.freerange360.mpp.businessinsider"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.freerange360.mpp.businessinsider"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.freerange360.mpp.businessinsider
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            Deployed second news app{' '}
                                            <span>Business Recorder News</span>
                                            &nbsp;to Android and Ios&nbsp;
                                        </li>
                                        <li>
                                            Published <span>"Business Recorder News" </span>
                                            to app
                                            <span>
                                                &nbsp;Store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.newskit.br"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.newskit.br"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.newskit.br
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Publish "Business Recorder News" &nbsp;to google Play
                                                store{' '}
                                                <a
                                                    href="https://apps.apple.com/us/app/business-recorder/id1423513735"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://apps.apple.com/us/app/business-recorder/id1423513735"
                                                >
                                                    https://apps.apple.com/us/app/business-recorder/id1423513735
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed Tradition Store website on MEAN stack &nbsp;
                                                <a
                                                    href="http://paranda.pk/"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="http://paranda.pk/"
                                                >
                                                    http://paranda.pk/
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed Hashmi Kajal E-commerce Store{' '}
                                                <a
                                                    href="http://hashmikajal.com.pk/"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="http://hashmikajal.com.pk/"
                                                >
                                                    http://hashmikajal.com.pk/
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            Deployed Bespoke Footwear Webiste{' '}
                                            <span>
                                                <a
                                                    href="https://grandeurman.com/"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://grandeurman.com/"
                                                >
                                                    https://grandeurman.com/
                                                </a>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                Deployed Brand Website for IsmailFarid{' '}
                                                <a
                                                    href="https://www.ismailfarid.com/home.php"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://www.ismailfarid.com/home.php"
                                                >
                                                    https://www.ismailfarid.com
                                                </a>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <article data-bind="contents" className="">
                            <div className="article-headings">
                                <h4 data-bind="title" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            Software Engineer-Android Developer
                                        </span>
                                    </span>
                                </h4>
                                <a
                                    data-bind="organization_url"
                                    target="_blank"
                                    rel="noopener nofollow noreferrer"
                                    href="http://justdigital99.com/"
                                    className=""
                                >
                                    <h5 data-bind="organization" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">
                                                Just Digital
                                            </span>
                                        </span>
                                    </h5>
                                </a>
                                <h6 className="date-range">
                                    <span data-bind="start_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">9 Aug 2016</span>
                                        </span>
                                    </span>
                                    <span data-bind="end_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">5 Jan 2017</span>
                                        </span>
                                    </span>
                                </h6>
                            </div>
                            <div className="article-body">
                                <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                    <div
                                        id="tiny-react_1573783171676848844196"
                                        className="mce-content-body mce-content-readonly"
                                        spellCheck="true"
                                    >
                                        <ul>
                                            <li>
                                                Acted as the technical lead for mobile app
                                                development.
                                            </li>
                                            <li>
                                                Deployed Insomnia Kitchen google play store{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.tossdown.insomnia"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.tossdown.insomnia"
                                                >
                                                    https://play.google.com/store/apps/details?id=com.tossdown.insomnia
                                                </a>
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=com.minimax.serenatasforyou"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=com.minimax.serenatasforyou"
                                                ></a>
                                            </li>
                                            <li>
                                                Deployed Insomnia Kitchen{' '}
                                                <a
                                                    href="https://apps.apple.com/pk/app/insomnia-kitchen/id1550724256"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    data-mce-href="https://apps.apple.com/pk/app/insomnia-kitchen/id1550724256"
                                                >
                                                    https://apps.apple.com/pk/app/insomnia-kitchen/id1550724256
                                                </a>
                                            </li>
                                            <li>Use twilio SDK to send automation SMS.</li>
                                            <li>Deployed Go Pray to google play and app store</li>
                                            <li>
                                                Deployed Go Pray Android&nbsp;{' '}
                                                <a
                                                    href="https://play.google.com/store/apps/details?id=au.com.gopray"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://play.google.com/store/apps/details?id=au.com.gopray"
                                                >
                                                    https://play.google.com/store/apps/details?id=au.com.gopray
                                                </a>
                                            </li>
                                            <li>
                                                Deployed Go Pray iOS{' '}
                                                <a
                                                    href="https://apps.apple.com/au/app/go-pray/id1059193005"
                                                    target="_blank"
                                                    rel="n noreferrer"
                                                    data-mce-href="https://apps.apple.com/au/app/go-pray/id1059193005"
                                                >
                                                    https://apps.apple.com/au/app/go-pray/id1059193005
                                                </a>
                                            </li>
                                            <li>
                                                <span>
                                                    Integrated Google Map Api for location finder.
                                                </span>
                                                <span></span>
                                            </li>
                                            <li>
                                                <span>
                                                    Integrated Google Notification for in App
                                                    Notification and Alarm.
                                                </span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </article>
                        <article data-bind="contents" className="">
                            <div className="article-headings">
                                <h4 data-bind="title" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            SOFTWARE ENGINEER
                                        </span>
                                    </span>
                                </h4>
                                <a
                                    data-bind="organization_url"
                                    target="_blank"
                                    rel="noopener nofollow noreferrer"
                                    href="http://Ikodestudio.com.pk"
                                    className=""
                                >
                                    <h5 data-bind="organization" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">IkodeStudio</span>
                                        </span>
                                    </h5>
                                </a>
                                <h6 className="date-range">
                                    <span data-bind="start_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">1 Jan 2016</span>
                                        </span>
                                    </span>
                                    <span data-bind="end_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">
                                                1 August 2016
                                            </span>
                                        </span>
                                    </span>
                                </h6>
                            </div>
                            <div className="article-body">
                                <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                    <div
                                        id="tiny-react_99065346181676848844196"
                                        className="mce-content-body mce-content-readonly"
                                        spellCheck="true"
                                    >
                                        <ul>
                                            <li>
                                                Deployed QAmarket eCommerce backend on Spring Boot
                                                with team.&nbsp;
                                            </li>
                                            <li>
                                                Deployed Recharge India from which utility bill could
                                                be paid.&nbsp;
                                            </li>
                                            <li>Integrate Google Pay For In-app Purchase.</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </article>
                        <article data-bind="contents" className="">
                            <div className="article-headings">
                                <h4 data-bind="title" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            Java Developer{' '}
                                        </span>
                                    </span>
                                </h4>
                                <a
                                    data-bind="organization_url"
                                    target="_blank"
                                    rel="noopener nofollow noreferrer"
                                    href="https://techzo.co/"
                                    className=""
                                >
                                    <h5 data-bind="organization" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">TechzoLLC</span>
                                        </span>
                                    </h5>
                                </a>
                                <h6 className="date-range">
                                    <span data-bind="start_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">4 July 2015</span>
                                        </span>
                                    </span>
                                    <span data-bind="end_date" className="">
                                        <span className="sc-14dqbwa-0 jXuiNd">
                                            <span className="sc-14dqbwa-2 hJyrsz">4 Nov 2015</span>
                                        </span>
                                    </span>
                                </h6>
                            </div>
                            <div className="article-body">
                                <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                    <div
                                        id="tiny-react_7025252691676848844196"
                                        className="mce-content-body mce-content-readonly"
                                        spellCheck="true"
                                    >
                                        <ul>
                                            <li>Develop in house Chat application.</li>
                                            <li>Use Socket.io for real time chat</li>
                                            <li>
                                                Integrate Broadcast Chat system to push chat to all
                                                the subscribers.
                                            </li>
                                            <li>
                                                Integrate Multiplexing{' '}
                                                <span>
                                                    to split the logic of your application over a single
                                                    shared connection
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Worked on Story Telling application backend was
                                                    written on Spring boot and JSP/servlets
                                                </span>
                                            </li>
                                            <li>
                                                <span>
                                                    Created api for iOS and Android To consume.{' '}
                                                </span>
                                                <span></span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="clearfix"></div>
                        </article>

                        <div className="clearfix"></div>
                    </article>
                </section>
                <section data-bind="sections" id="degrees" className="dated_story">
                    <header className="">
                        <h3 className="header-text" data-bind="label">
                            <span className="sc-14dqbwa-0 jXuiNd">
                                <span className="sc-14dqbwa-2 hJyrsz">Education</span>
                            </span>
                        </h3>
                    </header>
                    <div data-bind="add-article"></div>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        PHd Science in Computer Science MAjor Machine Learning
                                    </span>
                                </span>
                            </h4>
                            <div data-bind="organization_url">
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">PAF-KIET</span>
                                    </span>
                                </h5>
                            </div>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2021</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">continue </span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_287142354101676848844196"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <p>
                                        <span>
                                            The Ph.D. in computing and information sciences is a
                                            research degree designed to produce independent
                                            scholars, cutting-edge researchers, and well-prepared
                                            educators.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        MaSTER oF SCIENCE IN cOMPUTER sCIENCE (MS-SE)
                                    </span>
                                </span>
                            </h4>
                            <div data-bind="organization_url">
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">PAF-KIET</span>
                                    </span>
                                </h5>
                            </div>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2018</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2020</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_883826938111676848844196"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <p>
                                        <span>
                                            The program meets the HEC and international standards
                                            for a full-length 2-year Master degree.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        Bachelor of Science in Computer Science (BS-CS)
                                    </span>
                                </span>
                            </h4>
                            <a
                                data-bind="organization_url"
                                target="_blank"
                                rel="noopener nofollow noreferrer"
                                href="http://www.pafkiet.edu.pk/"
                                className=""
                            >
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">PAF-KIET</span>
                                    </span>
                                </h5>
                            </a>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2012</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2016</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_188211871121676848844197"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <p>
                                        <span>
                                            the program meets the HEC and international standards
                                            for a full-length 4-year bachelor’s degree.
                                        </span>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">Intermediate </span>
                                </span>
                            </h4>
                            <a
                                data-bind="organization_url"
                                target="_blank"
                                rel="noopener nofollow noreferrer"
                                href="http://fdc_fsl@fazaia.edu.pk"
                                className=""
                            >
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            Fazaia Degree College, PAF Base Faisal
                                        </span>
                                    </span>
                                </h5>
                            </a>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2010</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2012</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_664191302131676848844197"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <p>
                                        &nbsp;Intermdiate from{' '}
                                        <a
                                            href="http://www.fbise.edu.pk/"
                                            target="_blank"
                                            rel="noreferrer"
                                            data-mce-href="http://www.fbise.edu.pk/"
                                        >
                                            Federal Board Of Intermediate And Secondary Education
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                    <article data-bind="contents" className="">
                        <div className="article-headings">
                            <h4 data-bind="title" className="">
                                <span className="sc-14dqbwa-0 jXuiNd">
                                    <span className="sc-14dqbwa-2 hJyrsz">
                                        Matriculation SSC{' '}
                                    </span>
                                </span>
                            </h4>
                            <a
                                data-bind="organization_url"
                                target="_blank"
                                rel="noreferrer"
                                href="http://fdc_fsl@fazaia.edu.pk"
                                className=""
                            >
                                <h5 data-bind="organization" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">
                                            FAZAIA DEGREE COLLEGE, FAISAL
                                        </span>
                                    </span>
                                </h5>
                            </a>
                            <h6 className="date-range">
                                <span data-bind="start_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2005</span>
                                    </span>
                                </span>
                                <span data-bind="end_date" className="">
                                    <span className="sc-14dqbwa-0 jXuiNd">
                                        <span className="sc-14dqbwa-2 hJyrsz">2010</span>
                                    </span>
                                </span>
                            </h6>
                        </div>
                        <div className="article-body">
                            <div className="sc-12gbvxr-0 dXOMbl mce-container">
                                <div
                                    id="tiny-react_616486433141676848844197"
                                    className="mce-content-body mce-content-readonly"
                                    spellCheck="true"
                                >
                                    <p>
                                        Metriculation from
                                        <a
                                            href="http://www.fbise.edu.pk/"
                                            rel="noreferrer"
                                            target="_blank"
                                            data-mce-href="http://www.fbise.edu.pk/"
                                        >
                                            <span>
                                                Federal Board Of Intermediate And Secondary Education
                                            </span>
                                        </a>
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="clearfix"></div>
                    </article>
                </section>
                <section data-bind="sections" id="portfolio" className="portfolio">
                    <header className="">
                        <h3 className="header-text" data-bind="label">
                            <span className="sc-14dqbwa-0 jXuiNd">
                                <span className="sc-14dqbwa-2 hJyrsz">Accomplishments</span>
                            </span>
                        </h3>
                    </header>
                    <article className="portfolio" data-bind="content">
                        <div className="sc-12gbvxr-0 dXOMbl mce-container">
                            <div
                                id="tiny-react_364368011151676848844197"
                                className="mce-content-body mce-content-readonly"
                                spellCheck="true"
                            >
                                <ul>
                                    <li>
                                        <span>
                                            Deployed App (Insider - Business News &amp; More) with
                                            1Million + download on google play.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Deployed Two News Applications on Google play store and
                                            App store.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Deployed over 20 E-commerce Application on Google play
                                            store and App store.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Implemented the complete stack of a charity's website
                                            where people were allowed to donate money.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Set up credit card payment forms using Stripe.
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Completed several projects for the Asim Jofa , Hashmi
                                            Kajal while being an Mobishop
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Deployed first iOS app called Mobishop with no rejection
                                            from Apple
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Deployed multi language (Name confidential) app to both
                                            Abbott Store android and IOS
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Developed native modules for use inside React Native
                                            project
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Marketed an app on different platform: TV, radio, social
                                            media&nbsp;
                                        </span>
                                    </li>
                                    <li>
                                        <span>
                                            Worked with a famous Designers to create there own
                                            website so they can publish there work.
                                        </span>
                                        <span></span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="assets"></div>
                    </article>
                </section>
                <section
                    data-bind="sections"
                    id="text_story_8ytqv7derr"
                    className="text_story"
                >
                    <header className="">
                        <h3 className="header-text" data-bind="label">
                            <span className="sc-14dqbwa-0 jXuiNd">
                                <span className="sc-14dqbwa-2 hJyrsz">Certifications</span>
                            </span>
                        </h3>
                    </header>
                    <article data-bind="content" className="">
                        <div className="sc-12gbvxr-0 dXOMbl mce-container">
                            <div
                                id="tiny-react_389752940161676848844197"
                                className="mce-content-body mce-content-readonly"
                                spellCheck="true"
                            >
                                <ul>
                                    <li>
                                        <span>IOS Developper - Udacity, Online</span>
                                    </li>
                                    <li>
                                        <span>Android Developer - Udacity, Online</span>
                                    </li>
                                    <li>
                                        <span>
                                            Web Site Professional Certificate - CNAM, Paris
                                        </span>
                                    </li>
                                    <li>
                                        <span>MongoDB Ceritificate - Mongo School, Online</span>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </article>
                </section>
            </div>
        </div>
    )
})

