<template>
  <div class="big_box">
    <div class="content_box">
      <div
        class="hero-content section-title text-center text-lg-start my-5 mt-lg-0"
      >
        <h2 class="font-weight-bold text-white" style="font-size: 50px;">
          Exchange Smooth &amp; <br />Effortless!
        </h2>
        <p
          class="lead  "
          style="font-size: 28px; color: rgb(92, 87, 128);margin-top:20px"
        >
          Swap ,Trading ,Payment Gateway
        </p>
        <div class="action-btn mt-4">
          <a
            href="./"
            class="btn btn-lg btn-success rounded-pill border-3 me-3  fw-bolder pt-1 pb-1"
            >Try Now</a
          ><a
            href="./"
            class="btn btn-lg btn-outline-success rounded-pill border-3  fw-bolder pt-1 pb-1"
            >Contact Us</a
          >
        </div>
      </div>
      <div class="right_content">
        <div class="top_change">
          <div
            class="btn left"
            :class="choseIndex == 0 ? 'left_chose' : ''"
            @click="change(0)"
          >
            Exchange Crypto
          </div>
          <div
            class="btn right"
            :class="choseIndex == 1 ? 'right_chose' : ''"
            @click="change(1)"
          >
            Buy / Sell Crypto
          </div>
        </div>
        <div class="center_content">
          <div class="first_input">
            <div class="left_input">
              <p>You Send</p>
              <input />
            </div>
            <div class="right_select">
              <el-select v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
          <div class="setps">
            <div class="left_steps">
              <div class="new-stepper-hints__wrapper-border">
                <div class="new-stepper-hints__item">
                  <button type="button" class="new-stepper-hints__label me-1">
                    No extra fees
                  </button>
                </div>
                <div class="new-stepper-hints__item">
                  <button type="button" class="new-stepper-hints__label me-1">
                    Estimated rate:</button
                  ><span>1 BTC ~ 13.1062924 ETH</span>
                </div>
                <div class="new-stepper-hints__item">
                  <button type="button" class="new-stepper-hints__label me-1">
                    Estimate time :</button
                  >10-60 Min
                </div>
              </div>
            </div>
            <div class="right_steps">
              <button
                class="new-stepper-button-swap new-stepper-button-swap_dark"
                type="button"
              >
                <svg
                  width="16"
                  height="12"
                  viewBox="0 0 16 12"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M0.772864 3.24846C0.457408 3.24846 0.173615 3.07952 0.0558748 2.82164C-0.0618654 2.56376 0.0100831 2.26871 0.237649 2.07621L2.46776 0.189733C2.76682 -0.0632443 3.23913 -0.0632443 3.53819 0.189733L5.7683 2.07621C5.99587 2.26871 6.06782 2.56376 5.95008 2.82164C5.83234 3.07952 5.54854 3.24846 5.23309 3.24846H3.77583L3.77583 11.2363C3.77583 11.6124 3.42982 11.9173 3.00299 11.9173C2.57616 11.9173 2.23015 11.6124 2.23015 11.2363V3.24846H0.772864Z"
                    fill="#0090ba"
                  ></path>
                  <path
                    d="M15.2271 8.75154C15.5426 8.75154 15.8264 8.92048 15.9441 9.17836C16.0619 9.43624 15.9899 9.73129 15.7624 9.92379L13.5322 11.8103C13.2332 12.0632 12.7609 12.0632 12.4618 11.8103L10.2317 9.92379C10.0041 9.73129 9.93219 9.43624 10.0499 9.17836C10.1677 8.92048 10.4515 8.75154 10.7669 8.75154H12.224L12.224 0.680991C12.224 0.30489 12.57 0 12.9969 0C13.4237 0 13.7697 0.30489 13.7697 0.680991L13.7697 8.75154H15.2271Z"
                    fill="#0090ba"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <div class="first_input second_input">
            <div class="left_input">
              <p>You Get</p>
              <input />
            </div>
            <div class="right_select">
              <el-select v-model="value">
                <el-option
                  v-for="item in options"
                  :key="item.value"
                  :label="item.label"
                  :value="item.value"
                >
                </el-option>
              </el-select>
            </div>
          </div>
        </div>
        <div class="bottom_btn">
          <button>Exchange</button>
        </div>
      </div>
    </div>
    <div class="second_top">
      <ul>
        <li>
          <img src="../../assets/images/1a.png" alt="" />
          <p class="title">Pick a Crypto</p>
          <p>
            We support more than 10 000 currency pairs and the list is
            constantly growing.Pick the one you like.
          </p>
        </li>
        <li>
          <img src="../../assets/images/1b.png" alt="" />
          <p class="title">Exchange</p>
          <p>
            We handle everything complicated so that you can spend your time on
            what matters.No registration. No hidden fees.No surprises.
          </p>
        </li>
        <li>
          <img src="../../assets/images/1c.png" alt="" />
          <p class="title">Receive your Funds</p>
          <p>
            We match the estimate and the outcome better than anyone else,
            thanks to our RealRates system. And it’s super-fast and safe for
            you.
          </p>
        </li>
        <li>
          <img src="../../assets/images/1d.png" alt="" />
          <p class="title">global payment solution</p>
          <p>
            The global payment solution for cryptocurrency /fiat that is simple,
            powerful, and painless to integrate.Pick the one you like.
          </p>
        </li>
        <li>
          <img src="../../assets/images/1e.png" alt="" />
          <p class="title">payment methods</p>
          <p>
            We support all the payment methods your customers want to use: Visa
            and Mastercard, virtual cards including Apple Pay, Google Pay, and
            Samsung Pay.UPI,Cypto
          </p>
        </li>
        <li>
          <img src="../../assets/images/1f.png" alt="" />
          <p class="title">Made for Developers</p>
          <p>
            Your team will have every base covered with our exhaustive suite of
            documentation
          </p>
        </li>
      </ul>
    </div>
    <div class="third_top">
      <div class="content_box">
        <div class="left_third">
          <p class="bg"></p>
          <p class="title">Crypto Fiat Gateway</p>
          <p class="sec_title">
            This is a digital infrastructure that enables users across the globe
            to make payments, anytime and anywhere, using Visa, MasterCard,
            virtual wallets such as Apple Pay, Google Pay, Samsung Pay and UPI.
          </p>
          <p class="word">
            Floxypay offers flexibility to users to make global payments, crypto
            or fiat, supporting their High Risk Business, by catering to all
            their online purchases and vital transactions
          </p>
          <p class="word">
            It's a highly powerful yet Pain-free platform, that integrates all
            payment methods, making it easy to use.
          </p>
          <p class="word">
            Our seamless crypto payment processing helps reduce churn and ensure
            all payments are processed consistently, without any hussle.
          </p>
        </div>
        <div class="right_third">
          <p class="title">Get a quote today</p>
          <p class="sec_title">Get response within 24 hours</p>
          <div class="input_box">
            <el-input
              type="text"
              v-model="value1"
              placeholder="Enter your name"
            />
            <el-input
              type="text"
              v-model="value2"
              placeholder="Enter your email"
            />
            <el-input
              type="text"
              v-model="value3"
              placeholder="Enter subject"
            />
            <el-input
              type="textarea"
              v-model="value4"
              placeholder="Write your message"
            />
          </div>
          <div class="submit">提交</div>
          <el-checkbox v-model="checked"
            >I agree your terms & conditions</el-checkbox
          >
        </div>
      </div>
    </div>
    <div class="forth_top">
      <div class="content_box2">
        <div class="forth_left">
          <p class="title">
            Made for Developers Hit the ground running with a few lines of code
          </p>
          <p class="word">
            We’ve battle-tested the widget in hundreds of integrations and
            pulled together everything you need to integrate with ease and start
            accepting payments sooner.
          </p>
          <div class="box">
            <div class="left">
              <div class="top">
                <p class="bg_block"></p>
                <p>Documentation</p>
              </div>
              <p class="bottom">
                Your team will have every base covered with our exhaustive suite
                of documentation
              </p>
            </div>
            <div class="left right">
              <div class="top">
                <p class="bg_block"></p>
                <p>Webhooks & APIs</p>
              </div>
              <p class="bottom">
                Listen for events and create custom workflows on your end using
                our powerful APIs
              </p>
            </div>
          </div>
        </div>
        <div class="forth_right">
            <span><</span>
            <span style="color:#f92672">iframe</span>
            <span style="color:#a6e22e">src</span>
            <span>="</span>
            <span>https://buy.floxypay.com/?apiKey= [your_api_key]</span>
            <span>"</span>
            <span style="color:#a6e22e">allow</span>
            <span>="</span>
            <span>accelerometer; autoplay; camera; gyroscope; payment</span>
            <span>"</span>
            <span style="color:#a6e22e">width</span>
            <span>="</span>
            <span>100%</span>
            <span>"</span>
            <span style="color:#a6e22e">height</span>
            <span>="</span>
            <span>100%</span>
            <span>"</span>
            <span style="color:#a6e22e">frameborder</span>
            <span>="</span>
            <span>0</span>
            <span>"</span>
            <span>></span>
            <span>Your browser does not support iframes.</span>
            <span></</span>
            <span style="color:#f92672">iframe</span>
            <span>></span>
        </div>
      </div>
    </div>
    <div class="fifth_top">
        <div class="fifth_box">
            <div class="fifth_left">
                <p class="title">Frictionless Instant Crypto/ Fiat Payouts</p>
                <p class="word">We ease the burden of your high end business expansion, letting you focus on your work rather than transactions.</p>
                <p class="word">But Crypto/Fiat without leaving your app/website.</p>
                <p class="word">Offer users the flexibility of having multiple Crypto payment options and currencies to choose from.</p>
            </div>
            <div class="fifth_right">
                <img src="../../assets/images/about-img.png" style="width:70%;height:auto" alt="">
            </div>
        </div>
    </div>
    <div class="sixth_top">
        <div class="six_content">
            <p class="title_top">Accept more payments, from the right users</p>
            <ul>
                <li>
                    <p class="title">Intelligent fraud detection</p>
                    <p class="word">Our proprietary fraud engine leverages the most advanced machine learning models to calculate highly accurate risk profiles, defeat fraud, and improve conversion.</p>
                </li>
                <li>
                    <p class="title">Chargeback protection</p>
                    <p class="word">Give yourself peace of mind with our guaranteed chargeback protection. We cover the costs and time dealing with chargebacks, taking the risk out of your cryptocurrency payment solution.</p>
                </li>
                <li>
                    <p class="title">Technology-first approach to AML</p>
                    <p class="word">Our proven AML-monitoring system works to sift out malicious actors in real-time, ensuring you only deal with compliant users.</p>
                </li>
            </ul>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      choseIndex: 0,
      options: [
        { value: "USDT", label: "USDT" },
        { value: "BTC", label: "BTC" }
      ],
      value: "USDT",
      value1: "",
      value2: "",
      value3: "",
      value4: "",
      checked: false
    };
  },
  methods: {
    change(index) {
      this.choseIndex = index;
    }
  }
};
</script>
<style lang="scss" scoped>
.big_box {
  width: 100%;
  background: #2b2b37;
  padding: 20px 0;
  padding-bottom: 0;
  .content_box {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .action-btn {
      margin-top: 20px;
      display: flex;
      .btn {
        display: block;
        width: 130px;
        height: 44px;
        border-radius: 59px;
        text-align: center;
        line-height: 44px;
        font-size: 24px;
        font-weight: bold;
      }
      .btn-success {
        color: #fff;
        background-color: #0090ba;
        border-color: #0090ba;
      }
      .btn-outline-success {
        width: 160px;
        color: #0090ba;
        border: 2px solid #0090ba;
        margin-left: 20px;
      }
      .btn-outline-success:hover {
        color: #fff;
        background-color: #0090ba;
        border-color: #0090ba;
      }
    }
  }
  .right_content {
    width: 50%;
    height: 424px;
    border: 1px solid #46475e;
    border-top: none;
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    .top_change {
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 50px;
      .btn {
        height: 100%;
        width: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        font-size: 16px;
        color: #808086;
        font-weight: bold;
        cursor: pointer;
        border-bottom: 1px solid #46475e;
        border-top: 1px solid #46475e;
        position: relative;
      }
      .left {
        border-radius: 10px 10px 0 0;
      }
      .left_chose {
        color: #fff;
        border-bottom-color: transparent;
        background: #343443;
        height: 52px;
      }
      .left_chose::before {
        content: "";
        position: absolute;
        top: -1px;
        right: -17px;
        bottom: 0;
        width: 25px;
        height: 51px;
        -webkit-transform: skewX(20deg);
        transform: skewX(20deg);
        z-index: 1;
        background: #343443;
        border-radius: 0 10px 0 0;
        border: 1px solid #46475e;
        border-bottom-color: transparent;
        border-left: none;
      }
      .right {
        border-radius: 10px 10px 0 0;
      }
      .right_chose {
        color: #fff;
        border-bottom-color: transparent;
        background: #343443;
        height: 52px;
      }
      .right_chose::before {
        content: "";
        position: absolute;
        top: -1px;
        left: -17px;
        bottom: 0;
        width: 25px;
        height: 51px;
        -webkit-transform: skewX(-20deg);
        transform: skewX(-20deg);
        z-index: 1;
        background: #343443;
        border-radius: 10px 0 0 0;
        border: 1px solid #46475e;
        border-right: none;
        border-bottom: 1px solid transparent;
      }
    }
    .center_content {
      padding: 20px;
      background: #343443;
      .first_input {
        width: 100%;
        border: 1px solid #46475e;
        border-radius: 10px;
        height: 68px;
        display: flex;
        // padding: 10px 0 10px 10px;
        .left_input {
          width: 70%;
          border-right: 1px solid #46475e;
          height: 100%;
          padding: 10px;
          box-sizing: border-box;
          p {
            color: #808086;
          }
          input {
            // margin-top: 10px;
            // background: none;
            width: 100%;
            height: 30px;
            font-size: 24px;
            background: none;
            border: none;
            outline: none;
            color: #fff;
          }
        }
        .right_select {
          flex: 1;
          height: 66px;
          /deep/ .el-select {
            height: 100%;
            width: 100%;
            .el-input {
              height: 100%;
              width: 100%;
              input {
                height: 100%;
                width: 100%;
                background: none;
                border: none;
                font-size: 24px;
                text-align: center;
                color: #fff;
              }
            }
          }
        }
      }
      .second_input {
        // margin-top: 20px;
      }
      .setps {
        display: flex;
        justify-content: space-between;
        padding-left: 20px;
        .new-stepper-hints__wrapper-border {
          border-left: 1px solid #3e3f57;
          padding: 10px 0;
          button {
            border: none;
            background: none;
            outline: none;
            color: #808086;
          }
          span {
            color: #808086;
          }
          .new-stepper-hints__item {
            position: relative;
            padding: 5px 0 5px 16px;
            color: #808086;
          }
          .new-stepper-hints__item::before {
            position: absolute;
            content: "";
            width: 7px;
            height: 7px;
            left: -4px;
            top: 9px;
            border-radius: 50%;
            background: #dce2ea;
          }
        }
        .right_steps {
          padding-right: 20px;
          display: flex;
          align-items: center;
          justify-content: center;
          button {
            display: -webkit-flex;
            display: flex;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-align-items: center;
            align-items: center;
            border: none;
            outline: none;
            width: 36px;
            height: 40px;
            border-radius: 5px;
            background: #fff;
            padding: 0;
            background: #3e3f57;
            cursor: pointer;
            // box-shadow: 1px 1px 6px rgb(43 43 54 / 15%);
          }
        }
      }
    }
    .bottom_btn {
      flex: 1;
      padding: 0 20px;
      background: #343443;
      border-radius: 0 0 10px 10px;
      button {
        width: 100%;
        height: 60px;
        border: none;
        background: #0090ba;
        color: #fff;
        font-size: 24px;
        font-weight: bold;
        border-radius: 10px;
        outline: none;
      }
    }
  }
  .second_top {
    width: 90%;
    margin: 0 auto;
    margin-top: 60px;
    ul {
      width: 100%;
      display: flex;
      flex-wrap: wrap;
      li {
        width: 33%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-bottom: 50px;
        p {
          width: 50%;
          text-align: center;
          line-height: 24px;
        }
        .title {
          font-size: 20px;
          font-weight: bold;
          margin-bottom: 10px;
        }
      }
    }
  }
  .third_top {
    width: 100%;
    //   height: 600px;
    padding-top: 40px;
    padding-bottom: 40px;
    background: #fff;
    .content_box {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .left_third {
        padding-top: 100px;
        width: 50%;
        position: relative;
        background: url("../../assets/images/about-bg-shape.svg") no-repeat top;
        background-size: cover;
        .title {
          font-size: 32px;
          color: #000;
          font-weight: bold;
        }
        //  .bg {
        //      width: 100%;
        //      height: 600px;
        //      background: url("../../assets/images/about-bg-shape.svg")  no-repeat top;
        //     background-size: cover;
        //     position: absolute;
        //     z-index: -1;
        //  }
        .sec_title {
          font-size: 20px;
          color: #212529;
          margin-top: 20px;
          line-height: 36px;
        }
        .word {
          padding-left: 20px;
          font-size: 18px;
          color: #212529;
          line-height: 24px;
          margin-top: 20px;
        }
      }
      //  .left_third::before {
      //      content: "";
      //     position: absolute;
      //     z-index: -1;
      //     width: 100%;
      //     height: 100%;
      //     top: 0;
      //     background: url("../../assets/images/about-bg-shape.svg")  no-repeat top;
      //     background-size: cover;
      //  }
      .right_third {
        background: #f1f1f1;
        width: 40%;
        border-radius: 10px;
        padding: 40px;
        p {
          text-align: center;
        }
        .title {
          font-size: 32px;
          color: #000;
          font-weight: bold;
        }
        .sec_title {
          font-size: 20px;
          color: #212529;
          margin-top: 20px;
          line-height: 36px;
        }
        .input_box {
          margin-top: 20px;
          /deep/ .el-input {
            height: 60px;
            input {
              height: 100%;
              font-size: 20px;
            }
          }
          /deep/ .el-textarea {
            height: 100px;
            textarea {
              height: 100%;
              font-size: 20px;
            }
          }
        }
        .submit {
          margin-top: 20px;
          font-size: 18px;
          color: #212529;
          margin-bottom: 20px;
          cursor: pointer;
          width: 50px;
          height: 30px;
        }
        .submit:hover {
          width: 50px;
          height: 30px;
          border-radius: 5px;
          background: #0090ba;
          color: #fff;
          text-align: center;
          line-height: 30px;
        }
      }
    }
  }

  .forth_top {
    width: 100%;
    height: 520px;
    background: url("../../assets/images/bnr2.jpg") no-repeat center;
    background-size: cover;
    .content_box2 {
      width: 90%;
      margin: 0 auto;
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .forth_left {
        width: 50%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: center;
        .title {
          font-size: 28px;
        }
        .word {
          margin-top: 20px;
          line-height: 30px;
        }
        .box {
          display: flex;
          justify-content: space-between;
          // align-items: center;
          margin-top: 20px;
          .left {
            width: 48%;
            .top {
              display: flex;
              align-items: center;
              .bg_block {
                width: 50px;
                height: 50px;
                border-radius: 5px;
                background: #c6e6fd;
                margin-right: 2px;
              }

              p {
                font-size: 26px;
              }
            }
            .bottom {
              margin-top: 20px;
              font-size: 22px;
              line-height: 30px;
            }
          }
          .right {
            .top {
              .bg_block {
                background: #efe3e3;
              }
            }
          }
        }
      }
      .forth_right {
        width: 45%;
        padding:70px 50px;
        margin-left: 50px;
        border-radius: 20px;
        background: #000;
        display: flex;
        flex-wrap: wrap;
        span {
            font-size: 20px;
            display: block;
            line-height: 40px;
        }
      }
    }
  }
  .fifth_top {
      height: 680px;
      width: 100%;
      background: #fff;
      padding: 100px 0;
      background-image: url(../../assets/images/about-bg-shape.svg);
    background-repeat: no-repeat;
    background-size: cover;
    .fifth_box {
        width: 90%;
        margin: 0 auto;
        display: flex;
        justify-content: space-between;
        align-items: center;
        height: 100%;
       .fifth_left {
           height: 100%;
           width: 50%;
           display: flex;
           flex-direction: column;
           justify-content: center;
        //    align-items: center;
           .title {
                font-size: 32px;
                color: #000;
                font-weight: bold;
           }
           .word {
                padding-left: 20px;
                font-size: 18px;
                color: #212529;
                line-height: 24px;
                margin-top: 20px;
           }
       } 
       .fifth_right {
           width: 50%;
           display: flex;
           justify-content: center;
           align-items: center;
       }
    }
  }
  .sixth_top {
      width: 100%;
      height: 660px;
      background: url("../../assets/images/bnr1.jpg") no-repeat center;
      background-size: cover;
      padding: 100px 0;
      .six_content {
          width: 90%;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          justify-content: center;
          height: 100%;
          .title_top {
              font-size: 32px;
              margin-bottom: 180px;
          }
          ul {
              width: 100%;
              display: flex;
              justify-content: space-between;
              li {
                  width: 30%;
                  padding: 40px;
                  box-sizing: border-box;
                  background: #fff;
                  border-radius: 10px;
                      transition: all 0.2s ease;
                  cursor: pointer;
                  .title {
                      font-size: 24px;
                    color: #000;
                    font-weight: bold;
                  }
                  .word {
                      font-size: 18px;
                    color: #212529;
                    line-height: 30px;
                    margin-top: 20px;
                  }
              }
              li:hover {
                    background: #0090ba;
                    color: #ffffff;
                    transform: translateY(-10px);
                    .title {
                        color: #fff;
                    }
                    .word {
                        color: #fff;
                    }
              }
          }
      }
  }
}
</style>
