<template>
  <div class="wrapper">
    <!-- header -->
    <header class="header-main">
      <div class="header-lower clearfix">
        <div class="container">
          <div class="row">
            <h1 class="logo">
              <nuxt-link to="/" nuxt>
                <img src="/images/logo.png" alt="image">
              </nuxt-link>
            </h1>
            <div class="menubar">
                <nav class="navbar">
                    <div class="nav-wrapper">
                      <div class="navbar-header">
                        <button type="button" class="navbar-toggle" >
                          <span class="sr-only">Toggle navigation</span>
                          <span class="icon-bar"></span>
                        </button>
                      </div>
                      <div class="nav-menu" >
                        <!-- <a href="#" class="close">
                          <i class="fa fa-times"></i>
                        </a> -->
                        <ul class="nav navbar-nav menu-bar">
                          <li>
                            <nuxt-link to="/" nuxt>
                            Home
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/about" nuxt>
                              about
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/gallery">
                            gallery
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </nuxt-link>
                            <ul class="sub-menu">
                              <li><nuxt-link to="gallerypage01.html" nuxt>masonry</nuxt-link></li>
                              <li><nuxt-link to="gallery02.html" nuxt>gallery column two</nuxt-link></li>
                              <li><nuxt-link to="gallery03.html" nuxt>gallery column 03</nuxt-link></li>
                            </ul>
                          </li>
                          <li>
                            <nuxt-link to="/blog" nuxt>
                            blog
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/ticket" nuxt>
                            book Tickets
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </nuxt-link>
                          </li>
                          <li>
                            <nuxt-link to="/shop" nuxt>
                            shop
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                            </nuxt-link>
                          </li>
                            <li>
                              <nuxt-link to="contact.html" nuxt>
                              contact
                              <span></span>
                              <span></span>
                              <span></span>
                              <span></span>
                              </nuxt-link>
                            </li>
                        </ul>
                      </div>
                    </div>
                  </nav>
            </div>
            <div class="social">
              <a href="https://www.facebook.com/Itobuz" class="facebook"><i class="fa fa-facebook"></i></a>
              <a href="https://twitter.com/itobuztech" class="twitter"><i class="fa fa-twitter"></i></a>
              <a href="https://www.behance.net/itobuz" class="behance"><i class="fa fa-behance"></i></a>
            </div>
          </div>
        </div>
      </div>
    </header>


    <nuxt />

    <!-- footer -->
    <footer class="footer-type01">
      <div class="container">
        <div class="row">
          <ul class="footer-widget">
            <li class="widget-about">
              <h4 class="footerheading">about <span>soccer club</span></h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Blanditiis vitae, velit perferendis dolor atque magni, porro minus repellendus nostrum alias ea deserunt. Vel quam explicabo laudantium accusamus est, nulla minima!</p>
              <p>
              <span class="uppercaseheading">address:</span><span class="red">239</span> main street  London,England.
              </p>
              <p><span class="uppercaseheading">call: </span> <span class="red">1800-2222-3333</span> </p>
            </li>
            <li class="widget-news">
              <h4 class="footerheading">recent <span>news</span></h4>
              <ul class="widget-newsdetails clearfix">
                <li class="clearfix">
                  <a href="" class="clearfix">
                    <div class="widget-pic" style="background:url(images/widget/widget01.jpg)   center no-repeat">
                    </div>
                    <div class="widget-newsinfo">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta excepturi.</p>
                      <p class="uppercaseheading">18 september ,<span class="red">2015</span></p>
                    </div>
                  </a>
                </li>
                <li class="clearfix">
                  <a href="" class="clearfix">
                    <div class="widget-pic" style="background:url(images/widget/widget02.jpg)   center no-repeat">
                    </div>
                    <div class="widget-newsinfo">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta excepturi.</p>
                      <p class="uppercaseheading">18 september ,<span class="red">2015</span></p>
                    </div>
                  </a>
                </li>
                <li class="clearfix">
                  <a href="" class="clearfix">
                    <div class="widget-pic" style="background:url(images/widget/widget03.jpg)   center no-repeat">
                    </div>
                    <div class="widget-newsinfo">
                      <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Numquam soluta excepturi.</p>
                      <p class="uppercaseheading">18 september ,<span class="red">2015</span></p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
            <li class="widget-product">
              <h4 class="footerheading">real <span>soccer products</span></h4>
              <ul class="widget_productdetails">
                <li>
                  <a href="#">shoes(4)</a>
                </li>
                <li>
                  <a href="#">men(4)</a>
                </li>
                <li>
                  <a href="#">t-shirt(4)</a>
                </li>
                <li>
                  <a href="#">sports(4)</a>
                </li>
                <li>
                  <a href="">glass</a>
                </li>

              </ul>
            </li>
            <li class="widget-comment">
              <h4 class="footerheading">recent <span>comments</span></h4>
              <ul class="widget_commentDetails">
                <li >
                  <a href="#" class="clearfix">
                    <div class="comment-pic">
                      <div class="columnpic">
                        <img src="images/widget/comment01.jpg" alt="image">
                        </div>
                    </div>
                    <div class="commentinfo">
                      <p class="uppercaseheading">jhon doe</p>
                      <p>18 April ,<span class="red"> 2015</span></p>
                      <p>nice and cool</p>
                    </div>
                  </a>
                </li>
                <li >
                  <a href="#" class="clearfix">
                    <div class="comment-pic">
                      <div class="columnpic">
                        <img src="images/widget/comment02.jpg" alt="image">
                        </div>
                    </div>
                    <div class="commentinfo">
                      <p class="uppercaseheading">jhon doe</p>
                      <p>18 April ,<span class="red"> 2015</span></p>
                      <p>nice and cool</p>
                    </div>
                  </a>
                </li>
                <li >
                  <a href="#" class="clearfix">
                    <div class="comment-pic">
                      <div class="columnpic">
                        <img src="images/widget/comment03.jpg" alt="image">
                        </div>
                    </div>
                    <div class="commentinfo">
                      <p class="uppercaseheading">jhon doe</p>
                      <p>18 April ,<span class="red"> 2015</span></p>
                      <p>nice and cool</p>
                    </div>
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer-type02">
        <div class="container">
          <div class="row">
            <nuxt-link to="/" clss="footer-logo">
              <img src="/images/logo.png" alt="image">
            </nuxt-link>
            <div class="footer-container">
              <ul class="clearfix">
                <li>
                  <a href="https://www.facebook.com/Itobuz" class="bigsocial-link">
                    <i class="fa fa-facebook"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/0effortthemes" class="bigsocial-link" target="_blank">
                    <i class="fa fa-twitter"></i>
                  </a>
                </li>
                <li>
                  <a href="https://www.behance.net/itobuz" class="bigsocial-link" target="_blank">
                    <i class="fa fa-behance"></i>
                  </a>
                </li>
              </ul>
              <!-- <p>Copyright, 2015  <a href="http://itobuz.com/" class="copyright">0effortthemes.com</a></p> -->
            </div>
            <!-- <div class="footer-appstore">
              <figure><a href="#"><img src="images/appstore/apple.png" alt="image"></a></figure><figure><a href="#"><img src="images/appstore/google.png" alt="image"></a></figure>
            </div> -->
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>

</style>
