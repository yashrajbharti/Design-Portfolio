class CartComponent extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });

    shadow.innerHTML = `
    <style>
        input {
        display: none;
        }
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
        .label > svg.cart > .add {
        translate: 9px 0;
        -webkit-transition: rotate 0.3s ease, opacity 0.2s ease-in;
        -moz-transition: rotate 0.3s ease, opacity 0.2s ease-in;
        -o-transition: rotate 0.3s ease, opacity 0.2s ease-in;
        transition: rotate 0.3s ease, opacity 0.2s ease-in;
        }
        .label > svg.cart > .done {
        translate: 9px 0;
        -webkit-transition: opacity 0.2s ease-in;
        -moz-transition: opacity 0.2s ease-in;
        -o-transition: opacity 0.2s ease-in;
        transition: opacity 0.2s ease-in;
        }
        .label:hover {
        -webkit-transition: background-color 0.2s ease both;
        -moz-transition: background-color 0.2s ease both;
        -o-transition: background-color 0.2s ease both;
        transition: background-color 0.2s ease both;
        background-color: color-mix(in srgb, #777 10%, transparent 90%);
        -webkit-backdrop-filter: blur(20px);
        backdrop-filter: blur(20px);
        }
        input:checked + label > svg.cart > .add:first-of-type {
        rotate: -90deg;
        }
        input:checked + label > svg.cart > .add:nth-of-type(2) {
        opacity: 0;
        -webkit-animation: appear 0.2s ease-in 0.9s 1 both;
        -moz-animation: appear 0.2s ease-in 0.9s 1 both;
        -o-animation: appear 0.2s ease-in 0.9s 1 both;
        animation: appear 0.2s ease-in 0.9s 1 both;
        }
        input:checked + label > svg.cart > .done {
        opacity: 1;
        -webkit-animation: disappear 0.4s ease-in 0.7s 1 both;
        -moz-animation: disappear 0.4s ease-in 0.7s 1 both;
        -o-animation: disappear 0.4s ease-in 0.7s 1 both;
        animation: disappear 0.4s ease-in 0.7s 1 both;
        }
        @keyframes disappear {
        0% {
            opacity: 1;
        }
        100% {
            opacity: 0;
        }
        }
        @keyframes appear {
        0% {
            opacity: 0;
        }
        100% {
            opacity: 1;
        }
        }
</style>
  
    <input type="checkbox" name="checkbox" id="cart" />
    <label class="label" for="cart">
        <svg class="cart" width="26" height="26" viewBox="0 0 26 26" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5.5 1L5.5 9" stroke="#777" stroke-width="2" stroke-linecap="round" class="add" />
        <path d="M9.5 5L1.5 5" stroke="#777" stroke-width="2" stroke-linecap="round" class="add" />
        <path style="opacity: 0;" d="M9.33252 1.17188L3.67567 6.82873" stroke="#59CAB0" stroke-width="2" stroke-linecap="round" class="done" />
        <!-- Intentionally added inline styling to prevent FOUC -->
        <path style="opacity: 0;" d="M3.50745 6.61328L1.50005 4.38385" stroke="#59CAB0" stroke-width="2" stroke-linecap="round" class="done" />
        <path d="M25 3.66667L22.3333 13H6.83561M23.6667 18.3333H7.66667L5 1H1M9 23.6667C9 24.4031 8.40304 25 7.66667 25C6.93029 25 6.33333 24.4031 6.33333 23.6667C6.33333 22.9303 6.93029 22.3333 7.66667 22.3333C8.40304 22.3333 9 22.9303 9 23.6667ZM23.6667 23.6667C23.6667 24.4031 23.0697 25 22.3333 25C21.5969 25 21 24.4031 21 23.6667C21 22.9303 21.5969 22.3333 22.3333 22.3333C23.0697 22.3333 23.6667 22.9303 23.6667 23.6667Z" stroke="#777" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
        </svg>
    </label>
      `;
  }
}
customElements.define("cart-component", CartComponent);
