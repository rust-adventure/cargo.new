import { h } from "preact";

export default (props) => (
  <div class="max-w-7xl mx-auto sm:px-6 lg:px-8 mt-4">
    <h1 class="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl sm:truncate">
      Deploy a Serverless Function to Netlify!
    </h1>
    <ul
      role="list"
      class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 mt-4"
    >
      <li class="col-span-1 bg-white rounded-lg shadow divide-y divide-gray-200">
        <div class="w-full flex items-center justify-between p-6 space-x-6">
          <div class="flex-1 truncate">
            <div class="flex items-center space-x-3">
              <h3 class="text-gray-900 text-sm font-medium truncate">
                Cross compiles to musl with Netlify's auto-build support.
              </h3>
              <span class="flex-shrink-0 inline-block px-2 py-0.5 text-orange-800 text-xs font-medium bg-orange-100 rounded-full">
                Playground
              </span>
            </div>
            <p class="mt-1 text-gray-500 text-sm truncate">
              prints "hello, world" to the console using the println! macro
            </p>
          </div>
          {/* <img
            class="w-10 h-10 bg-gray-300 rounded-full flex-shrink-0"
            src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60"
            alt=""
          /> */}
        </div>
        <div>
          <div class="-mt-px flex divide-x divide-gray-200">
            <div class="w-0 flex-1 flex">
              <a
                href="https://github.com/rust-adventure/netlify-serverless-example-small"
                class="relative -mr-px w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-bl-lg hover:text-gray-500"
              >
                {/* <!-- Heroicon name: solid/mail --> */}
                <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.316 3.051a1 1 0 01.633 1.265l-4 12a1 1 0 11-1.898-.632l4-12a1 1 0 011.265-.633zM5.707 6.293a1 1 0 010 1.414L3.414 10l2.293 2.293a1 1 0 11-1.414 1.414l-3-3a1 1 0 010-1.414l3-3a1 1 0 011.414 0zm8.586 0a1 1 0 011.414 0l3 3a1 1 0 010 1.414l-3 3a1 1 0 11-1.414-1.414L16.586 10l-2.293-2.293a1 1 0 010-1.414z"
                    clip-rule="evenodd"
                  />
                </svg>
                <span class="ml-3">View Code</span>
              </a>
            </div>
            <div
              class="-ml-px w-0 flex-1 flex"
              style={{ background: "#15847D" }}
            >
              <a
                href="https://app.netlify.com/start/deploy?repository=https://github.com/rust-adventure/netlify-serverless-example-small"
                class="relative w-0 flex-1 inline-flex items-center justify-center py-4 text-sm text-gray-700 font-medium border border-transparent rounded-br-lg hover:text-gray-500"
              >
                {/* <!-- Heroicon name: solid/phone --> */}
                {/* <svg
                  class="w-5 h-5 text-gray-400"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z"
                    clipRule="evenodd"
                  />
                </svg> */}
                <NetlifyDeployButton />
                <span class="ml-3 hidden">Run Program</span>
              </a>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
);

