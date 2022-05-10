<template>
  <div class="footer_box">
    <div class="content_box">
      <div class="left">
        <img src="../../assets/images/logo2.png" alt="" style="width:150px;height:auto"/>
      </div>
      <div class="right">
        <div class="col-md-12 col-lg-9">
          <div class="row">
            <div class="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0">
              <div class="footer-nav-wrap text-dark">
                <h5 class="mb-3 text-dark">Discover</h5>
                <ul class="list-unstyled">
                  <li class="mb-2"><a href="#">About Us</a></li>
                  <li class="mb-2"><a href="#">Blog</a></li>
                  <li class="mb-2"><a href="#">Careers</a></li>
                  <li class="mb-2">
                    <a href="https://test-merchant.floxypay.com/login"
                      >Partners</a
                    >
                  </li>
                  <li class="mb-2"><a href="#">FAQ</a></li>
                </ul>
              </div>
            </div>
            <div
              class="col-sm-6 col-md-3 col-lg-3 mb-4 mb-sm-4 mb-md-0 mb-lg-0"
            >
              <div class="footer-nav-wrap text-dark ">
                <h5 class="mb-3 text-dark">Community</h5>
                <ul class="list-unstyled support-list">
                  <li class="mb-2">
                    <a href="https://medium.com/@support_40606">Medium</a>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://discord.com/channels/841967093376745493/841967093817802752"
                      >Discored</a
                    >
                  </li>
                </ul>
              </div>
              <div class="footer-nav-wrap text-dark mt-4">
                <h5 class="mb-3 text-dark">Resources</h5>
                <ul class="list-unstyled support-list">
                  <li class="mb-2">
                    <router-link to="/doc">API Documentation</router-link>
                  </li>
                  <li class="mb-2">
                    <a
                      href="https://newaccount1620804961719.freshdesk.com/support/home"
                      >Help Center</a
                    >
                  </li>
                </ul>
              </div>
            </div>
            <div
              class="col-sm-6 col-md-2 col-lg-2 mb-4 mb-sm-4 mb-md-0 mb-lg-0"
            >
              <div class="footer-nav-wrap text-dark">
                <h5 class="mb-3 text-dark">Legal</h5>
                <ul class="list-unstyled support-list">
                  <li class="mb-2">
                    <router-link to="/PrivacyPolicy">Privacy Policy</router-link>
                  </li>
                  <li class="mb-2"><router-link to="/security">Security</router-link></li>
                  <li class="mb-2">
                    <router-link to="/useragreement">User Agreement</router-link>
                  </li>
                  <li class="mb-2"><router-link to="/refund">Refund Policy</router-link></li>
                </ul>
              </div>
            </div>
            <div class="col-sm-6 col-md-3 col-lg-4">
              <div class="footer-nav-wrap text-dark">
                <h5 class="mb-3 text-dark">Location</h5>
                <ul class="list-unstyled support-list">
                  <li class="mb-2 d-flex">
                    <span class="ti-location-pin mr-2"></span>Bastionex Holdings
                    PTY LTD<br />25-31 MCCUBBIN COURT, NEW BEITH, QLD, 4124
                    AUSTRALIA
                  </li>
                  <li class="mb-2 d-flex align-items-center">
                    <span class="ti-email mr-2"></span
                    ><a href="mailto:teamsupport@bitexgo.com">teamsupport@bitexgo.com</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bottom_box">Copyrights © 2021. All rights reserved byBastionex</div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.footer_box {
  width: 100%;
  margin: 0 auto;
  // position: fixed;
  // bottom: 0;
  // left: 0;
  padding-top: 40px;
  .content_box {
    width: 90%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    margin-bottom: 100px;
    .right {
        flex: 1;
        margin-left: 70px;
        .col-md-12 {
            width: 100%;
            .row {
                width: 100%;
                display: flex;
                justify-content: space-around;

            }
            .col-sm-6 {
                margin-right: 20px;
                width: 25%;
            }
            .footer-nav-wrap {
                .text-dark {
                    color: #212529;
                    font-size: 24px;
                }
                .list-unstyled {
                    margin-top: 20px;
                    li {
                        color: #212529;
                        font-size: 18px;
                        margin-bottom: 20px;
                        a {
                            color: #212529;
                            opacity: 0.8;
                        }
                        span {
                            color: #212529;
                            opacity: 0.8;
                        }
                    }
                }
            }
        }
        
    }
  }
  .bottom_box {
      display: flex;
      justify-content: center;
      align-content: center;
      padding-bottom: 40px;
      color: #212529;
      font-size: 18px;
  }
}
</style>
