import * as S from './Header.style';
import { FaCircleUser } from 'react-icons/fa6';

export default function Header() {
  return (
    <S.Header>
      <S.Logo>
        <svg
          width='76'
          height='30'
          viewBox='0 0 76 30'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fill-rule='evenodd'
            clip-rule='evenodd'
            d='M52.977 24.5487C53.8065 23.6605 54.5776 22.8349 55.4476 22.4797C55.6423 19.4679 57.2205 16.6737 58.869 14.1958C59.0212 13.9561 59.2089 13.752 59.3935 13.5511C59.5486 13.3824 59.7015 13.216 59.8294 13.0329C61.0299 11.3086 62.7506 9.26339 64.7514 9.26339C65.5918 9.26339 66.6322 9.504 67.4726 10.2258C67.8327 10.5466 67.9528 10.707 68.0728 11.0278C68.6731 12.5918 68.9132 12.8725 69.8336 12.8725C70.0671 12.8725 70.343 12.8543 70.6801 12.8321C71.2096 12.7971 71.8902 12.7522 72.7948 12.7522C74.6756 12.7522 75.9161 13.474 75.9161 14.1557C75.9161 14.5568 75.596 14.7172 75.1958 14.8776C74.945 14.9673 74.8225 15.0571 74.7098 15.1397C74.5709 15.2415 74.4469 15.3324 74.1154 15.3989C73.6369 15.4756 73.195 15.5982 72.7459 15.7228C72.2561 15.8587 71.7578 15.9969 71.1942 16.0806C70.6339 16.1608 70.1137 16.1608 69.7135 16.1608C69.5535 16.1608 69.4334 16.2811 69.3534 16.6019C68.3129 20.8527 66.9524 24.2212 64.4713 26.9481L64.3887 27.0378C63.44 28.0693 62.2215 29.3942 60.5497 29.3942C60.1095 29.3942 59.6293 29.2739 59.2291 29.0734C57.7583 28.3554 56.5363 27.4592 56.099 26.5528C54.7869 28.1024 52.89 29.9957 50.9056 29.9957C50.6655 29.9957 50.4254 29.9556 50.1853 29.9155C48.7047 29.5947 47.5842 28.913 46.8639 28.1511C46.5602 27.8315 46.3487 27.5466 46.2031 27.2481C44.946 28.6159 43.3157 29.9957 41.6217 29.9957C41.3816 29.9957 41.1415 29.9556 40.9014 29.9155C39.4208 29.5947 38.3003 28.913 37.58 28.1511C36.8568 27.3902 36.6564 26.8257 36.6245 25.8068C35.4601 26.8117 33.8475 27.9431 31.2173 29.4343C30.6571 29.7551 30.1369 29.8754 29.4566 29.8754C28.2561 29.8754 26.9355 29.3541 25.0948 28.3917C24.0943 27.8704 23.374 26.7475 22.9338 25.4643C22.6137 24.542 22.4136 23.5795 22.4136 22.6572C22.4136 22.0958 22.4937 21.5745 22.6537 21.0131C23.1429 19.3057 23.8952 17.7053 24.8237 16.1877L24.7771 16.1744C24.4698 16.0864 24.1696 16.0004 23.9743 16.0004C23.7742 16.0004 22.2536 16.7623 21.1331 17.4842C17.8117 19.6095 14.8104 22.8176 13.77 27.5496C13.6099 28.2714 13.2898 28.7927 12.6895 29.314C12.4094 29.5546 12.0893 29.6348 11.8092 29.6348C11.1689 29.6348 10.7287 29.3541 10.0084 28.5521C9.56822 28.0709 9.24809 27.4293 9.24809 26.9481C9.24809 26.0442 9.81122 25.2391 10.3697 24.4407C10.7527 23.8931 11.1336 23.3486 11.329 22.7775C12.2093 20.2511 13.0497 17.7248 13.73 15.1583C13.9701 14.2761 14.1301 13.3537 14.1301 13.1532C14.1301 12.9775 14.0448 12.8493 13.9572 12.7178C13.8648 12.5791 13.77 12.4367 13.77 12.2309C13.77 11.6695 14.7704 11.1482 15.8509 11.1482C16.7312 11.1482 17.4515 11.5893 17.5716 11.7898C18.0918 12.672 18.2119 13.3938 18.2119 13.9552C18.2119 14.4685 18.1606 14.8022 18.1401 14.9356C18.135 14.969 18.1318 14.9899 18.1318 14.9979C18.1318 15.0781 18.1718 15.1182 18.2119 15.1182C18.2919 15.1182 18.4119 15.038 18.612 14.8776C19.8926 13.9151 22.3736 12.271 23.6942 12.271C24.8194 12.271 26.0064 12.5806 26.8479 13.3087C27.6534 12.2895 28.5203 11.305 29.4166 10.3461C30.2969 9.4238 31.8576 8.46137 33.9785 8.46137C34.7788 8.46137 35.7793 8.62177 36.6596 8.94258C37.9001 9.3837 38.2603 10.5867 38.2603 11.6294C38.2603 13.2334 37.0598 15.439 36.1394 16.5618C33.6584 19.6095 30.7771 22.6572 27.2557 24.7826C26.8555 25.0232 26.8155 25.0633 26.8155 25.2638C26.8155 25.5044 27.1756 26.2663 27.5358 26.4267C27.7759 26.547 28.016 26.6272 28.2961 26.6272C29.3321 26.6272 30.5768 25.8507 31.207 25.4575C31.3071 25.3951 31.3916 25.3424 31.4574 25.3039C32.7668 24.542 33.8645 23.5902 34.9091 22.6843C35.8439 21.8738 36.7363 21.1 37.7001 20.5318C37.7458 20.5043 37.7906 20.4789 37.8344 20.4554C37.8906 20.3117 37.9471 20.1681 38.0036 20.0247L38.0039 20.0238L38.0063 20.0179C38.0915 19.8014 38.1766 19.5851 38.2603 19.3689C40.021 14.9177 43.4625 8.62177 46.4637 3.52891C46.5684 3.35737 46.6707 3.07031 46.7912 2.73234L46.7912 2.73229L46.7912 2.73225C47.1778 1.6481 47.7511 0.0401013 49.1849 0.0401013C49.4559 0.0401013 49.6943 0.0292216 49.9227 0.018796C50.1328 0.0092059 50.3346 0 50.5455 0C51.3458 0 52.0661 0.32081 52.2262 0.681722C52.4263 1.12284 52.5863 1.48375 52.5863 1.92486C52.5863 2.44618 52.4263 2.92739 52.1461 3.36851C51.2425 4.80738 50.3111 6.21595 49.3855 7.61577C46.6222 11.7948 43.9105 15.8957 42.1419 20.4917C41.9986 20.8636 41.8499 21.2105 41.7044 21.5498L41.7044 21.55L41.7043 21.55C41.1598 22.8204 40.6613 23.9833 40.6613 25.9455C40.6613 26.6673 40.8614 26.8277 41.0215 26.8277C41.1015 26.8277 41.2215 26.7876 41.3416 26.7074C42.2334 26.1116 42.9846 25.3073 43.6931 24.5487C44.6044 23.573 45.4451 22.6728 46.424 22.3887C46.6716 21.5889 46.9802 20.8052 47.2874 20.0249L47.2878 20.024C47.3738 19.8054 47.4598 19.5872 47.5442 19.3689C49.3049 14.9177 52.7464 8.62177 55.7477 3.52891C55.8523 3.35737 55.9546 3.07031 56.0751 2.73234L56.0751 2.73229L56.0752 2.73225C56.4617 1.6481 57.035 0.0401013 58.4688 0.0401013C58.7398 0.0401013 58.9782 0.0292216 59.2066 0.018796C59.4167 0.0092059 59.6185 0 59.8294 0C60.6297 0 61.35 0.32081 61.5101 0.681722C61.7102 1.12284 61.8702 1.48375 61.8702 1.92486C61.8702 2.44618 61.7102 2.92739 61.43 3.36851C60.5264 4.80737 59.595 6.21595 58.6694 7.61576C55.9061 11.7948 53.1944 15.8957 51.4258 20.4917C51.2824 20.8637 51.1337 21.2107 50.9882 21.55C50.4437 22.8204 49.9452 23.9834 49.9452 25.9455C49.9452 26.6673 50.1453 26.8277 50.3054 26.8277C50.3854 26.8277 50.5054 26.7876 50.6255 26.7074C51.5174 26.1116 52.2685 25.3073 52.977 24.5487ZM5.78663 8.75527L5.78661 8.75527L5.78658 8.75528C5.52917 8.77804 5.02897 8.82228 4.286 8.82228C3.12551 8.82228 1.96502 8.66187 1.36477 7.94005C1.16468 7.69944 1.16468 7.41873 1.16468 7.05782C1.16468 6.336 1.28473 5.53397 1.48482 5.33347C1.6849 5.13296 1.925 4.89235 2.40521 4.89235C2.73566 4.89235 2.9176 4.93576 3.1384 4.98844C3.4791 5.06972 3.9123 5.17306 5.12635 5.17306C7.20723 5.17306 10.0884 4.73195 10.8888 4.57154C12.7296 4.21063 14.6904 3.92992 16.8513 3.92992C18.612 3.92992 21.1331 5.61418 21.1331 6.2959C21.1331 7.01772 20.853 7.45884 20.2927 7.85985C20.0526 8.02025 19.3723 8.30096 18.9722 8.30096C18.492 8.30096 18.2119 8.02025 17.9317 7.73954C17.8117 7.61924 17.0114 7.33853 16.8113 7.33853C15.0505 7.33853 13.1297 7.57914 11.529 7.94005C11.6091 8.06035 11.6491 8.18066 11.6491 8.26086C11.6491 8.37285 11.5992 8.45982 11.3389 8.91308L11.3389 8.91309L11.3389 8.91311L11.3388 8.91321C11.1331 9.27146 10.7961 9.85849 10.2485 10.8674C7.64741 15.6796 5.9667 20.2912 4.84623 26.1861C4.72618 26.8277 4.68617 27.6699 4.68617 28.4719C4.68617 29.3942 4.24598 29.9556 3.36561 29.9556C2.76536 29.9556 1.88499 29.6749 0.804532 29.0333C0.244296 28.7125 0.0842285 28.111 0.0842285 27.5496C0.0842285 26.9481 0.204279 26.3465 0.244296 26.1861C1.72492 20.2912 3.40563 14.9578 5.84665 9.70451C6.12677 9.10299 6.16679 8.98268 6.16679 8.90248C6.16679 8.78218 6.08675 8.74208 5.9667 8.74208C5.93582 8.74208 5.8758 8.74738 5.78665 8.75527L5.78663 8.75527ZM33.9385 12.0705C33.9385 12.4314 33.8184 12.672 33.3382 13.4339C33.1285 13.7667 33.0485 13.9541 32.975 14.1265C32.8801 14.3488 32.796 14.5461 32.4579 14.9979C31.2974 16.5618 29.8568 18.1258 27.976 19.8501C27.4557 20.3313 27.3757 20.3313 27.2957 20.3313C27.2557 20.3313 27.1756 20.2912 27.1756 20.211C27.1756 20.0907 27.2156 19.9303 27.6158 19.0882C28.8563 16.4816 30.377 14.7573 32.0577 13.073C32.9781 12.1507 33.5383 11.8299 33.7384 11.8299C33.8584 11.8299 33.9385 11.87 33.9385 12.0705ZM64.8315 13.2334C64.7915 13.1532 64.7514 13.1131 64.7114 13.1131C64.5914 13.1131 64.3513 13.1532 64.0311 13.5943C62.0703 16.1608 59.1091 20.8126 59.1091 23.9405C59.1091 24.141 59.1491 24.6623 59.3092 25.1034C59.4292 25.4242 59.7493 25.9455 59.9494 25.9455C60.1895 25.9455 60.4696 25.8252 60.9498 25.1034C61.0028 25.0238 61.0558 24.9442 61.1088 24.8646C63.2173 21.6975 65.3117 18.5517 65.3117 14.7573C65.3117 14.3162 65.3117 13.7547 65.1516 13.6344C64.9515 13.474 64.8715 13.3537 64.8315 13.2334Z'
            fill='#251C15'
          />
        </svg>
      </S.Logo>
      <S.UserSettings>
        <FaCircleUser />
      </S.UserSettings>
    </S.Header>
  );
}