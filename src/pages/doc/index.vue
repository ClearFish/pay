<template>
  <div class="big_box">
    <p class="title">Api Docs</p>
    <p class="sec_title">Overview</p>
    <p>
      Floxypay provides a powerful JSON/Rest API that supports a range of
      financial services andcryptocurrencies. Floxypay can be used to transfer
      fiat or cryptocurrencies around onlinebetting sites, cryptocurrency
      exchanges, broker exchanges, other high risk business andtransfer to/from
      traditional banking systems all around the globe
    </p>
    <p class="mar_30">
      Floxypay allows multiple payment options with both fiat and popular
      cryptocurrencies allover the world with more than 100+ currencies
    </p>
    <p class="third_title">Supported Payment Methods</p>
    <ul>
      <li>Credit/Debit</li>
      <li>Card</li>
      UPI
      <li>Wallet</li>
      <li>Netbanking</li>
      <li>Cryptos</li>
    </ul>
    <div class="mt-5">
      <h5>Steps For API integration</h5>
      <ul>
        <li><b>Step 1.</b> Visit our site https://floxypay.com/</li>
        <li><b>Step 2.</b> Click on Partner Login.</li>
        <li>
          <b>Step 3.</b> Register for the membership <br /><img
            src="../../assets/images/merchant-signup.png"
            class="img img-responsive"
            alt=""
            style="max-width: 450px"
          />
        </li>
        <li>
          <b>Step 5.</b> Login from the newly registered Account and Click Apis
          for the new request.<br /><img
            src="../../assets/images/merchant-api-token-button.png"
            class="img img-responsive"
            alt=""
            style="max-width: 650px"
          />
        </li>
        <li>
          <b>Step 6.</b> Fill the required information for the API request which
          includes your API Label,Request IP and Redirect URL. This will
          generate the new API key for you<br /><img
            src="../../assets/images/merchant-api-add.png"
            class="img img-responsive"
            alt=""
            style="max-width: 650px"
          />
          <p>
            Store the token somewhere safe. We do not store the token, and won't
            be able to recover it in case it is lost.
          </p>
        </li>
      </ul>
    </div>
    <div class="mt-5">
      <h5>Simple REST API Integration</h5>
      <p style="margin-bottom: 20px">
        Floxypay provides you with the simplest integration process for its
        PI’s. Floxypay providesREST-api integration with simple HTTP methods
        GET, POST and DELETE used for querying,sending, and deleting,
        respectively.
      </p>
      <strong>Error Codes</strong>
      <table class="table table-bordered" style="margin-bottom: 20px">
        <tbody>
          <tr>
            <td>HTTP Status Code</td>
            <td>Meaning</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>200</td>
            <td>
              Successful, with response data as defined by the Content-Type
              header. Usually JSON
            </td>
          </tr>
          <tr>
            <td>400</td>
            <td>Failure. There was a problem with your request</td>
          </tr>
          <tr>
            <td>404</td>
            <td>Bad Request</td>
          </tr>
        </tbody>
      </table>
      <strong>Header</strong>
      <table class="table table-bordered">
        <tbody>
          <tr>
            <td>Key</td>
            <td>Value</td>
          </tr>
        </tbody>
        <tbody>
          <tr>
            <td>x-key</td>
            <td>flox-xxxxxxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>x-secret</td>
            <td>flox-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx</td>
          </tr>
          <tr>
            <td>Content-Type</td>
            <td>application/json</td>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="copy_box">
      <p
        class="sec_title"
        style="padding-bottom: 20px; border-bottom: 1px solid grey"
      >
        Floxypay - API
      </p>
      <p class="third_title">POST - Onboard User</p>
      <p class="third_title">Definition</p>
      <p>This API is used to onboard new users.</p>
      <p style="color: #0dcaf0">https://test-api.floxypay.com/onboard/user</p>
      <div>
        <p class="third_title">Parameters</p>
        <div class="left">
          <div>
            <i
              :class="show1 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer"
              @click="showHide"
            ></i
            >"" :
          </div>
          <div class="content" v-if="show1">
            <p>{ 4 items</p>
            <p>"Country":string""</p>
            <p>"Name":string""</p>
            <p>"Email":string""</p>
            <p>"Mobile":string""</p>
            <p>}</p>
          </div>
          <div class="content" v-else>
            <p>{ ... }</p>
          </div>
        </div>
      </div>
      <div
        style="
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid grey;
        "
      >
        <p class="third_title">Result 200 - JSON</p>
        <div
          class="left"
          style="background: rgb(39, 40, 34); padding: 10px; border-radius: 5px"
        >
          <div>
            <i
              :class="show2 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer; color: rgb(102, 217, 239)"
              @click="showHide2"
            ></i>
            <span style="color: rgb(249, 248, 245)">"" :</span>
          </div>
          <div class="content" v-if="show2">
            <p style="color: rgb(249, 248, 245)">{ 1 item</p>
            <p style="color: rgb(249, 248, 245)">
              "Message":
              <span style="color: rgb(253, 151, 31)"
                >string"user onboarded successfully !"</span
              >
            </p>
            <p style="color: rgb(249, 248, 245)">}</p>
          </div>
          <div class="content" v-else>
            <p style="color: rgb(249, 248, 245)">{ ... }</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copy_box">
      <p class="third_title">POST - Payment</p>
      <p class="third_title">Definition</p>
      <p>This API is used for payment processing.</p>
      <p style="color: #0dcaf0">
        https://test-api.floxypay.com/process/payment
      </p>
      <div>
        <p class="third_title">Parameters</p>
        <div class="left">
          <div>
            <i
              :class="show3 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer"
              @click="showHide3"
            ></i
            >"" :
          </div>
          <div class="content" v-if="show3">
            <p>{ 3 items</p>
            <p>"orderid":string"XXXXXXXXXXXXXXXXX"</p>
            <p>"userid":string"xxxxxxxxxxxxxxxx"</p>
            <p>"Email":string""</p>
            <p>"amount":string"xxx"</p>
            <p>}</p>
          </div>
          <div class="content" v-else>
            <p>{ ... }</p>
          </div>
        </div>
      </div>
      <div
        style="
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid grey;
        "
      >
        <p class="third_title">Result 200 - JSON</p>
        <div
          class="left"
          style="background: rgb(39, 40, 34); padding: 10px; border-radius: 5px"
        >
          <div>
            <i
              :class="show4 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer; color: rgb(102, 217, 239)"
              @click="showHide4"
            ></i>
            <span style="color: rgb(249, 248, 245)">"" :</span>
          </div>
          <div class="content" v-if="show4">
            <p style="color: rgb(249, 248, 245)">{ 2 items</p>
            <p style="color: rgb(249, 248, 245)">
              "url":
              <span style="color: rgb(253, 151, 31)"
                >string"https://test-secure.floxypay.com/payment/xxxxxxxxxx"</span
              >
            </p>
            <p style="color: rgb(249, 248, 245)">
              "orderid":
              <span style="color: rgb(253, 151, 31)">string"xxxxxxxxxx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">}</p>
          </div>
          <div class="content" v-else>
            <p style="color: rgb(249, 248, 245)">{ ... }</p>
          </div>
        </div>
      </div>
    </div>
    <div class="copy_box">
      <p class="third_title">POST - Status</p>
      <p class="third_title">Status</p>
      <p>This API is used for payment processing.</p>
      <p style="color: #0dcaf0">https://test-api.floxypay.com/process/status</p>
      <div>
        <p class="third_title">Parameters</p>
        <div class="left">
          <div>
            <i
              :class="show5 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer"
              @click="showHide5"
            ></i
            >"" :
          </div>
          <div class="content" v-if="show5">
            <p>{ 1 item</p>
            <p>"orderid":string"XXXXXXXXXXXXXXXXX"</p>
            <p>}</p>
          </div>
          <div class="content" v-else>
            <p>{ ... }</p>
          </div>
        </div>
      </div>
      <div
        style="
          margin-bottom: 20px;
          padding-bottom: 20px;
          border-bottom: 1px solid grey;
        "
      >
        <p class="third_title">Result 200 - JSON</p>
        <div
          class="left"
          style="background: rgb(39, 40, 34); padding: 10px; border-radius: 5px"
        >
          <div>
            <i
              :class="show6 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
              style="cursor: pointer; color: rgb(102, 217, 239)"
              @click="showHide6"
            ></i>
            <span style="color: rgb(249, 248, 245)">"" :</span>
          </div>
          <div class="content" v-if="show6">
            <p style="color: rgb(249, 248, 245)">{ 6 items</p>
            <p style="color: rgb(249, 248, 245)">
              "amount": <span style="color: rgb(253, 151, 31)">string"xx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">
              "currency":
              <span style="color: rgb(253, 151, 31)">string"xxx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">
              "method":
              <span style="color: rgb(253, 151, 31)">string"xxxxx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">
              "status":
              <span style="color: rgb(253, 151, 31)">string"XXXXXXXXXX"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">
              "orderid":
              <span style="color: rgb(253, 151, 31)">string"xxxxxxxxxx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">
              "floxy-id":
              <span style="color: rgb(253, 151, 31)">string"xxxxxxxxxx"</span>
            </p>
            <p style="color: rgb(249, 248, 245)">}</p>
          </div>
          <div class="content" v-else>
            <p style="color: rgb(249, 248, 245)">{ ... }</p>
          </div>
        </div>
      </div>
    </div>
    <div
      style="
        margin-bottom: 20px;
        padding-bottom: 20px;
        border-bottom: 1px solid grey;
      "
    >
      <p class="third_title">Webhook</p>
      <p style="margin-bottom: 20px">
        As an alternative to polling, you may wish to receive real time
        notifications when certainobjects change. These can be created
        automatically when transfers are initiated.
      </p>
      <div
        class="left"
        style="background: rgb(39, 40, 34); padding: 10px; border-radius: 5px"
      >
        <div>
          <i
            :class="show7 ? 'el-icon-caret-bottom' : 'el-icon-caret-right'"
            style="cursor: pointer; color: rgb(102, 217, 239)"
            @click="showHide7"
          ></i>
          <span style="color: rgb(249, 248, 245)">"" :</span>
        </div>
        <div class="content" v-if="show7">
          <p style="color: rgb(249, 248, 245)">{ 3 items</p>
          <p style="color: rgb(249, 248, 245)">
            "amount": <span style="color: rgb(253, 151, 31)">string"xx"</span>
          </p>
          <p style="color: rgb(249, 248, 245)">
            "method":
            <span style="color: rgb(253, 151, 31)">string"xxxxx"</span>
          </p>
          <p style="color: rgb(249, 248, 245)">
            "orderid":
            <span style="color: rgb(253, 151, 31)">string"xxxxxxxxxx"</span>
          </p>
          <p style="color: rgb(249, 248, 245)">}</p>
        </div>
        <div class="content" v-else>
          <p style="color: rgb(249, 248, 245)">{ ... }</p>
        </div>
      </div>
      <p>Payment page view you can open in web and app as well</p>
    </div>
    <div class="mb-5">
      <h5 style="margin-bottom:0">Support</h5>
      <p class="m-0">
        Please contact us for support on the following support channels.Support
        email
      </p>
      <a href="mailto:support@floxypay.com" class="mb-4"
        >support@floxypay.com</a
      >
      <h5 class="mt-4 mb-0" style="margin-bottom:0">Support Ticket</h5>
      <a href="https://newaccount1620804961719.freshdesk.com/support/home"
        >https://newaccount1620804961719.freshdesk.com/support/home</a
      >
      <h5 class="mt-4 mb-0" style="margin-bottom:0">Support Slack</h5>
      <a
        href="https://join.slack.com/t/floxypay/shared_invite/zt-qpojlt4x-e73Emmtm0gmG6Iret2YHgA"
        >https://join.slack.com/t/floxypay/shared_invite/zt-qpojlt4x-e73Emmtm0gmG6Iret2YHgA</a
      >
      <p>
        <b>Note:</b> For support on the mail please generate the support ticket
        and mail us.We will provide support on mail and slack for your support
        ticket.
      </p>
      <h5 class="mt-4 mb-0" style="margin-bottom:0">Production Key</h5>
      <ul>
        <li>
          <b> Step 1 :</b> For production api key you need email with a test
          login detail.
        </li>
        <li><b> Step2:</b> Submit kyc doc</li>
        <li><b> Step3:</b> Sign Agreement</li>
        <li><b> Step4:</b> After review doc you will be get api into email.</li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      show1: true,
      show2: true,
      show3: true,
      show4: true,
      show5: true,
      show6: true,
      show7: true,
    };
  },
  methods: {
    showHide() {
      this.show1 = !this.show1;
    },
    showHide2() {
      this.show2 = !this.show2;
    },
    showHide3() {
      this.show3 = !this.show3;
    },
    showHide4() {
      this.show4 = !this.show4;
    },
    showHide5() {
      this.show5 = !this.show5;
    },
    showHide6() {
      this.show6 = !this.show6;
    },
    showHide7() {
      this.show7 = !this.show7;
    },
  },
};
</script>
<style lang="scss" scoped>
.big_box {
  width: 90%;
  margin: 0 auto;
  color: #212529;
  padding-top: 40px;
  p {
    line-height: 24px;
  }
  .title {
    font-size: 24px;
  }
  .sec_title {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  .third_title {
    font-weight: 600;
    font-size: 16px;
  }
  .mar_30 {
    margin: 20px 0;
  }
  ul {
    margin-top: 10px;
    li {
      margin-bottom: 10px;
    }
  }
  h5 {
    font-size: 20px;
    margin-top: 20px;
    margin-bottom: 20px;
  }
  td {
    padding: 5px;
  }
  table {
    //  border: 1px solid grey;
    padding: 0;
    border-spacing: 0;
    td {
      border: 1px solid grey;
    }
  }
  strong {
    margin: 20px 0;
  }

  .copy_box {
    .left {
      display: flex;
    }
    .content {
      p {
        cursor: pointer;
        margin-bottom: 10px;
      }
    }
  }
  a {
      color: #0d6efd;
  }
}
</style>