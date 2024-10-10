<template>
  <div
    id="article"
    class="relat1ive"
  >
    <div
      aria-hidden="true"
      class="absolute inset-0 grid grid-cols-2 -space-x-52 opacity-40"
    >
      <div class="blur-[106px] h-56 bg-gradient-to-br from-primary to-purple-400" />
      <div class="blur-[106px] h-32 bg-gradient-to-r from-cyan-400 to-sky-3000" />
    </div>
    <div>
      <div class="bg-gray-100 px-8 py-2">
        Fourdotzero Post
      </div>
      <div class="relative ml-auto max-w-7xl mx-auto">
        <div class="lg:w-full mx-auto mt-20">
          <h1 class="text-gray-900 font-bold text-4xl md:text-4xl xl:text-4xl">
            Micropayments Revolutionise Revenue for News and Content Industries
          </h1>
          <div class="mt-2 text-gray-600">
            <span class="text-gray-300">Date:</span> <span>58 minutes ago</span>
            <span class="text-sm mx-4">•</span> 
            <span class="text-gray-300">Author:</span> <span>Richard Bell</span>
            <span class="text-sm mx-4">•</span> 
            <span class="text-gray-300">Related Topics:</span> <span>Pay-per-view | New Internet Payment Fabric</span>
          </div>
          <div class="mt-8 bottom-overflow-fade">
            <p class="text-2xl">
              Fourdotzero's 1% pay-per-use model is a game-changer. It empowers newspapers and creators to sell digital content without ads or subscriptions on a pay-per-use basis.
              This model opens up new possibilities and revenue streams, inspiring a hopeful future for the news and content industries.
            </p>
          </div>
          <!-- Add the checkout widget to the page -->
          <div
            class="mt-8"
            data-fdz-sdk-widget="checkout"
            data-title="Checkout"
            data-description="You'll learn a lot from this Video lesson"
          >
            <!-- Add buy button widgets for single content purchase -->
            <div
              data-fdz-sdk-widget="buy_button"
              data-content-ids="5bac0236-6407-415a-969c-66bb14f65a1b"
              data-content-price="2.99"
              data-content-title="article"
            />
            <!-- END buy button -->
          </div>
          <!-- END checkout widget -->
          <div
            data-fdz-sdk-widget="content"
            data-content-id="5bac0236-6407-415a-969c-66bb14f65a1b"
            data-content-title="Article"
            data-content-type="html"
          >
            <p class="mt-6">
              Currently, casual online commercial relationships are not possible online; subscriptions require effort, whilst ads create noise. These friction points are destroying newspapers and content creators who cannot make it pay with ads or win subscriptions. Even the New York Times, a winner in the subscription space with ten million subscribers, leaves most of its two billion annual viewers with little choice to enjoy premium content. 
            </p>
            <p class="mt-6">
              Fourdotzero is changing this by offering a pay-per-use model that eliminates the need for intrusive ads, reduces user entry barriers, and provides a more sustainable revenue stream for creators.As global demand for low-cost transactions grows, Fourdotzero stands at the forefront of a burgeoning market, where 62% of payments fall below $25. UK household expenditure alone accounts for £213 billion annually in sub-£20 purchases, while Europe sees €2 trillion in similar transactions. With increasing concerns about platform algorithm changes and reliance on digital storefronts, businesses are seeking ways to retain complete control of their audience and revenue. Fourdotzero allows creators to monetise content down to minor transactions, providing immediate payouts and pay-per-use alternatives to subscription models.CEO Richard Bell emphasises that creators want ownership of their audience, protection from unpredictable algorithm and commercial changes, and an alternative to high platform fees. Fourdotzero, with its simple and fast integration, offers a solution that businesses of all sizes can confidently adopt, knowing that they are building their business and revenue on a firm, sustainable foundation.
            </p>
          </div>
          <!-- -->
          <div class="mt-16 text-white flex flex-wrap bg-black rounded-xl px-48 py-16">
            <h3 class="text-2xl">
              Fourdotzero is Bridging Global Connections Our cutting-edge network seamlessly connects buyers and sellers across the globe. From Boston to Bangkok, we're shrinking the world one transaction at a time.
            </h3>
            <hr class="w-full h-px my-8 bg-gray-600 border-0">
            <div>
              <h3 class="text-2xl">
                Find out more:
              </h3>
              <div class="grid grid-cols-2 gap-4">
                <div class="mt-6">
                  <div class="bg-white px-4 py-5 rounded-xl w-16 float-left">
                    <img src="/images/core-short-icon.svg">
                  </div>
                  <div class="ml-24">
                    <h4 class="text-xl">
                      Fourdotzero
                    </h4>
                    <p class="text-gray-500">
                      The Global Micropayment Network
                    </p>
                    <a
                      href="#"
                      class="text-sm underline"
                    >
                      Visit the website
                    </a>
                  </div>
                </div>
                <div class="mt-6">
                  <div class="bg-white px-4 py-5 rounded-xl w-16 float-left">
                    <img src="/images/wp-short-icon.svg">
                  </div>
                  <div class="ml-24">
                    <h4 class="text-xl">
                      Fourdotpay
                    </h4>
                    <p class="text-gray-500">
                      Creator Checkout and Wallet for the Fourdotzero Network
                    </p>
                    <a
                      href="#"
                      class="text-sm underline"
                    >
                      Visit the website
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <!-- -->
          <div
            class="bg-gradient-to-r from-orange-200 via-orange-50 to-orange-200 p-24 rounded-xl mt-8 text-center mb-24"
          >
            <h3 class="text-2xl font-semibold">
              Claim Your Piece of Fourdotzero History
            </h3>
            <p class="mt-6">
              Click Generate for your downloadable personalised Fourdotzero digital memorabilia
            </p>
            <a
              href="/article"
              class="mt-8 m-auto relative flex h-11 w-64 items-center justify-center px-6 rounded-lg bg-pink-500 text-white"
            >
              <span class="relative text-base font-semibold text-white">Next</span>
            </a>
          </div>
          <!-- -->
          <!-- -->
          <!-- -->
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  components: {
  },
  mounted() {
    let fourDotScript = document.createElement('script')
    fourDotScript.setAttribute('src', 'https://sdk.fourdotpay.io/fdz-sdk-js/dist/fdz-sdk.js?ver=0.0.17') // url from file goes here
    document.head.appendChild(fourDotScript)
    window.addEventListener('load', function () {
      (window as any).fdzSDK.initConfig({
        siteName: 'Welcome to Fourdotzero Demo',
        siteAddress: 'demo.fourdotpay.io',
        siteUrl: 'https://demo.fourdotpay.io',
        contentPrefix: 'fdp-demo',
        accountId: 'barringtom$fourdotpay.io',
        accountType: 'BUSINESS',
      })
    })
  },
})
</script>

<style>
.bottom-overflow-fade {
  mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
  -webkit-mask-image: linear-gradient(to bottom, black 10%, transparent 100%);
}

.fdz-widget {
  margin: auto;
}
</style>