import React from "react";
import Image from "next/image";

export default function Footer() {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="animate__animated animate__fadeInUp flex gap-3 pt-10 justify-center lg:justify-end lg:pr-4 pb-3 ">
        <a href="">
          {" "}
          <svg
            className="lg:w-[66px] lg:h-[66px]"
            width="36"
            height="36"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              opacity="0.3"
              d="M6.25 22.9168L43.75 8.3335L37.5 41.6668L27.0833 35.4168L20.5729 38.5418L16.6667 29.1668L6.25 22.9168Z"
              fill="black"
            />
            <path
              d="M44.6874 7.03552C43.677 6.17093 42.1687 6.01051 40.6562 6.60843C39.7187 6.97718 25.0291 13.1584 11.3354 18.923L6.81243 20.8272C5.06035 21.5376 4.17285 22.6897 4.17285 24.2459C4.17285 25.3355 4.63535 26.8168 6.83535 27.6876L14.4749 30.7438C15.1354 32.7251 16.6687 37.3251 17.0541 38.548C17.2833 39.273 17.8624 41.1001 19.3249 41.5272C19.6249 41.6293 19.9374 41.6813 20.2562 41.6813C21.1791 41.6813 21.8437 41.2522 22.1687 41.0022L27.0208 36.898L32.9187 42.3501C33.1458 42.5813 34.3458 43.7501 35.9603 43.7501C37.9749 43.7501 39.5041 42.073 39.8228 40.4501C39.9958 39.5605 45.6812 11.0147 45.6812 11.0188C46.1916 8.72927 45.277 7.54177 44.6874 7.03552ZM35.7624 39.3043L27.1437 31.3334L20.8312 36.6772C20.0833 34.3709 18.1208 28.5063 18.1208 28.5063L17.8166 27.5918L9.43952 24.2418L12.9541 22.7647C21.9104 18.9938 37.8624 12.2793 41.4791 10.7751C40.6937 14.7126 36.4124 36.2063 35.7624 39.3043Z"
              fill="black"
            />
            <path
              d="M34.9999 16.6665C34.7395 16.6665 34.3874 16.9144 34.1999 17.0311C31.5166 18.704 18.0624 26.3603 14.3728 28.4561C15.4124 28.8728 16.1457 29.1665 16.1457 29.1665C16.1457 29.1665 18.5436 36.3436 19.0416 37.9165C19.5395 39.4915 19.9395 39.529 19.9395 39.529C20.0499 39.5769 20.1582 39.5957 20.2582 39.5957C20.3395 39.5957 20.3957 39.5665 20.4645 39.5478L22.9166 29.9478C22.9166 29.9478 34.0895 18.6394 34.7624 17.9811C35.3041 17.454 35.4166 17.2686 35.4166 17.0853C35.4166 16.8415 35.2895 16.6665 34.9999 16.6665Z"
              fill="black"
            />
          </svg>
        </a>
        <a href="https://twitter.com/plasticcatbag">
          {" "}
          <svg
            className="lg:w-[66px] lg:h-[66px]"
            width="36"
            height="36"
            viewBox="0 0 50 50"
            fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M39.5833 43.75H10.4167C8.11562 43.75 6.25 41.8844 6.25 39.5833V10.4167C6.25 8.11562 8.11562 6.25 10.4167 6.25H39.5833C41.8844 6.25 43.75 8.11562 43.75 10.4167V39.5833C43.75 41.8844 41.8844 43.75 39.5833 43.75Z"
              fill="#212121"
            />
            <path
              d="M35.6844 35.4168H28.9792L14.4053 14.5835H21.1105L35.6844 35.4168ZM29.7782 33.6502H32.448L20.3115 16.3502H17.6417L29.7782 33.6502Z"
              fill="white"
            />
            <path
              d="M16.5271 35.4165L24.0302 26.7249L23.0489 25.4238L14.3989 35.4165H16.5271Z"
              fill="white"
            />
            <path
              d="M25.4688 22.6262L26.4115 23.9689L34.5167 14.5835H32.4333L25.4688 22.6262Z"
              fill="white"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
