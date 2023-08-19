import Plane from "../assets/images/plane.png"

//<a href=""> href need to be updated
export default function Footer() {
  return (
    <footer>
      <div className="footer--title">
        <h2>Explore the world with My Dream place</h2>
        <a href="">Discover new places and experiences</a>
      </div>
      <div className="footer--links">
        <ul>
          <li>
            <img src={Plane} alt="plane icon" className="plane"/>
            <span>my Dream Place</span>
          </li>
          <li id="next-goto">Your next goto companion for travel</li>
        </ul>
        <ul>
          <li>Company</li>
          <li><a href="">About</a></li>
          <li><a href="">Jobs</a></li>
          <li><a href="">Newsroom</a></li>
          <li><a href="">Advertising</a></li>
          <li><a href="">Contact us</a></li>
        </ul>
        <ul>
          <li>Explore</li>
          <li><a href="">Australia</a></li>
          <li><a href="">New Zealand</a></li>
          <li><a href="">United States America (USA)</a></li>
          <li><a href="">Greece</a></li>
          <li><a href="">Maldives</a></li>
          <li><a href="">Singapore</a></li>
          <li><a href="" id="see-more">See more</a></li>
        </ul>
        <ul>
          <li>Terms and Policies</li>
          <li><a href="">Privacy Policy</a></li>
          <li><a href="">Terms of use</a></li>
          <li><a href="">Accessibility</a></li>
          <li><a href="">Reward system policy</a></li>
        </ul>
        <ul>
          <li>Help</li>
          <li><a href="">Support</a></li>
          <li><a href="">Cancel your bookings</a></li>
          <li><a href="">Use Coupon</a></li>
          <li><a href="">Refund Policies</a></li>
          <li><a href="">International Travel Documents</a></li>
        </ul>
      </div>
      <p>Copyright &copy; bookly.com. Make with ❤️.</p>
    </footer>
  )
}