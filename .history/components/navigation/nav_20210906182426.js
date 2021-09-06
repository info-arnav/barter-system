import { useState } from "react";
import Register1 from "../register";
import Login from "../login";
export default () => {
  const [show, setShow] = useState(false);
  const [show2, setShow2] = useState(false);
  const [login, setLogin] = useState(false);
  const [register, setRegister] = useState(false);
  return (
    <div class="b_a by_b by_c b_f">
      <nav>
        <div class="b_a by_e b_t">
          <div class="b_a a3_a">
            <div class="r_a r_ao r_v r_af a3_b">
              <button
                class="g_a a3_c g_c"
                type="button"
                onClick={() => setShow(true)}
                aria-expanded="false"
                aria-label="Menu"
                data-tl-id="header-Header-sparkButton"
                id="header-Header-sparkButton"
              >
                <span class="g_b">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                    width="375pt"
                    height="374.999991pt"
                    viewBox="0 0 375 374.999991"
                    version="1.2"
                  >
                    <defs>
                      <clipPath id="clip1">
                        <path d="M 1 56.25 L 375 56.25 L 375 318.75 L 1 318.75 Z M 1 56.25 " />
                      </clipPath>
                    </defs>
                    <g id="surface1">
                      <g clip-path="url(#clip1)" clip-rule="nonzero">
                        <path
                          style={{
                            stroke: "none",
                            fillRule: "nonzero",
                            fill: "rgb(100%,100%,100%)",
                            fillOpacity: 1,
                          }}
                          d="M 20.523438 56.902344 C 19.90625 56.894531 19.289062 56.917969 18.675781 56.96875 C 18.0625 57.019531 17.453125 57.101562 16.84375 57.214844 C 16.238281 57.328125 15.640625 57.472656 15.046875 57.644531 C 14.457031 57.816406 13.875 58.015625 13.300781 58.246094 C 12.730469 58.476562 12.171875 58.734375 11.625 59.019531 C 11.078125 59.304688 10.546875 59.617188 10.03125 59.953125 C 9.515625 60.292969 9.015625 60.65625 8.535156 61.042969 C 8.058594 61.429688 7.597656 61.839844 7.160156 62.273438 C 6.71875 62.707031 6.304688 63.160156 5.910156 63.632812 C 5.515625 64.109375 5.144531 64.601562 4.800781 65.113281 C 4.453125 65.621094 4.136719 66.148438 3.84375 66.691406 C 3.550781 67.234375 3.285156 67.789062 3.046875 68.359375 C 2.808594 68.925781 2.597656 69.507812 2.417969 70.097656 C 2.238281 70.6875 2.085938 71.28125 1.964844 71.886719 C 1.84375 72.492188 1.753906 73.101562 1.691406 73.714844 C 1.628906 74.328125 1.601562 74.941406 1.601562 75.558594 C 1.601562 76.175781 1.628906 76.792969 1.691406 77.40625 C 1.753906 78.019531 1.84375 78.628906 1.964844 79.230469 C 2.085938 79.835938 2.238281 80.433594 2.417969 81.023438 C 2.597656 81.613281 2.808594 82.191406 3.046875 82.761719 C 3.285156 83.328125 3.550781 83.886719 3.84375 84.429688 C 4.136719 84.96875 4.453125 85.496094 4.800781 86.007812 C 5.144531 86.519531 5.515625 87.011719 5.910156 87.484375 C 6.304688 87.960938 6.71875 88.414062 7.160156 88.847656 C 7.597656 89.277344 8.058594 89.6875 8.535156 90.078125 C 9.015625 90.464844 9.515625 90.828125 10.03125 91.164062 C 10.546875 91.503906 11.078125 91.8125 11.625 92.101562 C 12.171875 92.386719 12.730469 92.644531 13.300781 92.871094 C 13.875 93.101562 14.457031 93.304688 15.046875 93.476562 C 15.640625 93.648438 16.238281 93.789062 16.84375 93.902344 C 17.453125 94.015625 18.0625 94.097656 18.675781 94.152344 C 19.289062 94.203125 19.90625 94.226562 20.523438 94.214844 L 356.34375 94.214844 C 356.960938 94.226562 357.574219 94.203125 358.191406 94.152344 C 358.804688 94.097656 359.414062 94.015625 360.019531 93.902344 C 360.625 93.789062 361.226562 93.648438 361.816406 93.476562 C 362.410156 93.304688 362.992188 93.101562 363.5625 92.871094 C 364.136719 92.644531 364.695312 92.386719 365.242188 92.101562 C 365.789062 91.8125 366.320312 91.503906 366.835938 91.164062 C 367.351562 90.828125 367.847656 90.464844 368.328125 90.078125 C 368.808594 89.6875 369.269531 89.277344 369.707031 88.847656 C 370.144531 88.414062 370.5625 87.960938 370.957031 87.484375 C 371.351562 87.011719 371.71875 86.519531 372.066406 86.007812 C 372.410156 85.496094 372.730469 84.96875 373.023438 84.429688 C 373.316406 83.886719 373.582031 83.328125 373.820312 82.761719 C 374.058594 82.191406 374.265625 81.613281 374.449219 81.023438 C 374.628906 80.433594 374.777344 79.835938 374.902344 79.230469 C 375.023438 78.628906 375.113281 78.019531 375.175781 77.40625 C 375.234375 76.792969 375.265625 76.175781 375.265625 75.558594 C 375.265625 74.941406 375.234375 74.328125 375.175781 73.714844 C 375.113281 73.101562 375.023438 72.492188 374.902344 71.886719 C 374.777344 71.28125 374.628906 70.6875 374.449219 70.097656 C 374.265625 69.507812 374.058594 68.925781 373.820312 68.359375 C 373.582031 67.789062 373.316406 67.234375 373.023438 66.691406 C 372.730469 66.148438 372.410156 65.621094 372.066406 65.113281 C 371.71875 64.601562 371.351562 64.109375 370.957031 63.632812 C 370.5625 63.160156 370.144531 62.707031 369.707031 62.273438 C 369.269531 61.839844 368.808594 61.429688 368.328125 61.042969 C 367.847656 60.65625 367.351562 60.292969 366.835938 59.953125 C 366.320312 59.617188 365.789062 59.304688 365.242188 59.019531 C 364.695312 58.734375 364.136719 58.476562 363.5625 58.246094 C 362.992188 58.015625 362.410156 57.816406 361.816406 57.644531 C 361.226562 57.472656 360.625 57.328125 360.019531 57.214844 C 359.414062 57.101562 358.804688 57.019531 358.191406 56.96875 C 357.574219 56.917969 356.960938 56.894531 356.34375 56.902344 Z M 20.523438 168.84375 C 19.90625 168.835938 19.289062 168.855469 18.675781 168.910156 C 18.0625 168.960938 17.453125 169.042969 16.84375 169.15625 C 16.238281 169.269531 15.640625 169.410156 15.046875 169.582031 C 14.457031 169.757812 13.875 169.957031 13.300781 170.1875 C 12.730469 170.417969 12.171875 170.675781 11.625 170.960938 C 11.078125 171.246094 10.546875 171.558594 10.03125 171.894531 C 9.515625 172.234375 9.015625 172.597656 8.535156 172.984375 C 8.058594 173.371094 7.597656 173.78125 7.160156 174.214844 C 6.71875 174.648438 6.304688 175.101562 5.910156 175.574219 C 5.515625 176.046875 5.144531 176.539062 4.800781 177.050781 C 4.453125 177.5625 4.136719 178.089844 3.84375 178.632812 C 3.550781 179.175781 3.285156 179.730469 3.046875 180.300781 C 2.808594 180.867188 2.597656 181.445312 2.417969 182.035156 C 2.238281 182.625 2.085938 183.222656 1.964844 183.828125 C 1.84375 184.433594 1.753906 185.042969 1.691406 185.65625 C 1.632812 186.269531 1.601562 186.882812 1.601562 187.5 C 1.601562 188.117188 1.632812 188.730469 1.691406 189.34375 C 1.753906 189.957031 1.84375 190.566406 1.964844 191.171875 C 2.085938 191.777344 2.238281 192.375 2.417969 192.964844 C 2.597656 193.554688 2.808594 194.132812 3.046875 194.699219 C 3.285156 195.269531 3.550781 195.824219 3.84375 196.367188 C 4.136719 196.910156 4.453125 197.4375 4.800781 197.949219 C 5.144531 198.457031 5.515625 198.953125 5.910156 199.425781 C 6.304688 199.898438 6.71875 200.351562 7.160156 200.785156 C 7.597656 201.21875 8.058594 201.628906 8.535156 202.015625 C 9.015625 202.402344 9.515625 202.765625 10.03125 203.105469 C 10.546875 203.441406 11.078125 203.753906 11.625 204.039062 C 12.171875 204.324219 12.730469 204.582031 13.300781 204.8125 C 13.875 205.042969 14.457031 205.242188 15.046875 205.417969 C 15.640625 205.589844 16.238281 205.730469 16.84375 205.84375 C 17.453125 205.957031 18.0625 206.039062 18.675781 206.089844 C 19.289062 206.144531 19.90625 206.164062 20.523438 206.15625 L 356.34375 206.15625 C 356.960938 206.164062 357.574219 206.144531 358.191406 206.089844 C 358.804688 206.039062 359.414062 205.957031 360.019531 205.84375 C 360.625 205.730469 361.226562 205.589844 361.816406 205.417969 C 362.410156 205.242188 362.992188 205.042969 363.5625 204.8125 C 364.136719 204.582031 364.695312 204.324219 365.242188 204.039062 C 365.789062 203.753906 366.320312 203.441406 366.835938 203.105469 C 367.351562 202.765625 367.847656 202.402344 368.328125 202.015625 C 368.808594 201.628906 369.269531 201.21875 369.707031 200.785156 C 370.144531 200.351562 370.5625 199.898438 370.957031 199.425781 C 371.351562 198.953125 371.71875 198.457031 372.066406 197.949219 C 372.410156 197.4375 372.730469 196.910156 373.023438 196.367188 C 373.316406 195.824219 373.582031 195.269531 373.820312 194.699219 C 374.058594 194.132812 374.265625 193.554688 374.449219 192.964844 C 374.628906 192.375 374.777344 191.777344 374.898438 191.171875 C 375.023438 190.566406 375.113281 189.957031 375.171875 189.34375 C 375.234375 188.730469 375.265625 188.117188 375.265625 187.5 C 375.265625 186.882812 375.234375 186.269531 375.171875 185.65625 C 375.113281 185.042969 375.023438 184.433594 374.898438 183.828125 C 374.777344 183.222656 374.628906 182.625 374.449219 182.035156 C 374.265625 181.445312 374.058594 180.867188 373.820312 180.300781 C 373.582031 179.730469 373.316406 179.175781 373.023438 178.632812 C 372.730469 178.089844 372.410156 177.5625 372.066406 177.050781 C 371.71875 176.542969 371.351562 176.046875 370.957031 175.574219 C 370.5625 175.101562 370.144531 174.648438 369.707031 174.214844 C 369.269531 173.78125 368.808594 173.371094 368.328125 172.984375 C 367.847656 172.597656 367.351562 172.234375 366.835938 171.894531 C 366.320312 171.558594 365.789062 171.246094 365.242188 170.960938 C 364.695312 170.675781 364.136719 170.417969 363.5625 170.1875 C 362.992188 169.957031 362.410156 169.757812 361.816406 169.582031 C 361.226562 169.410156 360.625 169.269531 360.019531 169.15625 C 359.414062 169.042969 358.804688 168.960938 358.191406 168.910156 C 357.574219 168.855469 356.960938 168.835938 356.34375 168.84375 Z M 20.523438 280.785156 C 19.90625 280.773438 19.289062 280.796875 18.675781 280.847656 C 18.0625 280.902344 17.453125 280.984375 16.84375 281.097656 C 16.238281 281.210938 15.640625 281.351562 15.046875 281.523438 C 14.457031 281.695312 13.875 281.898438 13.300781 282.128906 C 12.730469 282.355469 12.167969 282.613281 11.625 282.898438 C 11.078125 283.183594 10.546875 283.496094 10.03125 283.835938 C 9.515625 284.171875 9.015625 284.535156 8.535156 284.921875 C 8.058594 285.3125 7.597656 285.722656 7.160156 286.152344 C 6.71875 286.585938 6.304688 287.039062 5.910156 287.515625 C 5.515625 287.988281 5.144531 288.480469 4.800781 288.992188 C 4.453125 289.503906 4.136719 290.03125 3.84375 290.570312 C 3.550781 291.113281 3.285156 291.671875 3.046875 292.238281 C 2.808594 292.808594 2.597656 293.386719 2.417969 293.976562 C 2.238281 294.566406 2.085938 295.164062 1.964844 295.769531 C 1.84375 296.371094 1.753906 296.980469 1.691406 297.59375 C 1.628906 298.207031 1.601562 298.824219 1.601562 299.441406 C 1.601562 300.058594 1.628906 300.671875 1.691406 301.285156 C 1.753906 301.898438 1.84375 302.507812 1.964844 303.113281 C 2.085938 303.71875 2.238281 304.3125 2.417969 304.902344 C 2.597656 305.492188 2.808594 306.074219 3.046875 306.640625 C 3.285156 307.210938 3.550781 307.765625 3.84375 308.308594 C 4.136719 308.851562 4.453125 309.378906 4.800781 309.886719 C 5.144531 310.398438 5.515625 310.890625 5.910156 311.367188 C 6.304688 311.839844 6.71875 312.292969 7.160156 312.726562 C 7.597656 313.160156 8.058594 313.570312 8.535156 313.957031 C 9.015625 314.34375 9.515625 314.707031 10.03125 315.046875 C 10.546875 315.382812 11.078125 315.695312 11.625 315.980469 C 12.167969 316.265625 12.730469 316.523438 13.300781 316.753906 C 13.875 316.984375 14.457031 317.183594 15.046875 317.355469 C 15.640625 317.527344 16.238281 317.671875 16.84375 317.785156 C 17.453125 317.898438 18.0625 317.980469 18.675781 318.03125 C 19.289062 318.082031 19.90625 318.105469 20.523438 318.097656 L 356.34375 318.097656 C 356.960938 318.105469 357.574219 318.082031 358.191406 318.03125 C 358.804688 317.980469 359.414062 317.898438 360.019531 317.785156 C 360.625 317.671875 361.226562 317.527344 361.816406 317.355469 C 362.410156 317.183594 362.992188 316.984375 363.5625 316.753906 C 364.136719 316.523438 364.695312 316.265625 365.242188 315.980469 C 365.789062 315.695312 366.320312 315.382812 366.835938 315.046875 C 367.351562 314.707031 367.847656 314.34375 368.328125 313.957031 C 368.808594 313.570312 369.269531 313.160156 369.707031 312.726562 C 370.144531 312.292969 370.5625 311.839844 370.957031 311.367188 C 371.351562 310.890625 371.722656 310.398438 372.066406 309.886719 C 372.410156 309.378906 372.730469 308.851562 373.023438 308.308594 C 373.316406 307.765625 373.582031 307.210938 373.820312 306.640625 C 374.058594 306.074219 374.265625 305.492188 374.449219 304.902344 C 374.628906 304.3125 374.78125 303.71875 374.902344 303.113281 C 375.023438 302.507812 375.113281 301.898438 375.175781 301.285156 C 375.234375 300.671875 375.265625 300.058594 375.265625 299.441406 C 375.265625 298.824219 375.234375 298.207031 375.175781 297.59375 C 375.113281 296.980469 375.023438 296.371094 374.902344 295.769531 C 374.78125 295.164062 374.628906 294.566406 374.449219 293.976562 C 374.265625 293.386719 374.058594 292.808594 373.820312 292.238281 C 373.582031 291.671875 373.316406 291.113281 373.023438 290.570312 C 372.730469 290.03125 372.410156 289.503906 372.066406 288.992188 C 371.722656 288.480469 371.351562 287.988281 370.957031 287.515625 C 370.5625 287.039062 370.144531 286.585938 369.707031 286.152344 C 369.269531 285.722656 368.808594 285.3125 368.328125 284.921875 C 367.847656 284.535156 367.351562 284.171875 366.835938 283.835938 C 366.320312 283.496094 365.789062 283.183594 365.242188 282.898438 C 364.695312 282.613281 364.136719 282.355469 363.5625 282.128906 C 362.992188 281.898438 362.410156 281.695312 361.816406 281.523438 C 361.226562 281.351562 360.625 281.210938 360.019531 281.097656 C 359.414062 280.984375 358.804688 280.902344 358.191406 280.847656 C 357.574219 280.796875 356.960938 280.773438 356.34375 280.785156 Z M 20.523438 280.785156 "
                        />
                      </g>
                    </g>
                  </svg>
                </span>
              </button>
            </div>
            <a
              class="r_a r_ao r_v r_af ac_c"
              href="/"
              title="Swap Homepage"
              id="hf-home-link"
              aria-label="Swap Homepage"
              role="link"
              data-uid="header-walmart-logo-link"
              data-index="LHN open/close spark click"
            >
              <img src="/transparent.png" width={47}></img>
            </a>
            <div class="b_a a3_e b_g b_p" hidden="true">
              <div class="t_a t_h t_e">
                <div class="t_f">
                  <div class="t_c">
                    <div></div>
                  </div>
                  <div class="t_b">
                    <div></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <form
            action="/search/"
            id="global-search-form"
            method="get"
            role="search"
            class="b_a bo_a mweb-Typeahead-form"
          >
            <button
              class="g_a bo_f"
              type="button"
              aria-controls="searchDropdown-list"
              aria-haspopup="true"
              aria-label="Search Category All Departments"
              id="global-search-dropdown-toggle"
              aria-expanded="false"
            >
              <span class="g_b">
                <span
                  class="r_a r_w bo_g"
                  id="global-search-category-label"
                ></span>

                <img
                  onClick={() => {
                    setShow2(!show2);
                  }}
                  alt="null"
                  aria-hidden="true"
                  width="18"
                  height="18"
                  src="/down_arrow-removebg-preview.png"
                />
                <div class="r_a r_ag"></div>
              </span>
            </button>
            {show2 && (
              <div
                class="r_a r_aq r_x r_ah r_az r_o r_f bm_a"
                id="searchDropdown-list"
              >
                <div id="search-category-bg" class="bm_b"></div>
                <div class="r_a r_o bm_e">Search in ...</div>
                <div class="b_a bm_f b_t">
                  <div class="r_a r_af b_a bm_f b_i b_f b_r b_c" role="menu">
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="0"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">All Departments</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="91083"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Auto &amp; Tire</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5427"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Baby</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1085666"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Beauty</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="3920"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Books</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1105910"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Cell Phones</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5438"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Clothing</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="3944"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Electronics</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="976759"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Food</span>
                      </span>
                    </button>
                  </div>
                  <div class="r_a r_af b_a bm_f b_i b_f b_r b_c" role="menu">
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1094765"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Gifts &amp; Registry</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="976760"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Health</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="4044"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Home</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1072864"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Home Improvement</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1115193"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Household Essentials</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="3891"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Jewelry</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="4096"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Movies</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="4104"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Music</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="1229749"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Office</span>
                      </span>
                    </button>
                  </div>
                  <div class="r_a r_af b_a bm_f b_i b_f b_r b_c" role="menu">
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="2637"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Party &amp; Occasions</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5428"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Patio &amp; Garden</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5440"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Pets</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5431"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Pharmacy</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="5426"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Photo Center</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="4125"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Sports &amp; Outdoors</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="4171"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Toys</span>
                      </span>
                    </button>
                    <button
                      class="g_a r_a r_aw r_l r_b bm_c"
                      type="button"
                      data-catid="2636"
                      role="menuitem"
                    >
                      <span class="g_b">
                        <span class="b_a bm_c b_r">Video Games</span>
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            )}
            <input
              type="hidden"
              name="cat_id"
              id="global-search-catid"
              value="0"
            />
            <div id="search-bar-tooltip-root"></div>
            <input
              type="text"
              class="k_a bo_b header-GlobalSearch-input mweb-Typeahead-input k_b"
              aria-autocomplete="both"
              aria-label="Search Swap.com"
              aria-controls="global-search-dropdown"
              autocapitalize="none"
              autocomplete="off"
              autocorrect="off"
              id="global-search-input"
              name="query"
              placeholder="Search Swap"
            />
            <button
              class="g_a bo_c mweb-Typeahead-clear g_c"
              type="reset"
              aria-label="Clear Search Field"
              id="global-search-clear"
              hidden=""
            >
              <span class="g_b">
                <img alt="null" aria-hidden="true" width="14" height="14" />
              </span>
            </button>
            <div
              class="aa_a bn_a mweb-Typeahead mweb-Typeahead-list"
              data-tl-id="vh-typeahead-container"
              hidden=""
            >
              <div
                class="r_a b_a bn_b mweb-Typeahead-recent b_f"
                role="listbox"
                hidden="true"
              ></div>
              <div
                class="bn_e"
                data-tl-id="vh-typeahead-results-reader"
                role="alert"
              ></div>
              <ul
                class="m_a r_a r_aw r_l r_b bn_g"
                id="global-search-pills-list"
                aria-label="Search Pills"
              ></ul>
              <ul
                class="m_a r_a r_aw r_l r_b bn_g mweb-Typeahead-suggest"
                aria-label="Search"
                id="global-search-dropdown"
              ></ul>
            </div>
            <button
              class="g_a bo_e GlobalHeaderSearchbar-submit g_c"
              type="submit"
              aria-label="Perform Search"
              id="global-search-submit"
            >
              <span class="g_b">
                <img
                  src="/search-removebg-preview.png"
                  alt=""
                  aria-hidden="true"
                  width="18"
                  height="18"
                />
              </span>
            </button>
            <button class="l_a bo_h mweb-Typeahead-cancel l_b" type="button">
              <span class="r_a r_u r_ag">Cancel</span>
            </button>
          </form>
          <div
            id="header-bubble-links"
            data-module-id="a9bd64f8-905b-4514-bb01-c26a0e2948c7"
            data-module-type="GlobalHeaderBubblesNav"
            data-module-name="Global Header Bubbles Nav 08.12.2020"
            data-module-version="3"
            data-module-published-date="1607495630016"
            data-module-zone="headerZone3"
            data-module="Global Header Bubbles Nav 08.12.2020"
            class="b_a bl_a b_g"
          >
            <div right="xs" class="b_a bl_b bl_f bl_g b_g">
              <button
                class="g_a ae_a g_c"
                type="button"
                aria-label="Your Account"
                data-uid="5Sns6ll6"
                id="hf-account-flyout"
                onClick={() => setLogin(!login)}
              >
                <span class="g_b">
                  <span class="b_a b_r">
                    <span class="b_a hf-bubble-button-icon-slide b_g b_b b_p">
                      <img
                        src="/account.png"
                        alt=""
                        aria-hidden="true"
                        width="24"
                        height="24"
                      />
                    </span>
                    <span class="b_a ae_b b_g b_b b_p z_a z_h z_i">Login</span>
                  </span>
                </span>
              </button>
            </div>
            <div right="xs" class="b_a bl_b bl_g b_g">
              <a
                class="l_a g_a ae_a g_c"
                aria-label="My Items"
                data-uid="DmGTAxTu"
                href="/easyreorder"
                id="hf-easyreorder"
              >
                <span class="g_b">
                  <span class="b_a b_r">
                    <span class="b_a hf-bubble-button-icon-slide b_g b_b b_p">
                      <img
                        src="/bag-removebg-preview.png"
                        alt="null"
                        aria-hidden="true"
                        width="24"
                        height="24"
                      />
                    </span>
                    <span class="b_a ae_b b_g b_b b_p z_a z_h z_i">My Bag</span>
                  </span>
                </span>
              </a>
            </div>
            <div right="xs" class="b_a bl_b bl_e bl_f bl_g b_g">
              <a
                class="l_a g_a ae_a g_c"
                aria-label="Cart contains 0 items"
                data-uid="KHMcjKE4"
                href="/cart"
                id="hf-cart"
              >
                <span class="g_b">
                  <span class="b_a b_r">
                    <span class="b_a hf-bubble-button-icon-slide b_g b_b b_p">
                      <img
                        src="/cart-removebg-preview.png"
                        alt="null"
                        aria-hidden="true"
                        width="24"
                        height="24"
                      />
                    </span>
                    <span class="b_a ae_b b_g b_b b_p z_a z_h z_i">Cart</span>
                  </span>
                </span>
              </a>
              <div
                aria-hidden="true"
                id="header-cart-tooltip"
                class="b_a ab_a bl_c z_a z_j z_b b_p"
              ></div>
            </div>
          </div>
        </div>
        {login == true && (
          <div
            role="dialog"
            aria-modal="true"
            class="fade modal show"
            tabindex="-1"
            aria-labelledby="example-modal-sizes-title-lg"
            style={{ display: "block" }}
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title h4" id="example-modal-sizes-title-lg">
                    Login
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={() => setLogin(false)}
                  ></button>
                </div>
                <div class="modal-body">
                  <Login></Login>
                  <a
                    className="hover"
                    onClick={() => {
                      setLogin(false);
                      setRegister(true);
                    }}
                  >
                    Not yet registered ? Register here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {register == true && (
          <div
            role="dialog"
            aria-modal="true"
            class="fade modal show"
            tabindex="-1"
            aria-labelledby="example-modal-sizes-title-lg"
            style={{ display: "block" }}
          >
            <div class="modal-dialog modal-lg">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title h4" id="example-modal-sizes-title-lg">
                    Register
                  </div>
                  <button
                    type="button"
                    class="btn-close"
                    aria-label="Close"
                    onClick={() => setRegister(false)}
                  ></button>
                </div>
                <div class="modal-body">
                  <Register1></Register1>
                  <a
                    className="hover"
                    onClick={() => {
                      setLogin(true);
                      setRegister(false);
                    }}
                  >
                    Already Registered ? Login here.
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}
        {show && (
          <div class="aa_a b_a n_e n_f b_f" id="header-spark-menu-content">
            <div
              id="vh-spark-menu"
              data-module-id="746e1ef9-9e2a-4dc0-9783-85941ce8ec97"
              data-module-type="GlobalHeaderSparkMenu"
              data-module-name="Global Header Hamburger Menu (Desktop) - 5.21.21"
              data-module-version="1"
              data-module-published-date="1621444068863"
              data-module-zone="headerZone1"
              data-module="Global Header Hamburger Menu (Desktop) - 5.21.21"
              data-reactroot=""
            >
              <div class="b4_i">
                <div class="b_a r_a r_ao r_v r_af by_f b_g b_t">
                  <a
                    class="g_a s_a g_c l_a"
                    href="/"
                    title="Swap Homepage"
                    id="hf-spark-menu-logo"
                  >
                    <span class="g_b">
                      <img
                        alt="null"
                        aria-hidden="true"
                        width="32"
                        height="32"
                        src="/transparent.png"
                      />
                    </span>
                  </a>
                  <span class="r_a r_y b4_j" id="hf-user-firstname"></span>
                  <button
                    class="g_a g_c"
                    type="button"
                    aria-label="Close Navigation Menu"
                    data-tl-id="header-GlobalHeaderSparkMenu-closeButton"
                    id="spark-menu-close-button"
                  >
                    <span class="g_b">
                      <img
                        onClick={() => setShow(false)}
                        alt="null"
                        aria-hidden="true"
                        width="24"
                        height="24"
                        src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/remove-white.124cb20181e249f5932de870a2d671ca76801665.svg"
                      />
                    </span>
                  </button>
                </div>
              </div>
              <div
                class="r_a r_aq r_x r_ah r_az r_o r_f b4_a"
                id="vh-spark-main-menu"
              >
                <div class="r_a b4_h">Swap.com</div>
                <div class="r_a r_o b4_b">
                  <div
                    data-tl-id="header-top-links"
                    class="b_a r_a r_az r_o r_f b4_c b_f"
                  >
                    <a
                      class="l_a"
                      data-index="0"
                      data-tl-id="header-GlobalHeaderSparkMenu-optionalTopLinks-0"
                      data-uid="LHN-0-OTL"
                      href="/account/trackorder"
                      title="Track Orders"
                      data-section-title="Header"
                    >
                      <div aria-hidden="true" class="b_a r_a r_ax r_m r_c b_g">
                        <img
                          alt="null"
                          aria-hidden="true"
                          width="24"
                          height="24"
                          src="//i5.walmartimages.com/dfw/63fd9f59-43e0/1ed7036a-feba-43ca-8885-1d937a9aa4f2/v1/package-black.8daf1339adc1c094701090f6199349e7371ed56b.svg"
                        />
                        <div class="r_a r_ag"></div>
                        <span class="l_a l_c">
                          <div class="z_a z_i">Buy/Sell</div>
                        </span>
                      </div>
                    </a>
                    <a
                      class="l_a"
                      data-index="1"
                      data-tl-id="header-GlobalHeaderSparkMenu-optionalTopLinks-1"
                      data-uid="LHN-1-OTL"
                      href="/easyreorder?eroType=list"
                      title="Buy Again"
                      data-section-title="Header"
                    >
                      <div aria-hidden="true" class="b_a r_a r_ax r_m r_c b_g">
                        <img
                          alt="null"
                          aria-hidden="true"
                          width="24"
                          height="24"
                          src="//i5.walmartimages.com/dfw/63fd9f59-392b/48a699e6-5299-4b55-8895-28b7af730df3/v1/easyreorder-black.a9c7e2d9a0d04013144b768123ff9559a18d1d06.svg"
                        />
                        <div class="r_a r_ag"></div>
                        <span class="l_a l_c">
                          <div class="z_a z_i">Exchange</div>
                        </span>
                      </div>
                    </a>
                    <a
                      class="l_a"
                      data-index="2"
                      data-tl-id="header-GlobalHeaderSparkMenu-optionalTopLinks-2"
                      data-uid="LHN-2-OTL"
                      href="/lists"
                      title="Lists"
                      data-section-title="Header"
                    >
                      <div aria-hidden="true" class="b_a r_a r_ax r_m r_c b_g">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                        >
                          <title>Lists</title>
                          <path d="M 20 2.667969 C 20.738281 2.667969 21.332031 3.261719 21.332031 4 L 21.332031 21.332031 C 21.332031 22.070312 20.738281 22.667969 20 22.667969 L 4 22.667969 C 3.261719 22.667969 2.667969 22.070312 2.667969 21.332031 L 2.667969 4 C 2.667969 3.261719 3.261719 2.667969 4 2.667969 Z M 20 4 L 4 4 L 4 21.332031 L 20 21.332031 Z M 16.667969 16 C 17.035156 16 17.332031 16.296875 17.332031 16.667969 C 17.332031 17.035156 17.035156 17.332031 16.667969 17.332031 L 10 17.332031 C 9.632812 17.332031 9.332031 17.035156 9.332031 16.667969 C 9.332031 16.296875 9.632812 16 10 16 Z M 7.332031 16 C 7.703125 16 8 16.296875 8 16.667969 C 8 17.035156 7.703125 17.332031 7.332031 17.332031 C 6.964844 17.332031 6.667969 17.035156 6.667969 16.667969 C 6.667969 16.296875 6.964844 16 7.332031 16 Z M 16.667969 12 C 17.035156 12 17.332031 12.296875 17.332031 12.667969 C 17.332031 13.035156 17.035156 13.332031 16.667969 13.332031 L 10 13.332031 C 9.632812 13.332031 9.332031 13.035156 9.332031 12.667969 C 9.332031 12.296875 9.632812 12 10 12 Z M 7.332031 12 C 7.703125 12 8 12.296875 8 12.667969 C 8 13.035156 7.703125 13.332031 7.332031 13.332031 C 6.964844 13.332031 6.667969 13.035156 6.667969 12.667969 C 6.667969 12.296875 6.964844 12 7.332031 12 Z M 16.667969 8 C 17.035156 8 17.332031 8.296875 17.332031 8.667969 C 17.332031 9.035156 17.035156 9.332031 16.667969 9.332031 L 10 9.332031 C 9.632812 9.332031 9.332031 9.035156 9.332031 8.667969 C 9.332031 8.296875 9.632812 8 10 8 Z M 7.332031 8 C 7.703125 8 8 8.296875 8 8.667969 C 8 9.035156 7.703125 9.332031 7.332031 9.332031 C 6.964844 9.332031 6.667969 9.035156 6.667969 8.667969 C 6.667969 8.296875 6.964844 8 7.332031 8 Z M 7.332031 8 "></path>
                        </svg>
                        <div class="r_a r_ag"></div>
                        <span class="l_a l_c">
                          <div class="z_a z_i">Donate</div>
                        </span>
                      </div>
                    </a>
                    <a
                      class="l_a"
                      data-index="3"
                      data-tl-id="header-GlobalHeaderSparkMenu-optionalTopLinks-3"
                      data-uid="LHN-3-OTL"
                      href="http://walmart.com/plus"
                      title="Swap+"
                      data-section-title="Header"
                    >
                      <div aria-hidden="true" class="b_a r_a r_ax r_m r_c b_g">
                        <svg
                          width="24px"
                          height="24px"
                          viewBox="0 0 24 24"
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          xlinkHref="http://www.w3.org/1999/xlink"
                        >
                          <title>Swap+</title>
                          <path d="M16.054398,17.3473684 C16.37138,17.3473684 16.6492783,17.5081706 16.6673376,17.7240974 L16.6673376,17.7240974 L16.9810851,21.2582505 C17.0101957,21.6070138 16.5716501,21.8947368 16.0554762,21.8947368 C15.540111,21.8947368 15.1080343,21.5916865 15.1306759,21.2582505 L15.1306759,21.2582505 L15.4436147,17.7240974 C15.4632913,17.5135486 15.7393029,17.3487129 16.054398,17.3473684 Z M19.8716337,15.0990949 C20.0299159,14.8232721 20.3016784,14.6809032 20.5020798,14.7573555 L20.5020798,14.7573555 L23.7109164,16.2593877 C24.0237249,16.4122924 24.0572593,16.9353021 23.801325,17.3832102 C23.5435128,17.8300378 23.0820799,18.0631769 22.7907333,17.866508 L22.7907333,17.866508 L19.8930957,15.8217452 C19.7278383,15.6826181 19.7152294,15.3738371 19.8716337,15.0990949 Z M4.40907506,8.88421053 C4.57153239,9.70489216 5.03458925,12.0865775 5.03458925,12.0865775 C5.22857613,13.0658424 5.40759984,14.0926289 5.54226843,14.9045003 L5.56578199,14.9045003 C5.69724418,14.0424375 5.90378944,13.2254935 6.12449629,12.2136577 L6.90365023,8.88421053 L8.62762185,8.88421053 L9.35627507,12.2996237 C9.54758996,13.2500553 9.69962652,13.9818342 9.81933193,14.8657889 L9.84284549,14.8657889 C9.97457488,13.973291 10.1450482,13.2110769 10.3331567,12.2355497 L11.0329524,8.88421053 L12.6877193,8.88421053 L10.6380314,16.6358342 C9.33249431,16.9217646 8.83229672,16.3966244 8.65247141,15.563128 C8.4731805,14.7296316 8.12314906,13.1421973 8.12314906,13.1421973 C7.94359095,12.2731932 7.80357838,11.6599512 7.70498174,10.7679872 L7.68013218,10.7679872 C7.5401196,11.651408 7.39369424,12.2705234 7.17592659,13.1389936 L6.31554398,16.6358342 C4.98275253,16.9009405 4.52049728,16.5079531 4.26371849,15.4395185 C4.04408044,14.5240607 2.66666667,8.88421053 2.66666667,8.88421053 L4.40907506,8.88421053 Z M16.034687,9.89473684 C16.4361839,9.89473684 16.7535347,10.1707027 16.7628842,10.4541998 L16.7628842,10.4541998 L16.8283312,12.1715898 L18.5331568,12.2358742 C18.8133765,12.2460952 19.0877193,12.5642897 19.0877193,12.9677486 C19.0877193,13.3722834 18.8133765,13.6915538 18.5318211,13.7009679 L18.5318211,13.7009679 L16.8235228,13.7647144 L16.76235,15.4837182 C16.752199,15.7658704 16.436451,16.0421053 16.0354884,16.0421053 C15.6339916,16.0421053 15.3166408,15.7658704 15.3072912,15.4823733 L15.3072912,15.4823733 L15.2426457,13.7644454 L13.5370187,13.7006989 C13.2565318,13.690478 12.9824561,13.3722834 12.9824561,12.9685555 C12.9824561,12.5642897 13.2565318,12.2450193 13.5380872,12.2356052 L13.5380872,12.2356052 L15.2477211,12.1670172 L15.3075583,10.452855 C15.3179764,10.1707027 15.6337244,9.89473684 16.034687,9.89473684 Z M22.7069313,7.94399721 C22.9990984,7.74779418 23.458371,7.97930298 23.7157244,8.42615 C23.9701319,8.87299702 23.9441556,9.39153362 23.6254766,9.54623216 L23.6254766,9.54623216 L20.4223512,11.0471315 C20.2338218,11.1403818 19.9499565,10.9789455 19.7930272,10.7048542 C19.6358301,10.4296848 19.6344911,10.1159756 19.814451,9.98607193 L19.814451,9.98607193 Z M16.055814,4 C16.57169,4 17.0121377,4.28962246 16.9808888,4.63652401 L16.6673224,8.17088612 C16.6549306,8.39489309 16.3715355,8.54736842 16.0547364,8.54736842 C15.7398231,8.54736842 15.4631626,8.3782203 15.4443056,8.17088612 L15.1315473,4.63652401 C15.0986821,4.27940365 15.5407461,4 16.055814,4 Z"></path>
                        </svg>
                        <div class="r_a r_ag"></div>
                        <span class="l_a l_c">
                          <div class="z_a z_i">Contact us</div>
                        </span>
                      </div>
                    </a>
                    <a
                      class="l_a"
                      data-index="4"
                      data-tl-id="header-GlobalHeaderSparkMenu-optionalTopLinks-4"
                      data-uid="LHN-4-OTL"
                      href="https://www.walmart.com/cp/walmart-credit-card/632402"
                      title="Swap Credit Card"
                      data-section-title="Header"
                    >
                      <div aria-hidden="true" class="b_a r_a r_ax r_m r_c b_g">
                        <img
                          alt="null"
                          aria-hidden="true"
                          width="24"
                          height="24"
                          src="//i5.walmartimages.com/dfw/63fd9f59-e6fd/58bc58d4-79e6-4302-b5f4-9d7f0eef1508/v1/walmart-credit-card-black.cc1a6c7649409c02f95db87bd6281ccd56cc3d4f.svg"
                        />
                        <div class="r_a r_ag"></div>
                        <span class="l_a l_c">
                          <div class="z_a z_i">Swap Store Credit</div>
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};
