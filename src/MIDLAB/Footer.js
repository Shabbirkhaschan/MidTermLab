import "./footer.css";
function Footer() {
    return (    
      <div>
      <footer class="footer">
        <div class="footer__addr">
          <h1 class="footer__logo">Cricket Info</h1>

          <h2>Contact</h2>

          <address>
          03438903889  Address Abbottabad
            <br />
            <a class="footer__btn" href="Shabbirkhaschan@gmail.com">
            Email Us:
            Shabbirkhaschan@gmail.com
            </a>
          </address>
        </div>

        <ul class="footer__nav">
          <li class="nav__item">
            <h2 class="nav__title">Key Series</h2>

            <ul class="nav__ul">
            <li>- T20 world Cup </li>
          <li>- Australia VS England</li>
          <li>- New Zealand V India </li>
          <li>- Womens ChampionShip</li>
            </ul>
          </li>

          <li class="nav_item nav_item--extra">
            <h2 class="nav__title">Technology</h2>

            <ul class="nav_ul nav_ul--extra">
            <li>- T20 Timeout</li>
             <li>- FANTASY PICK</li>
            <li>- ICC Rankings</li>

              <li>
                <a href="#">ID</a>
              </li>
            </ul>
          </li>

          <li class="nav__item">
            <h2 class="nav__title"> Follow Social Links</h2>

            <ul class="nav__ul">
              <li>
                <a href="#">Facbook </a>
              </li>

              <li>
                <a href="#">Instagram</a>
              </li>

              <li>
                <a href="#">Twiter</a>
              </li>
            </ul>
          </li>
        </ul>

        <div class="legal">
        

          <div class="legal__links">
            <span>
              Made with <span class="heart">♥</span> remotely from Anywhere
            </span>
          </div>
        </div>
      </footer>
    </div>
    )
}

export default Footer;
