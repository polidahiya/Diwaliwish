import Script from "next/script";
import Link from "next/link";
import { SlGlobe } from "react-icons/sl";
import { TiArrowForward } from "react-icons/ti";

export default function Home() {
  return (
    <>
      <Script src="/script.js" async></Script>
      <script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/fscreen%401.0.1.js"
        async
      ></script>
      <script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/Stage%400.1.4.js"
        async
      ></script>
      <script
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/329180/MyMath.js"
        async
      ></script>
      <div
        style={{
          height: 0,
          width: 0,
          position: "absolute",
          visibility: "hidden",
        }}
      >
        <svg xmlns="http://www.w3.org/2000/svg">
          <symbol id="icon-play" viewBox="0 0 24 24">
            <path d="M8 5v14l11-7z" />
          </symbol>
          <symbol id="icon-pause" viewBox="0 0 24 24">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </symbol>
          <symbol id="icon-close" viewBox="0 0 24 24">
            <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
          </symbol>
          <symbol id="icon-settings" viewBox="0 0 24 24">
            <path d="M19.43 12.98c.04-.32.07-.64.07-.98s-.03-.66-.07-.98l2.11-1.65c.19-.15.24-.42.12-.64l-2-3.46c-.12-.22-.39-.3-.61-.22l-2.49 1c-.52-.4-1.08-.73-1.69-.98l-.38-2.65C14.46 2.18 14.25 2 14 2h-4c-.25 0-.46.18-.49.42l-.38 2.65c-.61.25-1.17.59-1.69.98l-2.49-1c-.23-.09-.49 0-.61.22l-2 3.46c-.13.22-.07.49.12.64l2.11 1.65c-.04.32-.07.65-.07.98s.03.66.07.98l-2.11 1.65c-.19.15-.24.42-.12.64l2 3.46c.12.22.39.3.61.22l2.49-1c.52.4 1.08.73 1.69.98l.38 2.65c.03.24.24.42.49.42h4c.25 0 .46-.18.49-.42l.38-2.65c.61-.25 1.17-.59 1.69-.98l2.49 1c.23.09.49 0 .61-.22l2-3.46c.12-.22.07-.49-.12-.64l-2.11-1.65zM12 15.5c-1.93 0-3.5-1.57-3.5-3.5s1.57-3.5 3.5-3.5 3.5 1.57 3.5 3.5-1.57 3.5-3.5 3.5z" />
          </symbol>
          <symbol id="icon-sound-on" viewBox="0 0 24 24">
            <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
          </symbol>
          <symbol id="icon-sound-off" viewBox="0 0 24 24">
            <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
          </symbol>
        </svg>
      </div>
      {/* App */}
      <div className="container">
        <div className="loading-init">
          <div className="loading-init__header"></div>
          <div className="loading-init__status"></div>
        </div>
        <div className="stage-container remove">
          <div className="canvas-container">
            <canvas id="trails-canvas" />
            <canvas id="main-canvas" />
          </div>
          <div className="controls">
            <div className="btn pause-btn">
              <svg fill="white" width={24} height={24}>
                <use href="#icon-pause" xlinkHref="#icon-pause" />
              </svg>
            </div>
            <div className="btn sound-btn">
              <svg fill="white" width={24} height={24}>
                <use href="#icon-sound-off" xlinkHref="#icon-sound-off" />
              </svg>
            </div>
            <div className="btn settings-btn">
              <svg fill="white" width={24} height={24}>
                <use href="#icon-settings" xlinkHref="#icon-settings" />
              </svg>
            </div>
          </div>
          <div className="menu hide z-20 bg-black bg-opacity-35 backdrop-blur">
            <div className="menu__inner-wrap">
              <div className="btn btn--bright close-menu-btn">
                <svg fill="white" width={24} height={24}>
                  <use href="#icon-close" xlinkHref="#icon-close" />
                </svg>
              </div>
              <div className="menu__header">Settings</div>
              <div className="menu__subheader">
                For more info, click any label.
              </div>
              <form className="">
                <div className="form-option form-option--select ">
                  <label className="shell-type-label">Shell Type</label>
                  <select className="shell-type" />
                </div>
                <div className="form-option form-option--select">
                  <label className="shell-size-label">Shell Size</label>
                  <select className="shell-size" />
                </div>
                <div className="form-option form-option--select">
                  <label className="quality-ui-label">Quality</label>
                  <select className="quality-ui" />
                </div>
                <div className="form-option form-option--select">
                  <label className="sky-lighting-label">Sky Lighting</label>
                  <select className="sky-lighting" />
                </div>
                <div className="form-option form-option--select">
                  <label className="scaleFactor-label">Scale</label>
                  <select className="scaleFactor" />
                </div>
                <div className="form-option form-option--checkbox">
                  <label className="auto-launch-label">Auto Fire</label>
                  <input className="auto-launch" type="checkbox" />
                </div>
                <div className="form-option form-option--checkbox form-option--finale-mode">
                  <label className="finale-mode-label">Finale Mode</label>
                  <input className="finale-mode" type="checkbox" />
                </div>
                <div className="form-option form-option--checkbox">
                  <label className="hide-controls-label">Hide Controls</label>
                  <input className="hide-controls" type="checkbox" />
                </div>
                <div className="form-option form-option--checkbox form-option--fullscreen">
                  <label className="fullscreen-label">Fullscreen</label>
                  <input className="fullscreen" type="checkbox" />
                </div>
                <div className="form-option form-option--checkbox">
                  <label className="long-exposure-label">Open Shutter</label>
                  <input className="long-exposure" type="checkbox" />
                </div>
              </form>
              <div className="credits"></div>
            </div>
          </div>
        </div>
        <div className="help-modal z-30">
          <div className="help-modal__overlay" />
          <div className="help-modal__dialog">
            <div className="help-modal__header" />
            <div className="help-modal__body" />
            <button type="button" className="help-modal__close-btn">
              Close
            </button>
          </div>
        </div>
      </div>
      <img
        className="fixed w-full top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 object-contain p-10 max-w-[500px]"
        src="/diwali.png"
      ></img>
      <Link
        href="https://adorefurnix.com"
        className="fixed bottom-5 left-1/2 -translate-x-1/2 flex items-center justify-center gap-2 text-white"
      >
        <SlGlobe />
        www.adorefunrnix.com
        <TiArrowForward />
      </Link>
    </>
  );
}
