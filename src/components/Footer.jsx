import Plane from "../assets/images/plane.png"

export default function Footer() {
  return (
    <footer>
      <div className="footer--container--title">
        <h2>Explore the world with My Dream place</h2>
        <a>Discover new places and experiences</a>
      </div>
      <div className="footer--container--ul">
        <ul>
          <li>
            <img src={Plane} alt="plane icon" className="plane"/>
            <span>My Dream Place</span>
          </li>
          <li>Your next goto companion for travel</li>
        </ul>
        <ul>
          <li>Company</li>
          <li><a>About</a></li>
          <li><a>Jobs</a></li>
          <li><a>Newsroom</a></li>
          <li><a>Advertising</a></li>
          <li><a>Contact us</a></li>
        </ul>
        <ul>
          <li>Explore</li>
          <li><a>Australia</a></li>
          <li><a>New Zealand</a></li>
          <li><a>United States America (USA)</a></li>
          <li><a>Greece</a></li>
          <li><a>Maldives</a></li>
          <li><a>Singapore</a></li>
          <li><a>See more</a></li>
        </ul>
        <ul>
          <li>Terms and Policies</li>
          <li><a>Privacy Policy</a></li>
          <li><a>Terms of use</a></li>
          <li><a>Accessibility</a></li>
          <li><a>Reward system policy</a></li>
        </ul>
        <ul>
          <li><a>Help</a></li>
          <li><a>Support</a></li>
          <li><a>Cancel your bookings</a></li>
          <li><a>Use Coupon</a></li>
          <li><a>Refund Policies</a></li>
          <li><a>International Travel Documents</a></li>
        </ul>
      </div>
      <p>Copyright &copy; bookly.com. Make with ❤️.</p>
    </footer>
  )
}