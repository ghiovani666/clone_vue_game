<template>
  <div>

    <div class="uni-page-wrapper">
      <div class="uni-page-body">
        <div data-v-9c3a2d12="" class="home-container">
          <div data-v-9c3a2d12="" class="top-navbar">
            <div data-v-9c3a2d12="" class="mxm-logo">
              <div data-v-9c3a2d12="" class="logoico uni-image">
                <div
                  :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/logo.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                </div>
              </div>
              <span data-v-9c3a2d12="" class="logotext"><span>MXM</span></span>
            </div>
            <span data-v-9c3a2d12="" class="mxmtitle"><span>JUEGOS</span></span>
          </div>
          <div data-v-9c3a2d12="" class="topinfo">
            <div data-v-9c3a2d12="" class="homebg uni-image" style="height:
                  584px;">
              <div
                :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/homebg.png')})`, 'background-position': `100% 100%`, 'background-repeat': `no-repeat` }">
              </div>

            </div>
            <div data-v-9c3a2d12="" class="homeico uni-image">
              <div
                :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/homeico.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
              </div>
            </div>
            <div data-v-9c3a2d12="" class="mintx">
              <span data-v-9c3a2d12="" class="text"><span>Caja de juegos</span></span>
            </div>
          </div>
          <div data-v-9c3a2d12="" class="homecard">
            <div data-v-9c3a2d12="" class="cardbg uni-image" style="height:
                  142px;">
              <div
                :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/cardbg.png')})`, 'background-size': `100% 100%`, 'background-repeat': `no-repeat` }">
              </div>

            </div>
            <div data-v-9c3a2d12="" class="cardinfo">
              <span data-v-9c3a2d12="" class="cardsmall"><span>Precio de
                  caja ciega (USDT)</span></span>
              <span data-v-9c3a2d12="" class="text"><span>100</span></span>
              <span data-v-9c3a2d12="" class="cardsmall"><span>Pagadero
                  (MXM)</span></span>
              <span data-v-9c3a2d12="" class="text"><span></span></span>
            </div>
            <div data-v-9c3a2d12="" class="flowtext">
              <div data-v-9c3a2d12="" class="bbico uni-image">
                <div
                  :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/bb.png')})`, 'background-size': `contain`, 'background-position': `center center`, 'background-repeat': `no-repeat` }">
                </div>
              </div>
              <span data-v-9c3a2d12="" class="text"><a
                  href="https://pancakeswap.finance/swap?outputCurrency=0x158d41854b4f6a0f55051989ea5e27705c277180"
                  style="color: white;text-decoration: none;">Autorizar</a></span>
            </div>
          </div>
          <div data-v-9c3a2d12="" class="cardbutton">
            <span data-v-9c3a2d12="" class="text"><span>Autorizar MXM</span></span>
          </div>
          <div data-v-9c3a2d12="" class="cardtips">
            <span data-v-9c3a2d12="" class="text"><span>Después de
                comprar la caja ciega, obtendrá aleatoriamente un NFT de los
                siguientes tres personajes</span></span>
          </div>
          <div data-v-9c3a2d12="" class="cardnft">
            <div data-v-9c3a2d12="" class="nftitem">
              <router-link to="/detalle">
                <div data-v-9c3a2d12="" class="nftimg imgGry uni-image">

                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nft2.png')})`, 'background-position': `0% 0%`, 'background-size': `100% 100%`, 'background-repeat': `no-repeat` }">
                  </div>

                </div>
              </router-link>
            </div>
            <div data-v-9c3a2d12="" class="nftitem">
              <div data-v-9c3a2d12="" class="nftimg imgGry uni-image">
                <div
                  :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nft3.png')})`, 'background-position': `0% 0%`, 'background-size': `100% 100%`, 'background-repeat': `no-repeat` }">
                </div>
              </div>
            </div>
            <div data-v-9c3a2d12="" class="nftitem">
              <div data-v-9c3a2d12="" class="nftimg imgGry uni-image">
                <div
                  :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nft1.png')})`, 'background-position': `0% 0%`, 'background-size': `100% 100%`, 'background-repeat': `no-repeat` }">
                </div>
              </div>
            </div>
          </div>
          <div data-v-9c3a2d12="" class="card-link">
            <div data-v-9c3a2d12="" class="cl-nav">
              <span data-v-9c3a2d12="" class="text"><span>JUEGO 1</span></span>
              <router-link to="/user">
                <div data-v-9c3a2d12="" class="gico1 uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/g1.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </router-link>
            </div>
            <div data-v-9c3a2d12="" class="cl-nav cln2" @click="seen_ok = !seen_ok">
              <span data-v-9c3a2d12="" class="text"><span>JUEGO 2</span></span>
              <div data-v-9c3a2d12="" class="gico2 uni-image">
                <div
                  :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/g2.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                </div>
              </div>
            </div>
            <div data-v-9c3a2d12="" class="cl-nav cln3">
              <span data-v-9c3a2d12="" class="text"><span>MXM-USDT</span></span>
              <router-link to="/cambio">
                <div data-v-9c3a2d12="" class="gico3 uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/g3.png')})`, 'background-position': `0% 0%`, 'background-size': `100% 100%`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </router-link>
            </div>
            <div data-v-9c3a2d12="" class="cl-nav cln4">
              <span data-v-9c3a2d12="" class="text"><span>JUEGO 1</span></span>
              <router-link to="/game">
                <div data-v-9c3a2d12="" class="gico4 uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/g4.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </router-link>
            </div>
          </div>
          <div data-v-9c3a2d12="" class="transcript-update">
            <button data-v-9c3a2d12="" @click="seen = !seen" class="theme-primary">JUEGO 1</button>



          </div>
          <div data-v-9c3a2d12="" class="transcript-update invite-box">
            <div data-v-9c3a2d12="" class="toptext">
              <span data-v-9c3a2d12="" class="text"><span>Enlace de
                  invitación</span></span>
            </div>
            <span data-v-9c3a2d12="" class="text"><span>https://ejemplo.com</span></span>
            <div data-v-9c3a2d12="">
              <button data-v-9c3a2d12="" class="theme-primary" @click="seenCopiar = !seenCopiar">Copiar
                Link</button>
            </div>
          </div>
          <div data-v-55fd3afc="" data-v-9c3a2d12="" class="u-popup">
          </div>
          <div data-v-55fd3afc="" data-v-9c3a2d12="" class="u-popup">
          </div>
          <div data-v-52b6faee="" data-v-9c3a2d12="" class="v-tabbar">
            <div data-v-52b6faee="" class="v-fixedtabbar">
              <div data-v-52b6faee="" class="tabbaritem">
                <div data-v-52b6faee="" class="icon uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nb1.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </div>
              <div data-v-52b6faee="" class="tabbaritem">
                <div data-v-52b6faee="" class="icon uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nb2.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </div>
              <div data-v-52b6faee="" class="tabbaritem">
                <div data-v-52b6faee="" class="icon uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nb3.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </div>
              <div data-v-52b6faee="" class="tabbaritem">
                <div data-v-52b6faee="" class="icon uni-image">
                  <div
                    :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/nb4.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>




    <div class="uni-toast" v-if="seenCopiar">
      <i class="uni-icon_toast uni-icon-success-no-circle"></i>
      <p class="uni-toast__content"> Content copied </p>
    </div>





    <div data-v-55fd3afc="" data-v-9c3a2d12="" class="u-popup" v-if="seen">
      <div data-v-3e581c4a="" data-v-5bf76551="" data-v-55fd3afc=""
        class="u-transition u-fade-enter-to u-fade-enter-active"
        style="transition-duration: 350ms; transition-timing-function: ease-out; backdrop-filter: blur(0px); position: fixed; inset: 0px; z-index: 10070; background-color: rgba(0, 0, 0, 0.5);">
      </div>
      <div data-v-3e581c4a="" data-v-55fd3afc="" class="u-transition u-fade-zoom-enter-to u-fade-zoom-enter-active"
        style="transition-duration: 300ms; transition-timing-function: ease-out; backdrop-filter: blur(0px); z-index: 10075; position: fixed; display: flex; align-items: center; justify-content: center; inset: 0px;">
        <div data-v-55fd3afc="" class="u-popup__content" style="border-radius: 24px;">

          <div data-v-7d85e93a="" data-v-9c3a2d12="" class="day-control-modal">
            <div data-v-7d85e93a="" class="mask-close uni-image" v-on:click="seen = !seen">

              <div
                :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/close.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
              </div>

            </div>
            <div data-v-7d85e93a="" class="mask-info">
              <div data-v-7d85e93a="" class="mtitle">
                <span data-v-7d85e93a="" class="text"><span>OPCION</span></span>
              </div>
              <div data-v-7d85e93a="" class="write-amount">
                <div data-v-7d85e93a="" style="width: 100%;">
                  <div class="uni-picker-container uni-selector-select">

                    <div class="uni-picker-custom">
                      <div class="uni-picker-header">
                        <div class="uni-picker-action uni-picker-action-cancel"> Cancel </div>
                        <div class="uni-picker-action uni-picker-action-confirm"> Done </div>
                      </div>
                      <div class="uni-picker-select"></div>

                    </div>
                  </div>
                  <div>
                    <div data-v-7d85e93a="" class="textbox">
                      <div data-v-7d85e93a="" class="form-input">
                        <div class="uni-input-wrapper">
                          <div class="uni-input-placeholder input-placeholder" data-v-7d85e93a="" data-v-3e581c4a=""
                            data-v-55fd3afc="" data-v-9c3a2d12="">Seleccione</div>
                          <input disabled="disabled" maxlength="140" step="" enterkeyhint="done" autocomplete="off"
                            type="" class="uni-input-input">

                        </div>
                      </div>
                      <div data-v-7d85e93a="" class="arrowadico uni-image">


                        <div
                          :style="{ 'background-image': `url(${require('@/assets/MXMNFT_files/adico.png')})`, 'background-position': `center center`, 'background-size': `contain`, 'background-repeat': `no-repeat` }">
                        </div>

                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div data-v-7d85e93a="" class="volumn-cell">
                <div data-v-7d85e93a="" class="day-volume">
                  <span data-v-7d85e93a="" class="text"><span>MXN</span></span>
                  <span data-v-7d85e93a="" class="small"><span>0</span></span>
                  <div data-v-7d85e93a="" class="mbtn">
                    <button data-v-7d85e93a="" class="theme-btn" size="mini">Prueba1</button>
                  </div>
                </div>
                <div data-v-7d85e93a="" class="day-volume">
                  <span data-v-7d85e93a="" class="text"><span>MXM</span></span>
                  <span data-v-7d85e93a="" class="small"><span>0</span></span>
                  <div data-v-7d85e93a="" class="mbtn">
                    <button data-v-7d85e93a="" class="theme-btn" size="mini">Prueba1</button>
                  </div>
                </div>
              </div>
            </div>
            <div data-v-7d85e93a="" class="btnoper">
              <button data-v-7d85e93a="" class="theme-btn" disabled="true">Prueba1</button>
            </div>
          </div>

          <div data-v-eca591a4="" data-v-55fd3afc="" class="u-safe-bottom u-safe-area-inset-bottom"></div>
        </div>
      </div>
    </div>

    <div data-v-55fd3afc="" data-v-9c3a2d12="" class="u-popup" v-if="seen_ok">
      <div class="uni-mask"></div>
      <div class="uni-modal">
        <div class="uni-modal__hd"><strong class="uni-modal__title">Prueba ok</strong></div>
        <div class="uni-modal__bd">Descripcion ok</div>
        <div class="uni-modal__ft">
          <div class="uni-modal__btn uni-modal__btn_primary" style="color: rgb(0, 122, 255);"
            @click="seen_ok = !seen_ok"> OK </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },

  data() {
    return {
      seen: false,
      seen_ok: false,
      seenCopiar: false,
    }
  },


  methods: {
    showAlert() {
      // Use sweetalert2
      this.$swal('Hello Vue world!!!');
    },
  },
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