const NetlifyDeployButton = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="146"
    height="32"
    viewBox="0 0 146 32"
    fill="none"
    aria-hidden="true"
  >
    <path
      d="M31.0117 21V11.0469H33.9512C34.8307 11.0469 35.61 11.2428 36.2891 11.6348C36.9727 12.0267 37.5013 12.5827 37.875 13.3027C38.2487 14.0228 38.4355 14.8477 38.4355 15.7773V16.2764C38.4355 17.2197 38.2464 18.0492 37.8682 18.7646C37.4945 19.4801 36.959 20.0316 36.2617 20.4189C35.569 20.8063 34.7738 21 33.876 21H31.0117ZM32.7412 12.4414V19.6191H33.8691C34.776 19.6191 35.471 19.3366 35.9541 18.7715C36.4417 18.2018 36.6901 17.3861 36.6992 16.3242V15.7705C36.6992 14.6904 36.4645 13.8656 35.9951 13.2959C35.5257 12.7262 34.8444 12.4414 33.9512 12.4414H32.7412Z"
      fill="white"
    />
    <path
      d="M43.4549 21.1367C42.4021 21.1367 41.5477 20.8063 40.8914 20.1455C40.2397 19.4801 39.9139 18.596 39.9139 17.4932V17.2881C39.9139 16.5498 40.0551 15.8913 40.3377 15.3125C40.6248 14.7292 41.0258 14.2757 41.5408 13.9521C42.0558 13.6286 42.63 13.4668 43.2635 13.4668C44.2706 13.4668 45.0477 13.7881 45.5945 14.4307C46.146 15.0732 46.4217 15.9824 46.4217 17.1582V17.8281H41.5887C41.6388 18.4388 41.8416 18.9219 42.1971 19.2773C42.5571 19.6328 43.0083 19.8105 43.5506 19.8105C44.3117 19.8105 44.9314 19.5029 45.41 18.8877L46.3055 19.7422C46.0092 20.1842 45.6128 20.5283 45.116 20.7744C44.6238 21.016 44.0701 21.1367 43.4549 21.1367ZM43.2566 14.7998C42.8009 14.7998 42.4318 14.9593 42.1492 15.2783C41.8712 15.5973 41.6935 16.0417 41.616 16.6113H44.7811V16.4883C44.7446 15.9323 44.5965 15.513 44.3367 15.2305C44.077 14.9434 43.7169 14.7998 43.2566 14.7998Z"
      fill="white"
    />
    <path
      d="M54.3941 17.377C54.3941 18.5208 54.1344 19.4346 53.6148 20.1182C53.0953 20.7972 52.398 21.1367 51.523 21.1367C50.7118 21.1367 50.0624 20.8701 49.5748 20.3369V23.8438H47.9137V13.6035H49.4449L49.5133 14.3555C50.0009 13.763 50.664 13.4668 51.5025 13.4668C52.4049 13.4668 53.1113 13.804 53.6217 14.4785C54.1367 15.1484 54.3941 16.0804 54.3941 17.2744V17.377ZM52.7398 17.2334C52.7398 16.4951 52.5917 15.9095 52.2955 15.4766C52.0038 15.0436 51.5846 14.8271 51.0377 14.8271C50.3587 14.8271 49.871 15.1074 49.5748 15.668V18.9492C49.8756 19.5234 50.3678 19.8105 51.0514 19.8105C51.58 19.8105 51.9924 19.5986 52.2887 19.1748C52.5895 18.7464 52.7398 18.0993 52.7398 17.2334Z"
      fill="white"
    />
    <path d="M57.7729 21H56.1117V10.5H57.7729V21Z" fill="white" />
    <path
      d="M59.4768 17.2334C59.4768 16.5088 59.6203 15.8571 59.9074 15.2783C60.1945 14.695 60.5979 14.2484 61.1174 13.9385C61.6369 13.624 62.2339 13.4668 62.9084 13.4668C63.9064 13.4668 64.7154 13.7881 65.3352 14.4307C65.9595 15.0732 66.2967 15.9255 66.3469 16.9873L66.3537 17.377C66.3537 18.1061 66.2124 18.7578 65.9299 19.332C65.6519 19.9062 65.2508 20.3506 64.7268 20.665C64.2072 20.9795 63.6057 21.1367 62.9221 21.1367C61.8784 21.1367 61.0422 20.7904 60.4133 20.0977C59.7889 19.4004 59.4768 18.473 59.4768 17.3154V17.2334ZM61.1379 17.377C61.1379 18.138 61.2951 18.735 61.6096 19.168C61.924 19.5964 62.3615 19.8105 62.9221 19.8105C63.4826 19.8105 63.9178 19.5918 64.2277 19.1543C64.5422 18.7168 64.6994 18.0765 64.6994 17.2334C64.6994 16.486 64.5376 15.8936 64.2141 15.4561C63.8951 15.0186 63.4598 14.7998 62.9084 14.7998C62.3661 14.7998 61.9354 15.0163 61.6164 15.4492C61.2974 15.8776 61.1379 16.5202 61.1379 17.377Z"
      fill="white"
    />
    <path
      d="M70.4365 18.6211L71.9404 13.6035H73.7109L70.7715 22.1211C70.3203 23.3652 69.5547 23.9873 68.4746 23.9873C68.2331 23.9873 67.9665 23.9463 67.6748 23.8643V22.5791L67.9893 22.5996C68.4085 22.5996 68.723 22.5221 68.9326 22.3672C69.1468 22.2168 69.3154 21.9616 69.4385 21.6016L69.6777 20.9658L67.0801 13.6035H68.8711L70.4365 18.6211Z"
      fill="white"
    />
    <path
      d="M80.6393 11.8057V13.6035H81.9449V14.834H80.6393V18.9629C80.6393 19.2454 80.6939 19.4505 80.8033 19.5781C80.9173 19.7012 81.1178 19.7627 81.4049 19.7627C81.5963 19.7627 81.79 19.7399 81.9859 19.6943V20.9795C81.6077 21.0843 81.2431 21.1367 80.8922 21.1367C79.6161 21.1367 78.9781 20.4326 78.9781 19.0244V14.834H77.7613V13.6035H78.9781V11.8057H80.6393Z"
      fill="white"
    />
    <path
      d="M82.9037 17.2334C82.9037 16.5088 83.0473 15.8571 83.3344 15.2783C83.6215 14.695 84.0248 14.2484 84.5443 13.9385C85.0639 13.624 85.6609 13.4668 86.3354 13.4668C87.3334 13.4668 88.1423 13.7881 88.7621 14.4307C89.3865 15.0732 89.7237 15.9255 89.7738 16.9873L89.7807 17.377C89.7807 18.1061 89.6394 18.7578 89.3568 19.332C89.0788 19.9062 88.6778 20.3506 88.1537 20.665C87.6342 20.9795 87.0326 21.1367 86.349 21.1367C85.3054 21.1367 84.4691 20.7904 83.8402 20.0977C83.2159 19.4004 82.9037 18.473 82.9037 17.3154V17.2334ZM84.5648 17.377C84.5648 18.138 84.7221 18.735 85.0365 19.168C85.351 19.5964 85.7885 19.8105 86.349 19.8105C86.9096 19.8105 87.3448 19.5918 87.6547 19.1543C87.9691 18.7168 88.1264 18.0765 88.1264 17.2334C88.1264 16.486 87.9646 15.8936 87.641 15.4561C87.322 15.0186 86.8868 14.7998 86.3354 14.7998C85.793 14.7998 85.3624 15.0163 85.0434 15.4492C84.7243 15.8776 84.5648 16.5202 84.5648 17.377Z"
      fill="white"
    />
    <path
      d="M103.128 21H101.398L96.9619 13.9385V21H95.2324V11.0469H96.9619L101.412 18.1357V11.0469H103.128V21Z"
      fill="white"
    />
    <path
      d="M108.523 21.1367C107.439 21.1367 106.554 20.804 105.871 20.1387C105.192 19.4733 104.852 18.5869 104.852 17.4795V17.2881C104.852 16.5452 104.996 15.8822 105.283 15.2988C105.57 14.7109 105.976 14.2598 106.5 13.9453C107.028 13.6263 107.63 13.4668 108.304 13.4668C109.316 13.4668 110.111 13.7858 110.69 14.4238C111.274 15.0618 111.565 15.9665 111.565 17.1377V17.9443H106.855C106.919 18.4274 107.11 18.8148 107.429 19.1064C107.753 19.3981 108.161 19.5439 108.653 19.5439C109.414 19.5439 110.009 19.2682 110.437 18.7168L111.408 19.8037C111.112 20.223 110.711 20.5511 110.205 20.7881C109.699 21.0205 109.138 21.1367 108.523 21.1367ZM108.298 15.0664C107.906 15.0664 107.587 15.1986 107.341 15.4629C107.099 15.7272 106.944 16.1055 106.876 16.5977H109.624V16.4404C109.615 16.0029 109.496 15.6657 109.268 15.4287C109.04 15.1872 108.717 15.0664 108.298 15.0664Z"
      fill="white"
    />
    <path
      d="M115.258 11.7852V13.6035H116.523V15.0527H115.258V18.7441C115.258 19.0176 115.311 19.2135 115.416 19.332C115.52 19.4505 115.721 19.5098 116.017 19.5098C116.236 19.5098 116.43 19.4938 116.598 19.4619V20.959C116.211 21.0775 115.812 21.1367 115.402 21.1367C114.017 21.1367 113.31 20.4372 113.283 19.0381V15.0527H112.203V13.6035H113.283V11.7852H115.258Z"
      fill="white"
    />
    <path d="M119.909 21H117.926V10.5H119.909V21Z" fill="white" />
    <path
      d="M123.827 21H121.845V13.6035H123.827V21ZM121.729 11.6895C121.729 11.3932 121.827 11.1494 122.023 10.958C122.223 10.7666 122.494 10.6709 122.836 10.6709C123.173 10.6709 123.442 10.7666 123.643 10.958C123.843 11.1494 123.944 11.3932 123.944 11.6895C123.944 11.9902 123.841 12.2363 123.636 12.4277C123.435 12.6191 123.169 12.7148 122.836 12.7148C122.503 12.7148 122.235 12.6191 122.029 12.4277C121.829 12.2363 121.729 11.9902 121.729 11.6895Z"
      fill="white"
    />
    <path
      d="M126.201 21V15.0527H125.101V13.6035H126.201V12.9746C126.201 12.1452 126.438 11.5026 126.912 11.0469C127.391 10.5866 128.058 10.3564 128.915 10.3564C129.188 10.3564 129.523 10.402 129.92 10.4932L129.899 12.0244C129.735 11.9834 129.535 11.9629 129.298 11.9629C128.555 11.9629 128.184 12.3115 128.184 13.0088V13.6035H129.653V15.0527H128.184V21H126.201Z"
      fill="white"
    />
    <path
      d="M133.64 18.2041L135.008 13.6035H137.127L134.153 22.1484L133.989 22.5381C133.547 23.5042 132.818 23.9873 131.802 23.9873C131.514 23.9873 131.223 23.944 130.927 23.8574V22.3604L131.227 22.3672C131.601 22.3672 131.879 22.3102 132.061 22.1963C132.248 22.0824 132.394 21.8932 132.499 21.6289L132.731 21.0205L130.14 13.6035H132.266L133.64 18.2041Z"
      fill="white"
    />
    <path
      d="M12.7635 11.2365C13.0039 11.3381 14.6839 12.0485 14.8999 12.1422C14.9137 12.1482 14.9297 12.1548 14.9404 12.1442C15.0851 12.0284 15.2712 11.9602 15.4573 11.9602C15.5411 11.9602 15.6248 11.9721 15.7085 11.9959C15.7202 11.9993 15.7344 12.0025 15.7444 11.9956C15.7516 11.9906 15.756 11.9839 15.7607 11.9765L17.4148 9.41473L16.9107 8.91075C16.5886 8.5886 16.4275 8.42752 16.2412 8.3686C16.0843 8.31896 15.9157 8.31896 15.7588 8.3686C15.5725 8.42752 15.4114 8.5886 15.0893 8.91075L12.7635 11.2365Z"
      fill="white"
    />
    <path
      d="M12.5276 16.2008L10.6043 13.3957L12.4008 11.5992C12.5686 11.6726 13.1766 11.9296 13.7233 12.1606L13.7335 12.1649C14.1499 12.3409 14.5289 12.5011 14.6478 12.5524C14.6598 12.5576 14.6707 12.5623 14.676 12.5742C14.6792 12.5814 14.6776 12.5908 14.676 12.5985C14.6639 12.656 14.6578 12.7135 14.6578 12.771C14.6578 12.9822 14.7406 13.1798 14.8853 13.3296C14.8972 13.3414 14.8852 13.3586 14.8747 13.3737L14.8691 13.382L13.0454 16.2073C13.0404 16.2149 13.0358 16.222 13.0282 16.227C13.0185 16.2333 13.005 16.2305 12.9938 16.2276C12.9227 16.2096 12.8465 16.198 12.7763 16.198C12.711 16.198 12.6396 16.2102 12.5678 16.223C12.56 16.2244 12.5521 16.2259 12.5457 16.2212C12.5387 16.2161 12.5326 16.208 12.5276 16.2008Z"
      fill="white"
    />
    <path
      d="M19.634 13.8066C19.5807 13.7473 19.5145 13.6944 19.4355 13.654C19.4336 13.653 19.4318 13.6524 19.43 13.6517C19.4268 13.6504 19.4236 13.6492 19.4208 13.6465C19.4114 13.6377 19.4078 13.6219 19.4098 13.6092L19.7187 11.7187L21.169 13.169L19.661 13.8106C19.6568 13.8124 19.6523 13.8134 19.6478 13.8134C19.6448 13.8134 19.6431 13.8134 19.6416 13.8128C19.6396 13.8121 19.6377 13.8102 19.634 13.8066Z"
      fill="white"
    />
    <path
      d="M19.9467 14.2124L21.5388 13.5388L23.0893 15.0892C23.4113 15.4113 23.5725 15.5725 23.6314 15.7588C23.6401 15.7863 23.6473 15.8141 23.6529 15.8422L19.9476 14.2733L19.9418 14.2709C19.9268 14.2649 19.9096 14.2579 19.9096 14.2426C19.9096 14.2276 19.9272 14.2204 19.9418 14.2143L19.9467 14.2124Z"
      fill="white"
    />
    <path
      d="M23.5896 16.34L19.7292 14.7073C19.7164 14.7019 19.7008 14.6957 19.6882 14.7016C19.6839 14.7037 19.6813 14.7071 19.6786 14.7108L19.6773 14.7125C19.5671 14.8586 19.4037 14.9516 19.2136 14.9784C19.1951 14.9784 19.1918 15.0018 19.189 15.0218L19.1878 15.0304L18.7623 17.6408L18.7613 17.6463C18.7589 17.6596 18.7563 17.6741 18.7656 17.6833C18.9172 17.7991 19.0068 17.9694 19.0275 18.1602C19.0275 18.1785 19.0491 18.1821 19.0689 18.1853L19.0705 18.1856L19.0765 18.1866L19.0808 18.1874L21.3417 18.6583L23.0893 16.9108C23.3535 16.6465 23.5096 16.4904 23.5896 16.34Z"
      fill="white"
    />
    <path
      d="M18.9152 18.6449L20.9395 19.0605L18.0651 21.9349L18.5575 18.9107L18.5581 18.9065C18.5586 18.9028 18.5591 18.8988 18.5605 18.8953C18.5643 18.8856 18.5748 18.8814 18.5848 18.8775L18.5896 18.8756C18.6988 18.8301 18.7915 18.758 18.8676 18.6688C18.8773 18.6575 18.8889 18.647 18.9036 18.6444C18.9069 18.6439 18.9119 18.6442 18.9152 18.6449Z"
      fill="white"
    />
    <path
      d="M17.4568 22.5432C17.5719 21.8372 18.001 19.2223 18.0509 18.9181C18.0519 18.9124 18.0543 18.9062 18.0567 18.9002C18.0619 18.8869 18.0669 18.8743 18.0557 18.8688C17.8537 18.7889 17.7043 18.6115 17.6461 18.4065C17.6453 18.4038 17.6448 18.4011 17.6444 18.3986C17.6432 18.3923 17.6421 18.3867 17.637 18.3816C17.6298 18.3745 17.6164 18.3704 17.6065 18.3683L13.6381 17.5499C13.6287 17.548 13.6173 17.5461 13.6089 17.5506C13.5991 17.5558 13.5939 17.5648 13.5883 17.5742L13.5875 17.5756L13.5794 17.5895C13.5692 17.607 13.5599 17.623 13.5489 17.6387L13.545 17.6438C13.5409 17.649 13.5368 17.6543 13.5362 17.6608C13.5354 17.6697 13.5411 17.6774 13.5468 17.6848L13.5509 17.6904L17.1327 22.8673L17.4568 22.5432Z"
      fill="white"
    />
    <path
      d="M13.1806 17.9965L16.78 23.2196C16.5413 23.456 16.4005 23.581 16.2412 23.6314C16.0843 23.681 15.9158 23.681 15.7588 23.6314C15.5725 23.5725 15.4114 23.4114 15.0893 23.0892L11.4922 19.4922L12.4316 18.0348C12.4362 18.0276 12.4404 18.021 12.4474 18.0161C12.4576 18.0088 12.4721 18.0123 12.4841 18.016C12.5807 18.0459 12.672 18.058 12.7694 18.058C12.895 18.058 13.0143 18.0329 13.1393 17.9828C13.1499 17.9785 13.1609 17.976 13.1694 17.9835C13.1734 17.9871 13.1775 17.9921 13.1806 17.9965Z"
      fill="white"
    />
    <path
      d="M11.1453 19.1453L12.0458 17.7483C12.0502 17.7414 12.0536 17.7348 12.049 17.728L12.046 17.7243L12.0439 17.7217C12.0283 17.7012 12.0128 17.6806 11.9972 17.657C11.9954 17.6542 11.9936 17.6512 11.9918 17.648C11.9844 17.6355 11.9765 17.6219 11.963 17.6219C11.9585 17.6219 11.954 17.6228 11.9498 17.6246L10.3198 18.3198L11.1453 19.1453Z"
      fill="white"
    />
    <path
      d="M11.6896 17.2199L9.95487 17.9548L8.91076 16.9108C8.73329 16.7333 8.60451 16.6045 8.51499 16.4936L11.6891 17.1518L11.701 17.154C11.7208 17.1572 11.7424 17.1607 11.7424 17.179C11.7424 17.1989 11.7189 17.2082 11.6989 17.2162L11.6896 17.2199Z"
      fill="white"
    />
    <path
      d="M8.33255 15.9568L11.912 16.707C11.918 16.7082 11.9244 16.7096 11.9297 16.7063C11.9384 16.7009 11.9446 16.6906 11.9495 16.6816C11.9907 16.6052 12.0492 16.5348 12.1077 16.4705C12.1198 16.4586 12.1079 16.4425 12.0971 16.4278L12.0917 16.4205C11.922 16.1773 10.4674 14.076 10.2472 13.7528L8.91076 15.0892C8.58862 15.4114 8.42753 15.5725 8.36862 15.7588C8.34819 15.8234 8.33617 15.8899 8.33255 15.9568Z"
      fill="white"
    />
    <path
      d="M16.1396 12.2872L17.7658 9.76582L19.2934 11.2934L18.9256 13.5722L18.9249 13.5784C18.9243 13.5836 18.9237 13.5894 18.9218 13.5935C18.9182 13.6015 18.9103 13.6033 18.9019 13.6052C18.8991 13.6059 18.8962 13.6066 18.8933 13.6075C18.816 13.6328 18.7442 13.6684 18.6826 13.7144C18.6797 13.7165 18.6773 13.719 18.675 13.7215C18.6703 13.7264 18.666 13.731 18.6588 13.7314C18.6541 13.7317 18.6461 13.7306 18.6418 13.7288L16.3145 12.7399L16.3098 12.738C16.2951 12.7319 16.2775 12.7246 16.2775 12.7096C16.2649 12.5852 16.2236 12.4608 16.1588 12.352L16.1538 12.3437C16.1424 12.3254 16.1302 12.3058 16.1396 12.2872Z"
      fill="white"
    />
    <path
      d="M16.1933 13.2084C16.1806 13.203 16.1648 13.1986 16.1539 13.2071C16.1482 13.2116 16.1445 13.2169 16.1405 13.2229C15.9882 13.449 15.7363 13.5818 15.4642 13.5818C15.4281 13.5818 15.392 13.5766 15.3513 13.5707L15.3333 13.5681C15.3141 13.5681 15.3022 13.5868 15.2916 13.6036L15.2885 13.6084L13.4955 16.3841L13.4899 16.3923C13.4794 16.4074 13.4674 16.4247 13.4793 16.4364C13.4862 16.4432 13.4931 16.4432 13.4999 16.4432C13.5066 16.4432 18.0132 14.5215 18.3587 14.3742L18.3634 14.3722C18.3777 14.3663 18.3934 14.3598 18.3934 14.3448V14.2835C18.3934 14.2468 18.3989 14.2101 18.4051 14.1783C18.4064 14.1712 18.4077 14.1625 18.405 14.1558C18.4 14.1432 18.3872 14.1378 18.3747 14.1325L16.1933 13.2084Z"
      fill="white"
    />
    <path
      d="M13.729 16.9908C13.7133 16.9375 13.6971 16.8825 13.6949 16.8822L18.607 14.7876C18.607 14.7876 18.614 14.7877 18.6208 14.7945C18.6478 14.821 18.6704 14.8394 18.6922 14.8558C18.6955 14.8583 18.6993 14.8605 18.7031 14.8627C18.7132 14.8686 18.7234 14.8745 18.7241 14.8852C18.7243 14.8889 18.7239 14.8917 18.7233 14.8953L18.3023 17.48L18.3008 17.4902C18.2981 17.5106 18.2951 17.5333 18.2762 17.5333C18.0479 17.5466 17.8458 17.6763 17.7272 17.872L17.7253 17.8751C17.7198 17.8844 17.7145 17.8932 17.7049 17.898C17.6968 17.9021 17.6859 17.9003 17.6771 17.8985L13.7601 17.0904C13.7583 17.09 13.7438 17.0411 13.729 16.9908Z"
      fill="white"
    />
  </svg>
);
