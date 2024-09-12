class WishlistComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
        <style>
          .label {
            position: relative;
            display: grid;
            place-items: center;
            block-size: 56px;
            inline-size: 56px;
            aspect-ratio: 1;
            border: 1px solid #777;
            border-radius: 5px;
            cursor: pointer;
          }
          .label:hover {
            background-color: color-mix(in srgb, #777 10%, transparent 90%);
            backdrop-filter: blur(20px);
            transition: background-color 0.2s ease;
          }
          input {
            display: none;
          }
          input:checked + .label > svg {
            animation: beat 0.4s ease-out 1 both;
          }
          input:checked + .label > svg > path {
            stroke: red;
            fill: red;
          }
          @keyframes beat {
            0% { scale: 1; }
            50% { scale: 1.4; }
            100% { scale: 1; }
          }
        </style>
  
        <input type="checkbox" id="wishlist">
        <label class="label" for="wishlist">
          <svg width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M1.52998 9.49912C0.839984 5.64912 3.38998 2.31412 7.36498 1.99912C10.865 1.72412 12.6 5.96412 12.95 6.77412C12.9539 6.78771 12.9621 6.79966 12.9733 6.80816C12.9846 6.81667 12.9984 6.82127 13.0125 6.82127C13.0266 6.82127 13.0404 6.81667 13.0516 6.80816C13.0629 6.79966 13.0711 6.78771 13.075 6.77412C14.7 2.31912 17.66 2.12912 18.7 2.02412C21.5 1.72412 25.255 3.88912 24.5 8.93412C23.42 15.9341 12.94 23.8391 12.94 23.8391C12.94 23.8391 2.89498 17.0241 1.52998 9.49912Z" stroke="#777" stroke-width="2"/>
          </svg>
        </label>
      `;
  }
}
customElements.define("wishlist-component", WishlistComponent);
