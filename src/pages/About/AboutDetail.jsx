import React from "react";
import BodyText from "../../components/BodyText";
import { ACCENT } from "../../theme";

const AboutDetail = ({ title, type, items }) => {
  const icons = {
    motivation: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        enableBackground="new 0 0 404.487 404.487"
        version="1.1"
        viewBox="0 0 404.487 404.487"
        xmlSpace="preserve"
      >
        <path d="M396.874 160.596C386.191 101.402 366.697 52.7 356.027 28.937a34.198 34.198 0 00-31.762-20.189L207.76 10.576c-12.585.198-24.361 7.064-30.731 17.921-7.206 12.28-6.543 27.723 1.687 39.341l26.625 37.589c9.316 13.15 26.234 18.07 41.151 11.961l37.69-15.436c1.714 10.526-.115 20.756-5.489 30.483-13.42 24.29-20.512 50.669-20.767 76.826-8.643-6.027-17.52-10.99-26.6-14.852-19.362-8.236-39.631-11.521-60.233-9.764a130.99 130.99 0 00-12.937 1.763c-21.709-56.849-61.684-74.222-91.821-78.69-33.231-4.927-61.095 4.345-62.265 4.742a5.997 5.997 0 00-3.752 7.602 6.004 6.004 0 007.603 3.764c.263-.088 26.642-8.801 57.071-4.175 38.197 5.807 65.536 29.194 81.36 69.524-20.994 5.92-34.15 15.058-34.882 15.574a6 6 0 00-1.443 8.362 6 6 0 008.362 1.443c.215-.152 21.921-15.241 53.725-17.952 18.634-1.59 36.977 1.389 54.517 8.85 22.167 9.429 43.187 26.103 62.479 49.559a5.984 5.984 0 004.637 2.189 5.999 5.999 0 004.631-9.811c-9.042-10.995-18.478-20.601-28.253-28.784l-.046-.904c-1.379-26.85 5.233-54.327 19.121-79.462 7.192-13.018 9.301-26.768 6.324-40.93l18.401-7.536a6 6 0 10-4.549-11.104l-67.43 27.616c-9.716 3.981-20.74.774-26.81-7.793l-26.625-37.589a24.331 24.331 0 01-1.129-26.332c4.264-7.267 12.146-11.863 20.569-11.995l116.506-1.828c8.906-.133 16.987 5.004 20.626 13.106 10.445 23.262 29.529 70.938 39.984 128.875 12.488 69.198 9.204 132.075-9.759 186.945-63.467 25.415-117.936 36.424-166.437 33.655-32.951-1.883-63.311-10.305-90.235-25.034-30.249-16.546-57.03-41.549-79.66-74.296 12.837-4.378 25.818-3.637 26.049-3.621a5.998 5.998 0 006.386-5.578 6 6 0 00-5.577-6.395c-.501-.034-12.461-.801-25.882 2.73-18.605 4.895-31.025 15.652-35.919 31.107a6 6 0 0011.441 3.622c2.372-7.491 7.032-12.796 12.581-16.551 45.092 66.075 105.688 101.742 180.132 105.995 5.095.291 10.242.437 15.459.437 46.969-.001 99.074-11.826 158.677-35.959a5.998 5.998 0 003.4-3.549c20.455-57.465 24.208-123.288 11.151-195.641z" />
      </svg>
    ),
    goal: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        height="100%"
        viewBox="-26 0 512 512.001"
      >
        <path d="M457.086 68.828l-21.879-19.266 21.879-19.261c3.402-3 4.566-7.676 2.969-11.918-1.606-4.246-5.57-6.988-10.106-6.988H359.41V7.504a7.504 7.504 0 10-15.008 0v101.203l-61.629 33.465a23.741 23.741 0 00-2.437-7.883l-8.684-16.953c-5.96-11.64-20.28-16.254-31.914-10.297l-6.715 3.438c-5.64 2.89-9.816 7.796-11.761 13.828a23.54 23.54 0 001.465 18.09l8.683 16.957a23.567 23.567 0 008.547 9.285c-4.61 6.207-6.797 13.84-9.047 21.77l-1.617 5.726a7.5 7.5 0 005.18 9.262c.68.195 1.367.285 2.043.285a7.509 7.509 0 007.218-5.465l1.618-5.715c3.289-11.598 5.308-17.809 11.738-21.3l11.527-6.262 1.422-.727c.473-.242.914-.516 1.363-.785l82.157-44.613c-.52 10.269-6.047 19.972-15.149 25.5l-53.426 32.46c-.062.036-.125.07-.183.11l-16.63 10.101a7.51 7.51 0 00-2.515 10.313c2.028 3.34 6.246 4.527 9.688 2.851l-12.617 38.141-9.223 3.781-25.078 10.278 7.226-25.547a7.51 7.51 0 00-5.18-9.266c-3.992-1.133-8.136 1.192-9.265 5.18l-11.418 40.379a7.204 7.204 0 00-.27 1.633l-2.988 54.89c-.09 2.094.356 6.051-.613 8.094l-33.188 69.82h-24.117c-14.129 0-25.62 11.492-25.62 25.617v21.66a25.417 25.417 0 00-10.61-2.308H51.137c-14.125 0-25.617 11.488-25.617 25.617v26.875H7.504a7.504 7.504 0 100 15.008H449.94a7.504 7.504 0 100-15.008h-19.515V303.574c0-14.125-11.492-25.617-25.617-25.617H359.41v-130.91c8.32-11.277 11.403-26.059 7.54-40.106a7.49 7.49 0 00-4.298-4.914 7.517 7.517 0 00-3.242-.593v-13.7h90.535c4.54 0 8.504-2.742 10.106-6.984 1.601-4.242.437-8.922-2.965-11.922zm-221.54 60.086a8.645 8.645 0 014.317-5.078l6.715-3.438a8.645 8.645 0 013.953-.957c3.164 0 6.223 1.73 7.762 4.735l8.687 16.957c2.028 3.96.715 8.762-2.89 11.187l-2.445 1.325-5.16 2.644c-4.27 2.188-9.528.492-11.715-3.781l-8.688-16.953a8.65 8.65 0 01-.535-6.64zM220.47 401.84a25.471 25.471 0 00-8.239-2.195l8.239-10.942zm35.629-60.465c3.609-4.324 4.605-9.375 5.41-13.445.203-.97 3.906-21.196 3.906-21.196s3.504 2.184 3.871 2.34a.797.797 0 01.461.656l4.082 41.497H248.68zm44.375-41.418l-6.336 51.234h-5.23l-4.223-42.93a15.81 15.81 0 00-8.84-12.687l-7.547-4.785 5.027-27.863s21.18 25.16 21.672 25.8c4.383 5.7 5.883 7.981 5.477 11.231zm-81.055 36.316c1.516-4.562 2.219-9.207 2.102-13.93l2.726-50.062 34.707-14.222-6.308 34.945c-.02.094-.04.191-.051.285l-5.219 28.895c-.68 2.992-1.273 7.53-3.14 9.996l-50.708 67.351h-4.18zm-178.89 133.84c0-5.847 4.757-10.605 10.609-10.605h61.246c5.851 0 10.613 4.758 10.613 10.605v26.88H40.527zm97.472 0v-44.965c0-5.851 4.762-10.609 10.613-10.609h61.246c5.852 0 10.61 4.758 10.61 10.61v71.843h-82.465v-26.879zm277.418-166.539v193.418h-82.465V452a7.504 7.504 0 00-7.504-7.504 7.504 7.504 0 00-7.508 7.504v44.992h-82.464V376.84c0-5.848 4.757-10.606 10.609-10.606h61.246c5.852 0 10.61 4.758 10.61 10.606v37.617a7.504 7.504 0 007.503 7.504 7.501 7.501 0 007.504-7.504V303.574c0-5.851 4.762-10.61 10.614-10.61h8.265c.024 0 .05.005.078.005.024 0 .051-.004.074-.004h52.825c5.851 0 10.613 4.762 10.613 10.61zm-71.855-25.617c-14.125 0-25.618 11.492-25.618 25.617v49.961a25.4 25.4 0 00-8.699-2.23l6.121-49.5c1.203-9.649-3.719-16.043-8.476-22.23-.504-.657-29.672-35.29-29.672-35.29l17.894-54.101 49.29-29.946v117.719zM359.41 72.723V26.406h79.387l-17.098 15.055a10.805 10.805 0 00-3.664 8.105c0 3.102 1.336 6.055 3.664 8.106l17.098 15.055H359.41zm0 0" />
      </svg>
    ),
    dislike: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="100%"
        height="100%"
        enableBackground="new 0 0 478.174 478.174"
        version="1.1"
        viewBox="0 0 478.174 478.174"
        xmlSpace="preserve"
      >
        <path d="M457.525 153.074c1.9-5.1 3.7-12 4.2-20 .7-14.1-2.8-33.9-22.7-51.9 1.3-9.2 1.3-23.8-6.8-38.3-10.7-19.2-31.6-32.2-62.2-38.7-20.5-4.4-47.4-5.3-80-2.8-65.7-1.3-129.7 6.8-133.3 7.3l-23.5 2.8c-6.8-4.8-15.1-7.6-24-7.6h-61c-23 0-41.6 18.7-41.6 41.6v162.5c0 23 18.7 41.6 41.6 41.6h61c7.2 0 13.9-1.8 19.8-5 4.2 9.2 10.4 19.7 19.6 29.4.5.5 1 1 1.6 1.4 31.4 24.1 68.4 110.9 81.5 146.3-1.3 11-2.6 34.8 8.4 47.7 4.9 5.7 11.7 8.8 19.3 8.8 7.7 0 34.3-1.8 50.9-24.7 15.7-21.8 16.6-54.4 2.6-97-11.8-35.8-12.9-51.7-12.5-58.1 5.4 1.2 10.7 2.3 15.8 3.2h.1c.9.2 22.9 5.1 49.2 6.3 37.4 1.8 64.5-4.7 80.3-19.2 21.8-19.9 19.2-45.3 12.7-61.5 5.6-7.3 12.4-19.2 13-34.4.4-13.8-4.2-27.1-14-39.7zm-348.3 69.6h-61c-8.1 0-14.6-6.6-14.6-14.6v-162.5c0-8.1 6.6-14.6 14.6-14.6h61c8.1 0 14.6 6.6 14.6 14.6v162.5c0 8.1-6.5 14.6-14.6 14.6zm321.7 9.7c0 .1 3.5 5.6 4.7 13.1 1.5 9.3-1.1 17-8.1 23.4-19.1 17.4-74.1 13.4-104.8 6.6-.4-.1-.8-.2-1.3-.3-5.5-1-11.4-2.2-17.4-3.5-6.4-2.3-15.2-2-21.8 3.9-13.3 11.8-11.8 38.6 4.9 89.5 11 33.4 11.4 58.6 1.2 72.7-8.6 11.9-22.8 13.4-28.2 13.5-2.4-4-3.1-17.7-1.3-29 .3-2.2.1-4.5-.6-6.7-1.9-5.1-45.8-125.3-90.7-160.9-11.7-12.7-16.8-27.6-18.6-34.3 1.2-3.9 1.9-8.1 1.9-12.4v-162.4c0-3-.3-6-.9-8.8l10.1-1.2h.1c.6-.1 65.7-8.5 130-7.1h1.4c30.3-2.4 54.8-1.7 72.9 2.2 22.4 4.8 37.2 13.2 44 25.1 7.1 12.3 3.2 25 2.9 26.2-2.1 5.6-.2 11.7 4.6 15.3 29.6 22.2 16 48.1 14.2 51.3-3.3 5.2-2.5 11.8 1.8 16.3 8.6 9 12.8 18 12.5 26.8-.4 13.1-10.5 22.9-11.2 23.5-5 4.3-5.9 11.6-2.3 17.2z" />
      </svg>
    ),
    like: () => (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        x="0"
        y="0"
        width="100%"
        height="100%"
        enableBackground="new 0 0 51.997 51.997"
        version="1.1"
        viewBox="0 0 51.997 51.997"
        xmlSpace="preserve"
      >
        <path d="M51.911 16.242c-.759-8.354-6.672-14.415-14.072-14.415-4.93 0-9.444 2.653-11.984 6.905-2.517-4.307-6.846-6.906-11.697-6.906C6.759 1.826.845 7.887.087 16.241c-.06.369-.306 2.311.442 5.478 1.078 4.568 3.568 8.723 7.199 12.013l18.115 16.439 18.426-16.438c3.631-3.291 6.121-7.445 7.199-12.014.748-3.166.502-5.108.443-5.477zm-2.39 5.019c-.984 4.172-3.265 7.973-6.59 10.985L25.855 47.481 9.072 32.25c-3.331-3.018-5.611-6.818-6.596-10.99-.708-2.997-.417-4.69-.416-4.701l.015-.101c.65-7.319 5.731-12.632 12.083-12.632 4.687 0 8.813 2.88 10.771 7.515l.921 2.183.921-2.183c1.927-4.564 6.271-7.514 11.069-7.514 6.351 0 11.433 5.313 12.096 12.727.002.016.293 1.71-.415 4.707z" />
      </svg>
    )
  };
  return (
    <div>
      <div
        css={`
          display: flex;
          align-items: center;
        `}
      >
        <div
          css={`
            width: 25px;
            height: 25px;
            min-height: 25px;
            min-width: 25px;
            fill: ${ACCENT};
            @media (max-width: 767px) {
              height: 22px;
              width: 22px;
              min-width: 22px;
              min-height: 22px;
            }
          `}
        >
          {icons[type] && icons[type]()}
        </div>
        <BodyText
          sizer={1.5}
          tag="span"
          altText={false}
          color={ACCENT}
          style={{
            fontWeight: "bolder",
            textAlign: "left",
            flex: 1,
            marginLeft: ".5rem"
          }}
        >
          {title}
        </BodyText>
      </div>
      <ul
        css={`
          padding: 0;
          padding-left: 1.7rem;
        `}
      >
        {items.map((item, i) => (
          <li
            key={i}
            css={`
              padding-left: 0.5rem;
              margin-top: 0.25rem;
              @media (max-width: 767px) {
                font-size: ${0.8}em;
              }
              @media (min-width: 768px) {
                font-size: ${0.85}em;
              }
              @media (min-width: 992px) {
                font-size: ${.9}em;
              }
              @media (min-width: 1200px) {
                font-size: ${1}em;
              }
            `}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AboutDetail;
